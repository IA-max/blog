---
title: Windows 上的开发环境搭建
date: 2020-12-10
featuredimage:
  src: "cover.png"
  alt: "Windows Dev Env"
category: ["devops"] 
tag: ["DevOps", "setup"]
author: "max"
excerpt: ""
featured: false
image: 
---


#### Ubuntu 20.04 安装启用 SSH

安装openssh-server软件包
```bash
sudo apt update
sudo apt install openssh-server
```

校验服务运行状态, 按q退出返回
```bash
sudo systemctl status ssh
```

如启用了防火墙，请确保打开 SSH 端口
```bash
sudo ufw allow ssh
```

---

#### Gatsby 报错解决


报错`mozjpeg pre-build test failed`
```bash
sudo apt-get install autoconf libtool nasm
```

报错 `pngquant failed to build, make sure that libpng-dev is installed`
```bash
# Ubuntu
sudo apt update
sudo apt install -y build-essential gcc make libpng-dev

# Centos
sudo yum group install "Development Tools"
sudo yum -y install libpng-devel
```




---

#### NPM & YARN 镜像设置


1. 用定制的cnpm代替

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

2.  NPM、Yarn 全局注册

```bash
# NPM
npm config set registry https://registry.npm.taobao.org

# 验证命令, 返回https://registry.npm.taobao.org，说明镜像配置成功
npm config get registry

# YARN
yarn config set registry https://registry.npm.taobao.org -g
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
```
---

#### Ubuntu 显示隐藏文件

```bash
Ctrl + H
```

---

#### Ubuntu 超级管理员打开资源管理器

```bash:title=安装&nbspnautilus-admin后,&nbsp右键打开目录
sudo apt-get install nautilus-admin

nautilus -q
```




#### 配置Git


```bash
#安装Git
sudo apt-get install git

# 设置Email
git config --global user.name "Your Name"
git config --global user.email "youremail@domain.com"

```

更多指导在[GitHub Guides ](https://guides.github.com/)

