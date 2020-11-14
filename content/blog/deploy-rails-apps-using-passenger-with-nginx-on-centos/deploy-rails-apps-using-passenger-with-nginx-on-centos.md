---
title: 'Passenger Nginx部署 RoR应用'
date: '2019-08-04T05:24:12+08:00'
status: publish
permalink: /deploy-rails-apps-using-passenger-with-nginx-on-centos
author: admin
excerpt: ''
type: post
id: 709
category:
    - Nginx
tag:
    - centos
    - 'ruby and rails'
    - server
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
挑战永远不会真正结束，特别是如果您是某个计算机编程领域的新手。在这种情况下，我们的主题是Rails以及如何在线获取基于Ruby On Rails的Web应用程序 – 这是最简单，最快捷的方式。

在使用Ruby编程语言和Rails Web应用程序开发框架解决了谜题以开始使用您的应用程序之后，当需要与世界其他地方共享您的应用程序时，可能会与所有可用选项混淆存在无穷无尽的可能组合。

在这篇文章中，我们将向您展示 – 从开始到结束 – 如何使用最新的CentOS操作系统进行坚如磐石的Rails应用程序部署（即在线发布），该操作系统以其稳定性而闻名。这将与Phusion Passenger应用服务器并行，该服务器以其简单性和出色的功能而闻名，并且与前面运行的Nginx HTTP服务器一起处理和管理连接。

**注意：**在此演练过程中，建议您查看并阅读所提供链接的内容。它们将帮助您提高性能，安全性等。

#### Web应用程序部署，服务器及其角色

在部署Web应用程序或将其置于联机状态时，通常会有多层应用程序用于此目的。当然只有一个人可以完成这项工作，但可能不是很好，因为它们并不适合所有目的。

在本教程中，我们将使用Phusion Passenger作为应用程序服务器。应用程序服务器的工作包括包含现代Web应用程序（例如Ruby Rack，Python WSGI等），并充当传入Web请求的辅助入口点。

另一方面，Nginx是从头开始设计的，用作多用途HTTP服务器。它能够非常好地提供静态文件（例如图像，文本文件等），平衡连接，并处理某些漏洞尝试。它充当所有请求的第一个入口点，并将它们传递给Passenger，以便Web应用程序处理并返回响应。

##### Phusion Passenger应用服务器

今天的乘客已成为Ruby on Rails应用程序*的*推荐服务器。它是一个成熟，功能丰富的产品，旨在满足应用程序部署的必要需求和领域，同时大大简化了设置和入门程序。它通过与Nginx（以及Apache）的直接集成来消除传统的中间人服务器设置架构。它也被称为mod\_rails。

乘客非常受欢迎，并在许多生产场景中广泛使用。您可以轻松地联系并找到专家，并在线解决您的问题。

我们将使用的开源版本具有*多进程* *单线程*操作模式。其企业版可以配置为单线程或多线程。

