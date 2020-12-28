---
title: 'JavaScript 经典实例收集'
date: '2019-09-10T07:40:07+08:00'
status: publish
permalink: /javascript-%e7%bb%8f%e5%85%b8%e5%ae%9e%e4%be%8b%e6%94%b6%e9%9b%86
category: ["js"] 
tag: ["js"]
author: "max"
excerpt: "跨浏览器添加事件"
featured: false
image: 
featuredimage:
  src: "cover-js.png"
  alt: ""
---


### JavaScript 交换变量值的七种方式
总结了七种办法来交换a和b的变量值

```javascript
var a = 123;
var b = 456;
```


**交换变量值方案一**  
最最最简单的办法就是使用一个临时变量了，不过使用临时变量的方法实在是太low了
```js
var t;
t = a;
a = b;
b = t;
```

首先把a的值存储到临时变量中，然后b赋值给a，最后拿出临时变量中的a值赋给b，这个办法是最基本的了

**交换变量值方案二**  
下面的方案都不会有临时变量，我总结了一下，其实不使用临时变量的思路都是让其中一个变量变成一个a和b都有关系的值，这样可以先改变另一个变量值， 最后改变原修改的变量值

**比如这个**
```js
a += b;
b = a - b;
a -= b;
```


让a先变成a与b的‘和’（也可以换成a和b的差，一样的） ，‘和’减去b巧妙的得到了a的变量值赋予b ，再通过‘和’减去a的值得到了b的值赋予a，或者是下面的变式（差的形式）

```js
a -= b;
b = a + b;
a = b - a;
//但是感觉和的形式更容易理解
```

**交换变量值方案三**  
这种方法对于第一次学习JavaScript的同学来说可能不了解，因为我们JavaScript很少会用到位操作，这是我在以前看算法竞赛书的时候学来的，通过底层位运算来进行交换变量值，也是上面的方案演化来的

```js
a ^= b;
b ^= a;
a ^= b;
```

了解一下吧，C++甚至可以a^=b^=a^=b来完成任务，但我发现JavaScript不可以. 不过我们可以这样

```js
a = (b^=a^=b)^a;
```

**交换变量值方案四**  
把a先变成了一个对象，这个对象保存着应该交换后的键值对，最后赋值搞定

```js
a = {a:b,b:a};
b = a.b;
a = a.a;
```

**交换变量值方案五**  
和上面的方法很像，只不过对象换成了数组

```js
a = [a,b];
b = a[0];
a = a[1];
```


**交换变量值方案六**  
这个办法十分的巧妙，不是我想出来的，想出来的人一定是大神，除非他是托梦想出来的，简单粗暴一行代码交换了a和b的变量值a = \[b,b=a\]\[0\];根据运算符优先级，首先执行b=a，此时的b直接得到了a的变量值，然后一步数组索引让a得到了b的值（简直不能再厉害）

**交换变量值方案七**  
最后我的方案是利用了ES6的解构赋值语法，它允许我们提取数组和对象的值，对变量进行赋值，不过我现在测试用的chrome浏览器已经实现了

```js
[a,b] = [b,a];
```

可以看到解构赋值语法让我们的交换变量值变得超级简单，这个解构赋值语法要是讲的话要讲很多不是今天的重点，以后会在再总结现在就不讲了



跨浏览器事件
------

### 跨浏览器添加事件

```javascript
//跨浏览器添加事件
function addEvent(obj, type, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(type, fn, false);
	} else if (obj.attachEvent) { //IE
		obj.attchEvent('on' + type, fn);
	}
}
```

#### 跨浏览器移除事件

```javascript
//跨浏览器移除事件
function removeEvent(obj,type,fn){
    if(obj.removeEventListener){
        obj.removeEventListener(type,fn,false);
    }else if(obj.detachEvent){//兼容IE
        obj.detachEvent('on'+type,fn);
    }
}
```

#### 跨浏览器阻止默认行为

```javascript
//跨浏览器阻止默认行为
function preDef(ev) {
	var e = ev || window.event;
	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
}
```

#### 跨浏览器获取目标对象

