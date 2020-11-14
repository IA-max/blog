---
title: Backbone常见错误开发方式
date: '2019-09-09T23:58:53+08:00'
status: publish
permalink: /common-backbone-js-developer-mistakes
author: admin
excerpt: ''
type: post
id: 756
category:
    - Ecmascript
tag:
    - backbone
    - js
    - 框架
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
[Backbone.js](http://backbonejs.org/)是一个简约框架，旨在提供一组简单的数据结构和功能，您可以使用它们来创建结构化Web应用程序的前端。开箱即用，Backbone.js的组件提供了一个直观的环境，您在处理后端的模型和视图时可能已经熟悉了。Backbone.js中的模型和集合很简单，但它们带有一些非常有用的功能，例如可以轻松地将它们与REST JSON API集成的选项。但它们也足够灵活，几乎适用于任何实际用途。

在这个Backbone.js教程中，我们将看一些常见的错误，这些错误通常由[自由职业开发人员](https://www.toptal.com/backbone-js)首次尝试学习Backbone.js以及避免它们的方法。

##### 错误＃1：忽略Backbone.js功能的武器库

Backbone.js可能是一个极简主义框架，但它（与Underscore.js一起）提供了大量的功能和功能，可以轻松地涵盖开发现代Web应用程序时出现的最基本和一些关键需求。初学者经常犯的一个常见错误是他们将Backbone.js作为另一个类似MVC的Web客户端框架。虽然本节讨论的内容非常明显，但对于Backbone.js来说，彻底探索框架是一个非常重要的错误。框架可能很小，但这使它成为这种彻底探索的理想选择。特别是它的小而且[注释良好的源代码](http://backbonejs.org/docs/backbone.html)。

Backbone.js提供了为Web应用程序提供可以从中受益的结构所需的最低要求。凭借其可扩展性和[大量插件](http://backplug.io/)，学习Backbone.js可用于构建一些令人惊叹的Web应用程序。Backbone.js的一些最明显的功能是通过模型，集合和视图公开的。路由器和历史组件提供了一种简单而优雅的机制来支持客户端路由。尽管[Underscore.js](http://underscorejs.org/)是Backbone.js的一个依赖项，但它很好地集成到了框架中，因为模型和集合都可以从这个惊人的JavaScript实用程序带中获益很多，也可以随意使用。

该框架的源代码编写得非常好，注释时可以在喝一杯咖啡时读取所有内容。初学者可以从阅读源代码注释中获益良多，因为他们可以学习很多关于框架内部工作的知识，并且在JavaScript方面也[采用了一套简洁的最佳实践](http://chrisawren.com/posts/Learning-Advanced-JavaScript-via-the-Backbone-js-source-code)。

##### 错误＃2：直接响应任意事件修改DOM

当我们第一次开始学习Backbone.js时，我们倾向于做的事情是不按Backbone.js的建议去做。例如，我们倾向于像在简单网站上使用jQuery一样处理事件和查看更新。Backbone.js旨在通过适当分离关注点为您的Web应用程序提供一个严格的结构。我们经常使用Backbone.js做的是更新视图以响应任意DOM事件：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">var AudioPlayerControls = Backbone.View.extend({
	events: {
		‘click .btn-play, .btn-pause’: function(event) {
			$(event.target).toggleClass(‘btn-play btn-pause’)
		}
	},
	// ...
})
```

应该不惜一切代价避免这种情况。有可能提出一些模糊的例子，这可能是有意义的; 但在大多数情况下，有更好的方法。事实上，我可以在这里举例说明的一种方法是使用模型跟踪音频播放器的状态并使用该状态信息来呈现按钮（或更具体地说是其类名）：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">var AudioPlayerControls = Backbone.View.extend({
	events: {
		‘click .btn-play, .btn-pause’: function(event) {
			this.model.set(‘playing’, !this.model.get(‘playing’))
		}
	},
	initialize: function() {
		this.listenTo(this.model, ‘change’, this.render)
		this.render()
	},
	// ...
})
```

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""><button class="btn btn-<%- playing ? 'pause' : 'play' %>"></button>
```

在极少数情况下，从事件处理程序直接操作DOM是有意义的，但是从事件处理程序管理复杂DOM操作所涉及的成本几乎是不值得的。这是Backbone.js旨在解决的问题。使用Backbone.js做这样的事情是一个错误。

##### 错误＃3：低估了渲染成本

由于Backbone.js使得随意渲染和重新呈现DOM或响应事件非常容易，因此我们经常忽略这对Web应用程序的整体性能产生了多大的影响。我们可以通过很多方式在视图上颠覆渲染方法。通常情况下这似乎并不多，因为现代网络浏览器正在成为高性能的软件。但随着Web应用程序的增长，以及它处理的数据量的增长，性能的下降变得越来越明显。

我们可以通过一个人为的例子看到这一点，我们从一小部分模型开始，并将其呈现在列表视图中：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">var AudioPlayerPlaylist = Backbone.View.extend({
	template: _.template(‘<ul> <% _.each(musics, function(m) { %> <li><%- m.title %></li> <% }) %> </ul>’),
	initialize: function() {
		this.listenTo(this.collection, ‘add’, this.render)
	},
	// ...
})
```

在这个Backbone.js示例中，只要将模型添加到集合中，我们就会重新呈现。这样可以正常工作。但是，由于每次将模型添加到列表时都会触发“add”事件，因此可以想象从服务器中获取大量模型。对于来自服务器的响应中的每个模型，将连续多次调用render方法。足够大的模型足以使您的应用程序断断续续并破坏用户体验。有时，一个小的响应就足够了，这取决于正在渲染的视图的复杂性。

一个非常快速的解决方案就是不为每个要添加的模型调用render方法。在这样的情况下，模型将被批量添加，并且您实际上可以执行某些操作以使render方法仅在调用它时触发，但不会在指定的时间内重新调用。Backbone.js的依赖性Underscore.js为此提供了一个方便的实用程序功能：“\_.debounce”。您需要利用这一点来改变事件绑定JavaScript行：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">this.listenTo(this.collection, ‘add’, _.debounce(_.bind(this.render), 128))
```

这将导致每次“add”事件发生时都会触发事件回调，但是，它会在实际调用render方法之前等待最后一个事件的128毫秒。

在大多数情况下，这将被视为快速解决方案。事实上，有更合适的方法可以避免渲染颠簸。Trello背后的开发人员曾[写过一篇博文，](http://blog.fogcreek.com/we-spent-a-week-making-trello-boards-load-extremely-fast-heres-how-we-did-it/)讨论他们在使用Backbone.js时提高渲染性能的经验和方法。

##### 错误＃4：让事件听众超越他们的使用范围

保留绑定未使用的事件侦听器可能会发生，无论您使用什么JavaScript框架，或者根本使用它。尽管Backbone.js可以很容易地避免这个问题，但仍然存在一个错误，即在Web应用程序中容易出现内存泄漏的漏洞。Backbone.js的“Event”组件当然是一个非常巧妙的实现。它允许JavaScript对象轻松实现基于事件的功能。由于视图是我们大多数事件消耗通常发生的地方，因此很容易在那里犯这样的错误：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">var AudioPlayerControl = Backbone.View.extend({
	initialize: function() {
		this.model.on(‘change’, _.bind(this.render, this))
		// ...
	},
	// ...
})
```

此代码段中的事件绑定行与第一个示例中的事件绑定行没有太大区别。我们在这里所做的就是将“this.listenTo（this.model，…）”更改为“this.model.on（…）”。由于我们非常习惯于从我们与其他一些JavaScript框架和库的经验中调用事件绑定的“.on（）”，当我们开始使用Backbone.js时，我们经常倾向于使用“.on（）”调用来绑定事件。这本来没问题，只有当我们不再需要调用“.off（）”来取消绑定事件处理程序时。但我们很少这样做，最终成为内存泄漏的来源。

Backbone.js提供了一种解决此问题的简单方法。它是通过使用“object.listenTo（）”方法。这使您正在调用“listenTo（）”的对象能够跟踪它正在侦听的事件，并且还可以轻松地一次取消绑定所有这些事件。例如，只要在其上调用“remove（）”，视图就会自动停止侦听所有绑定事件。

##### 错误＃5：创建整体视图

如果您考虑一下，Backbone.js的极简主义为您构建Web应用程序的前端提供了极大的灵活性。由于模型，集合和视图是组件的构建块，因此必须尽可能保持它们的轻量级和特定性。通常情况下，视图最终成为Web应用程序中代码最重要的方面。但是，最重要的是，您最终不要制作巨大的单片视图，最终会尝试执行您的应用程序所提供的所有内容。将所有逻辑嵌入其中，而不是制作巨大的“AudioPlayer”视图，将其拆分为多个逻辑视图，例如播放列表的视图，控件的视图，可视化器的视图等等。

这是因为对于粒度视图，每个视图都执行特定的操作并正确执行，使用Backbone.js开发Web应用程序变得轻而易举。您的代码应该更易于维护，并且将来可以轻松扩展或修改。然后是另一个极端，你最终过度了。Backbone.js视图旨在使您可以方便地使用模型或集合，这可以作为您应该如何构建应用程序的提示。Ian Storm Taylor 在他的博客上[分享了一些有价值的想法](http://ianstormtaylor.com/rendering-views-in-backbonejs-isnt-always-simple/)，在实施视图时你应该记住这些想法。

###### 错误＃6：没有意识到Backbone.js可以适应非RESTful API

Backbone.js可与开箱即用的基于JSON的RESTful API配合使用。你需要的只是jQuery（或者是它的替代品，比如Zepto）。但是，Backbone.js是非常可扩展的。实际上，Backbone.js可以适应其他类型的API和其他类型的编码格式。

Backbone.js的组件处理前端与后端服务的交互是“同步”。该组件公开了许多您可以轻松覆盖的属性，以自定义Backbone.js与API端点交互的方式。实际上，也可以将默认同步机制替换为不那么传统的东西，例如使用localStorage来保存数据，而不是后端服务。

存在许多[插件](http://backplug.io/)，可以轻松自定义Backbone.js的同步行为。例如，一个名为[Backbone.dualStorage](https://github.com/nilbus/Backbone.dualStorage)的插件允许您使用后端服务和localStorage来保存数据。当您的应用程序脱机时，插件使用localStorage继续处理来自缓存数据的请求，并跟踪您在以后可能与服务器同步的更改。

尽管将Backbone.js与后端设计为RESTful并与之兼容更容易使用，但这并不意味着所有Backbone.js都可以使用。通过对默认Backbone.js同步机制的一些更改，您可以使其适应各种后端服务API和编码格式。

值得一提的是，Backbone.js的其他部分也是灵活的，并且在方式上是可选的。例如，您不必使用Underscore.js附带的默认模板引擎。您甚至不必使用Backbone.js的视图组件，如果需要，可以完全替换它。

##### 错误＃7：在视图而不是在模型中存储数据

我们经常作为初学者学习Backbone.js的一个错误就是将数据作为属性直接存储在视图中。该数据可以用于跟踪某些状态或某些用户选择。这是应该避免的。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">var AudioPlayerVisualizer = Backbone.View.extend({
	events: {
		‘click .btn-color’: function(event) {
			this.colorHex = $(event.target).data(‘color-hex’)
			this.render()
		}
	},
	// ...
})
```

您始终可以创建一些没有端点的其他模型和集合。这些可以帮助您存储不一定必须在后端持久化的数据，或者可能是临时性的。将它们存储在模型中可以让您获得能够倾听变化的好处。相关视图甚至多个视图可以观察这些模型并根据需要重新渲染。

想象一下，如果您实际上在视图上存储了状态跟踪变量，并且每次更改它们时都必须调用render方法。根据用户在屏幕上遇到的情况，只缺少对此渲染方法的一次调用可能会使应用程序处于损坏状态。此外，对于小视图，您可能必须在多个视图对象上同步这些状态变量，然后还必须在它们上调用render方法。

##### 错误＃8：使用jQuery“.on（）”而不是委托事件

在我看来，Backbone.js是处理DOM事件的一种宏伟方式。不使用它会带来许多缺点。jQuery的“.on（）”事件绑定功能可以让人觉得方便，但从长远来看往往是麻烦。例如，当元素与DOM分离时，jQuery会使用“.on（）”自动删除绑定到元素的所有事件处理程序。这意味着如果从DOM中分离根元素并重新附加它，那么您尝试从视图中绑定到的任何DOM事件都需要反弹。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">var AudioPlayerControls = Backbone.View.extend({
	events: {
		‘click .btn-play, .btn-pause’: function() { /* ... */ },
		‘click .btn-prev’: function() { /* ... */ },
		‘click .btn-next’: function() { /* ... */ },
		‘click .btn-shuffle’: function() { /* ... */ },
		‘click .btn-repeat’: function() { /* ... */ }
	},
	// ...
})
```

当与该视图对应的元素重新附加到DOM时，您所要做的就是在视图上调用“delegateEvents（）”来绑定所有这些事件。

请注意，了解这些事件是如何绑定的很重要。Backbone.js实际上将事件处理程序绑定到视图的根元素，而不是将事件绑定到选择器指定的元素上。这在几乎所有情况下都能正常工作，事实上它可以更好地满足我们的大部分需求。更改或替换视图的DOM子树中的子元素不需要Backbone.js再次在新元素上绑定每个事件。现有的听众只是继续工作。

但是，这可以防止收听某些事件。一个示例是您可能[希望在“窗口”](http://stackoverflow.com/questions/7634529/backbone-js-detecting-scroll-event)或子可滚动元素上[侦听滚动事件](http://stackoverflow.com/questions/7634529/backbone-js-detecting-scroll-event)。对于子元素，您可以为该元素创建子视图并处理其中的事件。

#### 结论

Backbone.js是一个非常紧凑但可扩展的框架，是需要在场景背后具有很大灵活性的Web应用程序的绝佳选择。与Angular.js和Ember.js这样的框架不同，它总是告诉你如何做你想做的事情，Backbone.js退后一步，给你一套强大的工具，让你决定如何使用他们。我希望这个适合初学者的Backbone.js教程可以帮助你避免一些常见的[开发错误](https://www.toptal.com/web/top-10-mistakes-that-web-developers-make)并用它构建一些令人惊奇的东西。