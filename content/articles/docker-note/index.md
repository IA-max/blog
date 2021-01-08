---
title:  Docker 笔记
date: '2020-03-01T04:31:21+08:00'
status: publish
permalink: /dockerNote
category: ["devops"] 
tag: ["DevOps","note"]
author: "max"
excerpt: "Docker 笔记 常用命令"
featured: false
image: " "
featuredimage:
  src: "cover.png"
  alt: "Docker"
---
## 常用命令

##### 查看版本

```bash
docker --version 
docker-compose --version
notary version
```

#####  检查Docker的安装是否正确

```
docker --info
```

##### 容器生命周期管理
```
run
start/stop/restart
kill
rm
pause/unpause
create
exec
```

##### 容器操作
```
ps
inspect
top
attach
events
logs
wait
export
port
```

##### 容器rootfs命令
```
commit
cp
diff
```

##### 镜像仓库
```
login
pull
push
search
```

##### 本地镜像管理
```
images
rmi
tag
build
history
save
load
import
```

##### info|version
```
info
version
```















