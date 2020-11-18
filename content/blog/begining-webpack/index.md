---
title: 'Webpack 4 入门'
date: '2019-09-10T07:33:04+08:00'
status: publish
permalink: /webpack-%e5%85%a5%e9%97%a8
author: admin
excerpt: ''
type: post
id: 1408
category:
    - 任务处理
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
所有流行前端框架和库都在说服我们去写最新版本的JavaScript代码，但是问题在于将其编译为浏览器所能运行的ES5版本代码。一个简单babel编译器有助于完成我们的编译工作，但是将所有这些投入生产环境不是那么简单直接。幸运的是，一个10行代码的Webpack配置可以减轻你的负担。

我会尝试将代码写的尽可能的基础和内聚。你可以拿到最终的代码并将其直接用于不同的项目中。我将在一些步骤从0开始讲解Webpack4的基本概念，每个步骤的代码将会在单独的一个commit，以便于你在你的电脑上运行来方便的测试。这个Webpack4初学者指南将帮助你了解所有你需要去了解的Webpack生产环境的配置。

让我们开始使用Webpack4。

初始化
---

开始使用Webpack4，我创建了一个 `webpack.config.js` 的文件，里面有处理入口文件，输出文件的简单配置。并且用`module.exports`将其暴露出去，就像我们在一个nodejs代码文件里所做的那样。

```js
// 引入path模块
const path = require("path")
// 创造配置所需要的路径
const PATHS = {
    src: path.resolve(__dirname, "src/index.js"),
    dist: path.resolve(__dirname, 'dist')
}
//Webpack 配置对象
const config = {}
// 将被打包应用的入口
config.entry = PATHS.src
// 打包后应用的输出
config.output = {
    path: PATHS.dist,
    filename: 'output.bundle.js'
}
// 导出配置
module.exports = config
```

`src`文件夹将会存放我们的源代码，`dist`文件夹将会存放我们的最后的打包输出文件。假设`webpack`和`webpack-cli`已经安装，我们加一个脚本命令在`package.json`文件里，然后打包应用。

```js
{
  "devDependencies": {
    "webpack": "^4.30.0",
    "webpack-cli": "^3.3.2",
  },
  "scripts": {
    // 添加npm脚本命令build
    "build": "webpack"
  }
}
```

接下来测试webpack应用是否安装成功。

```bash
# 在项目文件夹下打开终端，输入以下命令。
npm run build
```

命令完成后，项目文件夹下会出现`dist`文件夹，里面存放着打包好的文件。

Webpack安装初始化完成后，我们开始生产环境的配置并且探索他们的组件。

模式
--

每次我们运行上面的脚本，Webpack默认打包生产环境的代码。我们可以通过设置属性`-p`或者`--mode=production`来指定模式为生产环境。并且，在生产或者开发环境下，我们想用不同的配置。

让我们把配置分离成两个不同的文件用于生产和开发环境，将其命名为`webpack.[ENV].config.js` 。相同的，在我们的package.json里面，我们应该添加两个不同的脚本。

```js
"build": "webpack --mode=production --config=webpack.production.config.js",
"dev": "webpack --mode=development --config=webpack.development.config.js",
```

开发环境打包文件将不会压缩，所以文件大小将是生产环境下打包文件的4到5倍。在生产环境下，打包文件将会传输到web服务器上，但是在开发环境下，我们没有web服务器。这个问题可以通过webpack dev server 来解决。

Webpack Dev Server
------------------

Webpack Dev Server 是一个简单的web服务器，它在ExpressJS的基础上开发而来，将会帮助我们在有任何修改的时候重构源代码。

### 安装

```bash
npm install --save-dev webpack-dev-server
```

我们可以通过npm脚本来使用它。

```js
"start": "webpack-dev-server --mode=development --config=webpack.development.config.js"
```

我们可以通过添加以下代码到开发环境配置中，来设置网页内容如何被加载以及从哪个路径被加载。

```js
config.devServer =
{
    contentBase: PATHS.dist,
    inline: true,
    port: 9500
}
```

我们创建一个包含打包js文件的简单HTML文档来展现dev server的功能。这个文档将会是我们的网页应用，所以我们应该将其放在`dist`文件夹里。

```html
<html>
  <head>
    <title>Code in Webpack Starter</title>
  </head>
  <body>
    <h1>Code in Webpack Starter</h1>
    <script src="./output.bundle.js"></script>
  </body>
</html>
```

当我们用`npm start`运行webpack dev server时，它将采用给定的9500端口。你可以通过http://localhost:9500浏览我们的应用。

Loaders
-------

Loaders是应用于源文件的加载器。通过读取入口文件，当找到`require`或者`import`引入一个文件的声明，Webpack将会应用在loaders里声明的相关转换，网页应用通过这种流程打包。

一个loader由两个`test`和`use`主要的属性组成。`test`将会保存符合文件名的正则表达式模式，如果文件名满足需求，相关的loader将会加载文件。

