---
title: NPM镜像与CMD代理设置
date: '2020-02-01T04:31:21+08:00'
status: publish
permalink: /npmp
author: admin
excerpt: ''
type: post
id: 35281
category:
    - DevOps
tag: []
post_format: []
---
### Yarn 和 NPM 国内快速镜像（淘宝镜像）
>>NPM 查询当前镜像
```
npm get registry
```
设置为淘宝镜像
```
npm config set registry https://registry.npm.taobao.org/
```
设置为官方镜像
```
npm config set registry https://registry.npmjs.org/
```
>>
YARN
查询当前镜像
```
yarn config get registry
```
设置为淘宝镜像
```
yarn config set registry https://registry.npm.taobao.org/
```
设置为官方镜像
```
yarn config set registry https://registry.yarnpkg.com
```

>>设置CMD代理

CMD - http代理
cmd临时代理方案（cmd窗口关闭，则代理失效）
```
set http_proxy=http://127.0.0.1:50015
set https_proxy=http://127.0.0.1:50015
```

cmd永久代理方案
```
netsh winhttp import proxy source=ie
```

CMD - SOCKS5 代理设置
```
set http_proxy=socks5://127.0.0.1:50014
set https_proxy=socks5://127.0.0.1:50014
```

CMD查看代理情况：
```
netsh winhttp show proxy
```

CMD取消代理：
```
netsh winhttp reset proxy
```