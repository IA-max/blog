---
title: 'SOLID 面向对象设计'
date: '2019-11-26T21:04:07+08:00'
status: publish
permalink: /solid-%e9%9d%a2%e5%90%91%e5%af%b9%e8%b1%a1%e8%ae%be%e8%ae%a1
author: admin
excerpt: ''
type: post
id: 2621
category:
    - 理论
tag:
    - 编程原则
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
在程序设计领域， SOLID（单一功能、开闭原则、里氏替换、接口隔离以及依赖反转）是由罗伯特·C·马丁在21世纪早期引入的记忆术首字母缩略字，指代了面向对象编程和面向对象设计的五个基本原则。

当这些原则被一起应用时，它们使得一个程序员开发一个容易进行软件维护和扩展的系统变得更加可能。

<figure class="wp-block-table alignwide"><table class=""><tbody><tr><th>首字母</th><th>指代</th><th>概念</th></tr><tr><th>S</th><td>单一功能原则</td><td>认为对象应该仅具有一种单一功能的概念。</td></tr><tr><th>O</th><td>开闭原则</td><td>认为“软件体应该是对于扩展开放的，但是对于修改封闭的”的概念。</td></tr><tr><th>L</th><td>里氏替换原则</td><td>认为“程序中的对象应该是可以在不改变程序正确性的前提下被它的子类所替换的”的概念。参考契约式设计。</td></tr><tr><th>I</th><td>接口隔离原则</td><td>认为“多个特定客户端接口要好于一个宽泛用途的接口”的概念。</td></tr><tr><th>D</th><td>依赖反转原则</td><td>认为一个方法应该遵从“依赖于抽象而不是一个实例”的概念。  
依赖注入是该原则的一种实现方式。</td></tr></tbody></table>

</figure>#### **1. 单一职责原则**

单一职责原则 (Single Responsibility Principle，SRP) 指出，每个方法或类应当有且仅有一个改变的理由。这意味着每个方法或类应当做一件事情，或者只有一项职责。在所有的SOLID 原则中，这是大多数开发人员感到最能完全理解的一条。严格来说，这也可能是违反最频繁的一条原则了 .

###### 举例

订单和账单上都有流水号、业务时间等字段。如果只用一个类表达，赋予其双重职责，后果:

1. 特有属性和共有属性相互掺杂，难以理解;
2. 修改一个场景可能会影响另一个场景。

正确的做法是拆成两个独立的类。

- - - - - -

#### **2. 开放/ 封闭原则**

开放/封闭原则(Open/Close Principle，OCP)是指软件(方法、类等)应当开放扩充且关闭修改。如果觉得它非常类似于继承的OOP 原则，那就对了。它们之间的关系非常密切。事实上，在 .NET 中OCP 就是依赖于继承的。OCP 的要点在于：作为开发人员，别人偶尔会向我们提供基类，偶尔也会为其他开发人员生成基类框架，供其使用。这些使用者应当仅能使用这些基类，但不能对其进行修改。这一点是必要的，因为其他使用者也可能依赖于由基类提供的功能。如果允许使用者修改这些基类，可能会导致连锁反应，不仅会影响到应用程序中的各方面，还会影响到企业内的应用程序。还有一个问题，使用者有时可能会收到基类的升级版本。使用者在升级之前，必须找出一种方法用来处理其对该基类先前版本中所做的自定义。于是，问题变为：“那么，如果我需要修改这个基类的工作方式，那应当怎么做呢？”OCP 的另一部分中给出这一答案；基类应当开放，可进行扩充。在这里，扩充是指创建一个由此基类继承而来的派生类，它可以扩充或重载基类功能，以提供使用者所需要的特定功能。这样，使用者就能使用类的修改版本，而不会影响到类的其他使用者。使用者还可以在将来更轻松地使用基类的升级版本，因为他们不用担心丢失自己的修改内容。

##### 举例

