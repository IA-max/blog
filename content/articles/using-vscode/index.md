---
title: 'VS Code 使用'
date: '2019-11-25T16:25:45+08:00'
status: publish
permalink: /vs-code-introduce
category: ["uncate"] 
tag: ["software"]
author: "max"
excerpt: "命令面板是vscode快捷键的主要交互界面,可以输入命令进行搜索(中英文都可以)，然后执行各种命令，包括编辑器自带的功能和插件提供的功能."
featured: false
image: 
featuredimage:
  src: "cover-vscode.png"
  alt: ""

---
##### 命令面板

命令面板是vscode快捷键的主要交互界面,可以输入命令进行搜索(中英文都可以)，然后执行各种命令，包括编辑器自带的功能和插件提供的功能.

```bash
用法:  F1或者 
Win: Ctrl+Shift+P 
Mac: Cmd+Shift+P 
```

命令窗口时根据首字符的不同，能提供截然不同的功能：
- &gt; 默认接口. 可匹配到并快捷执行 VSCode 提供的所有的接口。这些接口中包括自己安装的插件提供的接口；
- : 跳转到指定行号；
- @ 跳转到指定符号；符号（Symbol），包括函数、变量、字段、结构等；
- @: 依然是跳转到指定符号，但区别在于所有符号归类显示；
- ：跳转到指定文件。没错，删除首字符，直接输入文件的名字！能直接跳转到文件！

##### 代码编辑

###### 删除

```bash
Cmd+Shift+K (win Ctrl+Shift+K)
```

###### 代码移动

```bash
Alt+上下
```

###### 添加注释

注释有两种形式

```bash
单行注释 Ctrl +/
块注释 alt+Shift+A
```

##### 插件

###### Prettier Code Formatter

它是一个自动代码格式化程序。  
通过解析代码并使用自己的规则重新打印代码，从而实现一致的样式，并在必要时包装代码。

用法: 使用命令面板（CMD / CTRL + Shift + P）

```bash
1.CMD + Shift + P -> Format Document
#或
2.选择代码后 CMD + Shift + P -> Format Selection
```

###### npm Intellisense

可自动完成导入语句中的npm模块

```bash
输入import按提示选择
```

###### Bracket Pair Colorizer

Bracket Pair Colorizer 可以为代码中的匹配的括号自动着色，以不同的颜色进行区分，这样我们可以轻易地辨别某个代码块的开始与结束。

###### GitLens

GitLens supercharges内置到Visual Studio代码Git的能力。  
它可以帮助您通过Git责备注释和代码镜头一目了然地看到代码作者的身份，无缝地导航和浏览 Git存储库，通过强大的比较命令获得有重要的提示，等等。

Auto Import

自动查找，解析并提供所有可用导入的代码操作和代码完成。与Typescript和TSX一起使用

###### [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

用 Chrome 来 Debug 你的 JavaScript 代码，或则其它支持 Chrome Debugger 协议的平台

###### [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)

实时执行 JavaScript 代码(做快速的 demo 很有用)

######  Trailing Spaces 

高亮那些冗余的空格，可以快速删掉。

###### [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

 VS Code 下面的 Vue 工具！有 Pine Wu 开发，已经累计 400 多万下载量
