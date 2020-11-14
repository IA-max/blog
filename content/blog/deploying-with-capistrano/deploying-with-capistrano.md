---
title: '部署 &#8211; Capistrano'
date: '2019-08-04T03:22:58+08:00'
status: publish
permalink: /deploying-with-capistrano
author: admin
excerpt: ''
type: post
id: 704
category:
    - Linux
tag:
    - Capistrano
    - server
post_format: []
---
[Capistrano](http://www.capistranorb.com/)是一个Ruby程序，它为您提供了一组用于将Web应用程序部署到服务器的高级工具。最简单的形式是，Capistrano允许您通过<abbr title="安全壳">SSH</abbr>将源代码控制存储库（<abbr title="颠覆">SVN</abbr>或Git）中的代码复制到服务器，并执行部署前和部署后的功能，如重新启动Web服务器，破坏缓存，重命名文件，运行数据库迁移和等等。使用Capistrano，它也可以同时部署到许多机器上。<abbr title="安全壳"></abbr>  
Capistrano提供了许多高级选项，本指南不涉及这些选项，可用于部署多种应用程序。出于学习目的，我们将指导您完成设置从<abbr title="颠覆">SVN</abbr>或Git存储库将Rails应用程序部署到单个服务器的简单配方的步骤。我们将介绍允许您部署多个环境的通用工作流：在本例中，分段和生产。  
要安装Capistrano，您需要在计算机上安装Ruby和RubyGems。  
然后，从终端或命令行运行以下命令：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">gem install capistrano
```

对于本指南，我们建议使用方便的capistrano-ext gem，其中包含一组额外的工具，使您的部署更加轻松：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">gem install capistrano-ext
```

如果您遇到问题或需要更详细的文档，您可能需要参考官方的Capistrano 入门指南，或者了解有关使Capistrano工作的各种组件的更多信息。  
**服务器依赖项**  
确保您的服务器是POSIX兼容并具有SSH访问权限非常重要。不要忘记设置SSH密钥（Mac或Windows）。如果您无法通过SSH连接到您的服务器，Capistrano将不适合您。  
**为Capistrano准备项目**  
导航到终端中应用程序的根目录并运行以下命令：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">capify .
```

此命令创建Capfile在项目中调用的特殊文件，并config/deploy.rb在Rails项目中添加模板部署配方。将Capfile有助于Capistrano的加载你的食谱和库正常，但你并不需要编辑它现在。  
而是deploy.rb在您喜欢的文本编辑器中打开该文件。这个文件是所有魔法发生的地方！您可以从删除模板文件中的所有内容开始，因为本指南将帮助您使用正确的代码填充它以获得成功的部署配方。

##### 使用Capistrano

如何创建Capistrano方法  
在您现在为空的deploy.rb文件中，让我们在第一行输入您的应用程序的名称。如果您的应用程序名称是“fancy shoes”，您可以键入：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">set :application, "fancy_shoes"
```

现在让我们添加一个存储库来访问。Git用户可以添加：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">set :scm, :git<br>set :repository,"git@account.git.beanstalkapp.com:/account/repository.git"<br>set :scm_passphrase, ""
```

Subversion用户可以使用这个：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">set :scm, :subversion<br>set :repository, "https://account.svn.beanstalkapp.com/repository"
```

另外，让我们在我们的服务器上设置用户，我们希望Capistrano运行命令：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">set :user, "server-user-name"
```

确保此用户具有您在deploy\_to变量中指定的目录的读写权限。  
在进一步操作之前，请尝试从终端手动连接到该存储库（尝试使用svn co或git clone），以确保您可以正确进行身份验证。如果您无法连接到存储库，Capistrano也无法连接。  
接下来，我们将向您的配方添加有关您的服务器的信息。我们将使用Capistrano Multistage功能（它附带我们之前安装的gem capistrano-ext）。这允许您设置一个配方以将代码部署到多个位置。在此示例中，我们将部署到登台和生产环境。  
首先在deploy.rb文件顶部包含多级：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">require 'capistrano/ext/multistage'
```

然后指定您的环境或“阶段”：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">set :stages, ["staging", "production"]
set :default_stage, "staging"
```

由于您可能会比生产更频繁地部署到分段，我们发现将分段设置为默认阶段会很有帮助。接下来，创建一个名为deploy您的应用程序的内部config目录，然后添加production.rb和staging.rb文件给它。您需要为每个阶段配置一个Ruby文件，并且需要将它们命名为相同，以便Capistrano可以在指定要部署的阶段时加载相应的文件。  
现在让我们填充我们的production.rb设置：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">server "my_fancy_server.com", :app, :web, :db, :primary => true
set :deploy_to, "/var/www/fancy_shoes"
```

然后staging.rb：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">server "my_fancy_server.com", :app, :web, :db, :primary => true
set :deploy_to, "/var/www/fancy_shoes_staging"
```

在此示例中，我们只为一个服务器分配了所有三个角色（app，web和db）。生产和登台之间的区别在于不同的deploy\_to目录变量。实际上，您可能也想使用不同的服务器。  
验证您的食谱  
一切都准备好第一次尝试我们的配方，让Capistrano在您的服务器上创建初始目录结构，以便将来部署。从应用程序的根目录运行以下命令：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">cap deploy:setup
```

运行此命令时，Capistrano将SSH连接到您的服务器，输入您在deploy\_to变量中指定的目录，并创建Capistrano正常工作所需的特殊目录结构。如果权限或SSH访问出现问题，您将收到错误消息。仔细查看Capistrano在命令运行时给出的输出。  
我们可以使用Capistrano进行实际部署之前的最后一步是确保通过setup命令在服务器上正确设置了所有内容。有一个简单的方法可以使用以下命令进行验证：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">cap deploy:check
```

此命令将检查您的本地环境和服务器并找出可能的问题。如果您看到任何错误消息，请修复它们并再次运行该命令。一旦运行cap deploy:check没有错误，您可以继续！  
使用新配方进行部署  
验证本地和服务器配置后，运行以下命令：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">cap deploy
```

这将执行到默认阶段的部署，即默认阶段。如果要部署到生产环境，则运行以下命令：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">cap production deploy
```

执行这些命令时，您会看到很多输出。Capistrano打印它在服务器上运行的所有命令及其输出，使您可以调试任何问题。  
提示与技巧  
使用远程缓存提高性能  
Capistrano的工作方式，它将在每次部署时创建一个新的克隆/导出存储库。这可能很慢，因此可以选择在我们的deploy.rb配方中添加一些额外的命令来加快速度。将以下内容添加到deploy.rb描述scm设置的部分：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">set :deploy_via, :remote_cache
```

此命令使Capistrano第一次在您的服务器上执行单个克隆/检出您的存储库，然后执行svn up或git pull每次部署而不是执行整个克隆/导出。如果经常部署，您会发现这会显着加快部署速度。  
添加自定义部署挂钩  
Capistrano通过做比仅通过SSH复制文件更复杂的事情而发光。您可以配置在复制文件完成后运行的事件和命令，例如重新启动Web服务器或运行自定义脚本。Capistrano称这些“任务”。例如，将以下代码添加到您的deploy.rb文件中：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">namespace :deploy do
  task :restart, :roles => :web do
    run "touch #{ current_path }/tmp/restart.txt"
  end
  task :restart_daemons, :roles => :app do
    sudo "monit restart all -g daemons"
  end
end
```

Capistrano中的任务非常强大，我们只是在本指南中表面上看到了。您可以创建任务以在部署之前，之后或单独执行服务器上的操作。这可以是任何类型的维护：重新启动进程，清理文件，发送电子邮件通知，运行数据库迁移，执行脚本等。  
我们的示例包括两个自定义任务 “重启”任务内置于Capistrano中，并在部署完成后由Capistrano自动执行。我们使用touch tmp/restart.txt由Passenger提供支持的现代Rails应用程序常用的技术，但您的Web服务器可能需要不同的命令。  
我们的第二个示例任务是“restart\_daemons”，这是Capistrano默认不运行的自定义任务。我们需要为它添加一个钩子才能运行它：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">after "deploy", "deploy:restart_daemons"
```

此命令告诉Capistrano在所有部署操作完成后执行我们的任务。其他钩子是可用的，包括在复制文件之前运行任务的“之前”。  
您可以在官方的Capistrano文档中阅读有关挂钩之前和之后的更多信息：  
在任务之前  
完成任务后  
将Git分支与环境相关联  
由于我们有两个服务器环境（登台和生产），您很可能希望将Git中的分支绑定到这些环境，以便您可以将登台分支部署到登台环境，并将主分支部署到生产环境。只需将以下行添加到您的production.rb：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">set :branch, 'production'
```

以下行staging.rb：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">set :branch, 'staging'
```

现在每次运行cap deployCapistrano都会从您的暂存分支部署代码（因为暂存是我们的默认环境）。如果您运行cap production deployCapistrano将从您的主分支部署代码。十分简单！