一个商户接入了多个付款方式，支付宝和微信支付，如果将调用支付API的类写成：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">public class PayHandler {
    public Result<T> pay(Param param) {
        if(param.getType() == "ALIPAY") {
            // 支付宝付款调用
            ...
        } else if(param.getType() == "WeChatPay") {
           // 微信支付付款调用
           ...
        }
    }
}
```

那么每次新加一种支付方式，或者修改原有的其中一种支付方式，都要修改PayHandler这个类，可能会影响现有代码。

比较好的做法是将不同的行为(支付方式)抽象，如下：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">public class PayHandler {
    private Map<String, PayProcessor> processors;
    public Result<T> pay(Param param) {
        PayProcessor payProcessor = processors.get(param.getType());
        // 异常处理略
        return payProcessor.handle(param);
    }
}
interface PayProcessor {
    Result<T> handle(Param param);
}
public class AlipayProcessor implements PayProcessor {
    ...
}
public class WeChatPayProcessor implements PayProcessor {
    ...
}
```

这样，新增支付方式只需要新增类，如果使用的是spring等容器，在xml配置对应key-value关系即可；修改已有的支付方式只需要修改对应的类。最大化地避免了对已有实体的修改。

- - - - - -

#### **3. 里氏替换原则**

继承对于OCP，就相当于多态性对于里氏替换原则(Liskov Substitution Principle，LSP)。LSP 规定：用超类代替应用程序中使用的对象时，应当不会破坏应用程序。这通常也被称为“契约式设计(design by contract)”。回想前面的多态性示例，ComputePay 方法使用了Employee 类型的列表，其中Employee就是基类型(超类型)。Salary、Hourly 和Seasonal 类都是从Employee 继承而来，因此它们是Employee 的子类型。根据LSP，即使已经将列表声明为Employee 的列表，也仍然可以用Salary、Hourly和Seasonal 的具体实例来填充它。因为有了继承，它们都支持Employee 声明的相同契约(公共的方法集或API)。应用程序可以对该列表进行迭代，并调用那些在列表中各个项目的Employee 上定义的方法，不需要知道或特别关心它们都是什么类型。如果它们支持契约，该调用就是合法的。

##### 举例

经典的例子: 正方形不是长方形的子类。原因是正方形多了一个属性“长 == 宽”。这时，对正方形类设置不同的长和宽，计算面积的结果是最后设置那项的平方，而不是长\*宽，从而发生了与长方形不一致的行为。如果程序依赖了长方形的面积计算方式，并使用正方形替换了长方形，实际表现与预期不符。

##### 扩展

不能用继承关系(is-a)，但可以用委派关系(has-a)表达。上例中，可以使用正方形类包装一个长方形类。或者，将正方形和长方形作进一步抽象，使用共有的抽象类。

##### 逸闻

“里氏”指的是芭芭拉·利斯科夫（Barbara Liskov，1939年－），是美国第一个计算机科学女博士，图灵奖、冯诺依曼奖得主，参与设计并实现了OOP语言CLU，而CLU语言对现代主流语言C++/Java/Python/Ruby/C#都有深远影响。其项目中提炼出来的数据抽象思想，已成为软件工程中最重要的精髓之一。

- - - - - -

#### **4. 接口分离原则**

到目前为止，已经在示例中使用了基于类的继承，但还没有过多地讨论接口。回想一下，接口就是在代码中定义的契约，而类同意实现这一契约。这份协议要求类来为接口中定义的所有方法提供实现。至于如何实现方法，则由这个类来决定，只要它遵守契约，支持接口中的定义即可。接口是.NET 中功能非常强大的功能；它们对继承和多态的支持方式与类相同。接口分离原则(Interface Segregation Principle，ISP)规定，不应当强制客户端依赖于其不使用的接口。例如，银行系统可能有一个用于评估信用申请的服务。为便于讨论，假定该服务不仅处理有质押信用(车船贷款、抵押)，也处理无质押信用(信用卡、信用证、股票信用额度)。如果正在开发一个客户端，用于帮助从事汽车代理的金融专员为其客户获得汽车贷款，则只需要关注汽车贷款的申请即可，无需考虑有关这一服务的任何其他事情。如果没有 ISP，应用程序可能必须了解其他方法。尽管乍看起来这并没有什么，但它至少是增加了应用程序的复杂性，因为据以进行开发的 API 中会有许多方法，远远超出所需要的。这样可能会导致混淆，调用错误的方法还可能会导致潜在的错误。还有一种可能， API 中未被应用程序用到的部分可能会改变，而这又会导致对终端的改变。这样，因为没用到、没想用、甚至是根本就不关心的一些功能，而增加了应用程序的维护成本。这种情况还存在安全风险。该应用程序是专用于汽车贷款的。如果不道德的开发人员利用这个过于庞大的 API 来允许利用这一申请担保其他类型的信用，又该怎么办呢？这种问题的严重性就不仅仅是代码瘫痪、不可维护那么简单了。这一问题的解决方案就是专门针对客户端的需要，为该服务创建几个更小的、更精细的接口。对于该示例应用程序，专门设计一个针对汽车贷款的接口是比较适当的做法。应用程序可以用同一实现访问同一个类，但这一次它使用了一个特定的接口，其中仅有实际服务的一部分方法。这样就降低了复杂性，将应用程序与 API 其他部分的修改隔离开来，还有助于堵塞安全漏洞。

