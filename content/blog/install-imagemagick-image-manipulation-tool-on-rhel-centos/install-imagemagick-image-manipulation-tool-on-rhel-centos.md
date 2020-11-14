---
title: 安装ImageMagick
date: '2019-08-27T13:40:24+08:00'
status: publish
permalink: /install-imagemagick-image-manipulation-tool-on-rhel-centos
author: admin
excerpt: ''
type: post
id: 811
category:
    - Linux
tag: []
post_format: []
---
### installing ImageMagick from Repository

First, install following prerequisite **php-pear**, **php-devel** and **gcc** packages to compile imagick PHP extension.

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""># yum install php-pear php-devel gcc
```

Once you’ve installed **php-pear**, **php-devel** and **gcc** packages, you may now install **ImageMagick** software for **PHP** and **Perl** support using [yum command](https://www.tecmint.com/20-linux-yum-yellowdog-updater-modified-commands-for-package-mangement/).

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""># yum install ImageMagick ImageMagick-devel ImageMagick-perl
```

Next, verify that **ImageMagick** has been installed on your system by checking its version.

**\# convert –version**

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">Version: 
```

**ImageMagick 6.7.8-9 2019-02-01 Q16 http://www.imagemagick.org**

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">Copyright: Copyright (C) 1999-2012 ImageMagick Studio LLC
Features: OpenMP
```