---
title: 'PM2 教程'
date: '2019-10-24T06:42:01+08:00'
status: publish
permalink: /pm2
author: admin
excerpt: ''
type: post
id: 1742
category:
    - Node
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
pm2是一个内置负载均衡的node.js应用进程管理器（支持Windows）.

#### PM2 主要功能

内建负载均衡（使用 Node cluster 集群模块）  
 后台运行  
 0 秒停机重载，我理解大概意思是维护升级的时候不需要停机.  
 具有 Ubuntu 和 CentOS 的启动脚本  
 停止不稳定的进程（避免无限循环）  
 控制台检测  
 提供 HTTP API  
 远程控制和实时的接口 API ( Nodejs 模块,允许和 PM2 进程管理器交互 )

#### 安装

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">npm install pm2 -g
```

#### 查看版本

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">pm2 -v
```

### 操作

#### **启动**

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">pm2 start app.js
```

或者

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">pm2 start npm -- start
```

#### **关闭**

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">pm2 stop 0 //0为id
```

根据名称关闭项目

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">pm2 stop test
```

#### 从PM2中删除

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">pm2 delete test //当然也可以pm2 delete 进程ID 
```

#### 重载和重启

当应用程序代码有更新，可以用重载来加载新代码，也可以用重启来完成

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">pm2 reload test
pm2 restart test
//reload可以做到0秒宕机加载新的代码，restart则是重新启动，生产环境中多用reload来完成代码更新！
```

#### 查看详情 

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">pm2 show test
```

#### 多项目操作

上面是单项目操作，多项目操作是如何呢？启动其它项目也如上面命令，我新启一个项目：pm2sample2（端口为11112）

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""> pm2 start app.js --name test2
```

#### 对项目进行批量操作（多个）

如下(重加载全部/停止全部/重启全部/删除全部)

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">pm2 reload all
pm2 stop all
pm2 restart all
pm2 delete all
```

### 集群

开发环境中多以fork的方式启动，生产环境中多用cluster方式启动

#### **启动方式**

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">pm2 start app.js -i 2 --name test
```

这表示启动2个并命名为test，在后台以cluster方式运行.

#### watching

这个项默认是disabled，可以通过如下命令开启

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">pm2 start app.js --name test --watch　　
```

上面的命令中启去吧了test项目并开启了watching  
**这个用处主要更新代码后，不用重载或重启项目即可以立即让更新的代码起作用**

#### list

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">pm2 list //可以列出pm2中所有项目
```

#### monit

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">pm2 monit //用monit可以打开实时监视器去查看资源占用情况
```

#### **logs**

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">pm2 logs //实时查看日志输出情况
```