---
title: 安装Mongodb
date: '2019-11-04T12:07:31+08:00'
status: publish
permalink: /install-mongodb-on-centos
author: admin
excerpt: ''
type: post
id: 1950
category:
    - Linux
tag:
    - centos
    - mongodb
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
### 安装Mongodb

##### 配置系统yum源, VI创建.repo文件，生成mongodb的源

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">vi /etc/yum.repos.d/mongodb.repo
```

##### 添加以下配置信息：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">[MongoDB]
name=MongoDB Repository
baseurl=http://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.2/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc
```

###  yum安装MongoDB 

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo yum install -y mongodb-org
```

##### 验证安装结果

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">rpm -qa |grep mongodb
rpm -ql mongodb-org-server
```

###  启动MongoDB 

##### 启动MongoDB服务

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">systemctl start mongod.service
```

##### 检测MongoDB默认端口是27017是否开启

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">netstat -natp | grep 27017
```

##### 检查数据库是否安装成功

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ps -aux | grep mongod    # 查看数据库的进程是否存在
```

##### 验证服务开启

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">mongo
```

### 远程连接Mongodb

##### 修改配置文件mongodb.conf, 修改绑定为bindIp:0.0.0.0

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">vi /etc/mongod.conf
# network interfaces
net:
  port: 27017
  bindIp: 0.0.0.0  # Enter 0.0.0.0,:: to bind to all IPv4 and IPv6 addresses or, alternatively, use the net.bindIpAll setting.
```

##### 重启mongodb服务

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo service mongod restart 
```

开放防火墙对外端口

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">systemctl status firewalld  # 查看防火墙状态
firewall-cmd --zone=public --add-port=27017/tcp --permanent # mongodb默认端口号
firewall-cmd --reload  # 重新加载防火墙
firewall-cmd --zone=public --query-port=27017/tcp # 查看端口号是否开放成功，输出yes开放成功，no则失败
```

##### 远程连接

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">mongo  192.xx.xx.xx
```

创建用户，设置账号，密码，权限

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">// admin数据库
> use admin
switched to db admin
> db.createUser({ user:"admin", pwd:"password", roles:["root"] })
Successfully added user: { "user" : "admin", "roles" : [ "root" ] }
```

这里Roles 的权限说明:

Read：允许用户读取指定数据库  
 readWrite：允许用户读写指定数据库  
 dbAdmin：允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile  
 userAdmin：允许用户向system.users集合写入，可以找指定数据库里创建、删除和管理用户  
 clusterAdmin：只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限。  
 readAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读权限  
 readWriteAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读写权限  
 userAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的userAdmin权限  
 dbAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的dbAdmin权限。  
 root：只在admin数据库中可用。超级账号，超级权限

##### 修改mongodb.conf文件，启用身份验证

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">vi /etc/mongod.conf
```

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">security:
  authorization: "enabled"   # disable or enabled
```

##### 重启MongoDB

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo service mongod restart 
```

#####  mongoose 远程连接 

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">mongoose.connect('mongodb://username:password@host:port/database?authSource=admin', {useNewUrlParser: true});
```

 authSource 将指定与用户凭据关联的数据库名称。[`authSource`](https://docs.mongodb.com/manual/reference/connection-string/#urioption.authSource) 默认为连接字符串中指定的数据库。 即数据库认证需要依赖于admin数据库.