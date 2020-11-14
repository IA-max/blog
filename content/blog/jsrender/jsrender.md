---
title: 'JsRender 快速入门'
date: '2013-07-13T05:07:32+08:00'
status: publish
permalink: /jsrender
author: admin
excerpt: ''
type: post
id: 181
category:
    - Ecmascript
tag:
    - js
    - 'mv*'
post_format: []
classic-editor-remember:
    - classic-editor
    - classic-editor
post_views_count:
    - '307'
    - '307'
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
首先，我们必须知道，什么是jsRender？

jsRender是一个非常强大框架. 它专注于速度优化，基于字符串渲染的下一代 jQuery模板 .

看一下我们需要用可用数据填充选择框的场景. 从基本HTML中的内容开始:

```
<pre class="EnlighterJSRAW" data-enlighter-language="html">
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
    <script src="jsrender.js" type="text/javascript"></script>
    <script type="text/javascript">
        var movies = [
            { name: "Up", releaseYear: "2009", languages: [{ name: "English" }, { name: "Spanish" }] },
            { name: "Finding Nemo", releaseYear: "2003", languages: [] },
            { name: "Toy Story", releaseYear: "1995", languages: [{ name: "English" }, { name: "German" }] }
        ];
    </script>
</head>
<body>
    <ul id="movieList" />
</body>
</html>
```

到目前为止，一切都是标准的HTML，JavaScript和JSON。现在让我们开始使用JsRender。在movieList之后，让我们插入模板。

```
<pre class="EnlighterJSRAW" data-enlighter-language="null"><script id="movieTemplate" type="text/x-jsrender">
        <li>
            {{>name}} {{>releaseYear}}
        </li>
</script>
```

请注意，我们使用语法{{&gt; variable}}插入数据。 之后，插入对JsRender模板渲染的调用

```
<pre class="EnlighterJSRAW" data-enlighter-language="html"><script type="text/javascript">
        $("#movieList").html(
            $("#movieTemplate").render(movies)
        );
</script>
```

我们的代码所做的是调用JsRender来浏览电影数组，并使用提供的模板为每部电影创建HTML。在浏览器输出中运行HTML。

- Up 2009
- Finding Nemo 2003
- Toy Story 1995

完整的代码看起来像

```
<pre class="EnlighterJSRAW" data-enlighter-language="html">
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
    <script src="jsrender.js" type="text/javascript"></script>
    <script type="text/javascript">
        var movies = [
            { name: "Up", releaseYear: "2009", languages: [{ name: "English" }, { name: "Spanish" }] },
            { name: "Finding Nemo", releaseYear: "2003", languages: [] },
            { name: "Toy Story", releaseYear: "1995", languages: [{ name: "English" }, { name: "German" }] }
        ];
    </script>
</head>
<body>
    <ul id="movieList" />
    <script id="movieTemplate" type="text/x-jsrender">
        <li>
            {{>name}} {{>releaseYear}}
        </li>
    </script>
    <script type="text/javascript">
        $("#movieList").html(
            $("#movieTemplate").render(movies)
        );
    </script>
</body>
</html>
```

有关高级功能和更多示例，请查看官方[JsRender演示](http://borismoore.github.com/jsrender/demos/index.html)

</body></html>