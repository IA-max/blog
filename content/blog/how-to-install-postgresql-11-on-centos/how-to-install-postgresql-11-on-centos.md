---
title: '安装PostgreSQL 11'
date: '2019-08-31T11:48:09+08:00'
status: publish
permalink: /how-to-install-postgresql-11-on-centos
author: admin
excerpt: ''
type: post
id: 823
category:
    - 数据库
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
#### 简介

PostgreSQL是一个开放源代码的对象关系，高度可扩展，符合SQL的数据库管理系统。 PostgreSQL是由加利福尼亚大学伯克利分校计算机科学系开发的。

本文将帮助您在CentOS，RHEL和Fedora系统上安装PostgreSQL .

#### 卸载旧版本

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">yum remove postgresql*
```

rpm -qa | grep postgresql 列出已安装的包， 并使用yum remove逐一删除

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">rm -rf /var/lib/pgsql
rm -rf /usr/pgsql*
```

##### 更新yum

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">yum update
```

##### 安装存储库RPM

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">yum install https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm
```

- - - - - -

#### 安装

##### 1. 添加Postgres Yum存储库

安装PostgreSQL存储库，使用以下命令.

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">## CentOS/RHEL - 7
yum install -y https://download.postgresql.org/pub/repos/yum/11/redhat/rhel-7-x86_64/pgdg-redhat11-11-2.noarch.rpm
```

更多详细信息，请访问[PostgreSQL](https://yum.postgresql.org/repopackages.php)页面，您可以在其中获取适用于各种操作系统的信息库软件包rpm。

##### 2 .安装PostgreSQL 服务器

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">yum install -y postgresql11-server postgresql11
```

##### 3.检查版本

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">psql --version
```

##### 4.初始化PGDATA

安装后，需要在首次使用前对其进行初始化.

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">/usr/pgsql-11/bin/postgresql-11-setup initdb
```

将需要一些时间来首次初始化PostgreSQL. PGDATAenvironment变量包含data目录的路径

PostgreSQL data directory Path:

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">/var/lib/pgsql/10/data/
```

##### 5.启动 PostgreSQL 服务器

启动服务器并设置自启动服务

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">systemctl start postgresql-11
systemctl enable postgresql-11
```

##### 6 .验证 PostgreSQL安装

登录到postfix以验证安装是否成功完成.

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">su - postgres -c "psql"
psql (10.0)
Type "help" for help.
postgres=#
```

为用户postgres创建密码

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">postgres=# \password 你的密码
```

恭喜！  
已经成功安装了PostgreSQL服务器。

- - - - - -

#### 配置PostgreSQL服务器

默认情况下，PostgreSQL侦听localhost，说明仅能从服务器本身访问数据库，并且无法从外部网络连接到数据库.  
要为外部计算机启用数据库服务访问，需要编辑配置文件。

修改postgresql.conf

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">vi /var/lib/pgsql/11/data/postgresql.conf
```

 取消这段注释 , 设置listen\_addresses为\*

重启服务器

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">systemctl restart postgresql-11
```

netstat命令 确认PostgreSQL侦听端口5432

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">netstat -antup | grep 5432
```

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">tcp        0      0 0.0.0.0:5432            0.0.0.0:*               LISTEN      1969/postmaster
tcp6       0      0 :::5432                 :::*                    LISTEN      1969/postmaster
```

 修改pg\_hba.conf

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo vim /var/lib/pgsql/11/data/pg_hba.conf
```

##### 远程访问开启

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">host all all 0.0.0.0/0 md5
```

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""> local   all             postgres                                trust
```

重启服务器

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo systemctl restart postgresql-11
```

#### <s>扩展阅读: 安装phpPgAdmin。</s>

[<s>How to Install phpPgAdmin on CentOS using Yum</s>](https://tecadmin.net/how-to-install-phppgadmin-on-centos-using-yum/)