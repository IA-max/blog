---
title: 'Expressjs 记录'
date: '2019-12-22T02:42:13+08:00'
status: publish
permalink: /expressjs-%e8%ae%b0%e5%bd%95
author: admin
excerpt: ''
type: post
id: 3274
thumbnail: ../../uploads/2019/12/agata-create-4SbDro9ND5c-unsplash.jpg
category:
    - Node
tag: []
post_format: []
---
get the full url in Express?

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
```

encode HTTP response – 中文乱码解决

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"}); 
```

获取headers 参数

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">res.<strong>defineGetter</strong>('headerSent', function(){<br>
    return this._header;<br>
  });
```

![](../../uploads/2020/09/maldives_tropical_house_swimming_pool_spa_88020_5441x3707.jpg)