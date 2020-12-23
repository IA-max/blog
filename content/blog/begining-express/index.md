---
title: '入门 - Expressjs'
date: '2019-12-22T02:42:13+08:00'
status: publish
permalink: /expressjs-%e8%ae%b0%e5%bd%95
category: ["node"] 
tag: ["node","js", "full stack"]
author: "max"
excerpt: "get the full url in Express"
featured: false
image: 
featuredimage:
  src: "none.png"
  alt: ""
---
get the full url in Express?

```js
var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
```

encode HTTP response – 中文乱码解决

```js
res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"}); 
```

获取headers 参数

```js
res.defineGetter('headerSent', function(){
    return this._header;
  });
```

![](../../uploads/2020/09/maldives_tropical_house_swimming_pool_spa_88020_5441x3707.jpg)
