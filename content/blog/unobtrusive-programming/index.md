---
title: 无侵入脚本编程
date: '2012-06-02T06:34:16+08:00'
status: publish
permalink: /unobtrusive-programming
author: admin
excerpt: '可通过将所有 JavaScript 放在单独文件中, 将内联事件处理程序代码与内容分离'
featured: false
image: 
category: ["js"]
tag: ["js"]
featuredimage:
  alt: "unobtrusive-programming"
  src: "cover-unobtrusive-js.png"
---

#### Web 标准: 分离内容, 展示和脚本

根据当前的[Web 标准](http://ix.cs.uoregon.edu/~michaelh/html/webStandards-html5.html)， 理想的网页由三个独立的单元组成：内容（HTML），样式(CSS)和代码(JavaScript).  
以前我们通过将所有 CSS 放在单独文件中来避免在标记中使用&lt;style&gt;代码块。这使你不碰 HTML 的情况下渲染 CSS. HTML 现在只含结构化标记, 没有任何展示型标记(i，b 等).  
同样， 可通过将所有 JavaScript 放在单独文件中, 将内联事件处理程序  
代码与内容分离,如下所示：

```html
onclick="document.getElementByID('outBox').value = isPal( document.getElementById('inBox').value);"
```

规范很简明: HTML 不应包含任何 JavaScript，也不应有任何 CSS. 删除内联脚本和事件处理程序是实现结构和代码分离的最简单方法.

#### 侵入式

内联事件函数如 onclick= ‘hideAll()’. 应不再使用这种侵入式编程.

#### 非侵入式

要使用非侵入式 JavaScript 事件处理程序，请在外部 Js 文件中注册处理程序. 并用 ID 属性标记 html 元素，然后使用 DOM 为其注册处理程序.

假设网页中有一按钮， 单击将调用 clickHandler 函数.  
单击打开的框，将调用另一个处理程序。 例:

```html
<p><button>你好</button></p>
```

```html:title=HTML
<html lang="en">
    <head>
        <title>unobtrusive js</title>
        <meta charset=utf-8" />
        <script src="../js/demo.js"></script>
    </head>
    <body>
        <h2>Unobtrusive JavaScript Demo</h2>
        <button id="bttnHello">Say Hello</button>
        <p id="pMsg"></p>
    </body>
</html>
```

```js:title=demo.js
/* File: site/js/demo.js */
//1. 定义函数
var handleClick = function () {
    document.getElementById('pMsg').innerHTML = 'Hello, World!';
};
//2. 定义onload事件
var handleLoad = function (n) {
    document.getElementById('bttnHello').onclick = handleClick;
};
//3. 注册事件
```

```js:title=demo.js(2步版)
//1. 定义事件处理
var handleClick = function () {
    //response when button is clicked
    document.getElementById('pMsg').innerHTML = 'Hello, World!';
};
//2. 定义onload事件并注册
window.onload = function (n) {
    //Attach the onclick handler defined in step 1
    document.getElementById('bttnHello').onclick = handleClick;
};
```

```js:title=demo.js(prototype版)
//1. 定义事件处理
var handleClick = function () {
    $('pMsg').update('Hello, World!'); //Prototype uses update() for innerHTML
};
//2. 定义onload事件并注册
window.onload = function (n) {
    $('bttnHello').observe('click', handleClick);
};
```

```js:title=demo.js(jQuery版)
//1. 定义事件处理
var clickHandler = function () {
    $('pMsg').html('Hello, World!');
};
//2. 定义一函数用于注册事件处理
var registerHandlers = function () {
    $('#bttnHello').click(clickHandler);
};
//3. 页面加载后执行
$(document).ready(registerHandlers);
```

```js:title=demo.js(jQuery2步)
//1. 定义事件处理
var clickHandler = function () {
    $('pMsg').html('Hello, World!');
};
//2. 同样加载后调用
$(document).ready(function () {
    $('#bttnHello').click(clickHandler);
});
```