要了解有关Passenger的更多信息，请访问位于[https://www.phusionpassenger.com/的](https://www.phusionpassenger.com/)官方网站。

##### Nginx HTTP Server作为反向代理运行

Nginx是一个性能非常高的**Web服务器** /（**反向）-proxy**。它因其重量轻，易于使用以及易于扩展（附加/插件）而受到欢迎。由于其架构，它能够处理*大量*请求（几乎无限制），这取决于您的应用程序或网站负载 – 使用其他一些较旧的替代品可能真的很难解决。

**请记住：** “处理”连接在技术上意味着*不要丢弃它们*并且能够用*某些东西*为它们提供服务。您仍然需要您的应用程序和数据库正常运行才能让Nginx为客户端提供非错误消息的*响应*。

由于它的受欢迎程度和成功，我们将部署我们在Nginx背后运行的应用程序，以便从其强大的功能中受益。

要了解有关Nginx的更多信息，您可以访问位于[nginx.com的](http://nginx.com/)官方网站。

#### 准备部署服务器

在本节中，我们将执行以下步骤以获得坚如磐石的服务器，随时为您的应用程序提供服务。

- 更新操作系统
- 获取必要的基本部署工具
- 安装Ruby，Rails和库
- 安装应用程序（即乘客）和HTTP服务器（Nginx）

##### 更新和准备操作系统

为了安装Ruby和其他必要的应用程序（例如我们的服务器），我们需要首先准备最低限度运送的CentOS Droplet，并为它配备一些我们将需要的开发工具。

运行以下命令以更新基于CentOS的Droplet的默认工具：

```
<pre class="wp-block-prismatic-blocks">```bash
yum -y update
yum groupinstall -y 'development tools'
```
```

一些我们需要在本教程（如libyaml-devel的响应，Nginx等）的包都没有官方的CentOS存储库中找到。为了简化操作而不是手动安装它们，我们将为YUM和其他包管理器添加EPEL软件存储库以供使用。

```
<pre class="wp-block-prismatic-blocks">```
# Enable EPEL Repository
sudo su -c 'rpm -Uvh http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm'
# Update everything, once more.
yum -y update
```
```

最后，为了让Passenger与Nginx合作，我们将在下一节中安装，我们需要curl-devel库和纳米文本编辑器。对于Rails，我们也需要sqlite-devel。

要安装curl-devel和nano，请运行以下命令：

```
<pre class="wp-block-prismatic-blocks">```
yum install -y curl-devel nano sqlite-devel libyaml-devel
```
```

##### 设置Ruby环境和Rails

注意：本节是我们专门的文章如何在CentOS 6.5上安装Ruby 2.1.0的摘要。

我们将使用Ruby Version Manager（RVM）下载并安装Ruby解释器（或RVM所引用的“rubies”）。

运行以下两个命令来安装RVM并为Ruby创建系统环境：

```
<pre class="wp-block-prismatic-blocks">```
curl -L get.rvm.io | bash -s stable
source /etc/profile.d/rvm.sh
```
```

最后，要完成在我们的系统上安装Ruby，让我们让RVM下载并安装Ruby版本2.1.0：

```
<pre class="wp-block-prismatic-blocks">```
rvm reload
rvm install 2.1.0
```
```

在Ruby之后，我们可以使用RubyGems包管理器来帮助我们获得其他基于Ruby的工具，例如Rails框架。

由于Rails首先需要一个JavaScript解释器才能工作，我们还需要设置Node.js. 为此，我们将使用默认的系统包管理器YUM。

运行以下命令以使用yum下载并安装nodejs：

```
<pre class="wp-block-prismatic-blocks">```
yum install -y nodejs
```
```

使用RubyGems执行以下命令gem来下载和安装rails：

```
<pre class="wp-block-prismatic-blocks">```
gem install bundler rails
```
```

##### 下载并安装服务器应用程序

注意：如果您的VPS具有少于1 GB的RAM，则需要执行以下简单过程来准备SWAP磁盘空间以用作临时数据持有者（RAM替代）。由于DigitalOcean服务器配有快速SSD磁盘，因此在执行服务器应用程序安装任务时，这并不构成问题。

```
<pre class="wp-block-prismatic-blocks">```
# Create a 1024 MB SWAP space
sudo dd if=/dev/zero of=/swap bs=1M count=1024
sudo mkswap /swap
sudo swapon /swap
```
```

###### Phusion Passenger

Red Hat Linux的默认包管理器RPM（RPM包管理器）包含.rpm文件中包含的应用程序。不幸的是，在Passenger的案例中，它们已经过时了。因此，我们将再次使用RubyGem下载并安装最新版本的Passenger – 版本4。

使用以下命令只需下载并安装passenger

```
<pre class="wp-block-prismatic-blocks">```
gem install passenger
```
```

\# This command will fetch Passenger v4.0(.35+) for you.  
要测试Passenger已正确下载并设置，请尝试运行passenger。

你应该看到类似于下面的输出：

```
<pre class="wp-block-prismatic-blocks">```
Phusion Passenger Standalone, the easiest way to deploy Ruby web apps.
Available commands:
passenger start Start Phusion Passenger Standalone.
```
```

###### Nginx

通常，要下载并安装Nginx，您可以添加EPEL存储库并通过yum获取Nginx。但是，要使Nginx与Passenger一起使用，必须使用必要的模块编译其源代码。不过不用担心！Passenger附带了一个方便的工具，使得该过程像执行单个命令一样简单。

运行以下命令以开始使用本机Passenger模块编译Nginx：

```
<pre class="wp-block-prismatic-blocks">```
passenger-install-nginx-module
```
```

运行命令后，按Enter键确认您选择的语言（即Ruby，在我们的例子中）。如果您愿意，可以使用箭头键和空格键单独选择Ruby。

```
<pre class="wp-block-prismatic-blocks">```
Use <space> to select.
If the menu doesn't display correctly, ensure that your terminal supports UTF-8.
 ‣ ⬢  Ruby
   ⬢  Python
   ⬢  Node.js
   ⬡  Meteor
```
```

在下一步中，选择第1项：

1. Yes: download, compile and install Nginx for me. (recommended)  
  The easiest way to get started. A stock Nginx 1.4.4 with Passenger  
  support, but with no other additional third party modules, will be  
  installed for you to a directory of your choice.

然后按Enter继续。

现在，将使用Passenger支持下载，编译和安装Nginx源代码。  
注意：此操作可能需要一段时间 – 可能比想要或期望的更长！

#### 准备部署应用程序

注意：在本节中，我们将使用一个非常简单的Ruby On Rails应用程序作为示例。对于应用程序的实际部署，您应该上传代码库并确保安装了所有依赖项。

##### 创建示例应用程序/上传源代码

让我们首先在我们的主目录中创建一个非常基本的Rails应用程序，以便与Passenger和Nginx一起使用。

执行以下命令以使Rails 在目录中创建名为my\_app的新应用程序/var/www：

```
<pre class="wp-block-prismatic-blocks">```
# Create a sample Rails application
cd /var
mkdir www
cd www
rails new my_app
# Enter the application directory
cd my_app
# Create a sample resource
rails generate scaffold Task title:string note:text
# Create a sample database
RAILS_ENV=development rake db:migrate
```
```

要测试您的应用程序是否设置正确并且一切正常，请输入app目录并运行一个简单的服务器rails s：

```
<pre class="wp-block-prismatic-blocks">```
# Enter the application directory
cd /var/www/my_app
# Run a simple server
passenger start
# You should now be able to access it by
# visiting: http://[your droplet's IP]:3000/tasks
# In order to terminate the server process,
# Press CTRL+C
```
```

注意：对于实际部署，当您要将代码库上载到服务器时，可以使用SFTP或图形工具\[\]（如FileZilla）来安全地传输和管理远程文件。

要了解如何使用SFTP，请查看文章：如何使用SFTP。  
要了解FileZilla，请查看有关此主题的文章：如何使用FileZilla。

##### 创建Nginx管理脚本

在编译Nginx之后，为了轻松控制它，我们需要创建一个简单的管理脚本。

运行以下命令以创建脚本：

```
<pre class="wp-block-prismatic-blocks">```
nano /etc/rc.d/init.d/nginx
```
```

复制并粘贴以下内容：

```
<pre class="wp-block-prismatic-blocks">```
#!/bin/sh
. /etc/rc.d/init.d/functions
. /etc/sysconfig/network
[ "$NETWORKING" = "no" ] && exit 0
nginx="/opt/nginx/sbin/nginx"
prog=$(basename $nginx)
NGINX_CONF_FILE="/opt/nginx/conf/nginx.conf"
lockfile=/var/lock/subsys/nginx
start() {
    [ -x $nginx ] || exit 5
    [ -f $NGINX_CONF_FILE ] || exit 6
    echo -n $"Starting $prog: "
    daemon $nginx -c $NGINX_CONF_FILE
    retval=$?
    echo
    [ $retval -eq 0 ] && touch $lockfile
    return $retval
}
stop() {
    echo -n $"Stopping $prog: "
    killproc $prog -QUIT
    retval=$?
    echo
    [ $retval -eq 0 ] && rm -f $lockfile
    return $retval
}
restart() {
    configtest || return $?
    stop
    start
}
reload() {
    configtest || return $?
    echo -n $”Reloading $prog: ”
    killproc $nginx -HUP
    RETVAL=$?
    echo
}
force_reload() {
    restart
}
configtest() {
    $nginx -t -c $NGINX_CONF_FILE
}
rh_status() {
    status $prog
}
rh_status_q() {
    rh_status >/dev/null 2>&1
}
case "$1" in
start)
rh_status_q && exit 0
$1
;;
stop)
rh_status_q || exit 0
$1
;;
restart|configtest)
$1
;;
reload)
rh_status_q || exit 7
$1
;;
force-reload)
force_reload
;;
status)
rh_status
;;
condrestart|try-restart)
rh_status_q || exit 0
;;
*)
echo $"Usage: $0 {start|stop|status|restart|condrestart|try-restart|reload|force-reload|configtest}"
exit 2
esac
```
```

