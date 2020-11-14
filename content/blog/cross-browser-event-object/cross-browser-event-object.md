---
title: '跨浏览器JavaScript 事件处理器—EventUtil'
date: '2014-12-12T14:09:08+08:00'
status: publish
permalink: /cross-browser-event-object
author: admin
excerpt: ''
type: post
id: 162
category:
    - Ecmascript
tag:
    - js
    - 代码片段
    - 兼容性
post_format: []
classic-editor-remember:
    - classic-editor
    - classic-editor
post_views_count:
    - '305'
    - '305'
jnews_social_counter_last_update:
    - '1564774778'
    - '1564774778'
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
深入研究JavaScript
--------------

自上个十年以来，Web开发发生了迅速的变化，并且台式机，移动设备，平板电脑等各种设备的兴起。用于上网的Web浏览器的数量也在增加。由于不同的浏览器可以以不同的方式解释CSS和HTML代码，因此这对设计人员和开发人员提出了不同的挑战。其背后的原因是每个浏览器都有一个独特的渲染引擎，以与众不同的方式渲染Web元素。CSS HTML和JavaScript是3层逐步增强功能。渐进增强是一种创建与跨浏览器兼容的网页设计的技术，其中在开发时的最高优先级是保留核心网页内容，而其他复杂的附件和功能仍然是次要的。在1990年代引入JavaScript时，存在着重大的跨浏览器兼容性问题，因为每个浏览器开发公司都有自己的脚本实现方式，而这样做主要是为了赢得市场支配地位。尽管现在不会发生此类问题，但是使用JavaScript处理跨浏览器的兼容性问题仍然可能对开发人员造成噩梦。

当开发人员具有不支持旧浏览器的网页功能，使用不正确的DOCTYPE或浏览器嗅探代码的实现不正确/不正确时，JavaScript代码问题通常会发生。除非实现了处理JavaScript（或其他脚本语言）的标准机制，否则跨浏览器与JavaScript兼容的问题将继续存在。让我们研究一下JavaScript的跨浏览器兼容性问题，并了解一些有关修复它们的机制。

#### JavaScript跨浏览器兼容性

所有浏览器对脚本的处理方式都不同。因此，所有报告JavaScript错误的方式都不同。不幸的是，直到所有网络浏览器开发人员就处理JavaScript或其他任何脚本语言的一套标准达成共识，我们才会看到JavaScript错误。

为了进一步说明这一点，在这里，我们将首先讨论一些常见的JavaScript问题，然后特别讨论跨浏览器的JavaScript问题。

常见的JavaScript问题

**内存泄漏**是开发人员面临的常见问题之一。内存泄漏仅表示不再使用该应用程序先前使用的内存。但是，由于某些原因（例如，对全局变量的不正确处理，DOM引用之外等）；分配的内存不会返回到“空闲”内存池。内存泄漏的一些常见原因是对全局变量的错误处理和DOM引用的错误。  
 “ Chrome浏览器性能分析工具”可用于内存性能分析以及识别内存泄漏。以下是运行中的Chrome内存分析的示例快照。

