---
title: 'Install spree on CentOS 7'
date: '2019-08-03T01:20:50+08:00'
status: publish
permalink: /install-spree-on-centos-7
author: admin
excerpt: ''
type: post
id: 633
category:
    - RoR
tag: []
post_format: []
---
在开始本教程之前，请确保在系统上安装了Ruby和RubyGems。这非常简单，但根据您使用的操作系统而有所不同。  
通过本教程，您将创建一个名为的简单Spree项目mystore。在开始构建应用程序之前，您需要确保已安装Rails本身。  
要运行Spree 3.7，您需要最新的Rails版本5.2.2。  
安装Rails  
在大多数情况下，安装Rails的最简单方法是利用RubyGems：

> gem install rails -v 5.2.2

安装Bundler  
Bundler是维护Ruby gem依赖关系的当前标准。在尝试安装Spree之前，建议您具备Bundler的相关工作知识以及如何在Rails中使用它。您可以使用以下命令安装Bundler：

> gem install bundler

安装Image Magick  
Spree还使用ImageMagick库来处理图像。使用此库可以自动调整产品图像的大小并创建产品图像缩略图。ImageMagick不是Rubygem，安装起来可能有点棘手。但是，Web上有几个很好的信息来源，可以安装它。如果您遇到困难，基本的Google搜索应该可以帮到您。  
如果您使用的是macOS，推荐的方法是使用Homebrew安装ImageMagick 。这可以使用以下命令完成：

> brew install imagemagick

如果您使用的是Unix或Windows，请查看Imagemagick.org以获取有关如何为特定系统设置ImageMagick的更多详细说明。  
创建一个新的狂欢项目  
Spree作为Rubygem的分发允许它在新的Rails项目中使用或添加到现有的Rails项目中。本指南假设您正在创建一个全新的商店，并将引导您完成整个过程，从创建新的Rails应用程序开始。  
创建Rails应用程序  
让我们首先使用以下命令创建标准Rails应用程序：

> rails \_5.2.2\_ new mystore

将Spree添加到您的Rails应用程序中  
现在我们有一个基本的Rails应用程序，我们可以添加Spree。这种方法也适用于已存在很长时间的现有Rails应用程序（假设它们使用正确版本的Rails。）  
创建商店应用程序后，切换到其文件夹以继续直接在该应用程序中工作：

> cd mystore

将狂欢宝石添加到您的Gemfile：

> gem ‘spree’, ‘~&gt; 3.7’  
> gem ‘spree\_auth\_devise’, ‘~&gt; 3.5’  
> gem ‘spree\_gateway’, ‘~&gt; 3.4’

跑 bundle install  
使用安装生成器设置Spree：

> rails g spree:install –user\_class=Spree::User  
> rails g spree:auth:install  
> rails g spree\_gateway:install

你好，狂欢！  
现在只运行几个命令后，您就拥有了一个功能强大的Spree应用程序！要查看它，您需要在开发计算机上启动Web服务器。你可以通过运行另一个命令来完成这个：

> bundle exec rails server

要查看应用程序的运行情况，请打开浏览器窗口并导航到http：// localhost：3000。您应该看到Spree默认主页：  
要停止Web服务器，请在正在运行的终端窗口中按Ctrl-C。在开发模式下，Spree通常不要求您停止服务器; 您在文件中所做的更改将由服务器自动获取。  
登录管理面板  
您可能要做的下一件事是登录管理界面。使用浏览器窗口导航到 http：// localhost：3000 / admin。您可以使用用户名spree@example.com和密码登录spree123。  
如果您–auto-accept在将Spree添加到Rails应用程序时选择不使用该选项，并且未安装种子数据，则管理员用户将不会存在于您的数据库中。您可以运行简单的rake任务来创建新的管理员用户。

> bundle exec rake spree\_auth:admin:create

验证成功后，您应该看到管理员屏幕：