按CTRL + X并按Y确认保存并退出。  
将此管理脚本的模式设置为可执行文件：

```
<pre class="wp-block-prismatic-blocks">```
chmod +x /etc/rc.d/init.d/nginx
```
```

##### 配置Nginx

在配置我们的服务器的最后一步中，我们需要创建一个Nginx服务器块，它大致转换为Apache的虚拟主机。

您可能还记得在Passenger的Nginx安装过程中看到，此过程包括向Nginx的配置文件添加一段代码nginx.conf。默认情况下，除非您另有说明，否则可以在此下找到此文件/opt/nginx/conf/nginx.conf。

键入以下命令以打开此配置文件以使用文本编辑器nano对其进行编辑：

```
<pre class="wp-block-prismatic-blocks">```
nano /opt/nginx/conf/nginx.conf
```
```

作为第一步，找到http {节点并在passenger\_root和passenger\_ruby指令后面添加以下内容：

```
<pre class="wp-block-prismatic-blocks">```
# Only for development purposes.
# For production environment, set it accordingly (i.e. production)
# Remove this line when you upload an actual application.
# For * TESTING * purposes only.
passenger_app_env development;
```
```

向下滚动文件并查找server { ..。注释掉默认位置，即：

```
<pre class="wp-block-prismatic-blocks">```
..
#    location / {
#            root   html;
#            index  index.html index.htm;
#        }
..
```
```

并定义您的默认应用程序根：

```
<pre class="wp-block-prismatic-blocks">```
root /var/www/my_app/public;
passenger_enabled on;
```
```

按CTRL + X并按Y确认保存并退出。  
运行以下命令以使用新的应用程序配置重新加载Nginx：

```
<pre class="wp-block-prismatic-blocks">```
/etc/init.d/nginx restart
```
```

要检查Nginx的状态，您可以使用：

```
<pre class="wp-block-prismatic-blocks">```
/etc/init.d/nginx status
```
```

为了测试您的应用程序（以及我们的示例应用程序），您可以访问：

```
<pre class="wp-block-prismatic-blocks">```
http://[Your droplet's IP addr]/tasks
# Listing tasks
# Title Note
# New Task
```
```