---
title: 'Introduce Rails Command Line'
date: '2019-08-10T20:01:43+08:00'
status: publish
permalink: /introduce-rails-command-line
author: admin
excerpt: ''
type: post
id: 768
category:
    - RoR
tag: []
post_format: []
---
如果您使用过Rails应用程序，那么您已经使用了该rails命令。  
在这篇文章中，我们将深入探讨rails命令并找出它的作用。对于这篇文章的目的，占位符文本的形式去rails command \[value\]地方\[value\]代表你要有所建树。  
例如  
如果我们生成一个名为的新rails命令treehouse，  
rails new \[value\]则等于说rails new treehouse。  
有了这个，就可以开始！

<span style="font-family: helvetica;">生成新的应用程序</span>
=====================================================

为了生成<span style="color: #ff6600;">rails</span>应用程序，您通常会使用该<span style="color: #ff6600;">rails new \[app name\]</span>命令。这非常简单，但您是否知道有很多不同的选项可以使用？格式如下：

```
<pre class="EnlighterJSRAW" data-enlighter-language="shell">rails new APP_PATH [options]
```

这将<span style="color: #008000;">APP\_PATH</span>是新应用程序的路径。通常，您会说它是相对于当前目录的。但是，可以指定完整路径，例如：

```
<pre class="EnlighterJSRAW" data-enlighter-language="powershell">rails new /Users/jason/Sites/treehouse
```

随之而来的是大量不同的选择。可以指定不同的<span style="color: #ff6600;">Ruby</span>安装，跳过使用<span style="color: #ff6600;">bundler</span>等等。我们来看看你可能会使用的一些最常见的。

```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">-m 或 --template=TEMPLATE
```

模板选项允许您针对新生成的rails应用程序运行不同的模板.  
该标志以路径作为模板文件的参数.  
您可以在主题的rails指南中阅读有关Rails应用程序模板的更多信息。  
该railsapps项目有一吨的你可以仔细阅读，看看是否有适用于您的应用程序不同的模板。

```
<pre class="EnlighterJSRAW" data-enlighter-language="shell">-d 或 --database
```

此标志允许在创建rails应用程序时设置数据库.  
所选数据库的默认值将写入config/database.yml模板.  
如果未指定参数，则使用的缺省数据库为sqlite3.  
这使数据库本身保留在db目录中.  
虽然开发中通常很好，但sqlite3很少用于生产.

```
<pre class="EnlighterJSRAW" data-enlighter-language="shell">--skip-sprockets
```

如果您对使用<span style="color: #800000;">Rails asset pipeline</span>不感兴趣，则可以在创建新的<span style="color: #800000;">rails</span>应用程序时完全跳过此。  
这可以在构建仅API应用程序或使用grunt或bower来管理<span style="color: #800000;">asset </span>的情况下完成。  
所有命令的运行时选项  
这些将是最常用的一堆。运行rails generate命令时，几乎总是可以使用以下选项来修改命令的作用。  
最常用的有两个：<span style="color: #ff6600;">-f</span>或<span style="color: #ff6600;">–force</span>覆盖文件的选项。  
您可能希望在重新生成model，controller，view等的情况下执行此操作。  
同样，<span style="color: #ff6600;">-p</span>或<span style="color: #ff6600;">–pretend</span>选项将模拟运行命令时即将发生的事情。这在您实际运行命令之前运行很有用，以确保它按预期运行。例如，在生成脚手架时，您可能希望跳过样式表和javascripts的资产创建。

<span style="font-family: verdana, geneva;">Rails Generate</span>
=================================================================

当您运行g不带参数的generate命令（别名为）时，rails将为您提供生成以下任何内容的选项：

- assets
- controller
- generator
- helper
- integration\_test
- jbuilder
- job
- mailer
- migration
- model
- resource
- scaffold
- scaffold\_controller
- task

正如对列表所期待那样，您可以进一步深入了解列表每一项.  
当生成任何上述项目（例如<span style="color: #ff6600;">model</span>）时，可以使用上面的runtime选项。  
可以做以下：

```
<pre class="EnlighterJSRAW" data-enlighter-language="shell">rails generate model account
```

会生成以下文件:

```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">app/models/account.rb
test/models/account_test.rb
test/fixtures/accounts.yml
db/migrate/XXX_create_accounts.rb
```

但是，如果您将上述命令修改为以下，则不会生成文件：

```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">rails generate model account -p
```

在这种情况下，<span style="color: #800000;">rails</span>**只会假装生成文件**而不会实际覆盖任何内容。  
您可以使用<span style="color: #ff6600;">-h</span>或<span style="color: #ff6600;">–help</span>选项在任何这些generator上寻求帮助和选项。

<span style="font-family: verdana, geneva;">Rails Destroy</span>
================================================================

这是一个快速命令.  
使用该<span style="color: #ff6600;">generate</span>命令创建的几乎任何内容都可以使用该<span style="color: #ff6600;">destroy</span>命令销毁.  
例如，要销毁上面创建的帐户模型：

```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">rails destroy model account -p
```

