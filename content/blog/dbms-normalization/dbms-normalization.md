---
title: DBMS归一化
date: '2019-09-07T03:42:32+08:00'
status: publish
permalink: /dbms-normalization
author: admin
excerpt: ''
type: post
id: 999
category:
    - 数据库
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
在开发关系数据库的模式时，要考虑的最重要方面之一是确保最小化复制。这样做有两个目的：

<div class="code-block code-block-7"></div>- 减少存储数据所需的存储量。
- 避免由于存储相同数据的多个副本而可能蔓延的不必要的数据冲突。

<span class="ez-toc-section" id="Normalization_in_DBMS">DBMS中的规范化</span>
------------------------------------------------------------------------

数据库规范化是一种有助于以最佳方式设计数据库模式的技术，以确保上述要点。数据库规范化的核心思想是将表分成较小的子表并存储指向数据的指针而不是复制它。<span id="more-999"></span>  
为了更好地理解我们刚才所说的内容，这里有一个简单的规范化示例：  
为了理解带有示例表的数据库中的规范化，我们假设我们应该在大学中存储课程和教师的详细信息。以下是示例数据库的外观：

<table class="tablepress tablepress-id-1" id="tablepress-1"><thead><tr class="row-1 odd"><th class="column-1">科目编号</th><th class="column-2">课程地点</th><th class="column-3">教练姓名</th><th class="column-4">教练的电话号码</th></tr></thead><tbody class="row-hover"><tr class="row-2 even"><td class="column-1">CS101</td><td class="column-2">20号讲堂</td><td class="column-3">乔治教授</td><td class="column-4">+1 6514821924</td></tr><tr class="row-3 odd"><td class="column-1">CS152</td><td class="column-2">21号讲堂</td><td class="column-3">阿特金斯教授</td><td class="column-4">+1 6519272918</td></tr><tr class="row-4 even"><td class="column-1">CS154</td><td class="column-2">CS Auditorium</td><td class="column-3">乔治教授</td><td class="column-4">+1 6514821924</td></tr></tbody></table>

这里，数据基本上存储课程代码，课程地点，教师姓名和教师的电话号码。起初，这种设计似乎很好。但是，一旦我们需要修改信息，问题就会开始发展。例如，假设乔治教授改变了他的手机号码。在这种情况下，我们必须在2个地方进行编辑。如果有人刚刚针对CS101编辑了手机号码，但又忘了为CS154编辑手机号码怎么办？这将导致数据库中的陈旧/错误信息。  
但是，通过将我们的表分成两个更简单的表，可以轻松解决这个问题：  
**表1（讲师）：**

- 讲师ID
- 教练姓名
- 讲师手机号码

**表2（课程）：**

<div class="code-block code-block-4"></div>- 科目编号
- 课程地点
- 讲师ID

现在，我们的数据将如下所示：  
**表1（讲师）：**

<div class="code-block code-block-8"></div><table class="tablepress tablepress-id-2" id="tablepress-2"><thead><tr class="row-1 odd"><th class="column-1">Insturctor的ID</th><th class="column-2">教练的名字</th><th class="column-3">教练编号</th></tr></thead><tbody class="row-hover"><tr class="row-2 even"><td class="column-1">1</td><td class="column-2">乔治教授</td><td class="column-3">+1 6514821924</td></tr><tr class="row-3 odd"><td class="column-1">2</td><td class="column-2">阿特金斯教授</td><td class="column-3">+1 6519272918</td></tr></tbody></table>

**表2（课程）：**

<table class="tablepress tablepress-id-3" id="tablepress-3"><thead><tr class="row-1 odd"><th class="column-1">科目编号</th><th class="column-2">课程地点</th><th class="column-3">讲师ID</th></tr></thead><tbody class="row-hover"><tr class="row-2 even"><td class="column-1">CS101</td><td class="column-2">20号讲堂</td><td class="column-3">1</td></tr><tr class="row-3 odd"><td class="column-1">CS152</td><td class="column-2">21号讲堂</td><td class="column-3">2</td></tr><tr class="row-4 even"><td class="column-1">CS154</td><td class="column-2">CS Auditorium</td><td class="column-3">1</td></tr></tbody></table>

基本上，我们将教师分开存储在课程表中，我们不存储教师的全部数据。我们宁愿存储教师的ID。现在，如果有人想知道教师的手机号码，他/她可以简单地查找教师表。另外，如果我们要改变乔治教授的手机号码，可以在一个地方完成。这可以避免数据陈旧/错误。  
此外，如果您观察，手机号码现在不需要存储2次。我们将它存储在一个地方。这也节省了存储空间。在上面的简单例子中，这可能并不明显。但是，考虑到有数百个课程和教师的情况，每个教师，我们不仅要存储手机号码，还要存储其他详细信息，如办公地址，电子邮件地址，专业化，可用性等。在这种情况下复制如此多的数据将不必要地增加存储要求。  
以上是数据库规范化工作原理的简化示例。我们现在将更正式地研究它。

