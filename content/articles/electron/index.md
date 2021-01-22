---
title: "Electron"
date: "2019-11-23"
featured: false
category: "js"
excerpt: ""
tag: ["js","electron"]
status: "publish"
type: "post"
cover: "./cover-ele.png"
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