<figure class="wp-block-image size-large">![](https://blog.imaxyoung.com/wp-content/uploads/2019/11/3-1-1024x410.jpg)</figure>- JavaScript按照在文档中出现的顺序执行代码。因此，**仅在加载代码时引用代码**就变得很重要。如果您在加载代码之前先对其进行引用，则该代码将导致错误。
- 与其他语言不同，如果将**“参数数量错误”**传递给JavaScript中的函数，则不会引发任何错误。如果这些参数是可选的，则可以毫无问题地执行您的代码。当在功能中使用这些参数而未使用它们会改变功能时，可能会导致问题。建议采用统一的命名约定，以便轻松识别此类问题。
- **平等运算符**是JavaScript的基础，但必须精确使用。“赋值/等于运算符”（==）和“严格等于运算符”（===）之间是有区别的。这些主要用于条件语句中，并且意外地使用（==）而不是（===）会导致功能问题。为了研究这种愚蠢而昂贵的错误，需要进行彻底的代码演练。
- **根据变量**的作用域（局部和全局）使用**变量**。确保对不同类型的变量使用一致的命名约定，以便于维护代码。  
  确保您的源代码没有任何**语法问题**。
- 在JavaScript中**添加DOM元素**被认为是一项昂贵的操作。使用它的主要原因是因为JavaScript使实现DOM变得容易。在某些情况下，您需要连续添加DOM元素，但这不是一个好习惯。在这种情况下，您可以改用文档片段，因为它具有出色的效率和性能。
- **JavaScript数组中**的起始索引为0而不是1。如果打算创建一个包含10个元素的数组，则应声明一个索引为9（数组元素0..9）而不是10（数组元素0..10）的数组。 ）。引用超出范围的数组元素将导致错误。
- 在**同步操作中**实施耗时的任务可能会降低网页/ Web应用程序的性能。确保将逻辑移至**异步操作，**以免占用CPU。由于该操作本质上是异步的，因此在使用该操作中使用的变量时必须小心，因为它们可能没有反映最新的值（因为异步操作可能仍在执行中）。建议开发人员使用**Promise对象**，该**对象**返回异步操作完成的状态（成功/失败）。Promise的示例代码如下所示

<div class="wp-block-image is-style-default"><figure class="aligncenter size-large">![](https://blog.imaxyoung.com/wp-content/uploads/2019/11/8-1.png)</figure></div> 错误使用**“循环内的功能”，**从而导致功能中断。

JavaScript最佳做法

下是一些JavaScript的最佳做法：

- 始终在顶部声明。
- 遵循变量，函数等的正确命名约定。
- 在整个代码中始终使用“注释”。
- 使用var关键字声明局部变量。
- 始终初始化变量。
- 不要声明字符串，数字或布尔对象。
- 在switch .. case语句中始终具有“默认大小写”。
- 请仔细查看==和===运算符的用法。确保在正确的位置使用它们。
- 将脚本放在页面底部。

解决兼容性的Javascript框架
------------------

众所周知的事实是，与应用程序/网站的大小或复杂性无关，您的Web应用程序或网站将存在跨浏览器兼容性问题。从上面提到的观点可以看出，跨浏览器兼容性问题在使用JavaScript时会更加严重。但这并不意味着您可以避免使用JavaScript！

存在多个促进跨浏览器兼容网站开发的JS框架。一些最著名的是：

- React JS
- Angular JS
- Vue JS
- Ionic
- Ember JS

 这些框架有助于解决JavaScript的跨浏览器兼容性问题。它们还帮助开发人员创建一个单页面应用程序，该应用程序可在不同的浏览器（Google Chrome，Mozilla Firefox，Safari等）中兼容。

#### 解决常见的JavaScript问题

**使用Linters**  
遵循HTML和CSS的脚步，Linters可以为您提供更好的质量和更少的错误代码。他们还会显示有关不良做法的警告，并且可以对其进行严格或宽容的定制。

**使用JavaScript调试器和其他浏览器开发人员工具**  
已经发现浏览器开发人员工具对于调试JavaScript很有帮助。对于初学者，JavaScript控制台将报告您的代码中的错误。这种工具的一个显着特征是能够向代码添加断点。在断点处，您可以方便地判断环境的当前状态，并查看发生了什么以及需要采取什么措施。

**其他一些性能问题**  
使用Browserify之类的工具制作单个脚本脚本可以节省加载不必要的JavaScript的麻烦。此外，还发现减少HTTP请求的数量对于提高性能非常有效。在使用API​​时，建议在不积极使用API​​功能时将其关闭，因为它们确实会增加电源负担。同样，动画对性能的要求可能很高。许多JavaScript库提供由JavaScript编程的动画功能，但是更好的方法是使用本机浏览器功能来制作动画。

特征检测  
HTML和CSS以其宽容的性质而闻名，但JavaScript在出错方面没有太多余地。如果JavaScript引擎发现错误或语法无法识别，则很可能会显示错误消息。该语言的许多现代功能在旧的浏览器中不起作用。’Promises’和’Typed Arrays’是两个很好的例子。同样，“箭头函数”为编写匿名函数提供了更短，更方便的语法。但是，Internet Explorer和Safari不支持它，如果您在代码中使用它，则可能会给您带来麻烦。

这个想法是首先运行一个测试，以判断活动浏览器是否支持某个功能。接下来是代码的有条件执行，以为所有浏览器提供所需的体验，而无论它是否支持该功能。

使用库  
在选择用于编码的库时，开发人员必须确保该库可在您希望应用程序支持的一组浏览器上正常工作，并进行全面的测试。此外，您应确保该库受欢迎且得到了良好的支持，并且不太可能很快就过时！

Polyfills  
实际上，Polyfill是一段代码或一个插件，可提供浏览器本应支持的技术。它们通常由外部JavaScript文件组成，您可以在自己的项目中随时使用它们。但是，它们与库有很大不同。一方面，在库倾向于补充现有功能并简化开发人员生活的情况下，polyfills提供了根本不存在的功能支持。

开发人员在想使用现代JavaScript功能时已经开始探索的另一种选择是将具有ECMAScript 6 / ECMAScript 2015功能的代码转换为与旧版浏览器兼容的版本。这称为JavaScript Transpiling。

错误的浏览器嗅探代码  
Web浏览器有一个用户代理字符串，其功能是确定浏览器是什么。回到以前，当Netscape或Internet Explorer曾经是唯一的选择时，开发人员利用“浏览器嗅探代码”找出用户使用的浏览器，并为其提供正确的代码以在其上工作。

[跨浏览器兼容性](https://www.lambdatest.com/)不再是开发人员的选择。它是开发过程中必不可少的部分，需要样式或脚本同样注意（如果没有更多！）。JavaScript很简单。只需注意一点细节，您就可以启动一个摇摆的应用程序，它将在所有可用平台上完美运行！

为了以跨浏览器的方式处理事件，除了使用隔离浏览器差异的js库，还可以自己编写适合的自己的事件处理方式

```
<pre class="EnlighterJSRAW" data-enlighter-language="js">var EventUtil={
     addHandler:function(element,type,handler){     //添加事件
       if(element.addEventListener){
          //使用DOM2级方法添加事件
          element.addEventListener(type,handler,false);
       }else if(element.attachEvent){
          //使用IE方法添加事件
          element.attachEvent("on"+type,handler);
       }else{
          //使用DOM0级方法添加事件
          element["on"+type]=handler;
       }
    },
    removeHandler:function(element,type,handler){   //取消事件
       if(element.removeEventListener){
          element.removeEventListener(type,handler,false);
       }else if(element.detachEvent){
          element.detachEvent("on"+type,handler);
       }else{
          element["on"+type]=null;
       }
    },
    getEvent: function (event){
       return event ? event : window.event;
    },
    getTarget: function (event){
       return event.target || event.srcElement;
    },
    preventDefault: function (event) {
       if (event.preventDefault) {
            event.preventDefault();
       } else {
            event.returnValue = false;
       }
    },
    removeHandler: function(element, type, handler) {
       if (element.removeEventListener) {
           element.removeEventListener (type, handler, false);
       } else if (element.detachEvent) {
           element.detachEvent ("on" + type, handler);
       } else {
           element["on" + type] = null;
       }
    },
    stopPropagation: function (event) {
       if( event.stopPropagation ) {
                event.stopPropagation();
       } else {
                event.cancelBubble = true;
       }
    },
    getRelatedTarget:function(event){
        //获取mouseover和mouseout相关元素
        if(event.relatedTarget){
             return event.relatedTarget;
        }else if(event.toElement){
            //兼容IE8-
            return event.toElement;
        }else if(event.formElement){
            return event.formElement;
        }else{
            return null;
        }
     },
     getButton:function(event){
     if(document.implementation.hasFeature("MouseEvents","2.0")){
               return event.button;
           }else{
               switch(event.button){
                      case 0:
                      case 1:
                      case 3:
                      case 5:
                      case 7:
                           return 0;  //按下的是鼠标主按钮（一般是左键）
                      case 2:
                      case 6:
                           return 2;  //按下的是中间的鼠标按钮
                      case 4:
                           return 1;  //鼠标次按钮（一般是右键）
                }
            }
     },
     getWheelDelta:function(event){
       //获取表示鼠标滚轮滚动方向的数值
       if(event.wheelDelta){
           return event.wheelDelta;
       }else{
           return -event.detail*40;
       }
     },
     getCharCode:function(event){
        if(typeof event.charCode=="number"){
           return event.charCode;
        }else{
           return event.keyCode;
        }
     }
}
```