##### 举例

仍以商家接入移动支付API的场景举例，支付宝支持收费和退费；微信接口只支持收费。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">interface PayChannel {
    void charge();
    void refund();
}
class AlipayChannel implements PayChannel {
    public void charge() {
        ...
    }
    public void refund() {
        ...
    }
}
class WeChatChannel implements payChannel {
    public void charge() {
        ...
    }
    public void refund() {
        // 没有任何代码
    }
}
```

第二种支付渠道，根本没有退款的功能，但是由于实现了PayChannel，又不得不将refund()实现成了空方法。那么，在调用中，这个方法是可以调用的，实际上什么都没有做!

##### 改进

将PayChannel拆成各包含一个方法的两个接口PayableChannel和RefundableChannel。

- - - - - -

**5. 依赖倒置原则**

在完美世界里，应用程序的组件之间没有耦合关系或绑定关系。开发人员也能够改变自己希望改变的任何东西，而不需要担心在应用程序的其他地方出现缺陷，或者“不希望存在的负面影响”。令人悲伤的是，我们并不是生活在完美世界里。因此，组件需要相互绑定在一起，或者在某一点耦合，以构成实际应用程序。依赖倒置原则(Dependency Inversion Principle，DIP)规定：代码应当取决于抽象概念，而不是具体实现；这些抽象不应当依赖于细节；而细节应当依赖于抽象。类可能依赖于其他类来执行其工作(Employee 服务可能依赖于数据访问组件向数据存储中保存和检索员工信息)。但是，它们不应当依赖于该类的特定具体实现，而应当是它的抽象。也就是说，Employee 服务不知道(或不关心)正在使用哪个具体的数据访问组件——只有它的抽象或代码契约(或接口)支持那些用于保存和检索员工所需要的方法。显然，这一概念会大大提高系统的灵活性。如果类只关心它们用于支持特定契约而不是特定类型的组件，就可以快速而轻松地修改这些低级服务的功能，同时最大限度地降低对系统其余部分的影响。在第6 章，还会看到如何利用这一概念来模拟这些依赖项，以进行测试。有时，需要向类中提供这一低级服务的具体实现，以便这个类能够完成自己的工作。最常见的做法，特别是在.NET 中使用TDD 的开发人员，就是依赖项注入(DI)模式。

##### 举例

开闭原则的场景仍然可以说明这个问题。以下换一种表现形式。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">public class PayHandler {
    public Result<T> pay(Param param) {
        if(param.getType() == "ALIPAY") {
            AlipayProcessor processor = new AlipayProcessor();
            processor.hander(param);
            ...
        } else if(param.getType() == "WeChatPay") {
            WeChatPayProcessor processor = new WeChatPayProcessor();
            processor.hander(param);
           ...
        }
    }
}
public class AlipayProcessor { ... }
public class WeChatPayProcessor { ... }
```

这种实现方式，PayHandler的功能(高层次模块)依赖了两个支付Processor(低层次模块)的实现。

##### 扩展：IOC和DI

控制反转(IOC)和依赖注入(DI)是Spring中最重要的核心概念之一，而两者实际上是一体两面的。

- 依赖注入
  - 一个类依赖另一个类的功能，那么就通过注入，如构造器、setter方法等，将这个类的实例引入。
  - 侧重于实现。
- 控制反转
  - 创建实例的控制权由一个实例的代码剥离到IOC容器控制，如xml配置中。
  - 侧重于原理。
  - 反转了什么：原先是由类本身去创建另一个类，控制反转后变成了被动等待这个类的注入。