```javascript
//跨浏览器获取目标对象
function getTarget(ev) {
	if (ev.target) { //w3c
		return ev.target;
	} else if (window.event.srcElement) { //IE
		return window.event.srcElement;
	}
}
```

#### 跨浏览器获取滚动条位置

```javascript
//跨浏览器获取滚动条位置，sp == scroll position
function getSP() {
	return {
		top: document.documentElement.scrollTop || document.body.scrollTop,
		left: document.documentElement.scrollLeft || document.body.scrollLeft
	}
}
```

#### 跨浏览器获取可视窗口大小

```js
//跨浏览器获取可视窗口大小
function getWindow() {
	if (typeof window.innerWidth != 'undefined') {
		return {
			width: window.innerWidth,
			height: window.innerHeight
		}
	} else {
		return {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		}
	}
}
```

#### js 对象冒充

```html
<script type = 'text/javascript'>
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.say = function() {
		return "name : " + this.name + " age: " + this.age;
	};
}
var o = new Object(); //可以简化为Object()
Person.call(o, "zhangsan", 20);
console.log(o.say()); //name : zhangsan age: 20
</script>
```

#### js 异步加载和同步加载

异步加载也叫非阻塞模式加载，浏览器在下载`js`的同时，同时还会执行后续的页面处理。  
在`script`标签内，用`js`创建一个`script`元素并插入到`document`中，这种就是异步加载`js`文件了：

```javascript
(function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'http://yourdomain.com/script.js';
    var x = document.getElementsByTagName('script')[0];
     x.parentNode.insertBefore(s, x);
})();
```

#### 同步加载

平常默认用的都是同步加载。如：

```markup
<script src="http://yourdomain.com/script.js"></script>
```

 同步模式又称阻塞模式，会阻止流览器的后续处理。停止了后续的文件的解析，执行，如图像的渲染。浏览器之所以会采用同步模式，是因为加载的`js`文件中有对`dom`的操作，重定向，输出`document`等默认行为，所以同步才是最安全的。  
 通常会把要加载的`js`放到`body`结束标签之前，使得`js`可在页面最后加载，尽量减少阻塞页面的渲染。这样可以先让页面显示出来。

 同步加载流程是瀑布模型，异步加载流程是并发模型。

#### js获取屏幕坐标

```html
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7"/>
    <meta name="auther" content="fq" />
    <title>获取鼠标坐标</title>
</head>
<body>
<script type="text/javascript">
    function mousePosition(ev){
        if(ev.pageX || ev.pageY){
            return {x:ev.pageX, y:ev.pageY};
        }
        return {
            x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
            y:ev.clientY + document.body.scrollTop - document.body.clientTop
        };
    }
    function mouseMove(ev){
        ev = ev || window.event;
        var mousePos = mousePosition(ev);
        document.getElementById('xxx').value = mousePos.x;
        document.getElementById('yyy').value = mousePos.y;
    }
    document.onmousemove = mouseMove;
</script>
<input id="xxx" type="text" /> Y:<input id="yyy" type="text" />
</body>
</html>  
```

**注释：**  
1.`documentElement` 属性可返回文档的根节点。  
2.`scrollTop()` 为滚动条向下移动的距离  
3.`document.documentElement.scrollTop` 指的是滚动条的垂直坐标  
4.`document.documentElement.clientHeight` 指的是浏览器可见区域高度

---

如果在页面中添加这行标记的话

#### IE

```javascript
document.body.clientWidth; // BODY对象宽度
document.body.clientHeight; // BODY对象高度
document.documentElement.clientWidth; // 可见区域宽度
document.documentElement.clientHeight; // 可见区域高度
```

#### Firefox

```javascript
document.documentElement.scrollHeight; // 浏览器所有内容高度
document.body.scrollHeight;            // 浏览器所有内容高度
document.documentElement.scrollTop;    // 浏览器滚动部分高度
document.body.scrollTop;               // 始终为0
document.documentElement.clientHeight; // 浏览器可视部分高度
document.body.clientHeight;            // 浏览器所有内容高度
```

#### Chrome

