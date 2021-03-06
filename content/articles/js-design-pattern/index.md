---
title: "JavaScript 设计模式"
date: "2019-11-24"
featured: false
category: "js"
excerpt: "AOP(面向切面编程)的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来，这些跟业务逻辑无关的功能通常包括日志统计、安全控制、异常处理等。把这些功能抽离出来之后， 再通过“动态织入”的方式掺入业务逻辑模块中"
tag: ["js","design pattern"]
status: "publish"
type: "post"
cover: "./index-design-patterns.png"
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

```js
Function.prototype.before = function (beforefn) {
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

![](./p1.png)
把负责打印数字1和打印数字3的两个函数通过AOP的方式动态植入func函数。通过执行上面的代码，我们看到控制台顺利地返回了执行结果1、2、3。

这种使用AOP的方式来给函数添加职责，也是JavaScript语言中的一种非常特别的巧妙的装饰者模式实现，下面我们来试试Function.prototype.before的威力，请看下面代码：

```js
Function.prototype.before = function (beforefn) {
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

1. `传统解决办法`： 拿同事的函数过来，找到他输出时间的代码，在这些代码之前加入输出当前天气的代码
2. `装饰者模式解决办法`：拿同事的函数过来，不用看他的源码，直接给他的函数装饰一下，装饰的东西也就是输出当前天气的代码。

两种方法都解决了问题，但是他们的出发点是完全不同的：

- 方法是改造原函数的内部，我们就需要去理解源代码，然后做修改。
- 方法是给原函数添加了一层外套，我们根本不用管原本函数的内部实现。

现在又有了新的需求：在输出当前时间之前，先输出当前温度

- 方法，我们在第一个需求已经把同事的代码改的面目全非了，现在又要重新理解函数内部，并加以修改（删除输出当前天气的代码，然后加入输出当前温度的代码）。
- 方法，同事原本的函数是没有变的，我们现在给同事的函数换一件套（输出当前温度）就可以了。


**模式**是对某情景下，针对某种问题的某种解决方案。而一个设计模式是用来解决一个经常出现的设计问题的经验方法。这么说来，每个模式都可能有着自己的**意图**，**应用场景**，**使用方法**和**使用后果**。本文的行文思路和目的皆在于了解各个模式的**定义**，**应用场景**和**用实例说明如何在前端开发中使用**。

关于模式的分类，是为了建立起模式之间的关系。本文采用最广为人知的分类：**创建型**、**行为型**、**结构型**来叙述。

### 创建型

- - - - - -

将对象实例化，这类模式都提供一个方法，将客户从所需要的实例化的对象中解耦。

#### 策略模式（Strategy）

策略模式定义了算法组，分别封装起来，让他们之间可以互相替换，此模式让算法的变化独立于使用算法的客户。

![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/01/Strategy-1024x655.png)
策略模式
使用场景: 要达到某一个目的，根据具体的实际情况，选择合适的方法。适合于实现某一个功能有多种方案可以选择的情景。

实现  
策略类的组成：

- 一组策略类，策略类封装了具体的算法，并负责具体的计算过程；
- 环境类：负责接收客户的请求，并把请求委托给某一个策略类；

**一个按不同等级计算年终奖的例子**

```js
// 策略组
var strategies = {
    "S": function(salary){
        return salary * 4;
    },
    "A": function(salary){
        return salary * 3;
    },
    "B":function(salary){
        return salary * 2
    }
};
// 内容组
var calculateBonus = function(level,salary){
    return strategies[level](salary);
}
// 执行
console.log(calculateBonus('S',20000)); // 输出：80000<br></br><br></br>console.log(calculateBonus('A',10000)); // 输出：30000
```

#### 单件模式（Singleton）

**定义**  
单件模式确保一个类只有一个实例，并提供一个全局访问点。  
**使用场景** 用于创建独一无二的，只能有一个实例的对象，单件模式给了我们一个全局的访问点，和全局变量一样方便又没有全局变量的缺点。  
**实现**  
没有公开的构造器，利用延迟实例化的方式来创建单件，这种做法对资源敏感的对象特别重要。  
**传统语言的实现：**

![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/01/singleton-1024x470.png)
单件模式类图
而对JavaScript而言，并无类的概念，因此要实现它的核心，确保只有一个实例并提供全局访问。但是把全局变量当成单例来使用容易造成命名污染。  
防止命名空间污染的方法：

使用命名空间  
使用闭包封装私有变量

JavaScript惰性单例  
惰性单例指的是在需要的时候才创建对象单例

```js
// 单例模式
var getSingle = function(fn){
    var result;
    return function(){
        return result || (result = fn.apply(this,arguments))
    }
};
var createLoginLayer = function(){
    var div = document.createElement('div');
    div.innerHTML = '我是登陆窗';
    div.style.display = 'none';
    document.body.appendChild(div);
}
var createSingleLoginLayer = getSingle(createLoginLayer);
```

#### 工厂模式（Factory）

工厂方法模式定义了一个创建对象的接口，但由子类决定要实例化的类是哪一个，工厂方法让类把实例化推迟到子类。

![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/01/factory-1024x612.png)
工厂模式类图
使用场景: 创建新对象，且该对象需要被被封装。

工厂模式通过让子类来决定该创建的对象是什么，来达到将对象创建的过程封装的目的。

创建对象的方法使用的是继承，用于创建一个产品的实例；

```js
var XMLHttpFactory =function(){};　　　　　　//这是一个简单工厂模式
　　XMLHttpFactory.createXMLHttp =function(){
　　　 var XMLHttp = null;
　　　　if (window.XMLHttpRequest){
　　　　　　XMLHttp = new XMLHttpRequest()
　　　 }else if (window.ActiveXObject){
　　　　　　XMLHttp = new ActiveXObject("Microsoft.XMLHTTP")
　　　　}
　　return XMLHttp;
　　}
　　//XMLHttpFactory.createXMLHttp()这个方法根据当前环境的具体情况返回一个XHR对象。
　　var AjaxHander =function(){
　　　　var XMLHttp = XMLHttpFactory.createXMLHttp();
　　　　...
　　}
```

#### 抽象工厂模式（Abstract Factory）

提供一个接口，用于创建相关或依赖对象的家族，而不需要明确指定具体类。

![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/01/afactory.png)

抽象工厂类图
使用场景: 定义一个负责创建一组产品的接口，这个接口内的每一个方法都负责创建一个具体产品。抽象工厂的方法通常以工厂方法的方式实现。

创建对象的方法使用的是组合，把一群相关的产品集合起来，类似于工厂里有一个个的车间。用于创建一组产品。

```js
var XMLHttpFactory =function(){};　     //这是一个抽象工厂模式
XMLHttpFactory.prototype = {
　　//如果真的要调用这个方法会抛出一个错误，它不能被实例化，只能用来派生子类
　　createFactory:function(){
  　　throw new Error('This is an abstract class');
　　}
}
var XHRHandler =function(){}; //定义一个子类
// 子类继承父类原型方法
extend( XHRHandler , XMLHttpFactory );
XHRHandler.prototype =new XMLHttpFactory(); //把超类原型引用传递给子类,实现继承
XHRHandler.prototype.constructor = XHRHandler; //重置子类原型的构造器为子类自身
//重新定义createFactory 方法
XHRHandler.prototype.createFactory =function(){
　　var XMLHttp =null;
　　if (window.XMLHttpRequest){
  　　XMLHttp =new XMLHttpRequest();
　　}else if (window.ActiveXObject){
  　　XMLHttp =new ActiveXObject("Microsoft.XMLHTTP")
　　}
　　return XMLHttp;
}
```

### 行为型

- - - - - -

> 类和对象如何交互和分配职责

模板模式(Template)  
在一个方法中定义一个算法的骨架，而将一些步骤延迟到子类中。模板方法使得子类可以在不改变算法结构的情况下，重新定义算法中的某些步骤。模板就是一个方法，这个方法将算法定义为一个步骤，其中的任何步骤都可以是抽象的，由子类负责实现。  
使用场景  
适用于算法的结构保持不变，同时由子类提供部分实现的情况。常被架构师用于搭建项目的框架，架构师定好了骨架，程序员继承了骨架的结构之后，负责往里面填空。  
钩子是一种被声明在抽象类中的方法，只有空的或默认的实现。钩子的存在，可以让子类有能力对算法的不同点进行挂钩。要不要挂钩，由子类决定（可选）。在容易变化的地方放置钩子，钩子可以有一个默认的实现，但是究竟要不要“挂钩”，这由子类自行决定。  
实现

![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/01/module.png)

模块方法模式类图
一个经典的coffee or tea的例子

```js
// 创建抽象父类
var Beverage = function(){};
Beverage.prototype.boilWater = function(){
    console.log('把水煮沸');
};
// 三个空方法，由子类实现
Beverage.prototype.brew = function(){};
Beverage.prototype.pourIncup = function(){};
Beverage.prototype.addCondimwnts = function(){};
// 实现顺序
Beverage.prototype.init = function(){
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
};
// 实现煮咖啡
var Coffee = function(){};
Coffee.prototype = new Beverage();
Coffee.prototype.brew =function(){
    console.log('煮咖啡');
};
Coffee.prototype.pourIncup = function(){
    console.log('coffee倒入杯子');
};
Coffee.prototype.addCondiments = function(){
    console.log('加糖和牛奶');
};
var coffee = new Coffee();
coffee.init();
// 实现怕茶
var Tea = function(){};
Tea.prototype = new Beverage();
Tea.prototype.brew =function(){
    console.log('泡茶');
};
Tea.prototype.pourIncup = function(){
    console.log('tea倒入杯子');
};
Tea.prototype.addCondiments = function(){
    console.log('加柠檬');
};
var tea = new Tea();
tea.init();
```

#### 命令模式(Command)

定义  
命令模式将请求封装成对象，以便使用不同的请求、队列或者日志来参数化其他对象，命令模式也支持可撤销的操作。  
使用场景  
有时候需要向某些对象发送请求，但是并不知道请求的接受者是谁，也不知道请求的操作是什么，将‘对象的请求者‘从’命令的执行者’中解耦。使用此模式的优点还在于，command对象拥有更长的生命周期，可以在程序运行的任何时刻去调用这个方法。  
实现  
命令模式将动作和接受者包进对象中。这个对象只暴露出一个execute()方法，当此方法被调用的时候，接受者就会进行这些动作。从外面来看，其它对象不知道究竟哪个接受者进行了这些动作，只知道如果调用execute()方法，请求目的就达到了。

![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/01/commander-1024x762.png)

命令模式类图
命令模式的由来，其实是回调函数的一个面向对象的替代品，命令模式早已融入到了JavaScript语言之中。

```js
// 命令模式
// 具体的命令执行动作（厨师炒菜）
var MenuBar = {
    refresh:function(){
        console.log('刷新菜单界面')
    }
}
// 传递命令（把菜单给厨师）
var RefreshMenuBarCommand = function(receiver){
    return{
        execute:function(){
            receiver.refresh();
        }
    }
}
// 可见的命令（菜单）
var setCommand = function(button,command){
    button.onclick = function(){
        command.execute()
    }
}
// 请求命令（点餐）
var refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar);
// 执行命令（在顾客不可见的情况下，厨师炒菜）
setCommand(button1,refreshMenuBarCommand)
```

#### 迭代器模式（Iterator）

定义  
迭代器模式提供一种方法顺序访问一个聚合对象中的各个元素，而又不暴露其内部的表示，有内部迭代器和外部迭代器之分，其中内部迭代器全接手整个迭代过程，外部只需要一次初始调用，而外部迭代器必须显式的请求下一个元素。  
使用场景  
需要顺序访问一个组合内的多个对象的时候使用。  
实现

![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/01/ilterator-1024x879.png)

迭代器模式类图
一个对比对象的例子

```js
var Iterator = function(obj){
    var current = 0;
    var next = function(){
        current + = 1;
    };
    var isDone = function(){
        return current >=obj.length;
    };
    var getCurrItem = function(){
        return obj[current];
    };
    return{
        next:next,
        isDone:isDone,
        getCurrItem:getCurrItem
    }
}
var compare = function(iterator1,iterator2){
    while(!iterator1.isDone() && !iterator2.isDone()){
        if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
            throw new Error('iteraor1和iteraor2不相等');
        }
        iterator1.next();
        iterator2.next();
    }
    alert('二者相等');
}
var iterator1 = Iterator([1,2,3]);
var iterator2 = Iterator([1,2,3]);
compare(iterator1,iterator2);
```

#### 观察者模式（Observer）

定义  
又称发布-订阅模式，定义了对象之间的一对多依赖，这样一来，当一个对象改变状态时，它的所有依赖者都会收到通知并自动更新。

![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/01/observer-1024x681.png)

观察者模式类图
使用场景: 帮你的对象知悉现状，不会错过该对象感兴趣的事情，对象甚至可以在运行时决定是否需要继续被通知，就像你关注了京东商城某款产品的降价信息，当该商品降价，你就会通过短信或者邮件获得通知，而不用你每天都登陆去看了，这种情况下，京东商城就是主题（subject），作为客户的你就是观察者了。

主题是具有状态的对象，并且可以控制这些状态；  
观察者使用这些状态，虽然这些状态不属于它们；  
主题和观察者之间数据的传输有推（push）和拉（pull）两种，推得方式被认为更加正确；  
广泛应用在异步编程中；  
二者之间通过松耦合联系在一起；

实现

指定好主题（发布者）；  
给主题一个缓存列表，用于存放回调函数以便通知观察者；  
发布消息时，主题遍历缓存列表，触发里面存放的订阅者回调函数；  
订阅者接受信息，各自处理；

一个获取房价信息变化的例子

```js
var salesOffice = {};   //定义售楼处
salesOffice.clienList = [];  //缓存列表，存放订阅者的回调函数
// 注册为观察者
salesOffice.listen = function(key,fn){
    if (!this.clienList[key]) {
        this.clienList[key]=[];  // 如果还没有订阅过此消息，给该类消息订阅一个缓存列表
    }
    this.clienList[key].push(fn); //订阅的消息添加进消息缓存列表
};
// 不再观察
salesOffice.remove = function(key,fn){
    var fns = this.clienList[key];
    if (!fns) {
        return false; // 无人关注此类消息，直接返回；
    }
    if (!fn) {
        fns&&(fns.length = 0 ); // 没有传入具体的回调函数，表示需要取消key对应消息的所有订阅
    }else{
        for ( var l = fns.length-1; l >=0;l--){
            var _fn = fns[l];
            if (_fn===fn) {
                fns.splice(l,1); // 删除对应订阅
            }
        }
    }
};
// 通知函数
salesOffice.trigger = function(){ // 发布消息
    var key = Array.prototype.shift.call(arguments), // 取出消息类型
    fns = this.clienList[key]; // 取出该消息对应的函数集合
    if (!fns || fns.length === 0) {
        return false; // 如果没有订阅，则返回
    }
    for(var i = 0 , fn; i<fns.length ;fn = fns[i++];){
        fn.apply(this,arguments); // arguments 是发布消息时的参数
    }
};
salesOffice.listen('squareMeter88'),fn1 = function(price){
    console.log('价格='+ price + 'call' + '小明');
};
salesOffice.listen('squareMeter110'),fn2 = function(price){
    console.log('价格='+ price + 'call' + '小红');
};
salesOffice.remove('squareMeter88', fn1); //删除小明的订阅
salesOffice.trigger('squareMeter110',3000000);
```

状态模式（State）  
定义  
允许对象在内部状态改变时改变它的行为，对象好像看起来修改了它的类。  
使用场景  
解决某些需要场景的问题。  
实现

将状态封装为独立的类，并将请求委托给当前的状态对象，当对象的内部状态改变时，会带来不同的行为变化；  
不同的状态下有不同的行为；  
状态模式的关键是把事物的每种状态封装为单独的类，跟状态有关的行为被封装在这个类的内部。

```js
var light = function(){
    this,currState = FSM.off;//设计默认状态
    this.button = null;
};
Light.prototype.init = function(){
    var button = document.createElement('button'),
    self = this;
    button.innerHtml = '已关灯';
    this.button = document.body.appendChild(button);
    this.button.onclick = function(){
        self.currState.buttonWasPress.call(self);
    }
};
var FSM = {
    off:{
        buttonWasPress:function(){
            console.log('关灯');
            this.button.innerHTML = '下一次按我是开灯'；
            this.currState = FSM.on;
        }
    },
    on:{
        buttonWasPress:function(){
            console.log('开灯');
            this.button.innerHTML = '下一次点击是关灯';
            this.currState = FSM.off;
        }
    }
};
var light = new Light();
light.init();
```

### 结构型

- - - - - -

> 把类和对象组合到更大的结构中

#### 装饰者模式（Decorator）

定义  
动态的将责任附加到对象上。它比继承更具有弹性。

![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/01/decorator-1024x770.png)

装饰者模式

缺点：
- 在设计中加入大量的小类，导致别人不理解设计方式；
- 类型问题；
- 增加代码的复杂度

使用场景  
增加行为到包装对象上，在不改变对象自身的基础上，在程序运行期间给对象动态的添加职责，比如说点了一杯咖啡，添加其它调料的过程，或者类似于在炒菜的过程中，加油加盐加料酒的过程。  
实现

装饰者和被装饰者具有一样的类型，也就是有共同的超类；  
新的行为由组合对象得到；  
行为来自装饰者和基础组件，或与其它装饰者之间的组合关系；

![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/01/1031000-72fa9b6ad6555ab1-1024x535.png)
装饰者模式的实现
一个冲咖啡的例子

```js
// 被装饰者
var coffee = function(){
    make:function(){
        console.log('冲咖啡');
    }
}
//装饰者1
var sugerDecorator = function(){
    console.log('加糖');
}
// 装饰者2
var milkDecorator = function(){
    console.log('加奶');
}
var coffee1 = coffee.make;
coffee.make = function(){
    coffee1();
    sugerDecorator();
}
var coffee2 = coffee.make;
coffee.make = function(){
    coffee2();
    milkDecorator();
}
coffee.make(); // 冲咖啡加糖加奶
```

#### 代理模式（Proxy）

定义  
代理模式为另一个对象提供一个替身或占位符以控制对这个对象的访问  
使用场景  
使用代理模式创建对象，让代表对象控制某对象的访问，被代理的对象可以是远程的对象，创建开销大的对象或者需要安全控制的对象。

保护代理用于过滤掉一些请求；  
虚拟代理把一些开销大的请求延迟到真正需要它的时候才去创建（最常用）；

使用方法  
类图

![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/01/proxy.png)
代理模式类图
一个图片预加载的例子

```js
var myImage = (function(){
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return{
        setSrc:function(src){
            imgNode.src = src;
        }
    }
})();
var proxyImage = (function(){
    var img = new Image;
    img.onload = function(){
        myImage.setSrc(this.src)
    }
    return{
        setSrc:function(src){
            myImage.setSrc('../loading.gif');
            img.src = src;
        }
    }
})();
proxyImage.setSrc('http;//.../123.jpg');
```

#### 外观模式（Facade）

定义  
提供了一个统一的接口  
适合场景  
通过实现一个提供更合理的接口的外观类，可以将一个复杂的子系统变得容易使用，不仅简化了接口，也将客户从组件中解耦。  
适配器模式（Adapter）  
定义  
又名包装器，适配器模式将一个类的接口，转换为客户期望的另一个接口，适配器让原本接口不兼容的类可以合作无间。  
类图

![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/01/facade-1024x547.png)
外观模式类图
适应场景  
包装某些对象，让它们的接口看起来不像自己而像是被的东西，将类的接口转为想要的接口，以便实现不同的接口；就像你买了港版手机，附带的港版的充电器，你需要一个转接头才能使用，这个转接头的功能就类似于适配器。  
值得注意的是这是一种亡羊补牢的措施。  
实现

客户通过目标接口调用适配器的方法对适配器发出请求；  
适配器使用被适配者接口把请求转换为被被适配者的一个或多个接口；  
客户接受到调用的结果，但是并未察觉这一切是适配器在起作用。

对象适配器类图

![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/01/adapter-1024x477.png)
对象适配器模式类图
![](https://www.blog.imaxyoung.com/wp-content/uploads/2019/01/classAdapter-1024x456.png)
类适配器模式类图
一个适配器实例

```js
// 适配器模式
var googleMap = {
    show:function(){
        console.log('开始渲染谷歌地图')
    }
};
var baiduMap = {
    display:function(){
        console.log('开始渲染百度地图')
    }
};
var baidumapAdapter = {
    show : function(){
        return baiduMap.display();
    }
};
renderMap(googleMap);
renderMap(baiduMapAdapter);
```