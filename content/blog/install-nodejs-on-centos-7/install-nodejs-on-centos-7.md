---
title: '安装 Nodejs'
date: '2019-08-03T01:28:09+08:00'
status: publish
permalink: /install-nodejs-on-centos-7
author: admin
excerpt: ''
type: post
id: 636
category:
    - Linux
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
Node.js是一个开源的跨平台JavaScript（JS）运行时环境。如果您需要构建快速且可扩展的网络应用程序，您可能需要考虑使用Node.js. 除了提供各种JS模块外，它还具有轻量级，高效率，并支持一致的集成开发。

Node Package Manage (npm )是Node的官方软 件包管理器，用于安装和管理软件包依赖项。

在本指南中，了解如何在CentOS 7上安装Node.js和npm。我们还介绍了如何管理多个Node版本和安装依赖项。

#### \#1. 从NodeSource存储库安装Node.js和npm

安装Node.js和npm的最简单方法是从NodeSource存储库。

- 首先，更新本地存储库以确保安装最新版本的Node.js和npm。输入以下命令：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo yum update
```

- 接下来，将NodeSource存储库添加到系统：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">curl –sL https://rpm.nodesource.com/setup_10.x | sudo bash
```

- 如果要安装Node.js和npm，输出将提示您使用以下命令：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo yum install –y nodejs
```

- 最后，使用以下命令验证已安装的软件：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">node –version
```

<figure class="wp-block-image">![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/word-image-20.png)</figure>```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">npm –version
```

<figure class="wp-block-image">![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/word-image-21.png)</figure>#### \#2. 使用NVM安装Node.js和npm

##### 1：安装节点版本管理器（NVM）

或者，您可以使用节点版本管理器（NVM）安装Node.js和npm，这是一个用于管理多个Node.js版本的工具。

- 安装NVM，从GitHub下载脚本安装

您将使用命令行curl.  
如果您没有此必备工具，请通过运行以下命令进行安装：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo apt install curl
```

按y确认安装，然后按Enter键。

- 安装curl后，下载NVM脚本安装

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

该命令指示系统克隆NVM存储库并将NVM路径添加到ZSH或Bash。完成后，您将收到以下消息：

<figure class="wp-block-image">[![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/word-image-22.png)](https://www.blog.imaxyoung.com/wp-content/uploads/2019/08/word-image-22.png)</figure>如输出所示，要启用nvm，您需要：关闭并打开终端或运行给定的命令

- 使用以下命令检查节点版本管理器安装是否成功：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">nvm –version
```

下图显示您已安装最新的稳定版NVM 0.34.0。

<figure class="wp-block-image">![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/word-image-23.png)</figure>##### 2：安装Node.js和npm

- 安装NVM后，使用以下命令下载Node.js和npm：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">nvm install node
```

- 检查安装的版本：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">node –version
```

<figure class="wp-block-image">![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/word-image-24.png)</figure>可选：使用NVM安装多个Node.js版本  
NVM是一个包管理器。因此，它可以安装和管理多个Node.js版本。

要安装特定版本的Node，请键入nvm install 和版本号。

例如：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">nvm install 10.1.0
```

或者安装最新的稳定版::

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">nvm install --lts
```

要查看您在管理器上安装的版本列表，请执行以下操作：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">nvm ls
```

这将列出所有已安装的Node.js版本，以及指定默认和稳定版本.  
要切换到已安装的另一个版本的Node.js ，请使用以下命令：

<figure class="wp-block-image">![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/word-image-25.png)</figure>```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">nvm use 10.16.0
```

##### 3: 安装Node.js开发工具

开发工具是一个自动化工具包，允许从npm编译和安装本机附加组件。  
要安装Node.js开发工具和库，请使用以下命令：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo yum install gcc g++ make
```