---
title: 'CSS - 片段'
date: '2019-11-24T15:47:50+08:00'
status: publish
permalink: /usefuly-css-snippet
author: admin
excerpt: ''
type: post
id: 2377
category:
    - CSS
tag:
    - css
---
常用到的css代码片段，包括了一些hacks技术.

##### 浏览器兼容hacks

```css
/***** Selector Hacks ******/
/* IE6 and below */* html #uno  { color: red }
/* IE7 */*:first-child+html #dos { color: red }
/* IE7, FF, Saf, Opera  */html>body #tres { color: red }
/* IE8, FF, Saf, Opera (Everything but IE 6,7) */html>/**/body #cuatro { color: red }
/* Opera 9.27 and below, safari 2 */html:first-child #cinco { color: red }
/* Safari 2-3 */html[xmlns*=""] body:last-child #seis { color: red }
/* safari 3+, chrome 1+, opera9+, ff 3.5+ */body:nth-of-type(1) #siete { color: red }
/* safari 3+, chrome 1+, opera9+, ff 3.5+ */body:first-of-type #ocho {  color: red }
/* saf3+, chrome1+ */@media screen and (-webkit-min-device-pixel-ratio:0) { #diez  { color: red  }}
/* iPhone / mobile webkit */@media screen and (max-device-width: 480px) { #veintiseis { color: red  }}
/* Safari 2 - 3.1 */html[xmlns*=""]:root #trece  { color: red  }
/* Safari 2 - 3.1, Opera 9.25 */*|html[xmlns*=""] #catorce { color: red  }
/* Everything but IE6-8 */:root *> #quince { color: red  }/* IE7 */*+html #dieciocho {  color: red }
/* Firefox only. 1+ */#veinticuatro,  x:-moz-any-link  { color: red }
/* Firefox 3.0+ */#veinticinco,  x:-moz-any-link, x:default  { color: red  }
/***** Attribute Hacks ******/
/* IE6 */#once { _color: blue }
/* IE6, IE7 */#doce { *color: blue; /* or #color: blue */ }
/* Everything but IE6 */#diecisiete { color/**/: blue }
/* IE6, IE7, IE8 */#diecinueve { color: blue9; }
/* IE7, IE8 */#veinte { color/***/: blue9; }
/* IE6, IE7 -- acts as an !important */#veintesiete { color: blue !ie; }
/* string after ! can be anything */
```

#####  夸浏览器垂直水平居中 

```html
<figure class=’logo’>
  <span></span>
  <img class='photo’/>
</figure>
```

```css
.logo {
   display: block;
   text-align: center;
   display: block;
   text-align: center;
   vertical-align: middle;
   border: 4px solid #dddddd;
   padding: 4px;
   height: 74px;
   width: 74px;
}
 .logo * {
   display: inline-block;
   height: 100%;
   vertical-align: middle;
}
 .logo .photo {
   height: auto;
   width: auto;
   max-width: 100%;
   max-height: 100%;
}
```

#####  夸浏览器透明 

```css
selector {
   filter: alpha(opacity=50);
  /* internet explorer */
   -khtml-opacity: 0.5;
  /* khtml, old safari */
   -moz-opacity: 0.5;
  /* mozilla, netscape */
   opacity: 0.5;
  /* fx, safari, opera */
}
```

#####  盒投影 

 **Outer shadow**

```css
.shadow {
   -moz-box-shadow: 5px 5px 5px #ccc;
   -webkit-box-shadow: 5px 5px 5px #ccc;
   box-shadow: 5px 5px 5px #ccc;
}
```

#####  **Inner shadow** 

```css
.shadow {
   -moz-box-shadow:inset 0 0 10px #000000;
   -webkit-box-shadow:inset 0 0 10px #000000;
   box-shadow:inset 0 0 10px #000000;
}
```

#####  夸浏览器最小高度 

```css
#div {
   min-height: 500px;
   height:auto !important;
   height: 500px;
}
```

#####  固定页脚 

```css
#footer {
   position:fixed;
   left:0px;
   bottom:0px;
   height:30px;
   width:100%;
   background:#999;
}
/* IE 6 */
 * html #footer {
   position:absolute;
   top:expression((0-(footer.offsetHeight)+(document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight)+(ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop))+'px');
}
```

#####  清除浮动 

```css
/* slightly enhanced, universal clearfix hack */
.clearfix:after {
   visibility: hidden;
   display: block;
   font-size: 0;
   content: " ";
   clear: both;
   height: 0;
}
 .clearfix {
   display: inline-block;
}
/* start commented backslash hack */
 * html .clearfix {
   height: 1%;
}
 .clearfix {
   display: block;
}
/* close commented backslash hack */
```

