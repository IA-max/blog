---
title: '安装EPEL Repo'
date: '2019-08-04T02:40:53+08:00'
status: publish
permalink: /installing-epel-repo-on-centos7
author: admin
excerpt: ''
type: post
id: 697
category:
    - Linux
tag:
    - centos
    - update
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
您可以通过配置CentOS 7.x或RHEL 7.x系统轻松安装各种软件包，以使用Fedora EPEL repos和第三方软件包。请注意，这些软件包不受CentOS或Red Hat的正式支持，但提供了许多流行的软件包和应用程序。本快速教程解释了**如何配置CentOS或Red Hat Enterprise Linux（RHEL）版本7.x以使用Fedora**  
   
在CentOS Linux和RHEL 7.x上安装EPEL repo的命令  
为CentOS / RHEL 7.x服务器启用EPEL存储库的过程如下：  
打开shell提示符。  
或者使用ssh client登录名为server1的主机。  
使用以下命令安装epel： yum -y install epel-release  
键入以下命令刷新repo： yum repolist  
如何在CentOS和RHEL 7.x上安装EPEL repo  
以下说明假定您在CentOS / RHEL 7.x系统上以root用户身份运行命令，并希望使用Fedora Epel存储库。  
方法＃1：为Enterprise Linux存储库配置安装额外软件包（推荐）  
只需在CentOS 7或RHEL 7上键入以下yum命令：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo yum install epel-release
```

方法＃2：从dl.fedoraproject.org安装额外的EPEL存储库  
使用wget命令下载CentOS和RHEL 7.x的epel版本命令如下：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">cd /tmp
wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
ls *.rpm
```

要安装epel-release-7-5.noarch.rpm，请输入：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo yum install epel-release-latest-7.noarch.rpm
```

列出你的新 repo  
安装完成后，您应该使用以下yum repolist命令查看epel repo

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo yum repolist
```