```text
document.documentElement.scrollHeight ==> 浏览器所有内容高度
document.body.scrollHeight ==> 浏览器所有内容高度
document.documentElement.scrollTop==> 始终为0
document.body.scrollTop==>浏览器滚动部分高度
document.documentElement.clientHeight ==> 浏览器可视部分高度
document.body.clientHeight ==> 浏览器所有内容高度
```

`浏览器所有内容高度`即浏览器整个框架的高度，包括`滚动条卷去部分+可视部分+底部隐藏部分的高度总和`
`浏览器滚动部分高度`即滚动条卷去部分高度即可视顶端距离整个对象顶端的高度。

综上

1. `document.documentElement.scrollTop`和`document.body.scrollTop`始终有一个为0，所以可以用这两个的和来求`scrollTop`
2. `scrollHeight、clientHeight` 在`DTD`已声明的情况下用`documentElement`，未声明的情况下用`body`


*clientHeight*   
在IE和FF下，该属性没什么差别，都是指浏览器的可视区域，即除去浏览器的那些工具栏状态栏剩下的页面展示空间的高度。


#### PageX和clientX

`PageX:`鼠标在页面上的位置,从页面左上角开始,即是以页面为参考点,不随滑动条移动而变化

`clientX:`鼠标在页面上可视区域的位置,从浏览器可视区域左上角开始,即是以浏览器滑动条此刻的滑动到的位置为参考点,随滑动条移动 而变化.

可是悲剧的是,`PageX`只有FF特有,`IE`则没有这个，所以在IE下使用这个：

`PageY=clientY+scrollTop-clientTop;`(只讨论Y轴,X轴同理,下同)

`scrollTop`代表的是被浏览器滑动条滚过的长度

`offsetX:IE特有,鼠标相比较于触发事件的元素的位置,以元素盒子模型的内容区域的左上角为参考点,如果有`boder`,可能出现负值

只有`clientX`和`screenX` 皆大欢喜是W3C标准.其他的,都纠结了.  
最给力的是，`chrome`和`safari`一条龙通杀!完全支持所有属性

![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/bVkTT9_Converted.jpg)#### js拖拽效果

```html
<html lang="zn-CN">
 <head>
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
  <title></title>
  <style type="text/css">
        #login{
            height: 100px;
            width: 100px;
            border: 1px solid black;
            position: relative;
            top:200px;
            left: 200px;
            background: red;
        }
    </style>
 </head>
 <body>
  <div id="login"></div>
  <script type="text/javascript">
    var oDiv = document.getElementById("login");
    oDiv.onmousedown = function(e){
        var e = e || window.event;//window.event兼容IE,当事件发生时有效
        var diffX = e.clientX - oDiv.offsetLeft;//获取鼠标点击的位置到所选对象的边框的水平距离
        var diffY = e.clientY - oDiv.offsetTop;
        document.onmousemove = function(e){ //需设为document对象才能作用于整个文档
            var e = e||window.event;
            oDiv.style.left = e.clientX - diffX + 'px';//style.left表示所选对象的边框到浏览器左侧距离
            oDiv.style.top = e.clientY -diffY + 'px';
        };
        document.onmouseup = function(){
            document.onmousemove = null;//清除鼠标释放时的对象移动方法
            document.onmouseup = null;
        }
    }
</script>
 </body>
</html>
```

`offsetTop` 返回的是数字，而 `style.top` 返回的是字符串，除了数字外还带有单位：`px`。

#### js获取图片原始大小尺寸

```javascript
var img = $("#img_id"); // Get my img elem
var pic_real_width, pic_real_height;
$("<img/>") // Make in memory copy of image to avoid css issues
.attr("src", $(img).attr("src")).load(function() {
	pic_real_width = this.width; // Note: $(this).width() will not
	pic_real_height = this.height; // work for in memory images.
});
```
#### js循环遍历数组

```html
<script>
       //循环遍历数组
       var animals = ["cat",'dog','human','whale','seal'];
       var animalString = "";
       for(var i = 0;i<animals.length;i++){
           animalString += animals[i] + " ";
       }
       alert(animalString);  //输出数组里的每个项
