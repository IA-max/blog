---
title: 'MariaDB 远程访问设置'
date: '2019-08-03T02:26:34+08:00'
status: publish
permalink: /remote-access-to-mariadb-datebases
author: admin
excerpt: ''
type: post
id: 682
category:
    - 数据库
tag:
    - DateBases
    - MariaDB
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
### MariaDB 简介

MariaDB是流行的跨平台MySQL数据库管理系统的一个分支，被认为是MySQL 的完全[替代品](https://mariadb.com/kb/en/mariadb/mariadb-vs-mysql-features/)。  
由Sun在Sun Microsystems合并期间被Oracle收购后，于2009年由MySQL的一位原始开发人员创建的。  
今天，MariaDB由[MariaDB Foundation](https://mariadb.org/en/foundation/)和社区贡献者维护和开发，目的是保留GNU GPL软件。

 root用户列入白名单

接下来在MariaDB服务器上，我们需要将我们的root用户列入白名单以允许从远程客户端进行访问，这可以通过运行以下命令来完成：

```
<pre class="wp-block-prismatic-blocks">```bash
mysql -u root -p
select User, host from mysql.user;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'192.168.0.%' IDENTIFIED BY '000000' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```
```

在客户端上，我们可以创建一个新的mysql会话，如下所示

```
<pre class="wp-block-prismatic-blocks">```bash
mysql -h 192.168.100.% -u root -p
```
```

##### 禁用远程访问

如果要锁定访问权限，以便只在本地登录时才能创建mysql会话，则可以通过在/etc/my.cnf文件中的’mysqld’节中插入以下行来完成此操作：

```
<pre class="wp-block-prismatic-blocks">```markup
skip-networking=1
```
```

这将导致仅允许基于套接字（即基于本地的）访问。此设置还会覆盖绑定地址设置。