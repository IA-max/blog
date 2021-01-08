---
title: Electron  入门
date: '2019-11-23T17:54:25+08:00'
status: publish
permalink: /
category: ["js"] 
tag: ["js","electron"]
author: "max"
excerpt: ""
featured: false
image: 
featuredimage:
  src: "cover-ele.png"
  alt: ""
---

##### npm 安装 electron 依赖时下载

1. 修改 npm 配置

```bash
npm config edit
```

2. 增加下面一行配置，然后保存关闭

```bash
electron_mirror=https://npm.taobao.org/mirrors/electron/
```

3. 重新下载包 <small class="grey">(先把 node_modules 中的`electron`文件夹删除)</small>

```bash
npm install
```