请注意<span style="color: #ff6600;">-p</span>首先假装删除某些内容的标志。以防万一。

<span style="font-family: verdana, geneva;">Rails Console</span>
================================================================

rails控制台允许您在irb加载rails应用程序的情况下启动会话。这意味着您可以访问所有模型，控制器，宝石等。有几个标志使rails控制台非常有用。

```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">--environment
```

该<span style="color: #ff6600;">-e</span>或<span style="color: #ff6600;">–environment</span>选项允许你到不同的轨道环境中加载到控制台.  
这很可能会在数据库选择中生效，您可以在该环境中检出数据.  
例如，在登台计算机上，您可以通过执行以下操作来启动登台控制台：

```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">rails console -e staging
```

<span style="color: #ff6600;">-e</span>也是可以省略

```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">--sandbox
```

<span style="color: #ff6600;">sandbox <span style="color: #000000;">标志</span></span>将在该控制台会话中完成的所有内容放入数据库事务中。  
退出控制台后，事务将回滚。  
因此，您可以在控制台中随意删除整个用户数据库，并在退出时安全地回滚。  
是一个很好的功能,但有风险。  
始终保留备份，但永远不要在生产中执行备份。

<span style="font-family: verdana, geneva;">Rails Server</span>
===============================================================

rails server命令将运行您的应用程序。  
server命令以下列格式运行：

```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">rails server [server] [options]
```

与<span style="color: #ff6600;">generate</span>命令不同，<span style="color: #ff6600;">rails server</span>不允许伪装或强制标志。  
如果使用与webrick不同的服务器，则必须在您Gemfile的rails环境中指定并且可用。例如，如果运行puma服务器，则命令如下：

```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">rails server puma
```

以下选项有效：

- -p Port (指定端口)
- -b Binding (绑定IP地址)
- -c Config file (用于自定义rack配置)
- -d Daemonize server
- -u Enable debugger (启用调试器)
- -e Change the environment (默认为开发环境)
- -P Specify a PID file (指定PID文件)

我们可以结合以上选项。例如，要使用<span style="color: #ff6600;">puma</span>服务器绑定到端口8081上的本地IP，我们将运行以下命令：

```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">rails server puma -p 8081 -b 127.0.0.1
```

<span style="font-family: verdana, geneva;">Rails runner</span>
===============================================================

该<span style="color: #ff6600;">rails runner</span>命令执行以字符串形式传入的<span style="color: #ff6600;">rails</span>代码。不建议在这里放置大量代码。通常，您需要将其保留为一个或两个命令。例如，假设您有一个类，<span style="color: #ff6600;">User</span>该类通过调用类方法调用订阅，该类方法将<span style="color: #ff6600;">report</span>使用的小摘要打印到标准输出。在这种情况下，您可能希望执行以下操作：

```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">rails runner -e production 'User.report'
```

<span style="color: #ff6600;">rails runner</span>也可以指向文件。这将在运行<span style="color: #ff6600;">Ruby</span>文件的内容之前预加载应用程序。在这种情况下，你会给它一个路径：

```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">rails runner -e production /home/deploy/apps/myapp/user_report.rb
```

最后，您可以使用<span style="color: #ff6600;">rails runner</span>作为<span style="color: #ff6600;">\#!</span>行来运行可执行文件。

<span style="font-family: arial, helvetica, sans-serif;">还有更多</span>
--------------------------------------------------------------------

还有一个命令超出了本文的范围，这就是<span style="color: #ff6600;">plugin</span>命令。这将在<span style="color: #ff6600;">rails</span>应用程序的自己的目录中生成一个新插件。插件可用于增强应用程序的行为，并可相对轻松地重用。  
这涵盖了<span style="color: #ff6600;">rails</span>命令的所有选项。下一部分包含具有不同命令的表的列表，快捷方式和快速描述。  
可以通过键入来获得任何这些<span style="color: #ff6600;">rails help \[command\]</span>

<span style="font-family: helvetica;"><span style="font-family: verdana, geneva;">Rails</span> 命令表格</span>
==========================================================================================================

<span style="font-family: verdana, geneva;">RAILS NEW COMMANDS</span>
---------------------------------------------------------------------