<span class="ez-toc-section" id="Types_of_Normalization">规范化的类型</span>
----------------------------------------------------------------------

有各种数据库“正常”形式。每种常规形式都具有重要性，有助于优化数据库以节省存储空间并减少冗余。

### <span class="ez-toc-section" id="First_Normal_Form_1NF">第一范式（1NF）</span>

第一个普通形式只是说表的每个单元格应该只包含一个值。让我们举个例子。假设我们正在存储特定教师所需的课程，我们可以像这样存储：

<div class="code-block code-block-5"></div><table class="tablepress tablepress-id-4" id="tablepress-4"><thead><tr class="row-1 odd"><th class="column-1">教练的名字</th><th class="column-2">科目编号</th></tr></thead><tbody class="row-hover"><tr class="row-2 even"><td class="column-1">乔治教授</td><td class="column-2">（CS101，CS154）</td></tr><tr class="row-3 odd"><td class="column-1">阿特金斯教授</td><td class="column-2">（CS152）</td></tr></tbody></table>

在这里，问题是在第一行，我们存储了2个针对乔治教授的课程。这不是最佳方式，因为现在是如何设计SQL数据库的。更好的方法是单独存储课程。例如：

<table class="tablepress tablepress-id-5" id="tablepress-5"><thead><tr class="row-1 odd"><th class="column-1">教练的名字</th><th class="column-2">科目编号</th></tr></thead><tbody class="row-hover"><tr class="row-2 even"><td class="column-1">乔治教授</td><td class="column-2">CS101</td></tr><tr class="row-3 odd"><td class="column-1">乔治教授</td><td class="column-2">CS154</td></tr><tr class="row-4 even"><td class="column-1">阿特金斯教授</td><td class="column-2">CS152</td></tr></tbody></table>

这样，如果我们想要编辑与CS101相关的一些信息，我们就不必触摸与CS154相对应的数据。另外，请注意每行存储唯一信息。没有重复。这是第一范式。

### <span class="ez-toc-section" id="Second_Normal_Form_2NF">第二范式（2NF）</span>

要使表格处于第二范式，应满足以下两个条件：

1. 该表应该是第一个正常形式。
2. 表的主键应该由1列组成。

第一点显然是直截了当的，因为我们刚研究了1NF。让我们理解第一点–1列主键。好吧，主键是一组唯一标识行的列。基本上，没有2行具有相同的主键。让我们举个例子。

<table class="tablepress tablepress-id-1" id="tablepress-1-no-2"><thead><tr class="row-1 odd"><th class="column-1">科目编号</th><th class="column-2">课程地点</th><th class="column-3">教练姓名</th><th class="column-4">教练的电话号码</th></tr></thead><tbody class="row-hover"><tr class="row-2 even"><td class="column-1">CS101</td><td class="column-2">20号讲堂</td><td class="column-3">乔治教授</td><td class="column-4">+1 6514821924</td></tr><tr class="row-3 odd"><td class="column-1">CS152</td><td class="column-2">21号讲堂</td><td class="column-3">阿特金斯教授</td><td class="column-4">+1 6519272918</td></tr><tr class="row-4 even"><td class="column-1">CS154</td><td class="column-2">CS Auditorium</td><td class="column-3">乔治教授</td><td class="column-4">+1 6514821924</td></tr></tbody></table>

此处，在此表中，课程代码是唯一的。所以，这成了我们的主要关键。让我们再举一个例子，将学生注册存储在各种课程中。每个学生可以注册多个课程。同样，每门课程可能有多个注册。示例表可能如下所示（学生姓名和课程代码）：

<table class="tablepress tablepress-id-6" id="tablepress-6"><thead><tr class="row-1 odd"><th class="column-1">学生姓名</th><th class="column-2">科目编号</th></tr></thead><tbody class="row-hover"><tr class="row-2 even"><td class="column-1">拉胡尔</td><td class="column-2">CS152</td></tr><tr class="row-3 odd"><td class="column-1">拉雅</td><td class="column-2">CS101</td></tr><tr class="row-4 even"><td class="column-1">拉胡尔</td><td class="column-2">CS154</td></tr><tr class="row-5 odd"><td class="column-1">拉曼</td><td class="column-2">CS101</td></tr></tbody></table>

