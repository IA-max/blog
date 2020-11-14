---
title: 进程和线程
date: '2019-11-03T18:18:38+08:00'
status: publish
permalink: /threadandprocess
author: admin
excerpt: ''
type: post
id: 1939
category:
    - Linux
tag:
    - 概念
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
进程：  
进程表示任何程序正在执行。过程控制块控制任何过程的操作。进程控制块包含有关进程的信息，例如：进程优先级，进程ID，进程状态，CPU，寄存器等。一个进程可以创建其他进程，这些进程称为子进程。进程花费更多时间来终止，并且被隔离，这意味着它不与任何其他进程共享内存。  
线程：  
线程是进程的一部分，意味着一个进程可以具有多个线程，而这些多个线程包含在一个进程中。线程具有3种状态：运行，就绪和阻塞。  
与进程相比，线程花费更少的时间来终止，并且类似的进程线程不会隔离。  
  
![](https://blog.blog.imaxyoung.com/wp-content/uploads/2019/11/Untitled-Diagram-361-242x300.png)  
**进程和线程之间的区别：**

<table><tbody><tr><th>序号</th><th>处理</th><th>线</th></tr><tr><td>1。</td><td>进程表示任何程序正在执行。</td><td>线程是指进程的一部分。</td></tr><tr><td>2。</td><td>该过程需要更多时间才能终止。</td><td>线程花费更少的时间来终止。</td></tr><tr><td>3。</td><td>创建需要花费更多时间。</td><td>创建所需的时间更少。</td></tr><tr><td>4。</td><td>上下文切换也需要更多时间。</td><td>上下文切换花费的时间更少。</td></tr><tr><td>5，</td><td>就沟通而言，过程效率较低。</td><td>线程在通信方面更加高效。</td></tr><tr><td>6。</td><td>进程消耗更多资源。</td><td>线程消耗更少的资源。</td></tr><tr><td>7。</td><td>进程是隔离的。</td><td>线程共享内存。</td></tr></tbody></table>