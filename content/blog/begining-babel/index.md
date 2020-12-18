---
title: '入门 - Babel '
date: '2019-01-14T01:57:50+08:00'
status: publish
permalink: /babel-tutorial
category: ["flow"] 
tag: [""]
author: "max"
excerpt: ""
featured: false
image: 
featuredimage:
  src: "none.png"
  alt: ""
---
 Babel 是一个通用多用途的JavaScript编译器。 Babel 把用最新标准编写的 JavaScript 代码向下编译成可以在今天随处可用的版本。 这一过程叫做“源码到源码”编译， 也被称为转换编译.

#### 安装Babel

#### 安装Babel-cli

Babel 的Cli 是一种在命令行下使用Babel编译文件的简单方法. **全局安装**

```bash
npm install --global babel-cli
```


**编译一个文件**

```bash
babel example.js --out-file compiled.js
//或
babel example.js --o compiled.js
```

**把一个目录编译成一个新目录**

```bash
babel src --out-dir lib
//或
babel src -d lib
```

在项目内运行Babel Cli， 这样会更好.

```bash
npm install --save-dev babel-cli
```


**全局卸载**

```bash
npm uninstall -global babel-cli
```

不直接命令行运行Babel, 而是将命令放在npm scripts, 这样可以使用Babel 本地版本, 增加script部分,就可以在终端运行 npm run build

```bash
{
    "name": "my-project",
    "version": "1.0.0",
+   "scripts": {
+     "build": "babel src -d lib"
+   },
    "devDependencies": {
      "babel-cli": "^6.0.0"
    }
}
```

#### babel-register

这种方法不适合正式产品环境使用.

如果用node index.js直接运行它是不会使用Babel编译的. 所以需要设置babel-register.

**安装**

```bash
npm install --save-dev babel-register
```

项目中，index.js 文件中添加 reg文件

```bash
require('babel-register);
require('reg') //引入的文件
```

这样把babel注册到node的模块系统中并编译其中require的文件. 现可以使用 index.js 代替 node reg.js来运行. 
**不能在要编译的文件内同时注册Babel.**

#### Babel-node
babel-cli工具自带一个babel-node命令，提供一个支持ES6的REPL环境。它支持Node的REPL环境的所有功能，而且可以直接运行ES6代码。 用babel-node替代node运行所有代码

```json
{
    "scripts": {
-     "script-name": "node script.js"
+     "script-name": "babel-node script.js"
    }
  }
```

#### babel-core

如需要以编程方式使用Babel, 可用babel-core包.

安装

```bash
npm install --save-dev babel-core
```


引入

```js
var babel = require('babel-core');
```

字符串编译

```js
babel.transform("code()",options);
// {code , map ,ast}
```

文件编译，异步api:

```js
babel.transformFile("filename.js", options, fucntion(err, result){
    result; // {code, map,ast}
})
```

同步:

```js
babel.tranformFileSync("filename.js", options);
```

- - - - - -

#### 配置Babel

#### .babelrc

由于 Babel 是一个可以用各种花样去使用的通用编译器，因此默认情况下它反而什么都不做。你必须明确地告诉 Babel 应该要做什么。

告诉Babel做什么前，需要创建一个配置文件, 在项目根目录创建 .babelrc文件 (可以vscode创建 .文件)

```json
{
    "preset": [],
    "plugins": []
}
```


#### babel-preset-2015

 先把ES2015 (es6) 编译成 ES5 安装

```
npm install --save-dev babel-preset-es2015
```

.babel 添加预设

```json
{
    "presets": [
        "es2015"
    ],
    "plugins": []
}
```

#### babel-preset-react

 添加react 一样容易安装

```bash
npm install --save-dev babel-preset-react
```

补充

```json
{
    "presets": [
        "es2015",
        "react"
    ],
    "plugins": []
}
```

- - - - - -

#### 执行babel生成的代码

#### babel-polyfill

babel 默认只转换新的 JavaScript句法(syntax), 而不转换新的API (Iterator / Generator / Set / Maps / Proxy / Reflect / Symbol / Promise )等全局对象. 如让这些方法运行，必须使用babel-polyfill , 为当前环境提供一垫片.

安装

```bash
npm install --save-dev babel-polyfill
```


然后文件顶部引入即可

```js
import "babel-polyfill"
```

默认不转码的API很多， 详细看babel-plugin-transform-runtime

#### babel-runtime

为实现规范细节，Babel会使用”助手 “保持生成代码整洁. 这些助手会特别长，因此你可以把它们统一移动到一个单一 “运行时 runtime”中去

安装

```bash
npm install --save-dev babel-plugin-tranform-runtime
npm install --save babel-runtime
```

更新 .babelrc

```json
{
    "presets": [
        "es2015",
        "react",
        "stage-2"
    ],
    "plugins": [
        "transform-runtime"
    ]
}
```

#### 配置 Babel(进阶)

#### 手动指定插件

 Babel预设就是一些配置好的插件集合，如想做一些不一样的事会手动设定 安装

```bash
npm install --save-dev babel-plugin-transform-es2015-classes
```

```json
{
    "presets": [
        "es2015",
        "react",
        "stage-2"
    ],
    "plugins": [
        "transform-runtime",
        "transform-es2015-classes"
    ]
}
```

完整列表见 <https://babeljs.io/docs/en/plugins/>

#### 插件选项

配置插件的行为， 如很多转换器有 “宽松” 模式, 放弃一些标准行为生成更简化代码

```json
{
    "presets": [
        "es2015",
        "react",
        "stage-2"
    ],
    "plugins": [
        "transform-runtime",
        "transform-es2015-classes"
        ["transform-es2015-classes",{"loose": true}]
    ]
}
```

最令人瞩目的是 [babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform) 插件，它集成了大量 [React 专用转换器](https://github.com/gaearon/babel-plugin-react-transform#transforms)可以启用诸如 热模块重载等其他调试工具。

 我的常用Babel 基本与ENV设置

```json
{
    "presets": [
        "es2015",
        "react",
        "stage-2"
    ],
    "plugins": [
    ],
    "env":{
        "development":{
            "plugins":[
                "transform-runtime",
                ["transform-es2015-classes",{"loose": true}]
            ]
        },
        "production":{
            "plugins":[
                "transform-runtime",
                ["transform-es2015-classes"]
            ]
        }
}
```

 设定环境

```bash
SET BABEL_ENV=production //生产
SET BABEL_ENV=development //开发
```