这里，第一列是学生姓名，第二列是学生的课程。显然，学生姓名列并不是唯一的，因为我们可以看到在第1行和第3行中有2个与“Rahul”名称相对应的条目。同样，课程代码列并不是唯一的，因为我们可以看到有2个对应于第2行和第4行中的课程代码CS101的条目。但是，元组（学生姓名，课程代码）是唯一的，因为学生不能多次注册同一课程。因此，这两个列组合在一起形成数据库的主键。  
根据第二个普通表单定义，我们的上述注册表不是第二范式。为了达到相同的目标（1NF到2NF），我们可以将其分为两个表：  
**学生们：**

<table class="tablepress tablepress-id-7" id="tablepress-7"><thead><tr class="row-1 odd"><th class="column-1">学生姓名</th><th class="column-2">报名人数</th></tr></thead><tbody class="row-hover"><tr class="row-2 even"><td class="column-1">拉胡尔</td><td class="column-2">1</td></tr><tr class="row-3 odd"><td class="column-1">拉雅</td><td class="column-2">2</td></tr><tr class="row-4 even"><td class="column-1">拉曼</td><td class="column-2">3</td></tr></tbody></table>

这里第二列是唯一的，它表示学生的注册号。显然，登记号码是唯一的。现在，我们可以将每个注册号码附加到课程代码中  
**课程：**

<table class="tablepress tablepress-id-8" id="tablepress-8"><thead><tr class="row-1 odd"><th class="column-1">科目编号</th><th class="column-2">报名人数</th></tr></thead><tbody class="row-hover"><tr class="row-2 even"><td class="column-1">CS101</td><td class="column-2">2</td></tr><tr class="row-3 odd"><td class="column-1">CS101</td><td class="column-2">3</td></tr><tr class="row-4 even"><td class="column-1">CS152</td><td class="column-2">1</td></tr><tr class="row-5 odd"><td class="column-1">CS154</td><td class="column-2">1</td></tr></tbody></table>

这两个表一起为我们提供了与原始表完全相同的信息。

### <span class="ez-toc-section" id="Third_Normal_Form_3NF">第三范式（3NF）</span>

在我们深入研究第三范式的细节之前，让我们理解一个函数依赖于表的概念。  
如果更改A的值可能需要更改B的值，则称A列在功能上依赖于B列。例如，请考虑下表：

<table class="tablepress tablepress-id-9" id="tablepress-9"><thead><tr class="row-1 odd"><th class="column-1">科目编号</th><th class="column-2">课程地点</th><th class="column-3">教练的名字</th><th class="column-4">部门</th></tr></thead><tbody class="row-hover"><tr class="row-2 even"><td class="column-1">MA214</td><td class="column-2">18号演讲厅</td><td class="column-3">乔治教授</td><td class="column-4">CS部门</td></tr><tr class="row-3 odd"><td class="column-1">ME112</td><td class="column-2">礼堂建筑</td><td class="column-3">约翰教授</td><td class="column-4">电子部门</td></tr></tbody></table>

这里，department列依赖于教授名称列。这是因为如果在特定行中，我们更改了教授的名称，我们还必须更改部门值。举个例子，假设现在由正好来自数学系的罗纳德教授采用MA214，表格如下：

<table class="tablepress tablepress-id-10" id="tablepress-10"><thead><tr class="row-1 odd"><th class="column-1">科目编号</th><th class="column-2">课程地点</th><th class="column-3">教练的名字</th><th class="column-4">部门</th></tr></thead><tbody class="row-hover"><tr class="row-2 even"><td class="column-1">MA214</td><td class="column-2">18号演讲厅</td><td class="column-3">罗纳德教授</td><td class="column-4">数学系</td></tr><tr class="row-3 odd"><td class="column-1">ME112</td><td class="column-2">礼堂建筑</td><td class="column-3">约翰教授</td><td class="column-4">电子部门</td></tr></tbody></table>

在这里，当我们更改教授的名字时，我们还必须更改部门专栏。这是不可取的，因为正在更新数据库的人可能记得更改教授的姓名，但可能忘记更新部门值。这可能会导致数据库不一致。  
第三种常规形式通过将其分解为单独的表来避免这种情况：

<table class="tablepress tablepress-id-11" id="tablepress-11"><thead><tr class="row-1 odd"><th class="column-1">科目编号</th><th class="column-2">课程地点</th><th class="column-3">教练的身份证</th></tr></thead><tbody class="row-hover"><tr class="row-2 even"><td class="column-1">MA214</td><td class="column-2">18号演讲厅</td><td class="column-3">1</td></tr><tr class="row-3 odd"><td class="column-1">ME112</td><td class="column-2">礼堂建筑，</td><td class="column-3">2</td></tr></tbody></table>

这里，第三列是参加课程的教授的ID。

