---
title: 'React 入门'
date: '2018-01-08T11:36:36+08:00'
status: publish
permalink: /understanding-react
author: admin
excerpt: ''
type: post
id: 114
category:
    - React
tag: []
post_format: []
classic-editor-remember:
    - classic-editor
    - classic-editor
post_views_count:
    - '244'
    - '244'
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
到目前为止我们已经看到，React组件非常简单。他们可以有内部的state。他们也可以接受props。除此以外，React还提供了转义阴影，使您可以处理高级用例。其中包括生命周期方法和refs。您可能还需要了解一组自定义属性和方法。

生命周期方法

<figure class="wp-block-image size-large">![](https://blog.imaxyoung.com/wp-content/uploads/2019/11/lifecycle-1024x501.png)</figure><http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/>

从上图可以看出，React组件在其生命周期中具有三个阶段。它可以**安装**，**安装**和**卸载**。每个阶段都有相关的方法。

在安装阶段，您可以访问以下内容：

- `componentWillMount()`在任何渲染之前被触发一次。一种使用它的方法是在那里异步加载数据并强制通过进行渲染`setState`。`render()`将会看到更新后的状态，并且无论状态如何更改都只会执行一次。在服务器上渲染时将触发此事件。
- `componentDidMount()`在初始渲染后被触发。您可以在此处访问DOM。例如，您可以使用此钩子将jQuery插件包装在组件中。在服务器上渲染时**不会**触发此操作。

组件安装并运行之后，可以通过以下方法进行操作：

- `componentWillReceiveProps(object nextProps)`组件收到新道具时触发。例如，您可以根据收到的道具来修改组件状态。
- `shouldComponentUpdate(object nextProps, object nextState)`使您可以优化渲染。如果检查道具和状态并发现不需要更新，请返回`false`。[Immutable.js](https://facebook.github.io/immutable-js/)和类似的库正是在这里方便进行平等检查的地方。[官方文档](https://facebook.github.io/react/docs/optimizing-performance.html#shouldcomponentupdate-in-action)更加详细。
- `componentWillUpdate(object nextProps, object nextState)`在`shouldComponentUpdate`之前和之后被触发`render()`。`setState`在此处无法使用，但是例如可以设置类属性。
- `componentDidUpdate(object nextProps, object nextState)`在渲染后触发。您可以在此处修改DOM。这对于调整其他代码以与React一起使用可能很有用。

最后，在卸载组件时，可以使用另一个钩子：

- `componentWillUnmount()`从DOM卸载组件之前触发。这是执行清理的理想位置（例如，删除运行计时器，自定义DOM元素等）。

经常`componentDidMount`和`componentWillUnmount`来为一对。如果您在DOM上设置了与DOM相关的内容或在`componentDidMount`其上安装了侦听器，则还必须记住在上进行清理`componentWillUnmount`。