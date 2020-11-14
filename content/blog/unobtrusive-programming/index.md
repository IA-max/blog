---
title: 无侵入脚本编程
date: '2012-06-02T06:34:16+08:00'
status: publish
permalink: /unobtrusive-programming
author: admin
excerpt: ''
type: post
id: 136
category:
    - 理论
tag: []
post_format: []
classic-editor-remember:
    - block-editor
post_views_count:
    - '284'
jnews_social_counter_last_update:
    - '1564774775'
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
#### Web标准: 分离内容, 展示和脚本 

根据当前的[Web标准](http://ix.cs.uoregon.edu/~michaelh/html/webStandards-html5.html)， 理想的网页由三个独立的单元组成：内容（HTML），样式(CSS)和代码(JavaScript).  
以前我们通过将所有CSS放在单独文件中来避免在标记中使用&lt;style&gt;代码块。这使你不碰HTML的情况下渲染CSS. HTML现在只含结构化标记, 没有任何展示型标记(i，b等).  
同样， 可通过将所有JavaScript放在单独文件中, 将内联事件处理程序   
代码与内容分离,如下所示：

```
onclick="document.getElementByID('outBox').value = isPal(
   document.getElementById('inBox').value);"
```

规范很简明: HTML不应包含任何JavaScript，也不应有任何CSS. 删除内联脚本和事件处理程序是实现结构和代码分离的最简单方法.

#### 侵入式

内联事件函数如 onclick= ‘hideAll()’. 应不再使用这种侵入式编程.

#### 非侵入式

要使用非侵入式JavaScript事件处理程序，请在外部Js文件中注册处理程序. 并用ID属性标记html元素，然后使用DOM为其注册处理程序.

假设网页中有一按钮， 单击将调用clickHandler函数.  
单击打开的框，将调用另一个处理程序。 例:

```
<p><button>你好</button></p>
```

```
<html lang='en'>
<head>
<title>unobtrusive js</title>
<meta charset=utf-8" />
<script src="../js/demo.js"></script>
</head>
<body>
<h2>Unobtrusive JavaScript Demo</h2>
<button id='bttnHello'>Say Hello</button>
<p id='pMsg'></p>
</body>
</html>
```

##### demo.js

```
/* File: site/js/demo.js */
//1. 定义函数
var handleClick = function(){
   document.getElementById('pMsg').innerHTML = 'Hello, World!'
}
//2. 定义onload事件
var handleLoad = function(n){
   document.getElementById('bttnHello').onclick = handleClick;
}
//3. 注册事件
```

demo.js (2步版)
-------------

```
//1. 定义事件处理
var handleClick = function(){
   //response when button is clicked
   document.getElementById('pMsg').innerHTML = 'Hello, World!'
}
//2. 定义onload事件并注册
window.onload =  function(n){
   //Attach the onclick handler defined in step 1
   document.getElementById('bttnHello').onclick = handleClick;
};
```

demo.js (prototype版)
--------------------

```
//1. 定义事件处理
var handleClick = function(){
   $('pMsg').update('Hello, World!');     //Prototype uses update() for innerHTML
}
//2. 定义onload事件并注册
window.onload =  function(n){
   $('bttnHello').observe('click', handleClick);
}
```

demo.js (jQuery版)
-----------------

```
//1. 定义事件处理
var clickHandler = function(){
   $('pMsg').html('Hello, World!');
}
//2. 定义一函数用于注册事件处理
var registerHandlers = function(){
   $('#bttnHello').click(clickHandler);
}
//3. 页面加载后执行
$(document).ready(registerHandlers);
```

demo.js (jQuery 2步)
-------------------

```
//1. 定义事件处理
var clickHandler = function(){
   $('pMsg').html('Hello, World!');
}
//2. 同样加载后调用
$(document).ready(function(){
   $('#bttnHello').click(clickHandler);
});
```