---
title: 3种方式创建React组件
date: '2017-02-12T09:29:34+08:00'
status: publish
permalink: /3-ways-to-create-react-components
category: ["react"] 
tag: ["react",'js','component']
author: "max"
excerpt: "ReactJS是一个很棒的JavaScript库，用于在整个网站中重复使用HTML代码段。它通过使用JSX语法将您的常规Javascript代码注入纯HTML代码并通过Babel将其编译为在页面上创建HTML片段的javascript来实现"
featured: false
featuredimage:
  src: "cover.png"
  alt: ""
---
ReactJS是一个很棒的JavaScript库，用于在整个网站中重复使用HTML代码段。它通过使用[JSX](https://facebook.github.io/react/docs/introducing-jsx.html)和[ES6](http://es6-features.org/#Constants)语法将您的常规Javascript代码注入纯HTML代码并通过[Babel](https://babeljs.io/)将其编译为在页面上创建HTML片段的javascript来实现。

**使用CDN导入React和Babel**

您可以通过在HTML的标头标记中包含以下脚本来快速开始使用React：

```html
<!-- React Version 16 -->
<script src="https://unpkg.com/react@16/umd/react.development.js " crossorigin=""></script>
<script src ="https://unpkg.com/react-dom@16/umd/react-dom.development.js "crossorigin></script>
```

此外，您需要包含Babel来编译您的React代码。在其他脚本下面包含以下脚本： 
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
```

#### 方法1：使用CreateClass函数

这种创建反应组件的方法从版本16开始丢弃，仅适用于React 版本15或更早版本。 好了，我们来添加React的脚本：
 ```html
<!--  React Version 15  -->
<script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.js"></script>
<script crossorigin src ="https://cdnjs.cloudflare.com/ajax/libs/react-dom/15.6.1/react-dom.js"></script>
```

首次创建React时，只有一种方法可以声明组件。 让我们构建一个带有h1 a p等简单标签的HTML。 在您的javascript文件/标记中，声明一个变量并使用**React.createClass()**函数来创建一个组件： 
```jsx
const MyComponent = React.createClass ({
   render(){
      return <div>
                <h1> Hello World！</ h1>
                <p>这是我的第一个React组件。</p>
             </ div>
      }
})
```

变量MyComponent现在包含一个可以在网站上的任何位置使用的反应组件。要将该脚本链接到HTML页面，首先必须在页面上具有唯一ID的div元素。 
```html
<div id =“react-component”></div>
```

然后在声明react组件变量后的脚本中，使用带有**2个参**数的ReactDOM.render()函数。 
```jsx
ReactDOM.render( 
    <MyComponent/>, //第一个是react组件
    document.getElementById('react-component') //第二个是Dom元素
)
```

保存并运行HTML文件后，页面应显示没有错误： 
![](https://blog.imaxyoung.com/wp-content/uploads/2017/02/html.jpg)

#### 方法2：使用类


在最新版本里已经支持类。您可以创建一个javascript类extends(又名继承)React的Component类并重写上面的方法： 
```jsx
class MyComponent extends React.Component{
   render() {
      return <div>
                <h1>Hello World!</h1>
                <p> 这是我的第一个React组件 .</p>
             </div>
      }
}
```

#### 方法3：使用无状态组件

实际上它是一个返回React组件的简单函数（而非变量）。在这里，您将看到一些新的ES6语法，它使javascript代码更短，更易于阅读。<br>
首先创建一个名为MyComponent 的[**const**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)并将其设置为等于**function()**,并使用箭头函数**=&gt;**来声明函数逻辑： 

```jsx
const MyComponent = () =>{
      return <div>
                <h1> Hello World！</h1>
                <p>这是我的第一个React组件。</p>
             </div>
      }
```

以上就是创建React组件的3种主要方法！ 最好的学习方法是将它们写出来并在浏览器中进行测试，还有阅读官方[文档](https://facebook.github.io/react/docs/hello-world.html)！ 