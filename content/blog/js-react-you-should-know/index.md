---
title: 'React - 那些你应该知道的'
date: '2019-12-03T18:44:58+08:00'
status: private
permalink: /react-interview
category: ["js"] 
tag: ["js","react"]
author: "max"
excerpt: "React是一个**开放源代码的前端JavaScript库**，用于构建用户界面，尤其是单页应用程序"
featured: false
image: 
featuredimage:
  src: "none.png"
  alt: ""
---
### 什么是React？

React是一个**开放源代码的前端JavaScript库**，用于构建用户界面，尤其是单页应用程序。它用于处理Web和移动应用程序的视图层。React是由Facebook的软件工程师Jordan Walke创建的。React于2011年首次部署在Facebook的News Feed上，2012年首次部署在Instagram上。

### React的主要功能是什么？

React的主要特点是：

- 考虑到RealDOM操作昂贵，它使用**VirtualDOM**代替RealDOM。
- 支持**服务器端渲染**。
- 遵循**单向**数据流或数据绑定。
- 使用**可重用/可组合的** UI组件来开发视图。

### 什么是JSX？

*JSX*是ECMAScript的类似XML的语法扩展（缩写是*JavaScript XML*）。基本上，它只是为该`React.createElement()`函数提供语法糖，从而使我们能够像使用模板语法一样具有HTML的JavaScript表现力。

在下面的示例中，`<h1>`标记内的文本作为JavaScript函数返回到render函数。

```jsx
class App extends React.Component {
  render() {
    return(
      <div>
        <h1>{'Welcome to React world!'}</h1>
      </div>
    )
  }
}
```

### Element和Component有什么区别？

一个*元素*是描述你要在DOM节点或其他部件方面出现在屏幕上的简单对象。  
*元素*可以在其道具中包含其他*元素*。  
创建一个React元素很便宜。创建元素后，就永远不会对其进行突变。

React Element的对象表示如下：

```jsx
const element = React.createElement(
  'div',
  {id: 'login-btn'},
  'Login'
)
```

 上面的`React.createElement()`函数返回一个对象：

```jsx
{
  type: 'div',
  props: {
    children: 'Login',
    id: 'login-btn'
  }
}
```

最后，它使用渲染为DOM `ReactDOM.render()`：

```jsx
<div id='login-btn'>Login</div>
```

而一个**组件**可以以多种不同的方式来声明。它可以是带有`render()`方法的类。或者，在简单情况下，可以将其定义为函数。无论哪种情况，它都将props作为输入，并返回JSX树作为输出：

```jsx
const Button = ({ onLogin }) =>
  <div id={'login-btn'} onClick={onLogin}>Login</div>
```

然后，JSX被编译为`React.createElement()` function 树：

```jsx
const Button = ({ onLogin }) => React.createElement(
  'div',
  { id: 'login-btn', onClick: onLogin },
  'Login'
)
```

如何在React中创建组件？  
有两种创建组件的可能方法。

功能组件：这是创建组件的最简单方法。这些是纯JavaScript函数，它们接受props对象作为第一个参数并返回React元素：

```jsx
function Greeting({ message }) {
  return <h1>{`Hello, ${message}`}</h1>
}
```

**类组件：**您也可以使用ES6类来定义组件。上面的功能组件可以写成：

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>{`Hello, ${this.props.message}`}</h1>
  }
}
```

### 何时在功能组件上使用类组件？

如果组件需要*状态或生命周期方法，*则使用类组件，否则使用功能组件。 *但是，从带有1 Hooks的React 16.8开始，您可以使用state，lifecycle方法和其他功能，这些功能仅在功能组件中的类组件中可用。*

### 什么是 Pure Components ？

*`React.PureComponent`*与它完全一样，*`React.Component`*只是它`shouldComponentUpdate()`为您处理方法。当道具或状态发生变化时，*PureComponent*将对道具和状态进行浅表比较。另一方面，*组件*不会立即将当前的道具和状态与下一个进行比较。因此，无论何时`shouldComponentUpdate`调用，组件都会默认重新渲染。

### React中的状态是什么？

*状态*的部件的是，认为可以在组件的寿命改变一些信息的对象。我们应该始终尝试使状态尽可能简单，并减少有状态组件的数量。让我们创建一个带有消息状态的用户组件，

```jsx
class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Welcome to React world'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}
```

<figure class="wp-block-image size-large">![](https://blog.imaxyoung.com/wp-content/uploads/2019/12/state.jpg)</figure>State 类似于 props ，但它是私有的，并由组件完全控制。  
即，除了拥有和设置它的组件之外，其他任何组件都无法访问它。
