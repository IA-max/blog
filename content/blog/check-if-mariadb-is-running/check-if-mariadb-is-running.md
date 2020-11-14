---
title: 'MariaDB 检查是否运行'
date: '2019-08-03T00:59:07+08:00'
status: publish
permalink: /check-if-mariadb-is-running
author: admin
excerpt: ''
type: post
id: 619
category:
    - 数据库
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
在某些情况下，您需要了解数据库服务器的版本，例如，在升级数据库或修补任何已知的服务器漏洞时。有几种方法可以找出MariaDB服务器的版本  
识别MariaDB服务器版本的第一种方法是登录MariaDB服务器。登录后，您将看到一条欢迎消息，其中指示了MariaDB服务器版本。  
![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/08/20669891016_91249d3239_c.jpg)![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/20669891016_91249d3239_c.jpg)  
或者，只需在登录时随时在MariaDB提示符下键入“status”命令。输出将显示服务器版本以及协议版本，如下所示  
![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/08/20669891046_73f60e5c81_c.jpg)![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/20669891046_73f60e5c81_c.jpg)  
方法二  
如果您无权访问MariaDB服务器，则无法使用第一种方法。在这种情况下，您可以通过检查安装了哪个MariaDB软件包来推断MariaDB服务器版本。仅当使用分发包管理器安装MariaDB服务器时，此方法才有效。  
您可以按如下方式搜索已安装的MariaDB服务器软件包。  
Debian，Ubuntu或Linux Mint：

> dpkg -l | grep mariadb

以下输出表明已安装的MariaDB服务器版本为10.0.17。 ![](https://blog.imaxyoung.com/wp-content/uploads/2019/08/20669890966_b611fcd915_c.jpg)  
Fedora，CentOS或RHEL：

> rpm -qa | grep mariadb

下面的输出表明安装的版本是5.5.41。![](https://blog.imaxyoung.com/wp-content/uploads/2019/08/20508160748_23d9808256_b.jpg)