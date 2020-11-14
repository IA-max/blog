---
title: 'Linux 禁止/开启ping'
date: '2019-09-09T01:44:25+08:00'
status: publish
permalink: /linux-%e7%a6%81%e6%ad%a2-%e5%bc%80%e5%90%afping
author: admin
excerpt: ''
type: post
id: 1299
category:
    - Linux
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
Linux默认是允许Ping响应的，系统是否允许Ping由2个因素决定的：A、内核参数，B、防火墙，需要2个因素同时允许才能允许Ping，2个因素有任意一个禁Ping就无法Ping。具体的配置方法如下：

### 内核参数设置 

允许PING设置

- A.临时允许PING操作的命令为：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="shell" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">#echo 0 >/proc/sys/net/ipv4/icmp_echo_ignore_all         
```

- B.永久允许PING配置方法。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="shell" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">/etc/sysctl.conf //中增加一行　　   
net.ipv4.icmp_echo_ignore_all=1          
```

如果已经有net.ipv4.icmp\_echo\_ignore\_all这一行了，直接修改=号后面的值即可的（0表示允许，1表示禁止）。   
修改完成后执行sysctl -p使新配置生效。

###  禁止Ping设置 

- A临时禁止PING的命令为：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="shell" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">#echo 1 >/proc/sys/net/ipv4/icmp_echo_ignore_all            
```

- B.永久允许PING配置方法。

/etc/sysctl.conf 中增加一行   
net.ipv4.icmp\_echo\_ignore\_all=0   
如果已经有net.ipv4.icmp\_echo\_ignore\_all这一行了，直接修改=号后面的值即可的。（0表示允许，1表示禁止）   
修改完成后执行sysctl -p使新配置生效。

### 防火墙设置

注：此处的方法的前提是内核配置是默认值，也就是没有禁止Ping） 这里以Iptables防火墙为例，其他防火墙操作方法可参考防火墙的官方文档。

1、允许PING设置

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="shell" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">iptables -A INPUT -p icmp --icmp-type echo-request -j ACCEPT
iptables -A OUTPUT -p icmp --icmp-type echo-reply -j ACCEPT 
```

或者也可以临时停止防火墙操作的。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="shell" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">service iptables stop     
```

2、禁止PING设置

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="shell" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">iptables -A INPUT -p icmp --icmp-type 8 -s 0/0 -j DROP 
```