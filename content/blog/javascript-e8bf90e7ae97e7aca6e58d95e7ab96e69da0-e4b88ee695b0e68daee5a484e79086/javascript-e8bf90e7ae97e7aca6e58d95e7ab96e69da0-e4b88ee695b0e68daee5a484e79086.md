---
title: 'JavaScript 运算符单竖杠 与数据处理'
date: '2019-09-18T16:10:36+08:00'
status: publish
permalink: /javascript-%e8%bf%90%e7%ae%97%e7%ac%a6%e5%8d%95%e7%ab%96%e6%9d%a0-%e4%b8%8e%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86
author: admin
excerpt: ''
type: post
id: 1478
category:
    - Ecmascript
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
很多朋友都对双竖杠“||”，了如指掌，因为这个经常用到。但是大家知道单竖杠吗？  
这篇文章里面，js整数的操作运用了单竖杠，问我单竖杠是啥意思？

```
<pre class="wp-block-prismatic-blocks">```typescript
parseInt //在JS整数操作的时候，相当于去除小数点
Math.floor() //在正数的时候
Math.ceil() //负数的时候
```
```

```
<pre class="wp-block-prismatic-blocks">```typescript
Math.ceil()  //用作向上取整。
Math.floor() //用作向下取整。
Math.round() //我们数学中常用到的四舍五入取整。
console.log(0.6|0)//0
console.log(1.1|0)//1
console.log(3.65555|0)//3
console.log(5.99999|0)//5
console.log(-7.777|0)//-7
```
```

注：除了Math的三个方法处理数字，我们还经常用parseInt()、parseFloat()、toFixed()与toPrecision() 等等。 简单解释：

toFixed方法用法如下：

```
<pre class="wp-block-prismatic-blocks">```typescript
100.456001.toFixed(2); //100.47
100.456001.toFixed(3); //100.456
Number.prototype.toFixed.call(100.456001,2);  //100.47
```
```

缺点：用之后就会变成字符串。

toPrecision用法如下：

```
<pre class="wp-block-prismatic-blocks">```typescript
99.456001.toPrecision(5);  //99.456
100.456001.toPrecision(5); //100.46
Number.prototype.toPrecision.call(10.456001,5);  //10.456
```
```

单竖杠的运算规则
--------

看了上面的例子，大体知道单竖杠可以进行取整运算，就是只保留正数部分，小数部分通过拿掉，但是“|0”，又是如何进行运算的呢，为什么能“|0”能达到取整的目的呢？单竖杠不是0有会是多少呢？

带着这些问题，我们看下面例子：

```
<pre class="wp-block-prismatic-blocks">```typescript
console.log(3|4); //7
console.log(4|4);//4
console.log(8|3);//11
console.log(5.3|4.1);//5
console.log(9|3455);//3455
```
```

而单竖杠“|”就是转换为2进制之后相加得到的结果。例如我们拿简单的举例：

```
<pre class="wp-block-prismatic-blocks">```typescript
3|4
转换为二进制之后011|100  相加得到111=7
4|4
转换为二进制之后100 |100  相加得到100=4
8|3
转换为二进制之后1000 |011  相加得到1011=11
```
```

以此类推，我在这里就不一一列举了，单竖杠“|”运算就是转换为2进制之后相加得到的结果！