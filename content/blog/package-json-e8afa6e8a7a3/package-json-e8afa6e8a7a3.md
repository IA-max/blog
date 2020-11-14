---
title: 'Package.json 详解'
date: '2019-11-26T17:00:37+08:00'
status: publish
permalink: /package-json-%e8%af%a6%e8%a7%a3
author: admin
excerpt: ''
type: post
id: 2594
category:
    - Node
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
所有npm软件包通常都在项目根目录中包含一个package.json文件.

该文件包含与项目相关的各种元数据。  
该文件用于提供信息npm，使其可以识别项目并处理项目的依赖关系。

它还可以包含其他元数据。例如   
项目描述, 特定发行版中的项目版本，许可证信息，甚至是配置数据 .所有这些npm对包和包的最终用户都至关重要.

该package.json文件通常位于Node.js项目的根目录下

包含可配置项:

- name 名称
- 应用描述 description
- 版本号 version
- 应用的配置项 config
- 作者 author
- 资源仓库地址 respository
- 授权方式 licenses
- 目录 directories
- 应用入口文件 main
- 命令行文件 bin
- 项目应用运行依赖模块 dependencies
- 项目应用开发环境依赖 devDependencies
- 运行引擎 engines
- 脚本 script

简单模式

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">{ name: "myApp", version :"0.0.1" }
```

- - - - - -

 完整模式

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">{
    "name": "myApp",
    "version": "0.0.0",
    "author": "simple",
    "description": "Nodejs Package json介绍",
    "keywords": "javascript, nodejs",
    "respository": {
        "type": "git",
        "url": "http://path/to/url"
    },
    "bugs": {
        "url": "http://path/to/bug",
        "email": "bug@example.com"
    },
    "contributors": [
        {
            "name": "zhangsan",
            "email": "zhangsan@example.com"
        }
    ],
    "license": "MIT",
    "engines": {
        "node": "0.10.x"
    },
    "script": {
        "start": "node index.js"
    },
    "private": true,
    "scripts": {
        "start": "node ./bin/www"
    },
    "dependencies": {
        "express": "~4.9.0",
        "body-parser": "~1.8.1",
        "cookie-parser": "~1.3.3",
        "morgan": "~1.3.0",
        "serve-favicon": "~2.1.3",
        "debug": "~2.0.0",
        "jade": "~1.6.0"
    },
    "devDependencies": {
        "bower": "~1.2.8",
        "grunt": "~0.4.1",
        "grunt-contrib-concat": "~0.3.0",
        "grunt-contrib-jshint": "~0.7.2",
        "grunt-contrib-uglify": "~0.2.7",
        "grunt-contrib-clean": "~0.5.0",
        "browserify": "2.36.1",
        "grunt-browserify": "~1.3.0"
    }
}
```

#### 属性分类

##### `main`

包入口点. App将在该位置搜索 模块导出 ( module exports )

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">"main": "src/main.js"
```

#####  `private` 

设置为true, 防止App/包被发布到npm

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">"private": true
```

##### `scripts`

定义一组可以运行的节点脚本.

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">"scripts": {
  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  "start": "npm run dev",
  "unit": "jest --config test/unit/jest.conf.js --coverage",
  "test": "npm run unit",
  "lint": "eslint --ext .js,.vue src test/unit",
  "build": "node build/build.js"
}
```

##### `description`

此属性包含对软件包的简短描述

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">"description": "A package to work with strings"
```

如果要 发布 软件包，这对了解软件包的内容的用户特别有用

##### `repository`

 指定此程序包存储库所在位置

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">"repository": "github:flaviocopes/testing"
```

##### `contributors`

 除作者外，该项目可以有一个或多个贡献者. 属性为数组

##### `bugs`

链接到软件包问题跟踪器，最常是GitHub issues页面

**单独安装express模块**

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">npm install express –save      //–save参数表示将该模块写入dependencies属性
npm install express –save-dev  //–save-dev表示将该模块写入devDependencies属性
```

##### `dependencies`

设置 `npm`安装为依赖项的软件包列表

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">npm install <PACKAGENAME>
```

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">"dependencies": {
  "vue": "^2.5.2"
}
```

##### `devDependencies`

设置`npm`作为开发依赖项安装的软件包的列表

两者区别在于，`dependencies`它们仅应安装在开发机器上，不运行在生产环境 .

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">npm install --dev <PACKAGENAME>
```

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">"devDependencies": {
  "autoprefixer": "^7.1.2",
  "babel-core": "^6.22.1"
}
```

##### `browserslist`

支持哪些浏览器（及其版本）。  
Babel，Autoprefixer和其他工具会引用它，仅将所需的polyfill和fallback添加到目标浏览器.

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">"browserslist": [
  "> 1%",
  "last 2 versions",
  "not ie <= 8"
]
```