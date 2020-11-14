---
title: Puppeteer
date: '2019-10-24T08:08:51+08:00'
status: publish
permalink: /puppeteer
author: admin
excerpt: ''
type: post
id: 1754
category:
    - Node
tag:
    - nodejs
    - 插件
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
Puppeteer自身不会消耗太多资源，耗费资源的大户是Chromium Headless。所以需要理解Chromium运行的原理，才能方便优化。  
Chromium消耗最多的资源是CPU，一是渲染需要大量计算，二是Dom的解析与渲染在不同的进程，进程间切换会给CPU造成压力（进程多了之后特别明显）。其次消耗最多的是内存，Chromium是以多进程的方式运行，一个页面会生成一个进程，一个进程占用30M左右的内存，大致估算1000个请求占用30G内存，在并发高的时候内存瓶颈最先显现。  
优化最终会落在内存和CPU上（所有软件的优化最终都要落到这里），通常来说因为并发造成的瓶颈需要优化内存，计算速度慢的问题要优化CPU。使用Puppeteer的用户多半会更关心计算速度，所以下面我们谈谈如何优化Puppeteer的计算速度。