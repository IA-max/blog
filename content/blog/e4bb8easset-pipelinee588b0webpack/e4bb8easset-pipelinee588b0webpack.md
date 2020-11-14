---
title: '从Asset Pipeline到Webpack'
date: '2019-08-30T02:42:48+08:00'
status: publish
permalink: /%e4%bb%8easset-pipeline%e5%88%b0webpack
author: admin
excerpt: ''
type: post
id: 815
category:
    - RoR
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
2011年5月，DHH在Railsconf上宣布了一个新的Rails框架，即资产管道。此外，宣布SCSS和CoffeeScript以及jQuery将成为默认但总体而言，认识到Web开发已经改变，并且是时候为这种代码分配一个合适的位置并成为一流的公民每个Rails应用程序。

<figure class="mr ms mt mu mv fq x y paragraph-image"><div class="kt ku bo kv ab"><div class="x y mq"><div class="kz l bo la"><div class="mw l"><div class="bn kw hc n o hb ab bh kx ky"></div>![](https://blog.imaxyoung.com/wp-content/uploads/2019/08/0_V1hWYq2eH6fRd7cS.png)

</div></div></div></div></figure>这是向前迈出的一步，但人们抱怨将SCSS和CoffeeScript作为默认值包含在内。该计划向前推进，并于2011年8月31日[发布3.1版本](http://guides.rubyonrails.org/3_1_release_notes.html)。

在Rails世界中，前端开发主要是HTML / CSS和jQuery插件，其中很多，以及使用[Backbone.js](http://backbonejs.org/)完成更复杂的UI

管理，无效和提供资产是一项艰巨的任务，[资产管道](http://guides.rubyonrails.org/asset_pipeline.html)承诺让它变得简单。

前端开发最终继续向前发展，Backbone.js死了，对于许多应用程序来说，jQuery已经不够用了。

[Node.js](https://nodejs.org/en/)和[NPM](https://www.npmjs.com/)影响了前端的完成方式。单页应用程序变成了一件事，这在Rails世界中产生了直接影响，只是下载一个Javascript文件，将它放在供应商文件夹中，并期望它能够工作，这不再容易。

作为资产管道的核心，[链轮](https://github.com/rails/sprockets)试图跟上，但不知怎的，它不足。在一些客户项目中，我有机会研究包括Gulp，Grunt和Bower在内的解决方案，这些解决方案试图填补Sprockets失败的地方; 这不是快乐。

最后，为了解决这种情况，2017年4月27日发布了[Rails 5.1](https://sipsandbits.com/2017/03/09/whats-new-in-rails-51/)，其中包括Yarn管理Javascript依赖项和支持[Webpack](https://webpack.js.org/)的敏感默认值以及通过[Webpacker](https://github.com/rails/webpacker)集成到Rails本身。

Rails提供了一个开发人员熟悉的工具，它可以在其他技术的基础上使用前端，但为了保持兼容性，Asset Pipeline没有被删除，实际上，您可以无缝地使用Webpacker和Asset Pipeline。在Asset Pipeline被弃用之前可能需要更多版本，但是可能是尝试Webpack的好时机。

从Webpack开始。
===========

如果您正在创建一个新的Rails应用程序，从Webpack开始很容易。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="9c0e">$ rails new sample_app --webpack</span>
```

此命令设置Rails以使用Webpack。如果您需要设置React，Angular，Elm或Vuejs之类的东西，那么您可以在创建应用程序时指定它。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="d2fd">$ rails new sample_app --webpack = react</span>
```

如果要禁用资产管道，请运行带有以下标志的命令。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="2b40">$ rails new sample_app --webpack --skip-sprockets</span>
```

该`--webpack`标志将安装Webpacker gem，但也将为Webpack添加配置，这是一个尽快进入编码的起点。Webpack配置存在于该`/config`文件夹中。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="1c8e">配置/ webpacker.yml
配置/的WebPack
├──development.js
├──environment.js
├──production.js
└──test.js</span>
```

Webpack的资产存在`/app/javascript/packs`。所有内容都以数据包形式组织，类似于使用Asset Pipeline具有不同的清单集，但在这种情况下，包中包含Javascript，CSS，图像以及要发送到客户端的任何其他资产。

默认包是application.js，它是Webpack资源的入口点，此文件是您需要Javascripts，Stylesheets，Images和其他所有内容的地方。对于它，我通常会为每种资源创建一个包含子文件夹的应用程序文件夹。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="a30a">应用程序/ JavaScript的
├──应用
│├──图像
│├──Javascript角
│└──样式表
└──包</span>
```

要在HTML中使用包，Webpacker提供了几个方便的帮助程序。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="5423"><％= javascript_pack_tag“application”％>
<％= stylesheet_pack_tag“application”％></span>
```

在开发模式下运行Rails服务器并访问页面将启动Webpack进程以编译所需的包，从而延迟服务器的响应。以这种方式编译资产很简单但很慢。更快的方法是运行单独的Webpack进程，这可以通过执行Webpack服务器来完成，如下所示。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="a701">$ WEBPACKER_DEV_SERVER_HOST = 0.0.0.0 ./bin/webpack-dev-server</span>
```

以这种方式运行Webpack可以快速编译，如果资产被修改，它也会自动重新加载当前页面。请注意，如果您正在运行Rails 5.2，则需要`config/initializers/content_security_policy.rb`在策略块内添加以下行。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="2cf3">policy.connect_src：self，：https，'http：// localhost：3035'，'ws：// localhost：3035'如果是Rails.env.development？</span>
```

从Asset Pipeline迁移到Webpack
=========================

上一节中描述的所有内容都适用于新的Rails应用程序，但现有的应用程序呢？这同样适用，但您需要手动安装Webpack。

在继续之前，我想明确指出，如果您的Javascript不遵循[Node.js模块](https://nodejs.org/api/modules.html) [模式，](https://darrenderidder.github.io/talks/ModulePatterns/#/)您将需要弄清楚如何更改代码以使其对Webpack友好。

首先，将Webpacker gem添加到Gemfile并运行Bundler。现在使用以下命令行安装它。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="94e2">$ bin / rails g webpacker：install</span>
```

这将按照前面的描述设置Webpack，它还将添加应用程序包。现在安装[rails-erb-loader](https://github.com/usabilityhub/rails-erb-loader)，将一些Ruby洒入Javascript文件会变得非常方便。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="15fd">$ rails webpacker：install：erb</span>
```

安装erb加载程序后，将文件重命名`app/javascript/packs/application.js`为`app/javascript/packs/application.js.erb`

如果在浏览器中加载应用程序，即使打包文件为空，Webpack也会失败。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="2633">./app/javascript/packs/application.js.erb中的错误
模块构建失败：错误：rails-erb-loader失败，代码：1</span>
```

问题是你的application.js.erb现在理解Ruby了，但文件中的注释包括这样的东西。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="916c">//要引用此文件，请将<％= javascript_pack_tag'应用程序'％>添加到相应的
//布局文件中，例如app / views / layouts / application.html.erb</span>
```

只需`%`在声明的开头添加另一个即可

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="fd13"><%% = javascript_pack_tag'应用'％></span>
```

此迁移的下一步是将所有Javascript文件`app/assets/javascripts`移至`app/javascript/application/javascripts`。将新复制的名称重命名`application.js`为`index.js.erb`。

此外，将样式表和图像移动到其文件夹中`app/javascript/application`。`index.js.erb`在每个文件夹中添加一个空。

对于图像打开新添加`index.js.erb`并导入那里的所有图像。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="6756">import'image1.png';
import'image2.png';
...
import'imageN.png';</span>
```

您可以逐个添加文件或利用Ruby并执行类似的操作。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="7c60"><％images_glob = Rails.application.root.join（'app'，'javascript'，'application'，'images'，'**'，'*。{png，svg}'）％>
<％Dir.glob （images_glob）.each do | image | ％>
  import'<％= image％>';
<％end％></span>
```

这很容易，现在查看您的Rails视图并更新您的代码，以便在您引用图像的任何地方使用asset\_pack\_path帮助程序。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="af9e"><％= image_tag asset_pack_path（“application / images / image1.png”）％></span>
```

请注意，在这种情况下，需要图像的完整路径`application/images`。

同样在Stylesheets文件中，请确保`image_url`仅更换帮助器`url`并更新图像引用以获得完整路径。

现在是时候使用你的Stylesheets了。如果您有application.css，则可能需要使用带有Sprocket注释语法的样式表，将其从application.css中删除并`index.js.erb`在Stylesheets文件夹中打开。

在索引文件中，您可以逐个导入每个样式表文件。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="6b68">import'application.css';
import'layline.css';
...
import'tonters.css';</span>
```

或者您可以使用Ruby，就像我们为图像所做的那样，并导入所有可用文件。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="3066"><％css_glob = Rails.application.root.join（'app'，'javascript'，'application'，'stylesheets'，'**'，'*。{css}'）％>
<％Dir.glob（css_glob ）.each do | file | ％>
  import'<％= file％>';
<％end％></span>
```

此外，如果您有任何提供Stylesheets的gem，您可以按照以下方式导入它们。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="9f76">import“<％= File.join（Gem.loaded_specs ['mygem']。full_gem_path，'app'，'assets'，'stylesheets'，'myfile.css'）％>”;</span>
```

当您需要从gem导入多个文件时，然后创建一个包含每个文件名称的数组，并迭代它以进行导入。

如果您使用的是SCSS，那么您的应用程序文件可能会被称为application.scss，在这种情况下，将使用SCSS语法进行导入，这是正常的。只需将您的application.scss导入index.js.erb就可以了。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="26b2">import'application.scss';</span>
```

如果您通过gem使用CSS / SCSS框架，最好删除gem并通过NPM与Yarn一起安装它。以下示例安装[Bulma](https://bulma.io/)。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="0e5d">$ bin / yarn添加bulma</span>
```

然后加入`@import '~bulma/bulma';`你的`application.scss`。

最后一步是迁移您的Javascript资产。更新您的`index.js.erb`文件以使用require注释导入最初为Sp​​rockets声明的所有依赖项，现在依赖项将由Yarn解决。

例如，这里我们添加了常见的Javascript依赖项。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="56ff">$ bin / yarn add jquery turbolinks rails-ujs activestorage</span>
```

现在在`index.js.erb`导入的顶部，如下所示。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="a019">从'rails-ujs'导入Rails;
从'turbolinks'进口Turbolinks;
从'activestorage'导入*作为ActiveStorage; </span><span class="nt nc cn av nu b bm oa ob oc od oe nw l nx" data-selectable-paragraph="" id="5788">Rails.start（）;
Turbolinks.start（）;
ActiveStorage.start（）;</span>
```

对于其他库，请阅读README文件以获取有关如何导入它们的其他信息。

在jQuery的情况下，你必须使用`$`和`jQuery`。打开`config/webpack/environment.js`文件并在上面添加以下行`module.exports = environment`。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="329b">const webpack = require（'webpack'）;
environment.plugins.append（'Provide'，new webpack.ProvidePlugin（{
  $：'jquery'，
  jQuery：'jquery'
}））</span>
```

对于包含Javascript的Ruby gem，它可能会改变导入方式，但对于很多人来说，它就像从gem中导入文件一样简单。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="b37f">import“<％= File.join（Gem.loaded_specs ['mygem']。full_gem_path，'app'，'assets'，'javascripts'，'myfile'）％>”;</span>
```

我们可以使用相同的技术显示迭代进行加载文件的位置。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="8cd6"><％['file1'，'file2']。每个do | file | ％>
import“<％= File.join（Gem.loaded_specs ['mygem']。full_gem_path，'app'，'assets'，'javascripts'，file）％>”;
<％end％></span>
```

对于我们自己的文件，您可以再次使用与图像或样式表相同的技术。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="f69f"><％files_glob = Rails.application.root.join（'app'，'javascript'，'application'，'javascripts'，'**'，'*。js'）％>
<％Dir.glob（files_glob）。每个人都做|文件| ％>
  import'<％= file％>';
<％end％></span>
```

现在修改packs文件夹中的application.js.erb文件以引用`index.js.erb`所有资产的文件。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="c413">import'../application/images/index.js.erb';
import'../application/stylesheets/index.js.erb';
import'../application/javascripts/index.js.erb';</span>
```

如果一切正常，那么Webpack将编译资产，您的应用程序将正常加载。如果没有，那么是时候调试任何消息并尝试修复它。

您可能希望在应用程序中禁用Asset Pipeline，以执行此操作，删除与`config.assets`in `config/environments/production.rb`和相关的所有配置设置`config/environments/development.rb`。此外，删除该`config/initializer/assets.rb`文件。从您的`Gemfile`移除宝石咖啡轨，sass-rails，uglifier和turbolinks。

在你的`config/application.rb`删除顶部`require "rails/all"`和扩展框架需要和注释的要求`"sprockets/railtie"`。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="2a8d">要求“rails”
＃选择你想要的框架：
要求“active_model / railtie”
要求“active_job / railtie”
要求“active_record / railtie”
要求“active_storage / engine”
要求“action_controller / railtie”
require“action_mailer / railtie”
require“action_view / railtie“#require”
action_cable / engine“#require
”sprockets / railtie“
require”rails / test_unit / railtie“</span>
```

删除您的`app/assets`文件夹。

结论
==

如果您访问博客的这一部分，并且您的应用程序正在使用Webpack运行您的资产：恭喜！您的团队现在拥有可以在您的前端工作的现代工具。

如果您仍然有错误，可能需要调整与资产相关的内容，也许最好不要禁用Asset Pipeline并继续处理迁移到Webpacker。

另外一个好处：您可以使用foreman通过一个命令启动Rails服务器和Webpack服务器。使用gem install foreman安装foreman gem，不要将它添加到Gemfile中。

然后`Procfile`使用以下行在Rails根目录中创建一个。

```
<pre class="mr ms mt mu mv ib ge ds"><span class="nt nc cn av nu b bm nv nw l nx" data-selectable-paragraph="" id="fdb1">web：bin / rails s -p $ PORT
webpack：bin / webpack-dev-server</span>
```

现在启动你的服务器`PORT=3200 foreman start`。注意`PORT`可以是您选择的任何端口。