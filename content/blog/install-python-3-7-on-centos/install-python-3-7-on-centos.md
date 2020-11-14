---
title: 安装Python
date: '2019-08-27T00:27:02+08:00'
status: publish
permalink: /install-python-3-7-on-centos
author: admin
excerpt: ''
type: post
id: 802
category:
    - Python
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
我们将向您展示如何在CentOS 7上安装Python 3.6.4.Python是许多流行网站和程序的核心 – 例如YouTube，Instagram，甚至是CentOS上的Yum，仅举几例。它们都依赖Python的可靠性和性能来一次完成许多任务。Python是一种通用的面向对象编程语言，旨在用作几乎所有类型问题的软件解决方案。但是，CentOS 7上预装的Python版本是一个更老的版本。为了拥有最新版本的Python，用户必须手动安装它。

在CentOS 7上安装python 3.6.4在本教程中，我们将向您展示在CentOS 7计算机上安装Python 3.6.4版的两种方法。有两种方法的原因是Python 3.6.4在内置的Yum存储库中不是默认的。因此，我们可以从源代码在我们的机器上编译Python，或者添加一个存储库，该存储库具有用于CentOS 7的预编译版本的Python。

#### 在CentOS 7上从存储库安装Python 3.6.4

这是在您的计算机上安装Python的两种更简单的方法。在这里，我们只需添加一个存储库，其中包含可供我们安装的预编译版本。在这种情况下，我们将添加Inline with Upstream Stable存储库，这是一个社区项目，其目标是将新版本的软件引入基于RHEL的系统。

1. 打开终端并将存储库添加到Yum安装中

```
<pre class="wp-block-prismatic-blocks">```bash
sudo yum install -y https://centos7.iuscommunity.org/ius-release.rpm
```
```

2. 更新Yum以完成添加存储库

```
<pre class="wp-block-prismatic-blocks">```
sudo yum update
```
```

3. 下载并安装Python

这不仅会安装Python – 而且还会安装pip来帮助您安装附加组件。

```
<pre class="wp-block-prismatic-blocks">```
sudo yum install -y python36u python36u-libs python36u-devel python36u-pip
```
```

执行这些命令后，只需执行以下命令检查是否已安装正确版本的Python：

```
<pre class="wp-block-prismatic-blocks">```
python3.6 -V
```
```

您现在已经在CentOS 7计算机上完成了Python 3.6.4的安装，并安装了一个名为pip的本机Python包管理工具。