---
title: CSS - 浮动清除
date: '2016-11-24T15:28:00+08:00'
status: publish
permalink: /%e6%b5%ae%e5%8a%a8%e6%b8%85%e9%99%a4
category: ["css"] 
tag: [""]
author: "max"
excerpt: "清除浮动前我们要了解两个重要的定义"
featured: false
image: 
featuredimage:
  src: "none.png"
  alt: ""
---
#### 清除浮动前我们要了解两个重要的定义

##### 浮动的定义
使元素脱离文档流，按照指定方向发生移动，遇到父级边界或者相邻的浮动元素停了下来.
##### 高度塌陷
浮动元素父元素高度自适应（父元素不写高度时，子元素写了浮动后，父元素会发生高度塌陷）


1. clear清除浮动（添加空div法）

```css
# 在浮动元素下方添加空div,并给该元素写css样式：
{clear:both;height:0;overflow:hidden;}
```


2. 浮动元素父级设置高度

我们知道了高度塌陷是应为给浮动元素的父级高度是自适应导致的，那么我们给它的设置适当的高度就可以解决这个问题了。
缺点：在浮动元素高度不确定的时候不适用



3. 以浮制浮（父级同时浮动）

何谓“以浮制浮”呢？就是**让浮动元素的父级也浮动**。<br>
缺点：需要给每个浮动元素父级添加浮动，浮动多了容易出现问题。



4. 父级设置成inline-block

缺点：父级的margin左右auto失效，无法使用margin: 0 auto;居中了



5. br 清浮动

```html
<div class="box">
    <div class="top"></div>
    <br clear="both" />
</div>
```


6. 父级添加overflow:hidden 清除浮动

```css
# 问题：需要配合 宽度 或者 zoom 兼容IE6 IE7；
overflow: hidden;
*zoom: 1;
```

7. 最常用的传统清除

这个方法来源于[positioniseverything](http://www.positioniseverything.net/easyclearing.html) ，通过after伪类:after和IEhack来实现，完全兼容当前主流浏览器。

```html
<style type="text/css">
.clearfix:after {
	content:".";
	display:block;
	height:0;
	clear:both;
	visibility:hidden;
}
.clearfix {
	display:inline-block;
}
/* for IE/Mac */
</style>
<!-- main stylesheet ends,CC with new stylesheet below... -->
<!--[if IE]>
<style type="text/css">
.clearfix {
	zoom:1;
}
</style>
<![endif]-->
```


8. 优化版的清除浮动

```css
.clearfix:after {
   content: "020";
   display: block;
   height: 0;
   clear: both;
}
 .clearfix{
   zoom: 1;
}
```


9. 很全面的清除浮动

```css
html body div.clear, html body span.clear {
   background: none;
   border: 0;
   clear: both;
   display: block;
   float: none;
   font-size: 0;
   margin: 0;
   padding: 0;
   overflow: hidden;
   visibility: hidden;
   width: 0;
   height: 0;
}
```
