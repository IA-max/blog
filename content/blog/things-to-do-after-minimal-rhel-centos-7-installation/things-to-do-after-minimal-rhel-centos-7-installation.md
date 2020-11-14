---
title: 'CentOS 7 安装后配置'
date: '2019-08-03T02:15:11+08:00'
status: publish
permalink: /things-to-do-after-minimal-rhel-centos-7-installation
author: admin
excerpt: ''
type: post
id: 674
category:
    - Linux
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
CentOS是一个社区驱动的免费Linux发行版，它恰好是红帽企业Linux的强大替代品。它源自Red Hat Enterprise Linux源代码。安装CentOS 7后，您可以继续使用操作系统，但我们可以为新核心系统做很多事情以充分利用它。其中大部分也适用于Red Hat Enterprise Linux，因为CentOS与其共享大部分功能。

因此，让我们看一下“安装CentOS 7后要做的事”，您可以考虑做些什么来准备服务器。这不是一个全面的列表，但希望在设置新服务器时非常有帮助。

专用或vps服务器上安装centos 7后，可以执行以下操作：

##### **更新和升级centos**

```
<pre class="wp-block-prismatic-blocks">```bash
yum upgrade
```
```

此命令将通知您可以更新或升级的软件包。

要安装更新，只需运行以下命令：

```
<pre class="wp-block-prismatic-blocks">```
yum install update
```
```

##### **设置服务器的主机名**

```
<pre class="wp-block-prismatic-blocks">```
echo $HOSTNAME ———>check current HOSTNAME
vi /etc/hostname ` ———>edit and replace old
echo $HOSTNAME ———>logout and login again
```
```

##### **安装命令行Web浏览器**

```
<pre class="wp-block-prismatic-blocks">```
yum install links
```
```

这是因为大多数服务器没有GUI。因此要通过终端检查网站。

##### **安装wget＆7-Zip**

wget是一个命令行工具，可以从Web服务器中检索或下载内容。7-Zip用于压缩和提取zip格式的文件。

```
<pre class="wp-block-prismatic-blocks">```
yum install wget
yum install p7zip
```
```

##### **安装开发工具**

如果您计划构建软件，则安装开发工具。开发工具基本上由GCC，g ++，make，autoconf，libtool，bison，flex，rpmbuild等软件包组成。

找出将成为开发工具组的包列表。

```
<pre class="wp-block-prismatic-blocks">```
yum groupinfo “Development Tools”
```
```

要安装开发工具，请运行以下命令：

```
<pre class="wp-block-prismatic-blocks">```
yum update
yum groupinstall “Development Tools”
```
```

安装开发工具后，您可以检查重要的二进制文件。

```
<pre class="wp-block-prismatic-blocks">```
gcc –version
make –version
```
```