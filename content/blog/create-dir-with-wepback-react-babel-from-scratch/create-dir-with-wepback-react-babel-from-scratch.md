---
title: '从0搭建Wepback React Babel'
date: '2018-09-04T16:15:22+08:00'
status: publish
permalink: /create-dir-with-wepback-react-babel-from-scratch
author: admin
excerpt: ''
type: post
id: 285
category:
    - 任务处理
tag: []
post_format: []
classic-editor-remember:
    - block-editor
    - block-editor
post_views_count:
    - '289'
    - '289'
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
- 创建目录

```
<pre class="wp-block-preformatted">mkdir wpreact
```

- 生成默认package.json

```
<pre class="wp-block-preformatted">npm init -y
```

- 安装webpack 与webpack-cli

```
<pre class="wp-block-preformatted">npm i webpack --save-dev
npm i webpack-cli --save-dev
```

- package.json 添加build命令

```
<pre class="wp-block-preformatted">"scripts":
{
    "build": "webpack --mode production"
}
```

- 安装babel依赖

```
<pre class="wp-block-preformatted">npm i   @babel/core
        babel-loader
        @babel/preset-env               //babel preset env 用于ES6转ES5
        @babel/preset-react --save-dev  //babel preset react 用于jsx转js
```

- 创建.babelrc文件并添加 preset

```
<pre class="wp-block-preformatted">{
    "presets":
    [
            "@babel/preset-env",
            "@babel/preset-react"
    ]
}
```

- 创建webpack.config.js文件 并添加

```
<pre class="wp-block-preformatted">module.exports = {
    module: {
        rules: [{
                   test: /\.(js|jsx)$/,
                   exclude: /node_modules/,
                   use:
                    {
                        loader: "babel-loader"
                    }
                }]
    }
};
```

- 安装react react-dom

```
<pre class="wp-block-preformatted">npm i react react-dom --save-dev
```

- 添加html-webpack-plugin 和html-loader插件 用于更新

```
<pre class="wp-block-preformatted">npm i html-webpack-plugin html-loader --save-dev
```

- 更新webpack.config.js配置

```
<pre class="wp-block-preformatted">const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};
```

- 运行

```
<pre class="wp-block-preformatted">npm run build
```