---
title: Wget下载
date: '2019-12-22T15:56:16+08:00'
status: publish
permalink: /wget%e4%b8%8b%e8%bd%bd
author: admin
excerpt: ''
type: post
id: 3279
category:
    - IT技术支持
tag: []
post_format: []
---
wget -r -p -np -k http://xxx.com/xxx

-r, –recursive（递归） specify recursive download.（指定递归下载）  
-k, –convert-links（转换链接） make links in downloaded HTML point to local files.（将下载的HTML页面中的链接转换为相对链接即本地链接）  
-p, –page-requisites（页面必需元素） get all images, etc. needed to display HTML page.（下载所有的图片等页面显示所需的内容）  
-np, –no-parent（不追溯至父级） don’t ascend to the parent directory.  
另外断点续传用-nc参数 日志 用-o参数