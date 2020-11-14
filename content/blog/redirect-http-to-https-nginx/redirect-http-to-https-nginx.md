---
title: 'Nginx 重定向Http'
date: '2019-09-05T21:25:51+08:00'
status: publish
permalink: /redirect-http-to-https-nginx
author: admin
excerpt: ''
type: post
id: 935
category:
    - Nginx
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
Nginx中的另一个常见任务是将HTTP请求重定向到HTTPS，以强制使用SSL证书。 在Nginx中，我们通常希望避免使用if语句。与我们在www非子www域和非子域之间重定向的方式类似，我们将使用server块将HTTP重定向到HTTPS请求.

<div class="wp-block-columns"><div class="wp-block-column" style="flex-basis:28%"><figure class="wp-block-image size-large">![](https://blog.blog.imaxyoung.com/wp-content/uploads/2019/09/DdftOeLVMAEnRMa_Converted-1.jpg)</figure></div><div class="wp-block-column" style="flex-basis:72%"> 两种方法：

 1.捕获所有http并重定向到https  
2.仅重定向特定的应用/网站

####  重定向所有HTTP 

我喜欢的一种方法是捕获所有端口80（http）请求并将它们重定向到端口443（https）。

 当您知道您希望所有已配置的站点绝对仅使用时，此方法https有效.

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">server {
    listen 80 default_server;
    server_name _;
    return 301 https://$host$request_uri;
}
```

</div></div> 这将侦听端口80.它也是端口80的默认服务器。假设它是server侦听端口80 的唯一块。  
server\_name就是\_，它匹配使用的任何主机名  
最后，我们将301重定向返回到https所请求的URI 的版本。  
我们知道到达此server块的所有请求都是http，因为它只侦听端口80请求。

####  重定向特定站点 

我们也可以仅重定向特定网站。如果您有多个应用程序/站点并且并非所有应用程序/站点都被强制使用SSL证书，则会更好.

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">server {
    listen 80;
    server_name foo.com;
    return 301 https://foo.com$request_uri;
}
```

这里我们在端口80上侦听http请求，但是我们不将其作为默认服务器.  
相反，它只监听对主机名foo.com（HostHTTP标头设置为foo.com）的请求.  
它返回301重定向到https给定URI 的版本，但硬编码hostname（foo.com）

#### APP 配置

然后，我们的站点/应用程序可以设置为仅在端口443上侦听SSL连接

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">server {
listen 443 ssl default_server;
server_name foo.com;
}
server {
listen 443 ssl;
server_name bar.com;
}
# and so on...
```