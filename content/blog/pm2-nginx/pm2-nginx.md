---
title: 'PM2 + NGINX 配置'
date: '2019-10-25T05:25:23+08:00'
status: publish
permalink: /pm2-nginx
author: admin
excerpt: ''
type: post
id: 1759
category:
    - Node
tag:
    - centos
    - nginx
    - nodejs
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
Nginx作为HTTP代理

这是将NGINX用作PM2的HTTP代理前端的常用方法。NGINX将允许快速提供静态文件，管理SSL协议并将流量重定向到您的Node.js应用程序。

这是一个Node.js应用程序侦听端口3001，NGINX将流量从端口80转发到3001的示例。该示例还处理Websocket连接。

nginx.conf：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">upstream my_nodejs_upstream {
    server 127.0.0.1:3001;
    keepalive 64;
}
server {
    listen 443 ssl;
    server_name www.my-website.com;
    ssl_certificate_key /etc/ssl/main.key;
    ssl_certificate     /etc/ssl/main.crt;
    location / {
    	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;
    	proxy_set_header Host $http_host;
    	proxy_http_version 1.1;
    	proxy_set_header Upgrade $http_upgrade;
    	proxy_set_header Connection "upgrade";
    	proxy_pass http://my_nodejs_upstream/;
    	proxy_redirect off;
    	proxy_read_timeout 240s;
    }
}
```