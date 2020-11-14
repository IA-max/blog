---
title: 'MariaDB /MySQL Service设置'
date: '2019-08-03T01:57:25+08:00'
status: publish
permalink: /operate-the-mysql-mariadb-service-in-linux
author: admin
excerpt: ''
type: post
id: 657
category:
    - 数据库
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
systemd是Linux系统的新系统和服务管理器，由于SysVinit系统上存在大量问题/改进，因此在传统的SysV init系统上实现/适应所有主要Linux发行版。  
所有服务文件都可在`/etc/init.d/`SysVinit系统的目录中找到。  
对于systemd系统，服务文件在`/usr/lib/systemd/system/`目录中可用。  
如果要对特定服务执行任何类型的操作，如启动，停止，重新启动，启用，重新加载和状态，请使用以下命令。  
确保您应具有管理员权限以运行除status命令之外的这些命令。运行以下命令应该是`root`或`sudo`许可。

#### 1.如何在Linux中启动MySQL / MariaDB服务？

使用以下命令在Linux中启动MySQL / MariaDB服务器。  
对于`SysVinit`系统 – `MySQL`服务。

> \#service mysql start 或 #etc/init.d/ mysql start

对于`SysVinit`系统 – `MariaDB`服务

> \#service mariadb start  
> 或  
> \# etet / init.d/ mariadb start

对于`systemd`系统 – `MySQL`服务。

> \#systemctl启动mysql.service  
> 或  
> \#systemctl启动mysql

对于`systemd`系统 – `MariaDB`服务。

<div></div>> \#systemctl start mariadb  
> 或  
> \#systemctl start mariadb.service


#### 2.如何在Linux中停止MySQL / MariaDB服务？

使用以下命令在Linux中停止MySQL / MariaDB服务器。  
对于`SysVinit`系统 – `MySQL`服务。

> \#service mysql stop  
> 或  
> \#etc/init.d/ mysql stop

对于`SysVinit`系统 – `MariaDB`服务

> \#service mariadb stop  
> 或  
> \# etet / init.d/ mariadb stop

对于`systemd`系统 – `MySQL`服务。

> \#systemctl stop mysql.service  
> 或  
> \#systemctl stop mysql

对于`systemd`系统 – `MariaDB`服务。

<div></div>> \#systemctl stop mariadb  
> 或  
> \#systemctl stop mariadb.service


#### 3.如何在Linux中重启MySQL / MariaDB服务？

使用以下命令在Linux中重新启动MySQL / MariaDB服务器。  
对于`SysVinit`系统 – `MySQL`服务。

> \#service mysql restart  
> 或  
> \#etc/init.d/ mysql restart

对于`SysVinit`系统 – `MariaDB`服务

<div></div>> \#service mariadb restart  
> 或  
> \# etet / init.d/ mariadb restart

对于`systemd`系统 – `MySQL`服务。

> \#systemctl重启mysql.service  
> 或  
> \#systemctl重启mysql

对于`systemd`系统 – `MariaDB`服务。

> \#systemctl restart mariadb  
> 或  
> \#systemctl restart mariadb.service


#### 4.如何在Linux中重新加载MySQL / MariaDB服务？

使用以下命令在Linux中重新加载MySQL / MariaDB服务器。  
对于`SysVinit`系统 – `MySQL`服务。

> \#service mysql reload  
> 或  
> \#etc/init.d/ mysql reload

对于`SysVinit`系统 – `MariaDB`服务

> \#service mariadb reload  
> 或  
> \# etet / init.d/ mariadb reload

对于`systemd`系统 – `MySQL`服务。

> \#systemctl reload mysql.service  
> 或  
> \#systemctl reload mysql

对于`systemd`系统 – `MariaDB`服务。

> \#systemctl reload mariadb  
> 或  
> \#systemctl reload mariadb.service


#### 5.如何在Linux中查看MySQL / MariaDB服务状态？

使用以下命令在Linux中查看MySQL / MariaDB服务器状态。  
对于`SysVinit`系统 – `MySQL`服务。

> \#service mysql status  
> 或  
> \#etc/init.d/ mysql status

对于`SysVinit`系统 – `MariaDB`服务

> \#service mariadb status  
> 或  
> \# etc / init.d/ mariadb status

对于`systemd`系统 – `MySQL`服务。

> \#systemctl status mysql.service  
> 或  
> \#systemctl status mysql

对于`systemd`系统 – `MariaDB`服务。

> \#systemctl status mariadb  
> 或  
> \#systemctl status mariadb.service


#### 6.如何在Linux中启动MySQL / MariaDB服务？

使用以下命令在Linux中启动MySQL / MariaDB服务器。  
对于`SysVinit`系统 – `MySQL`服务。

> \#chkconfig mysqld on

对于`SysVinit`系统 – `MariaDB`服务

> \#chkconfig mariadb on

对于`systemd`系统 – `MySQL`服务。

> \#systemctl启用mysql.service  
> 或  
> \#systemctl启用mysql

对于`systemd`系统 – `MariaDB`服务。

> \#systemctl enable mariadb  
> 或  
> \#systemctl enable mariadb.service

对于所有服务命令[查看更多](https://www.blog.imaxyoung.com/how-to-start-stop-restart-enable-reload-the-mysql-mariadb-service-in-linux/ "如何在Linux服务器中重新启动服务")