<table style="height: 705px; table-layout: fixed;"><tbody><tr><td>OPTION (SHORT)</td><td>OPTION (LONG)</td><td>DESCRIPTION</td></tr><tr><td>-r</td><td>–ruby=\[PATH\] Path to Ruby binary</td><td>Ruby二进制文件的路径。这默认为当前的Ruby</td></tr><tr><td>-m</td><td>–template=TEMPLATE</td><td>某些应用程序模板的路径（可以是文件系统路径或URL）</td></tr><tr><td></td><td>–skip-gemfile,  
–no-skip-gemfile</td><td>是或不创建Gemfile</td></tr><tr><td>-B</td><td>–skip-bundle,  
–no-skip-bundle</td><td>是或不运行bundle安装</td></tr><tr><td>-G</td><td>–skip-git,  
–no-skip-git</td><td>跳过创建.gitignore文件</td></tr><tr><td></td><td>–skip-keeps,  
–no-skip-keeps</td><td>跳过源代码控制.keep文件</td></tr><tr><td>-O</td><td>–skip-active-record,  
–no-skip-active-record</td><td>跳过active record文件</td></tr><tr><td>-S</td><td>–skip-sprockets,  
–no-skip-sprockets</td><td>Skip Sprockets文件</td></tr><tr><td></td><td>–skip-spring,  
–no-skip-spring</td><td>不安装Spring预加载器</td></tr><tr><td>-d</td><td>–database=DATABASE</td><td>所选数据库的预配置  
选项：mysql，oracle，postgresql，sqlite3，frontbase，ibm\_db，sqlserver，jdbcmysql，jdbcsqlite3，jdbcpostgresql，jdbc.)  
默认为sqlite3</td></tr><tr><td>-j</td><td><span style="font-size: 10pt;">–javascript=JAVASCRIPT</span></td><td>预配置选定的JavaScript库  
默认值：jquery</td></tr><tr><td>-J</td><td>–skip-javascript,  
–no-skip-javascript</td><td>跳过JavaScript文件</td></tr><tr><td></td><td>–dev,  
–no-dev</td><td>用Gemfile设置应用程序,并指向Rails的检出(checkout)</td></tr><tr><td></td><td>–edge,  
–no-edge</td><td>用Gemfile设置应用程序,并指向Rails的仓库(repo)</td></tr><tr><td></td><td>–skip-turbolinks,  
–no-skip-turbolinks</td><td>跳过turbolinks gem</td></tr><tr><td>-T</td><td>–skip-test-unit,  
–no-skip-test-unit</td><td>跳过Test::Unit文件</td></tr><tr><td></td><td>–rc=RC</td><td>rails 命令包含额外配置选项的文件路径</td></tr><tr><td></td><td>–no-rc, –no-no-rc</td><td>跳过从.railsrc文件中加载额外配置</td></tr></tbody></table>

<span style="font-family: helvetica;"><span style="font-family: verdana, geneva;">RAILS COMMANDS</span> 选项</span>
-----------------------------------------------------------------------------------------------------------------

<table><tbody><tr><td>简写</td><td>命令</td><td>描述</td></tr><tr><td>g</td><td>generate</td><td>生成新代码  
(model, controller,view,test等)</td></tr><tr><td>c</td><td>console \[ENV\]</td><td>启动控制台</td></tr><tr><td>s</td><td>server</td><td>启动服务器</td></tr></tbody></table>

<span style="font-family: helvetica;"><span style="font-family: verdana, geneva;">RAILS CONSOLE</span> 选项</span>
----------------------------------------------------------------------------------------------------------------

<table><tbody><tr><td>标志</td><td>描述</td></tr><tr><td>-s</td><td>退出时, 对沙箱和回滚数据库修改</td></tr><tr><td>-e</td><td>指定环境</td></tr><tr><td>–debugger</td><td>开启调试</td></tr></tbody></table>

RUNTIME 选项

<table style="table-layout: fixed;"><tbody><tr><td>短标志</td><td>长标志</td><td>描述</td></tr><tr><td>-f</td><td>–force</td><td>强制覆盖已存在的文件</td></tr><tr><td>-p</td><td>–pretend,  
–no-pretend</td><td>运行,但不做任何修改</td></tr><tr><td>-q</td><td>-quiet,  
–no-quiet</td><td>阻止输出状态</td></tr><tr><td>-s</td><td>–skip,  
–no-skip</td><td>跳过已存在的文件</td></tr></tbody></table>

<span style="font-family: verdana, geneva;">RAILS SERVER</span> <span style="font-family: helvetica;">选项</span>
---------------------------------------------------------------------------------------------------------------

<table><tbody><tr><td>短标志</td><td>长标志</td><td>描述</td></tr><tr><td>-p</td><td>–port</td><td>在指定端口上运行服务器</td></tr><tr><td>-b</td><td>–binding</td><td>将Rails绑定到指定的IP  
默认值：localhost</td></tr><tr><td>-c</td><td>–config=file</td><td>用户自定义rack配置</td></tr><tr><td>-d</td><td>–daemon</td><td>将服务器作为守护程序运行</td></tr><tr><td>-u</td><td>–debugger</td><td>启用调试器</td></tr><tr><td>-e</td><td>–environment=name</td><td>指定运行服务器的环境  
默认值：开发</td></tr><tr><td>-P</td><td>–pid=pid</td><td>指定的PID文件  
默认值：tmp / pids / server.pid</td></tr></tbody></table>

<span style="font-family: verdana, geneva;">RAILS RUNNER </span><span style="font-family: helvetica;">选项</span>
---------------------------------------------------------------------------------------------------------------

用法: RAILS RUNNER \[OPTIONS\] \[&lt;‘SOME.RUBY(CODE)’&gt; | \]

<table style="table-layout: fixed;"><tbody><tr><td>-e</td><td>–environment=name</td><td>指定运行器在（测试/开发/生产）下运行的环境。默认值：开发</td></tr><tr><td>-h</td><td>–help</td><td>显示帮助信息。</td></tr></tbody></table>