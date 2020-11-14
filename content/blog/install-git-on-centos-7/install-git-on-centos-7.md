---
title: 安装Git
date: '2019-08-03T01:45:42+08:00'
status: publish
permalink: /install-git-on-centos-7
author: admin
excerpt: ''
type: post
id: 651
category:
    - Linux
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
版本控制已成为现代软件开发中不可或缺的工具。版本控制系统允许您在源级别跟踪软件。您可以跟踪更改，还原到以前的阶段，并从基本代码分支以创建文件和目录的替代版本。  
最受欢迎的版本控制系统之一是git。许多项目将文件保存在Git存储库中，而像GitHub和Bitbucket这样的网站比以往更容易与Git共享和贡献代码。  
在本指南中，我们将演示如何在CentOS 7服务器上安装Git。我们将介绍如何以几种不同的方式安装软件，每种方式都有自己的好处，以及如何设置Git以便您可以立即开始协作。  
安装Git  
本节将介绍安装Git的两种最常用方法。每个选项都有各自的优缺点，您的选择取决于您自己的需求。例如，想要维护Git软件更新的用户可能希望用来yum安装Git，而需要特定版本的Git提供的功能的用户则希望从源代码构建该版本。

##### 选项一 – 用Yum安装Git

安装Git并准备好使用它的最简单方法是使用CentOS的默认存储库。这是最快的方法，但以这种方式安装的Git版本可能比最新版本的版本旧。如果您需要最新版本，请考虑git从源代码编译（此方法的步骤可在本教程中进一步介绍）。  
使用yumCentOS的本地包管理器来搜索和安装gitCentOS存储库中提供的最新包：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo yum install git
```

如果命令完成且没有错误，您将已git下载并安装。要仔细检查它是否正常工作，请尝试运行Git的内置版本检查：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">git --version
```

如果该检查产生了Git版本号，那么您现在可以转到设置Git，在本文后面进一步介绍。

##### 选项二 – 从源安装Git

如果您想下载最新版本的Git，或者只是希望在安装过程中获得更大的灵活性，最好的方法是从源代码编译软件。这需要更长时间，并且不会通过yum软件包管理器进行更新和维护，但它允许您下载比CentOS存储库提供的版本更新的版本，并且可以控制您可以包含的选项。  
在开始之前，您需要安装git依赖的软件。这些依赖项都可以在默认的CentOS存储库中使用，以及从源代码构建二进制文件所需的工具：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="shell" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo yum groupinstall "Development Tools"
sudo yum install gettext-devel openssl-devel perl-CPAN perl-devel zlib-devel
```

<figure class="wp-block-image">![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/08/git_releases.png)</figure><figure class="wp-block-image">![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/git_releases.png)</figure><figure class="wp-block-image">![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/08/git_download.png)</figure><figure class="wp-block-image">![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/git_download.png)</figure>安装必要的依赖项之后，您可以通过访问GitHub上的[项目发布页面](https://github.com/git/git/releases)继续查找所需的Git 版本。  
  
列表顶部的版本是最新版本。如果它没有-rc（名称中的“Release Candidate”的缩写），这意味着它是一个稳定的版本并且可以安全使用。单击要下载的版本以进入该版本的发布页面。然后右键单击源代码（tar.gz）按钮并将链接复制到剪贴板。  
  
现在我们将使用wgetCentOS服务器中的命令从我们复制的链接下载源存档，git.tar.gz在此过程中将其重命名为更容易使用。  
注意：您复制的URL可能与我的不同，因为您下载的版本可能不同。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">wget https://github.com/git/git/archive/v2.1.2.tar.gz -O git.tar.gz
```

下载完成后，我们可以使用解压缩源存档tar。我们需要一些额外的标志来确保z解压缩正确完成：解压缩归档（因为所有.gz文件都被压缩），x从归档中提取单个文件和文件夹，并f告诉tar我们声明一个文件名到与…合作。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">tar -zxf git.tar.gz
```

这会将压缩源解压缩到以我们下载的Git版本命名的文件夹（在此示例中，版本为2.1.2，因此文件夹已命名git-2.1.2）。我们需要移动到该文件夹​​以开始配置我们的构建。我们可以使用通配符（\*）来节省移动到该文件夹​​的麻烦，而不是打扰文件夹中的完整版本名称。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">cd git-*
```

一旦我们进入源文件夹，我们就可以开始源构建过程了。这开始于对软件依赖性和硬件配置之类的事情进行一些预构建检查。我们可以使用configure生成的脚本检查我们需要的所有内容make configure。此脚本还将使用a –prefix声明/usr/local（Linux平台的默认程序文件夹）作为新二进制文件的适当目标，并将创建一个Makefile在以下步骤中使用的目标。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">make configure
./configure --prefix=/usr/local
```

Makefile是由该make实用程序处理的可编写脚本的配置文件。我们的Makefile将告诉我们make如何编译程序并将其链接到我们的CentOS安装，以便我们可以正确执行程序。有了Makefile，我们现在可以执行make install（使用sudo权限）将源代码编译成工作程序并将其安装到我们的服务器：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo make install
```

现在应该在CentOS 7服务器上构建和安装Git。要仔细检查它是否正常工作，请尝试运行Git的内置版本检查：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">git --version
```

如果该检查产生了Git版本号，那么现在可以转到下面的设置Git。

##### 设置Git

现在您已经git安装了，您需要提交一些关于您自己的信息，以便生成提交消息并附上正确的信息。为此，请使用该git config命令提供您希望嵌入到提交中的名称和电子邮件地址：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

要确认已成功添加这些配置，我们可以通过键入来查看已设置的所有配置项：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">git config --list
user.name=Your Name
user.email=you@example.com
```

此配置将为您节省查看错误消息的麻烦，并在您提交后不得不修改提交。

##### 添加密钥到ssh-agent

确保 ssh-agent 是可用的。ssh-agent是一种控制用来保存公钥身份验证所使用的私钥的程序，其实ssh-agent就是一个密钥管理器，运行ssh-agent以后，使用ssh-add将私钥交给ssh-agent保管，其他程序需要身份验证的时候可以将验证申请交给ssh-agent来完成整个认证过程。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">eval "$(ssh-agent -s)"
```

添加生成的 SSH key 到 ssh-agent

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ssh-add ~/.ssh/id_rsa
```

##### 登陆Github, 添加 ssh

<figure class="wp-block-image">![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/08/Annotation-2019-08-04-003501.png)</figure><figure class="wp-block-image">![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/Annotation-2019-08-04-003501.png)</figure>把id\_rsa.pub文件里的内容复制到这里  
  
测试：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">$ ssh -T git@github.com
```