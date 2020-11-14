---
title: 'MariaDB 安装'
date: '2019-08-02T23:39:02+08:00'
status: publish
permalink: /install-mariadb-on-centos-7
author: admin
excerpt: ''
type: post
id: 761
category:
    - 数据库
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
MariaDB是一个开源的关系数据库管理系统，向后兼容，MySQL的二进制插件替换。  
它由MySQL的一些原始开发人员和社区中的许多人开发。  
随着CentOS 7的发布，MySQL被MariaDB取代为默认的数据库系统。

如果您出于任何原因需要安装MySQL，请查看如何在CentOS 7上安装MySQL教程。如果您的应用程序没有任何特定要求，您应该坚持使用CentOS 7中的默认数据库系统MariaDB。

在本教程中，我们将向您展示如何使用官方MariaDB存储库在CentOS 7上安装最新版本的MariaDB。

#### MariaDB 增加国内镜像

```
<pre class="wp-block-prismatic-blocks">```
sudo yum -y update
```
```

```
<pre class="wp-block-prismatic-blocks">```
sudo tee /etc/yum.repos.d/MariaDB.repo<<EOF
```
```

```
<pre class="wp-block-prismatic-blocks">```
[mariadb]
name = MariaDB
baseurl = http://mirrors.ustc.edu.cn/mariadb/yum/10.4/centos7-amd64/
gpgkey=http://mirrors.ustc.edu.cn/mariadb/yum/RPM-GPG-KEY-MariaDB
gpgcheck=1
EOF
```
```

```
<pre class="wp-block-prismatic-blocks">```
sudo yum makecache fast
sudo yum -y install MariaDB-server MariaDB-client
rpm -qi MariaDB-server
sudo systemctl enable –now mariadb
mysql_secure_installation
mysql -u root -p
mysql -V
```
```

- - - - - -

#### 在CentOS 7上安装MariaDB 5.5

默认CentOS存储库中提供的MariaDB服务器版本是5.5版。这不是最新版本，但它非常稳定。

按照以下步骤在CentOS 7上安装和保护MariaDB 5.5：

使用yum包管理器安装MariaDB包：

```
<pre class="wp-block-prismatic-blocks">```
sudo yum install mariadb-server
```
```

y提示时按，继续安装

安装完成后，启动MariaDB服务并使用以下命令使其启动时启动

```
<pre class="wp-block-prismatic-blocks">```
sudo systemctl start mariadb
sudo systemctl enable mariadb
```
```

要验证安装是否成功，请键入以下命令检查MariaDB服务状态

```
<pre class="wp-block-prismatic-blocks">```
sudo systemctl status mariadb
```
```

输出应显示该服务处于活动状态并正在运行

运行

```
<pre class="wp-block-prismatic-blocks">```
mysql_secure_installation
```
```

将执行多个安全相关任务的脚本

```
<pre class="wp-block-prismatic-blocks">```
sudo mysql_secure_installation
```
```

系统将提示您设置root用户密码，删除匿名用户帐户，限制root用户访问本地计算机，以及删除测试数据库。

详细解释了这些步骤。建议回答Y（是）所有问题.

- - - - - -

#### 在CentOS 7上安装MariaDB 10.3

在撰写本文时，MariaDB的最新版本是版本10.3。如果您需要安装任何其他版本的MariaDB，请转到[MariaDB存储库页面](https://downloads.mariadb.org/mariadb/repositories)，并为特定的MariaDB版本生成存储库文件。

要在CentOS 7上安装MariaDB 10.3，请按照下列步骤操作：

1、第一步是启用MariaDB存储库。创建一个名为的存储库文件MariaDB.repo

```
<pre class="wp-block-prismatic-blocks">```markdown
/etc/yum.repos.d/
```
```

并添加以下内容：

```
<pre class="wp-block-prismatic-blocks">```markdown
# MariaDB 10.4 CentOS repository list - created 2019-07-30 15:27 UTC
# http://downloads.mariadb.org/mariadb/repositories/
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.4/centos7-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
```
```

2、使用yum与其他CentOS软件包相同的方式安装MariaDB服务器和客户端软件包：

```
<pre class="wp-block-prismatic-blocks">```
sudo yum install MariaDB-server MariaDB-client
```
```

Yum可能会提示您导入MariaDB GPG密钥

```
<pre class="wp-block-prismatic-blocks">```
Retrieving key from https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
Importing GPG key 0x1BB943DB:
Userid : "MariaDB Package Signing Key <package-signing-key@mariadb.org>"
Fingerprint: 1993 69e5 404b d5fc 7d2f e43b cbcb 082a 1bb9 43db
From : https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
```
```

输入y并点击Enter

3、安装完成后，启用MariaDB启动并启动服务：

```
<pre class="wp-block-prismatic-blocks">```bash
sudo systemctl enable mariadb
sudo systemctl start mariadb
```
```

4、要验证安装，请键入以下命令检查MariaDB服务状态：

```
<pre class="wp-block-prismatic-blocks">```bash
sudo systemctl status mariadb
```
```

```
<pre class="wp-block-prismatic-blocks">```bash
mariadb.service - MariaDB 10.3.7 database server
Loaded: loaded (/usr/lib/systemd/system/mariadb.service; enabled; vendor preset: disabled)
Drop-In: /etc/systemd/system/mariadb.service.d
└─migrated-from-my.cnf-settings.conf
Active: inactive (dead)
Docs: man:mysqld(8)
https://mariadb.com/kb/en/library/systemd/
```
```

最后一步是运行

```
<pre class="wp-block-prismatic-blocks">```bash
mysql_secure_installation
```
```

脚本，该脚本将执行几个与安全相关的任务：

```
<pre class="wp-block-prismatic-blocks">```bash
sudo mysql_secure_installation
```
```

该脚本将提示您设置root用户密码，删除匿名用户，限制root用户对本地计算机的访问，以及删除测试数据库。

所有步骤都会详细解释，建议回答Y（是）所有问题.

- - - - - -

#### 从命令行连接到MariaDB

要通过终端以root帐户类型连接到MariaDB服务器：

```
<pre class="wp-block-prismatic-blocks">```
mysql -u root -p
```
```

系统将提示您输入`mysql_secure_installation`脚本运行时先前设置的root密码

```
<pre class="wp-block-prismatic-blocks">```bash
Welcome to the MariaDB monitor. Commands end with ; or \g.
Your MariaDB connection id is 8
Server version: 10.3.7-MariaDB MariaDB Server
Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.
Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
```
```

#### 测试安装

我们可以通过连接mysqladmin工具来验证我们的安装并获取相关信息，该工具是一个允许您运行管理命令的客户端。使用以下命令以root（-u root）连接到MariaDB ，提示输入密码（-p），然后返回版本

```
<pre class="wp-block-prismatic-blocks">```bash
mysqladmin -u root -p version
```
```

您应该看到与此类似的输出：

```
<pre class="wp-block-prismatic-blocks">```bash
mysqladmin Ver 9.0 Distrib 5.5.50-MariaDB, for Linux on x86_64
Copyright (c) 2000, 2016, Oracle, MariaDB Corporation Ab and others.
Server version 5.5.50-MariaDB
Protocol version 10
Connection Localhost via UNIX socket
UNIX socket /var/lib/mysql/mysql.sock
Uptime: 4 min 4 sec
Threads: 1 Questions: 42 Slow queries: 0 Opens: 1 Flush tables: 2 Open tables: 27 Queries per second avg: 0.172
```
```

这表明安装已成功。