<table class="tablepress tablepress-id-12" id="tablepress-12"><thead><tr class="row-1 odd"><th class="column-1">教练的身份证</th><th class="column-2">教练姓名</th><th class="column-3">部门</th></tr></thead><tbody class="row-hover"><tr class="row-2 even"><td class="column-1">1</td><td class="column-2">罗纳德教授</td><td class="column-3">数学系</td></tr><tr class="row-3 odd"><td class="column-1">2</td><td class="column-2">约翰教授</td><td class="column-3">电子部门</td></tr></tbody></table>

在上表中，我们根据他/她的ID存储教授的详细信息。这样，每当我们想在某个地方引用教授时，我们就不必再将该教授的其他细节放在该表中。我们可以简单地使用ID。  
因此，在第三范式中，需要满足以下条件：

- 该表应采用第二范式。
- 不应该有任何功能依赖。

### <span class="ez-toc-section" id="Boyce-Codd_Normal_Form_BCNF">Boyce-Codd Normal Form（BCNF）</span>

Boyce-Codd Normal形式是第三范式的更强的推广。当且仅当满足以下每个函数依赖关系A→B的以下条件之一时，表格为Boyce-Codd Normal格式：

- A是超级钥匙
- 这是一个微不足道的功能依赖。

让我们先了解超级钥匙的含义。要了解DBMS中的BCNF，请考虑以下BCNF示例表：

<table class="tablepress tablepress-id-1" id="tablepress-1-no-3"><thead><tr class="row-1 odd"><th class="column-1">科目编号</th><th class="column-2">课程地点</th><th class="column-3">教练姓名</th><th class="column-4">教练的电话号码</th></tr></thead><tbody class="row-hover"><tr class="row-2 even"><td class="column-1">CS101</td><td class="column-2">20号讲堂</td><td class="column-3">乔治教授</td><td class="column-4">+1 6514821924</td></tr><tr class="row-3 odd"><td class="column-1">CS152</td><td class="column-2">21号讲堂</td><td class="column-3">阿特金斯教授</td><td class="column-4">+1 6519272918</td></tr><tr class="row-4 even"><td class="column-1">CS154</td><td class="column-2">CS Auditorium</td><td class="column-3">乔治教授</td><td class="column-4">+1 6514821924</td></tr></tbody></table>

这里，第一列（课程代码）在各行中是唯一的。所以，这是一个超级钥匙。考虑列的组合（课程代码，教授姓名）。它在各行中也是独一无二的。所以，它也是一个超级钥匙。超级键基本上是一组列，使得该组列的值在各行中是唯一的。也就是说，没有2行对这些列具有相同的值集。  
上表中的一些超级键是：

- 科目编号
- 课程代码，教授姓名
- 课程代码，教授手机号码

大小（列数）最小的超级密钥称为候选密钥。例如，上面的第一个超级键只有1列。第二个和最后一个有2列。因此，第一个超级密钥（课程代码）是候选密钥。  
Boyce-Codd Normal Form表示如果存在函数依赖A→B，那么A是超级密钥，或者它是一个微不足道的函数依赖。一个简单的函数依赖意味着B的所有列都包含在A的列中。例如，（课程代码，教授名称）→（课程代码）是一个微不足道的功能依赖，因为当我们知道课程代码和教授名称的价值时，我们知道课程代码的价值，因此，依赖变得微不足道。  
**让我们了解发生了什么：**  
**A是超级密钥：**这意味着只有在超级密钥列上才应该存在其他列的依赖关系。基本上，如果可以在知道一些其他列（A）的情况下确定一组列（B），则A应该是超级键。超级键基本上唯一地确定每一行。  
**这是一个微不足道的功能依赖：**这意味着不应该有非平凡的依赖。例如，我们看到教授的部门如何依赖教授的名字。这可能会造成完整性问题，因为有人可能会在不更改部门的情况下编辑教授的姓名。这可能会导致数据库不一致。  
还有其他两种常规形式：

### <span class="ez-toc-section" id="Fourth_normal_form">**第四范式**</span>

如果没有描述相关实体的两个或更多个独立和多值数据，则表称其为第四范式。

### <span class="ez-toc-section" id="Fifth_normal_form">**第五范式**</span>

如果出现以下情况，表格为第五范式：

- 它是第四种正常形式。
- 在不丢失某种形式的信息的情况下，它不能细分为任何较小的表。

<span class="ez-toc-section" id="Summary">摘要</span>
---------------------------------------------------

在以这样的方式设计数据库的模式时，各种形式的数据库规范化是有用的，即不存在可能导致不一致的数据复制。在为应用程序设计模式时，我们应该始终考虑如何使用这些表单。