##### 实用Web Font

```css
/* The Times New Roman-based serif stack: */
font-family:
Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif;
/* A modern Georgia-based serif stack:*/
font-family:
Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif," "Bitstream Vera Serif", "Liberation Serif", Georgia, serif;
/*A more traditional Garamond-based serif stack:*/
font-family:
"Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif;
/*The Helvetica/Arial-based sans serif stack:*/
font-family:
Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;
/*The Verdana-based sans serif stack:*/
font-family:
Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
/*The Trebuchet-based sans serif stack:*/
font-family:
"Segoe UI", Candara, "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif;
/*The heavier "Impact" sans serif stack:*/
font-family:
Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", sans-serif;
/*The monospace stack:*/
font-family:
Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
```

#####  鼠标指针 

```css
a[href], input[type='submit'], input[type='image'], label[for], select, button, .pointer {
   cursor: pointer;
}
```

#####  iPad固定样式 

```html
<style>
\<!– css –\> @media only screen and (max-device-width: 1024px) and (orientation:portrait) {
   .landscape {
     display: none;
  }
}
@media only screen and (max-device-width: 1024px) and (orientation:landscape) {
   .portrait {
     display: none;
  }
}
</style>

\<!-- example markup --\>\<h1\>Your device orientation is "portrait"\<h1\>\<h1\>Your device orientation is "landscape"\<h1\>
```

##### 在pre标签内嵌入文字

```css
height: 120px;
overflow: auto;
font-family: "Consolas",monospace;
font-size: 9pt;
text-align:left;
background-color: #FCF7EC;
overflow-x: auto;/* Use horizontal scroller if needed; for Firefox 2, notwhite-space: pre-wrap; /* css-3 */
white-space: -moz-pre-wrap !important; /* Mozilla, since 1999 */
word-wrap: break-word; /* Internet Explorer 5.5+ */
margin: 0px 0px 0px 0px;
padding:5px 5px 3px 5px;
white-space : normal; /* crucial for IE 6, maybe 7? */
```

#####  css3 Media 

```css
/* Smartphones (portrait and landscape) ----------- */
@media only screenand (min-device-width : 320px)and (max-device-width : 480px) {
  /* Styles */
}
/* Smartphones (landscape) ----------- */
@media only screenand (min-width : 321px) {
  /* Styles */
}
/* Smartphones (portrait) ----------- */
@media only screenand (max-width : 320px) {
  /* Styles */
}
/* iPads (portrait and landscape) ----------- */
@media only screenand (min-device-width : 768px)and (max-device-width : 1024px) {
  /* Styles */
}
/* iPads (landscape) ----------- */
@media only screenand (min-device-width : 768px)and (max-device-width : 1024px)and (orientation : landscape) {
  /* Styles */
}
/* iPads (portrait) ----------- */
@media only screenand (min-device-width : 768px)and (max-device-width : 1024px)and (orientation : portrait) {
  /* Styles */
}
/* Desktops and laptops ----------- */
@media only screenand (min-width : 1224px) {
  /* Styles */
}
/* Large screens ----------- */
@media only screenand (min-width : 1824px) {
  /* Styles */
}
/* iPhone 4 ----------- */
@mediaonly screen and (-webkit-min-device-pixel-ratio : 1.5),only screen and (min-device-pixel-ratio : 1.5) {
  /* Styles */
}
 (source and more info) – Download the CSS file 
```

#####  CSS重置 

```css
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,
pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,
s,samp,small,strike,strong,sub,sup,tt,var,dl,dt,dd,ol,ul,li,fieldset,
form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td {
	margin:0;
	padding:0;
	border:0;
	outline:0;
	font-weight:inherit;
	font-style:inherit;
	font-size:100%;
	font-family:inherit;
	vertical-align:baseline;
}
/* remember to define focus styles! */:focus {
	outline:0;
}
body {
	line-height:1;
	color:black;
	background:white;
}
ol,ul {
	list-style:none;
}
/* tables still need 'cellspacing="0"' in the markup */
table {
	border-collapse:separate;
	border-spacing:0;
}
caption,th,td {
	text-align:left;
	font-weight:normal;
}
blockquote:before,blockquote:after,q:before,q:after {
	content:"";
}
blockquote,q {
	quotes:"" "";
}
```

#####  ie中去除textarea滚动条 

```css
textarea {
   overflow: auto;
}
```

##### 简单而漂亮的Blockquote样式

