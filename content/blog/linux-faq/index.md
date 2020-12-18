---
title: 'Linux 实用命令 & FAQ'
date: '2019-09-25T19:20:14+08:00'
status: publish
permalink: /linux-usefuly-command
category: ["linux"] 
tag: [""]
author: "max"
excerpt: "Linux下常见的压缩包格式有5种"
featured: false
image: 
featuredimage:
  src: "none.png"
  alt: ""
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

```bash
unzip filename.zip 
```

filename**.tar.gz**的解压:

```bash
tar -zxvf filename.tar.gz
```

其中zxvf含义分别如下

```bash
z: 　　gzip  　　 //压缩格式
x: 　　extract　  //解压
v:　　verbose　//详细信息
f: 　　file(file=archieve)　//文件 
```

filename**.tar.bz2**的解压:

```bash
tar -jxvf filename.tar.bz2
```

j: bzip2 压缩格式  
其它选项和tar.gz解压含义相同

filename**.tar.xz**的解压:

```bash
tar -Jxvf filename.tar.xz // 注意J大写  
```

filename**.tar.Z**的解压:

```bash
 tar -Zxvf filename.tar.Z  // 注意Z大写  
```

关于tar的详细命令可以

tar –help

**事实上, 从1.15版本开始tar就可以自动识别压缩的格式,故不需人为区分压缩格式就能正确解压**

```bash
tar -xvf filename.tar.gz
tar -xvf filename.tar.bz2
tar -xvf filename.tar.xz
tar -xvf filename.tar.Z 
```

####  记录与恢复目录权限 

```bash
getfacl -R . > permissions_backup
setfacl --restore=permissions_backup 
```

####  下使用命令快速打开文件管理器 

 在linux下开发时，使用最多的是终端，在某些情况下，想通过终端快速打开图形化的文件管理器，来管理当前目录，我们可以使用如下命令：

```bash
#nautilus
```

在windos下使用 explorer . 而mac os下使用 open .



#### Shell提示符

从 Linux 控制台登录后，便可以看到 Shell 提示符。提示符是通往 Shell 的大门，是输入 Shell 命令的地方.

> 对于普通用户，Base shell 默认的提示符是美元符号$；
<br>
> 对于超级用户（root 用户），Bash Shell 默认的提示符是井号#。
```bash
[max@localhost ~]$
```
该符号表示 Shell 等待输入命令.:
- 启动 Shell 的用户名，也即 max;
- 本地主机名称，也即 localhost；
- 当前目录，波浪号~是主目录的简写表示法



#### 解决 GitHub 的 raw.githubusercontent.com 无法访问的问题
修改 /etc/hosts，Ubuntu，CentOS 及 macOS 直接在终端输入
```bash
sudo vi /etc/hosts
```

添加以下内容保存即可

```
199.232.68.133  raw.githubusercontent.com
```

#### Ubuntu访问github速度慢
添加以下映射
```bash:title=/etc/hosts
140.82.114.4 github.com
199.232.69.194 github.global.ssl.fastly.net
```

```bash:title=bash中输入
export NVM_DIR="~/.nvm"
source ~/.nvm/nvm.sh
```

```bash:title=.zshrc文件底部中添加添加bashrc内容
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
---

安装 Oh My ZSH
```bash
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

Oh My Zsh安装powerlevel10k
```bash
git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```


```bash:title=重配置
p10k configure
```
