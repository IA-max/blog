---
title: 前端 - 国际化
date: '2019-11-26T21:38:34+08:00'
status: publish
permalink: /i18
category: ["js"] 
tag: [""]
author: "max"
excerpt: ""
featured: false
image: 
featuredimage:
  src: ""
  alt: ""
---
基于纯前端的国际化多语言的解决方案，不依赖于任何后台技术。即只用HTML + JavaScript来实现国际化的方案。该方案参考了FCKEditor的实现机制，其实很多富文本编辑器都采用了类似的思路。

##### 实现方式

1. 将各国语言翻译好之后放在一个js文件里以JSON格式保存，或者每个语言一个js文件也可以，比如zh-CN.js，en-US.js等。
2. 将所有需要翻译的文字用span标签包起来，并且设置一个自定义属性”localeString”, 并将内容的英文值赋值给该属性，来标志该span标签里面的内容需要翻译，比如hello world.。
3. JavaScript载入后首先判断浏览器的语言，然后遍历页面找到所有带有”localeString”属性的span标签，然后使用用户的语言的对应的值将该值替换掉。比如上面的hello，在语言js中找到hello对应的值“你好时间。”来替换掉”hello world.”  
   这里要注意的是”localeString”是自定义属性，你可以用任何名字都可以，它的值就是每个内容在js文件里的key了，比如：{“hello”: “你好世界。”}，下面是翻译文件的一个简单的例子：

```js
langText = {
     "name": "姓名",
     "password": "密码"
 }
```

  
##### HTML的代码片段

```html
<span localeString="name">Name</span><input type="text" id="username" />
<span localeString="password">Password</span><input type="password" id="password" />
```

下面是替换span标签里面内容的JavaScript代码：

```js
/**
 * Translate the text in the HTML.
 * @param {dom} domObj An dom object under which text will be translated.
 * @param {string} sTag The HTML tag name in which text will be translated, usually "span".
 */
function translatePage(domObj, sTag) {
    var e = domObj.getElementsByTagName(sTag);
    var currentLangText = sapLang.getCurrentLangText();
    var E, s;
    for (var i = 0; i < e.length; i++) {
        if (E = e[i].getAttribute('iLikeLang')) {
            if (currentLangText[E]) {
                e[i].innerHTML = currentLangText[E];
            }
        }
    }
}
translatePage(document, 'span');
```