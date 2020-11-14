---
title: 'CSS layout & Grid Flexbox Float'
date: '2019-11-27T05:36:21+08:00'
status: publish
permalink: /css-layout-grid-flexbox-float
author: admin
excerpt: 'Flexbox和Grid提供了创建具有以前不可能的设计的响应式网站的方法。CSS Calc和CSS自定义属性为我们提供了无需编译即可在CSS本身内使用数学和变量的第一个机会。这四个新的CSS模块一起工作，彻底改变了我们使用CSS布置网页的方式！'
type: post
id: 2674
category:
    - CSS
tag:
    - css
    - layout
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
CSS在网络上可用于布局网页而不会造成黑客攻击。Flexbox和Grid提供了创建具有以前不可能的设计的响应式网站的方法。CSS Calc和CSS自定义属性为我们提供了无需编译即可在CSS本身内使用数学和变量的第一个机会。这四个新的CSS模块一起工作，彻底改变了我们使用CSS布置网页的方式！  
将重点介绍创建多列布局的四种不同方式。每种方式各有利弊。为了演示这些布局的行为和外观，我创建了一个使用HTML表，CSS float属性，CSS框架和flexbox 的简单网站。由于网站的不同部分使用了不同的方法，因此可以说它是从不同的部分缝制而成的

渐进增强与优雅降级

开发跨浏览器网站是很有难度的。  
通常使用两种方式

- 平滑降级
- 渐进增强

**平滑降级**

可确保即使出现故障，网站仍可继续运行。

例如，`float: right`如果某个元素对于屏幕而言太大，则可能会失败，但是该元素会缠绕到下一个空白空间，因此该块仍然可用。

**渐进增强**

采用相反的方法。该页面以最低功能开始，并在受支持时添加功能。  
上面的示例可以使用CSS媒体查询在允许元素浮动之前验证屏幕是否为最小宽度。

当涉及到网格布局时，每个浏览器都会确定其组件的外观。  
在此，通过一些实例理解如何将Web内容各种布局模式.

其中盒子使用布局模式有: Float Position Flexbox Grid.

#### `传统方式:Float`

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="html" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""><main>
  <article>
    article content
  </article>
  <aside>
    aside content
  </aside>
</main>
```

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="css" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">main {
  width: 100%;
}
main, article, aside {
  border: 1px solid #fcddd1;
  padding: 5px;
  float: left;
}
article {
  background-color: #fff4dd;
  width: 74%;
}
aside {
  width: 24%;
}
```

您可以根据需要浮动任意数量的元素，使它们都适合整个可用宽度。但是，此方法有一些缺点：

- 很难管理容器元素的高度
- 如果需要，垂直居中可能很难控制
- 根据元素内部的内容（以及每个内部容器的CSS属性），浏览器可能会将元素包装到下一行并破坏布局.

另一种解决方案是布局：

#### `display:table`

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="css" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">main {
  display: table;
}
main, article, aside {
  display: table-cell;
}
```

但随着布局变复杂，使用会不方便，并且在响应式布局中使用时会变得混乱。

最适合于页面的小部分区域，而非主要布局。

#### `Flexbox`

是一种更新的布局模型，能够以一维的方式分配空间并有效地对齐容器（盒）的项目。  
但是，它的一维性质并不妨碍您设计多维布局- 行 (rows)和列 (columns)，但是Flexbox可能在行堆栈中不会一定可靠。

除了浮动方法非常流行并被流行的网格框架广泛采用外，Flexbox还提供了一系列优于浮动的好处：

- 每个包装行上的容器项目的垂直对齐方式和高度相等
- 容器（盒子）可以根据可用空间增加/减少，然后确定它是列还是行
- 源独立性-意味着项目的顺序无关紧要，它们只需要放在盒子里即可。

要启动Flexbox格式化策略，您需要做的就是将CSS *display*属性设置为*flex*值：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="css" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">main {
  width: 100%;
  display: flex;
}
main, article, aside {
  border: 1px solid #fcddd1;
  padding: 5px;
  float: left;
}
article {
  background-color: #fff4dd;
  width: 74%;
}
aside {
  width: 24%;
}
```

#### `Grid 网格布局`

CSS Grid布局紧随Flexbox之后，最大的区别在于它在二维中起作用 .

也就是说，如果您需要设计一个既处理行又处理列的布局，那么Grid布局很可能会更适合。  
它具有与Flexbox相同的对齐和空间分布因子，但是现在直接作用于容器（盒子）的二维尺寸。与float属性相比，它具有更多

优点：易于元素放置，对齐，行/列/单元格控制等。

使用CSS Grid就像将容器元素的*display*属性更改为一样简单`grid`

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="css" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">div.container {
  display: grid;
  grid-template-columns: 24% 75%;
  grid-template-rows: 200px 300px;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
}
```

`grid-template-columns`定义了您之前使用的相同配置：两个网格列分别占整个容器宽度的24％和75％。

`grid-template-rows`进行相同的操作，分别为第一行和第二行应用200px和300px的高度

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="css" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">.div1 {
  background-color: #fff4dd;
  align-self: end;
  justify-self: end;
}
.div4 {
  align-self: center;
}
```