</script> 
```

#### 遍历二维数组

```html
<script>
        var arr=[[0,0,0,0,0,0],[0,0,1,0,0,0],[0,2,0,3,0,0],[0,0,0,0,0,0]];
        for(var i=0;i<arr.length;i++){
         //遍历每一个具体的值
         for(var j=0;j<arr[i].length;j++){
                    document.writeln(arr[i][j]+" ");
              }
            document.writeln("<br/>");
         }
  </script> 
```

#### 阻止表单重复提交

有两种方法可以解决：一是提交之后，立刻禁用点击按钮；第二种就是提交之后取消后续的表单提交操作。

```javascript
//第一次提交后，将按钮禁用
document.getElementById("btn").disabled = true;
```

这种方式只能用于通过提交按钮防止重复提交，还可以使用如下方式：

```javascript
var flag = false; //设置一个监听变量
if (flag == true) {
    return; //退出事件
}
flag = true; //表示提交过一次了
```

字符串部分
-----

#### 在字符串中查找子字符串

```html
<script type="text/javascript">
    var test = 'Welcome to my blog!';
    var value = 'blog';
    var subValue = test.indexOf(value);
    console.log(subValue);//14,子字符串的索引
</script>
```

#### Number和Math部分

数字可以是一个直接量，也可以是一个对象，但是Math对象不同，他没有构造函数，并且其所有的属性和方法都是直接通过这个对象来访问的

#### 把十进制转化为一个十六进制值

```javascript
var num = 255;
console.log(num.toString(16));//ff
```

`js`中，十进制数字以`0x`开头，八进制数字总是以`0`开头

#### 随进产生颜色

```html
<script type = "text/javascript" >
function randomVal(val) {
    return Math.floor(Math.random() * (val + 1));
}
function randomColor() {
    return 'rgb(' + randomVal(255) + ',' + randomVal(255) + ',' + randomVal(255) + ')';
}
</script>
```

目前，所有浏览器都支持`RGB`表示法和十六进制表示法，除了`IE7`，它只支持十六进制表示法

#### 在角度和弧度之间转换

```javascript
var rad = degrees * (Math.PI / 180);
var degrees = rad * (180 / Math.PI);
```

数组部分
----

#### 创建多维数组

```js
var arrayLength = 3; //设置数组长度
//创建数组
var multiArray = new Array(arrayLength);
for (var i = 0; i < multiArray.length; i++) {
	multiArray[i] = new Array(arrayLength);
}
//给第一个数组索引添加项
multiArray[0][0] = 'phone';
multiArray[0][1] = 'book';
multiArray[0][2] = 'TV';
//第二个
multiArray[1][0] = 2;
multiArray[1][1] = 1;
multiArray[1][2] = 98;
//第三个
multiArray[2][0] = ['java', 'python'];
multiArray[2][1] = ['js', 'C++'];
multiArray[2][2] = ['Haskell', 'php'];
```

#### 排序数组

```html
<script type = "text/javascript" >
  var fruits = ['banana', 'apple', 'orange', 'strawberry'];
  console.log(fruits.sort()); //Array [ "apple", "banana", "orange", "strawberry" ]
  var num = [32, 43, 2, 5, -23, 0, 4];
  console.log(num.sort()); //Array [ -23, 0, 2, 32, 4, 43, 5 ]
</script>