### CSS Loader

我们在我们的入口文件或者任何其他js文件中引入一个css文件，只有当相关的js文件被引入时，引入的css文件才会生效。

### 安装

为了引入css到我们的打包文件中，我们需要安装相关的loaders。

```bash
# CSS Loader 将会处理css文件并将其移入打包文件中
npm install --save-dev css-loader
# 这个模块将会将css代码插入html中
npm install --save-dev style-loader
```

使CSS文件的内容如下:

```css
body {
    color: red;
}
```

现在将loaders加入webpack的配置里.

```js
config.module = {
    rules: [
        {
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }]
        }
    ]
};
```

在运行中的服务器中，我们可以看见输出的HTML网页的body元素的颜色是红色。

### Babel Loader

为了更好的理解loaders，让我们来看另外一个例子。现在所有的库或者框架使用ES6/7语法，但不是所有的浏览器都支持那些语法。所以作为打包配置的一部分，我们需要将ES6/7语法转换为ES5语法。我们将需要babel来完成这项工作。当babel在webpack里使用时，我们需要一个webpack loader。让我们安装以下开发依赖。

```bash
npm install --save-dev babel-loader @babel/core @babel/preset-env
```

现在，我们将加入一些ES6特性代码到我们的`index.js`文件里来测试。我添加了下列使用了箭头函数和`let`操作符的代码片段。

```js
setTimeout(() => {
    let a = 10;
    console.log('Timedout the index.js ' + a)
}, 200);
```

为了转换这个代码片段到ES5语法，对webpack的配置添加一些极小的变化。当编译代码时，Babel可以限定于不同的环境。所以我们需要将其预设编辑为`env`来生成ES5代码。

```js
// 添加下列规则来在所有的js文件上运行babel loader
{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
  }
```

通过运行webpack，我们可以看见以ES5格式输出的代码如下

```js
setTimeout(function() {
    var a = 10;
    console.log('Timedout the index.js ' + a)
}, 200);
```

### 插件

正如其名称所示，插件可以插入打包过程来扩展webpack的功能，可以做loaders所不能做的事情。Webpack有一系列内建的插件和很多来自于社区的开源插件。

比如说，我想让我所有的css文件合并到一个单独css文件中。这个需求超出了loader的能力范围。所以我们用一个`mini-css-extract-plugin`的扩展插件。

我创建了一个新的css文件`file2.css`。

```css
h1 {
    font-family: Helvetica, Arial, sans-serif;
}
```

当我们打包源代码后，我们得到一个单独的输出文件包含完整的js和css文件，里面包含了库里所用到的所有文件。所以，我们用`npm i --save-dev mini-css-extract-plugin`安装这个插件，然后配置我们的webpack如下。

```js
// 引入插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 挂载插件到config上
config.plugins = [
    new MiniCssExtractPlugin()
];
// 更新css loader的规则，将style-loader替换为plugin
{
    test: /\.css$/,
    use: [
        MiniCssExtractPlugin.loader,
        "css-loader"
    ]
}
```

这将会合并所有的css文件并分别提取它们到`main.css`文件中，但是我们创建的`index.html`文件并没有引入这个文件，所以我们在`index.html`里更新引入`main.css`。

现在，我们只有两个文件需要引入。另外，我们创建的index.html已经硬编码了，没有动态加载的部分。

### webpack-html-plugin

为了解决这个问题，我们将用`webpack-html-plugin`这个插件，它可以把打包后的文件直接插入HTML模板中，然后将最终的HTML文件放进`dist`文件夹。

因为我们不再需要HTML文件在`dist`文件夹里，让我们将`dist`文件夹中的HTML文件移除，甚至你可以将文件夹从git里删除掉。当我们运行npm脚本`npm run build`后，`dist`文件夹将会被创建，存放着所有的依赖，其内容通常被部署到一个web服务器里。在项目文件夹中创建一个`index.ejs`的文件。这个文件使用EJS模板语言，将帮助我们创建一个HTML模板。要查看其用法，让我们在打包过程中尝试去让标题动态生成，而不是硬编码。

```html
<html>
  <head>
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <h1>Code in Webpack Starter</h1>
  </body>
</html>
```

你可以看见我没有引入任何css或者js文件路径，甚至HTML的标题。

现在让我们来安装插件和配置插件部分。

### 安装

```bash
npm install --save-dev html-webpack-plugin
```

### 配置

```js
// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
config.plugins = [
    ...,
    new HtmlWebpackPlugin({
        template: 'app/index.ejs',
        title: 'Webpack Starter'
    })
]
```

现在，运行`npm run build`，我们可以看见`dist`文件夹的`index.html`生成，内容如下。

```html
<html>
  <head>
    <title>Webpack Starter</title>
  <link href="main.css" rel="stylesheet"></head>
  <body>
    <h1>Code in Webpack Starter</h1>
  <script type="text/javascript" src="output.bundle.js"></script></body>
</html>
```