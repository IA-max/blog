---
title: 创建超级用户
date: '2019-08-03T00:46:36+08:00'
status: publish
permalink: /create-a-sudo-user-on-centos
author: admin
excerpt: ''
type: post
id: 617
category:
    - Linux
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
sudo 命令旨在允许用户使用其他用户的安全权限运行程序，默认情况下为root用户。  
在本指南中，我们将向您展示如何在CentOS上创建具有sudo权限的新用户。您可以使用sudo用户在CentOS计算机上执行管理任务，而无需以root用户身份登录。

#### 创建Sudo用户

默认情况下，在CentOS上，组轮中的用户被授予sudo访问权限。如果要为现有用户配置sudo，只需将用户添加到wheel组中，如步骤4所示。  
按照以下步骤在CentOS服务器上创建一个sudo用户：

##### 1.登录您的服务器

首先以root用户身份登录CentOS服务器。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ssh root@server_ip_address
```

##### 2.创建新的用户帐户

使用useradd命令创建新用户帐户。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">useradd username
```

替换username为您要创建的用户名。

##### 3.设置用户密码

使用此passwd命令为新用户设置密码。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">passwd username
```

系统将提示您确认密码。确保使用强密码。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">Changing password for user username.<br>New password:<br>Retype new password:<br>passwd: all authentication tokens updated successfully.
```

##### 4.将新用户添加到sudo组中

默认情况下，在CentOS系统上，该组的成员wheel被授予sudo访问权限。将新用户添加到wheel组：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">usermod -aG wheel username
```

#### 如何使用Sudo

切换到新创建的用户：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">su - username
```

要使用sudo，只需在命令前加上sudo空格和前缀即可。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo [COMMAND]
```

例如，要列出/root您将使用的目录的内容：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo ls -l /root
```

首次使用此帐户中的sudo时，您将看到以下横幅消息，系统将提示您输入用户帐户的密码。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">We trust you have received the usual lecture from the local System
Administrator. It usually boils down to these three things:
#1) Respect the privacy of others.
#2) Think before you type.
#3) With great power comes great responsibility.
[sudo] password for username:
```