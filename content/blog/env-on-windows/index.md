---
title: Windows 上的开发环境搭建
date: 2020-12-10
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

##### Gatsby 报错解决


##### 报错`mozjpeg pre-build test failed`

```bash
sudo apt-get install autoconf libtool nasm
```

##### 报错 `pngquant failed to build, make sure that libpng-dev is installed`

```bash
# Ubuntu
sudo apt update
sudo apt install -y build-essential gcc make libpng-dev

# Centos
sudo yum group install "Development Tools"
sudo yum -y install libpng-devel
```
