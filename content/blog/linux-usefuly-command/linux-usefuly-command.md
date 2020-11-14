---
title: 'Linux 实用命令'
date: '2019-09-25T19:20:14+08:00'
status: publish
permalink: /linux-usefuly-command
author: admin
excerpt: ''
type: post
id: 1665
category:
    - Linux
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
#### 压缩与解压

 Linux下常见的压缩包格式有5种:

- zip
- tar.gz
- tar.bz2
- tar.xz
- tar

Z其中tar是种打包格式, gz和bz2等后缀才是指代压缩方式:gzip和bzip2.

 filename**.zip**的解压:

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">unzip filename.zip 
```

filename**.tar.gz**的解压:

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">tar -zxvf filename.tar.gz
```

其中zxvf含义分别如下

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">z: 　　gzip  　　 //压缩格式
x: 　　extract　  //解压
v:　　verbose　//详细信息
f: 　　file(file=archieve)　//文件 
```

filename**.tar.bz2**的解压:

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">tar -jxvf filename.tar.bz2
```

j: bzip2 压缩格式  
其它选项和tar.gz解压含义相同

filename**.tar.xz**的解压:

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">tar -Jxvf filename.tar.xz // 注意J大写  
```

filename**.tar.Z**的解压:

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""> tar -Zxvf filename.tar.Z  // 注意Z大写  
```

关于tar的详细命令可以

tar –help

**事实上, 从1.15版本开始tar就可以自动识别压缩的格式,故不需人为区分压缩格式就能正确解压**

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">tar -xvf filename.tar.gz
tar -xvf filename.tar.bz2
tar -xvf filename.tar.xz
tar -xvf filename.tar.Z 
```

####  记录与恢复目录权限 

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">getfacl -R . > permissions_backup
setfacl --restore=permissions_backup 
```

####  下使用命令快速打开文件管理器 

 在linux下开发时，使用最多的是终端，在某些情况下，想通过终端快速打开图形化的文件管理器，来管理当前目录，我们可以使用如下命令：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">#nautilus
```

在windos下使用 explorer . 而mac os下使用 open .