---
title: RVM方式安装Ruby
date: '2019-08-02T22:51:42+08:00'
status: publish
permalink: /install-ror-nodejs-on-centos-7
author: admin
excerpt: ''
type: post
id: 760
category:
    - Linux
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
Ruby on Rails是一个非常流行的用Ruby编写的开源Web应用程序框架。它旨在通过假设每个开发人员需要入门的内容来简化编程Web应用程序。Rails是一个模型 – 视图 – 控制器（MVC）框架，为数据库，Web服务和Web页面提供默认结构。Rails鼓励使用JSON和XML等Web标准进行数据传输，HTML，CSS和用户界面的JavaScript。

#### 安装Ruby

在安装任何软件包之前，最好使用以下命令更新系统及其存储库.  
确保安装了curl和gpg，以及编译器工具链。进一步的安装步骤需要Curl和gpg，而安装常见的Ruby gem需要编译器工具链。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">yum -y update
```

然后我们需要一些额外的Ruby依赖项。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo yum install gcc g ++ make automake autoconf curl-devel openssl-devel zlib-devel httpd-devel apr-devel apr-util-devel sqlite-devel
sudo yum install ruby​​-rdoc ruby​​-devel
```

#### 安装RVM

在生产服务器上运行以下命令以安装RVM：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo gpg2 --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
```

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">curl -sSL https://get.rvm.io | bash -s stable
```

要开始使用RVM，您需要运行以下命令

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">source /etc/profile
rvm reload
```

现在使用以下命令验证是否已正确安装所有依赖项。这将在您的系统上安装任何缺少的依赖项。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">rvm requirements run
```

首先，检查系统上当前安装的ruby版本。这样我们就可以找到系统当前使用的版本以及默认设置的版本

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">rvm list
```

使用RVM安装最新的稳定版Ruby，并将其设置为默认版本

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">rvm install 2.6.3
rvm use 2.6.3 --default
```

通过打印版本号验证Ruby是否已正确安装

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ruby -v
```