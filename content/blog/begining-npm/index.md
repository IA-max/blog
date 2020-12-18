---
title: NPM常用命令与配置
date: '2019-09-10T07:35:01+08:00'
status: publish
category: ["node"] 
tag: [""]
author: "max"
excerpt: ""
featured: false
image: 
featuredimage:
  src: "none.png"
  alt: ""
---
 可以使用定制的 [cnpm](https://github.com/cnpm/cnpm) (gzip 压缩支持) 命令行工具代替默认的 npm

```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

 或通过添加 npm 参数 alias 一个新命令

```bash
alias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/dist \
--userconfig=$HOME/.cnpmrc"
```

Or alias it in .bashrc or .zshrc

```bash
$ echo '\n#alias for cnpm\nalias cnpm="npm --registry=https://registry.npm.taobao.org \
  --cache=$HOME/.npm/.cache/cnpm \
  --disturl=https://npm.taobao.org/dist \
  --userconfig=$HOME/.cnpmrc"' >> ~/.zshrc && source ~/.zshrc
```

##### 同步 `npm`

```bash
$ cnpm sync [moduleName]
```

##### 升级 `npm`

npm install -g npm

```bash
npm install xxx //安装模块
npm install xxx@1.1.1 //安装1.1.1版本的xxx
npm install xxx -g //将模块安装到全局环境中。
```

##### 更新node版本

```bash
# 先清除npm缓存
npm cache clean -f
# 然后安装n模块
npm install -g n
# 升级node.js到最新稳定版
n stable
# 在Mac升级出现错误, 在命令前面加 sudo
sudo n stable         
```

#### 查看安装的模块及依赖

```bash
npm ls -g //查看全局安装的模块及依赖
npm uninstall xxx (-g) //卸载模块
npm cache clean //清理缓存
npm help xxx //查看帮助
npm view moudlename dependencies //查看包的依赖关系
npm view modulenames //查看node模块的package.json文件夹
npm view modulename labelname //查看package.json文件夹下某个标签的内容
npm view modulename repository.url //查看包的源文件地址
npm view modulename engines //查看包所依赖的node的版本
npm help folders //查看npm使用的所有文件夹
npm rebuild modulename //用于更改包内容后进行重建
npm outdated //检查包是否已经过时，此命令会列出所有已经过时的包，可以及时进行包的更新
npm update modulename //更新node模块
```

npm 安装参数中的 –save-dev

当你为你的模块安装一个依赖模块时，正常情况下你得先安装他们（在模块根目录下npm install module-name），然后连同版本号手动将他们添加到模块配置文件package.json中的依赖里（dependencies）。

`-save和save-dev`可以省掉你手动修改package.json文件的步骤。  
`npm install module-name -save`自动把模块和版本号添加到dependencies部分  
`npm install module-name -save-dve` 自动把模块和版本号添加到devdependencies部分

至于配置文件区分这俩部分， 是用于区别开发依赖模块和产品依赖模块， 以我见过的情况来看 devDepandencies主要是配置测试框架， 例如jshint、mocha。

#### 更新package.json 依赖

##### 安装

```bash
npm install -g npm-check-updates
```

##### 检查最新版本

```bash
ncu
```

##### 更新到新版本

```bash
ncu -u 
```

##### 更新全部到最新版本

```bash
ncu -a
```
