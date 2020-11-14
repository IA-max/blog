---
title: 开发哲学
date: '2019-11-27T04:16:33+08:00'
status: publish
permalink: /dry
author: admin
excerpt: ''
type: post
id: 2664
category:
    - 理论
tag:
    - 编程原则
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
### 一次且仅一次

一次且仅一次（Once and only once，简称OAOO, 又称为Don’t repeat yourself（不要重复你自己，简称DRY）或一个规则，实现一次（One rule, one place）是面向对象编程中的基本原则，程序员的行事准则。  
旨在软件开发中，减少重复的信息。

DRY的原则是“系统中的每一部分，都必须有一个单一的、明确的、权威的代表”，指的是（由人编写而非机器生成的）代码和测试所构成的系统，必须能够表达所应表达的内容，但是不能含有任何重复代码。当DRY原则被成功应用时，一个系统中任何单个元素的修改都不需要与其逻辑无关的其他元素发生改变。  
此外，与之逻辑上相关的其他元素的变化均为可预见的、均匀的，并如此保持同步。

DRY与WET

违反**DRY**原则的解决方案通常被称为**WET**，其有多种全称，包括“Write everything twice”（把每个东西写两次）、“We enjoy typing”（我们就是喜欢打字）或“Waste everyone’s time”（浪费大家的时间）。

### 约定优于配置

约定优于配置（convention over configuration），也称作按约定编程，是一种软件设计范式，旨在减少软件开发人员需做决定的数量，获得简单的好处，而又不失灵活性。

本质是说，开发人员仅需规定应用中不符约定的部分。

例如，如果模型中有个名为Sale的类，那么数据库中对应的表就会默认命名为sales。只有在偏离这一约定时，例如将该表命名为”products\_sold”，才需写有关这个名字的配置。

如果您所用工具的约定与你的期待相符，便可省去配置；  
反之，你可以配置来达到你所期待的方式。

许多新的框架使用了约定优于配置的方法，包括：Spring，Ruby on Rails，Kohana PHP，Grails，Grok，Zend Framework，CakePHP，symfony，Maven，ASP.NET MVC，Web2py（MVC），Apache Wicket