```css
blockquote {
	background:#f9f9f9;
	border-left:10px solid #ccc;
	margin:1.5em 10px;
	padding:.5em 10px;
	quotes:"201C""201D""2018""2019";
}
blockquote:before {
	color:#ccc;
	content:open-quote;
	font-size:4em;
	line-height:.1em;
	margin-right:.25em;
	vertical-align:-.4em;
}
blockquote p {
	display:inline;
}
```

#####  **:-moz-placeholder** 

```css
<!doctype html>
<html>
  <head>
    <title>Placeholder demo</title>
    <style type="text/css">
         input:-moz-placeholder { color: green; }
    </style>
  </head>
  <body>
    <input id="test" placeholder="Placeholder text!"></body>
</html>
```

#####  固定页脚 

```css
* {
	margin:0;
	padding:0;
}
html,body,#wrap {
	height:100%;
}
body > #wrap {
	height:auto;
	min-height:100%;
}
#main {
	padding-bottom:150px;
}
/* must be same height as the footer */
#footer {
	position:relative;
	margin-top:-150px;
	/* negative value of footer height */
   height:150px;
	clear:both;
}
/* CLEAR FIX*/
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
/* Hides from IE-mac *
/* html .clearfix {
	height:1%;
}
.clearfix {
	display:block;
}
/* End hide from IE-mac */
```

```css
<div id="wrap">
  <div id="main"></div>
</div>
<div id="footer"></div>
```

#####   嵌入字体 

```css
@font-face {
	font-family:GraublauWeb;
	src:url("path-to-the-font-file/GraublauWeb.otf") format("opentype");
}
@font-face {
	font-family:GraublauWeb;
	font-weight:bold;
	src:url("path-to-the-font-file/GraublauWebBold.otf") format("opentype");
}
h1 {
	font-family:GraublauWeb,Helvetica,Verdana,Sans-Serif;
}
Typefaces you can use with @font-face:Graublau Sans Web,Fertigo Pro Regular,Tallys,Diavlo,Fontin,Fontin Sans,M+ Outline Fonts,Pykes Peak Zero,Vollkorn,Delicious,Junction,Days,Sniglet,Chunk,Blackout,Gentium,Anivers,CA BND Bold WEB,Axel,Kaffeesatz,Tagesschrift. 
```

#####  旋转文字 

```css
<div>
  <span>31</span>
  <span>July</span>
  <span>2009</span>
</div>
```

```css
-webkit-transform: rotate(-90deg);
-moz-transform: rotate(-90deg);
filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
```

#####  背景透明 

```css
.rgba
{
   background-color: transparent;
   background-color: rgba(200,200,200,0.8);
   filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99dddddd,endColorstr=#99dddddd);
   -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99dddddd,endColorstr=#99dddddd)";
}
```

#####  未知宽度div 

```css
.content {
   margin: 0 auto 8px;
   display: table;
}
.content div {
   display: table-cell;
}
<!--[if IE]>.content {
   display: block;
   text-align: center;
}
.content div {
   display: inline;
   zoom: 1;
}
<![endif]--> 
```

#####  文件类型链接样式 

```css
/* external links */
 a[href^="http://"]{
  padding-right: 13px;
  background: url(external.gif) no-repeat center right;
}
/* emails */
a[href^="mailto:"]{
  padding-right: 20px;
  background: url(email.png) no-repeat center right;
}
/* pdfs */
a[href$=".pdf"]{
  padding-right: 18px;
  background: url(acrobat.png) no-repeat center right;
}
```

#####  ie双倍边距bug 

```css
ul li {
   float: right;
   margin-right: 10px;
   *display: inline;
  /*Target IE7 and bellow*/
   _display: inline;
  /*Target IE6 and bellow*/
}
/* This example fixes the double right margin bug */
```

#####  更改选中文字样式 

```css
::selection{
  color: white;
  background-color: red;
}
::-moz-selection
/* Firefox needs an extra attention for this */
{
  color: white;
  background-color: red;
}
```

#####  下标 

```css
p:first-letter{
   display:block;
   margin:5px 0 0 5px;
   float:left;
   color:#FF3366;
   font-size:60px;
   font-family:Georgia;
}
```

#####  链接样式 

```css
/* external links */
 a[href^="http://"]{
   padding-right: 20px;
   background: url(external.gif) no-repeat center right;
}
/* emails */
 a[href^="mailto:"]{
   padding-right: 20px;
   background: url(email.png) no-repeat center right;
}
/* pdfs */
 a[href$=".pdf"]{
   padding-right: 20px;
   background: url(pdf.png) no-repeat center right;
}
```