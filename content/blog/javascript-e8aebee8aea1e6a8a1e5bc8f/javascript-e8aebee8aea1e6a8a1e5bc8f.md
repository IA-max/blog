---
title: 'JavaScript 设计模式'
date: '2019-11-24T15:11:44+08:00'
status: publish
permalink: /javascript-%e8%ae%be%e8%ae%a1%e6%a8%a1%e5%bc%8f
author: admin
excerpt: ''
type: post
id: 2346
category:
    - Ecmascript
tag:
    - js
    - vue
    - 设计模式
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
- 工厂模式
- 桥接模式
- 组合模式
- 门面模式
- 适配器模式
- 装饰者模式
- 享元模式
- 代理模式
- 观察者模式
- 职责链模式
- 单体模式
- 迭代器模式
- 策略模式
- 外观模式
- 中介者模式

- - - - - -

#### AOP 面向切面编程 (装饰者模式)

AOP(面向切面编程)的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来，这些跟业务逻辑无关的功能通常包括日志统计、安全控制、异常处理等。把这些功能抽离出来之后， 再通过“动态织入”的方式掺入业务逻辑模块中。

**AOP能给我们带来什么好处？**

AOP的好处首先是可以保持业务逻辑模块的纯净和高内聚性，其次是可以很方便地复用日志统计等功能模块。

**JavaScript实现AOP的思路？**

通常，在 JavaScript 中实现 AOP，都是指把一个函数“动态织入”到另外一个函数之中，具体的实现技术有很多，下面我用扩展 Function.prototype 来做到这一点。请看下面代码：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">Function.prototype.before = function (beforefn) {
    var _self = this; //保存原函数引用
    return function () { //返回包含了原函数和新函数的"代理函数"
        beforefn.apply(this, arguments); //执行新函数，修正this
        return _self.apply(this, arguments); //执行原函数
    }
};
Function.prototype.after = function (afterfn) {
    var _self = this;
    return function () {
        var ret = _self.apply(this, arguments);
        afterfn.apply(this, arguments);
        return ret;
    }
};
var func = function () {
    console.log("2")
}
func = func.before(function () {
    console.log("1");
}).after(function () {
    console.log("3");
})
func();
```

执行结果如下：

<figure class="wp-block-image size-large">![](https://blog.imaxyoung.com/wp-content/uploads/2019/11/console1-1024x784.png)</figure>把负责打印数字1和打印数字3的两个函数通过AOP的方式动态植入func函数。通过执行上面的代码，我们看到控制台顺利地返回了执行结果1、2、3。

这种使用AOP的方式来给函数添加职责，也是JavaScript语言中的一种非常特别的巧妙的装饰者模式实现，下面我们来试试Function.prototype.before的威力，请看下面代码：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">Function.prototype.before = function (beforefn) {
    var __self = this; // 保存原函数的引用
    return function () { // 返回包含了原函数和新函数的"代理"函数
        beforefn.apply(this, arguments); // 执行新函数，且保证 this 不被劫持，新函数接受的参数 // 也会被原封不动地传入原函数，新函数在原函数之前执行
        return __self.apply(this, arguments); // 执行原函数并返回原函数的执行结果， 2 // 并且保证 this 不被劫持
    }
}
Function.prototype.after = function (afterfn) {
    var __self = this;
    return function () {
        var ret = __self.apply(this, arguments);
        afterfn.apply(this, arguments);
        return ret;
    }
};
document.getElementById = document.getElementById.before(function () {
    alert(1);
});
var button = document.getElementById('button');
```

给document.getElementById()做了一些装饰，以后我们每次调用这个方法之前都会先执行alert(“1”)这条语句，但是请注意我们这条语句并不是写在了document.getElementById()这个方法的源码中，而只是在他的外部给他加了装饰，这样带来好处就是我们可以在不改变原方法的源码的情况下为他添加一些新的行为。国际惯例，举个栗子：

 我的同事写了一个函数可以输出当前时间，而我现在的需求是输出当前天气之后再输出当前时间，下面有两种解决思路：

- 传统解决办法： 拿同事的函数过来，找到他输出时间的代码，在这些代码之前加入输出当前天气的代码
- 装饰者模式解决办法：拿同事的函数过来，不用看他的源码，直接给他的函数装饰一下，装饰的东西也就是输出当前天气的代码。

两种方法都解决了问题，但是他们的出发点是完全不同的：

- 方法是改造原函数的内部，我们就需要去理解源代码，然后做修改。
- 方法是给原函数添加了一层外套，我们根本不用管原本函数的内部实现。

现在又有了新的需求：在输出当前时间之前，先输出当前温度

- 方法，我们在第一个需求已经把同事的代码改的面目全非了，现在又要重新理解函数内部，并加以修改（删除输出当前天气的代码，然后加入输出当前温度的代码）。
- 方法，同事原本的函数是没有变的，我们现在给同事的函数换一件套（输出当前温度）就可以了。