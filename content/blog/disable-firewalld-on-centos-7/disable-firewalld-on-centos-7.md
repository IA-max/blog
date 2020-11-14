---
title: 关闭防火墙
date: '2019-08-03T01:07:58+08:00'
status: publish
permalink: /disable-firewalld-on-centos-7
author: admin
excerpt: ''
type: post
id: 627
category:
    - Linux
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
FirewallD是一个完整的防火墙解决方案，可动态管理网络连接和接口的信任级别。它使您可以完全控制允许或禁止进出系统的流量。  
从CentOS 7开始，FirewallD将iptables替换为默认的防火墙管理工具。  
强烈建议启用FirewallD服务，但在某些情况下（如测试），您可能需要完全停止或禁用它。  
在本教程中，我们将向您展示如何在CentOS 7系统上禁用FirewallD

##### 检查防火墙状态  
要查看FirewallD服务的当前状态，您可以使用以下firewall-cmd命令：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo firewall-cmd --state
//如果您的CentOS系统上运行FirewallD服务，上面的命令将打印以下消息：
```

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">running
```

##### 禁用防火墙

您可以使用以下命令暂时停止FirewallD服务：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo systemctl stop firewalld
```

但是，此更改仅对当前运行时会话有效。要永久禁用CentOS 7系统上的防火墙，请执行以下步骤：  
1.首先，使用以下命令停止FirewallD服务：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo systemctl stop firewalld
```

2.禁用FirewallD服务以在系统引导时自动启动：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo systemctl disable firewalld
```

上面命令的输出看起来像这样：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">Removed symlink /etc/systemd/system/multi-user.target.wants/firewalld.service.
Removed symlink /etc/systemd/system/dbus-org.fedoraproject.FirewallD1.service.
```

3.掩盖FirewallD服务，这将阻止防火墙被其他服务启动：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">sudo systemctl mask --now firewalld
```

从输出中可以看出，mask命令只是从firewalld服务创建一个符号链接/dev/null：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">Created symlink from /etc/systemd/system/firewalld.service to /dev/null.
```

查看服务

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">systemctl status firewalld
```