```

`Array`对象的`sort`方法会按照字母顺序来排序数组元素。对于数字，是按照字符编码的顺序进行排序

```javascript
function compare(a, b) {
	return a - b;
}
var num = [32, 43, 2, 5, -23, 0, 4];
console.log(num.sort(compare)); //Array [ -23, 0, 2, 4, 5, 32, 43 ] 
```

Date日期时间部分
----------
asd

#### js计算时间差

```javascript
var date1 = new Date(); //开始时间，当前时间
var date2 = new Date(); //结束时间，需传入时间参数
var date3 = date2.getTime() - date1.getTime(); //时间差的毫秒数
//计算出相差天数
var days = Math.floor(date3 / (24 * 3600 * 1000));
//计算出小时数
var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
var hours = Math.floor(leave1 / (3600 * 1000));
//计算相差分钟数
var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
var minutes = Math.floor(leave2 / (60 * 1000));
//计算相差秒数
var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
var seconds = Math.round(leave3 / 1000);
console.log(" 相差 " + days + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒");
```

正则部分
----

#### js实现千分位分隔

```html
<script type = "text/javascript" >
function cc(s) {
	if (/[^0-9\.]/.test(s)) return "invalid value";
	s = s.replace(/^(\d*)$/, "$1.");
	s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
	s = s.replace(".", ",");
	var re = /(\d)(\d{3},)/;
	while (re.test(s)) s = s.replace(re, "$1,$2");
	s = s.replace(/,(\d\d)$/, ".$1");
	return "￥" + s.replace(/^\./, "0.")
} 
</script>
<input onchange="this.value=cc(this.value)" / > 
```

#### js判断传入参数是否为质数

```javascript
function fn(input) {
	input = parseInt(input, 10);
	return isPrime(input) ? 'is prime': 'not prime';
}
function isPrime(input) {
	if (input < 2) {
		return false;
	} else {
		for (var i = 2; i <= Math.sqrt(input); i++) {
			if (input % i == 0) {
				return false;
			}
		}
	}
	return true;
}
```

#### js判断字符串出现最多的字符，并统计次数

```javascript
//js实现一个函数，来判断一个字符串出现次数最多的字符，并统计这个次数
function countStr(str) {
	var obj = {};
	for (var i = 0,
	l = str.length,
	k; i < l; i++) {
		k = str.charAt(i);
		if (obj[k]) {
			obj[k]++;
		} else {
			obj[k] = 1;
		}
	}
	var m = 0,
	i = null;
	for (var k in obj) {
		if (obj[k] > m) {
			m = obj[k];
			i = k;
		}
	}
	return i + ':' + m;
}
```


---

### JavaScript 运算符单竖杠 与数据处理

很多朋友都对双竖杠“||”，了如指掌，因为这个经常用到。但是大家知道单竖杠吗？  
这篇文章里面，js整数的操作运用了单竖杠，问我单竖杠是啥意思？

```typescript
parseInt //在JS整数操作的时候，相当于去除小数点
Math.floor() //在正数的时候
Math.ceil() //负数的时候
```

```typescript
Math.ceil()  //用作向上取整。
Math.floor() //用作向下取整。
Math.round() //我们数学中常用到的四舍五入取整。
console.log(0.6|0)//0
console.log(1.1|0)//1
console.log(3.65555|0)//3
console.log(5.99999|0)//5
console.log(-7.777|0)//-7
```

注：除了Math的三个方法处理数字，我们还经常用parseInt()、parseFloat()、toFixed()与toPrecision() 等等。 简单解释：

toFixed方法用法如下：

```typescript
100.456001.toFixed(2); //100.47
100.456001.toFixed(3); //100.456
Number.prototype.toFixed.call(100.456001,2);  //100.47
```

缺点：用之后就会变成字符串。

toPrecision用法如下：

```typescript
99.456001.toPrecision(5);  //99.456
100.456001.toPrecision(5); //100.46
Number.prototype.toPrecision.call(10.456001,5);  //10.456
```

单竖杠的运算规则
--------

看了上面的例子，大体知道单竖杠可以进行取整运算，就是只保留正数部分，小数部分通过拿掉，但是“|0”，又是如何进行运算的呢，为什么能“|0”能达到取整的目的呢？单竖杠不是0有会是多少呢？

带着这些问题，我们看下面例子：

```typescript
console.log(3|4); //7
console.log(4|4);//4
console.log(8|3);//11
console.log(5.3|4.1);//5
console.log(9|3455);//3455
```

而单竖杠“|”就是转换为2进制之后相加得到的结果。例如我们拿简单的举例：


```text
3|4
转换为二进制之后011|100  相加得到111=7
4|4
转换为二进制之后100 |100  相加得到100=4
8|3
转换为二进制之后1000 |011  相加得到1011=11
```


以此类推，我在这里就不一一列举了，单竖杠“|”运算就是转换为2进制之后相加得到的结果！