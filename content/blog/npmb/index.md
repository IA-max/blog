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


###### NPM YARN 查询当前镜像
```
npm get registry
yarn config get registry
```

###### 设置为淘宝镜像
```
npm config set registry https://registry.npm.taobao.org/
yarn config set registry https://registry.npm.taobao.org/
```

###### 设置为官方镜像
```
npm config set registry https://registry.npmjs.org/
yarn config set registry https://registry.yarnpkg.com
```


### Windows 终端使用代理

###### 使用 http 类型代理 (临时代理方案, Cmd窗口关闭，则代理失效）
```
set http_proxy=http://127.0.0.1:9899
set https_proxy=http://127.0.0.1:9899
```

###### cmd永久代理方案
```
netsh winhttp import proxy source=ie
```

######  使用 socks 类型代理
```
netsh winhttp set proxy proxy-server="socks=127.0.0.1:9899" bypass-list="localhost"
netsh winhttp show proxy
netsh winhttp reset proxy
```

######  使用 socks 类型代理
```
set http_proxy=socks5://127.0.0.1:9899
set https_proxy=socks5://127.0.0.1:9899
```

######  使用 sock5 代理设置
```
set http_proxy=socks5://127.0.0.1:9899
set https_proxy=socks5://127.0.0.1:9899
```

###### CMD查看代理情况：
```
netsh winhttp show proxy
```

###### CMD取消代理：
```
netsh winhttp reset proxy
```