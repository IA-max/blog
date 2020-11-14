---
title: 'PostgreSQL vs MySQL'
date: '2019-09-07T03:37:27+08:00'
status: publish
permalink: /postgresql-vs-mysql
author: admin
excerpt: ''
type: post
id: 991
category:
    - 数据库
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
近40年来，关系数据库管理系统（RDBMS）一直被认为是数据库中信息存储的首选方案，主要用于个人数据，财务信息，制造记录等。数据库管理的关系模型使用表格格式来存储数据，这使得它与标准数据管理模型不同。RDBMS的普及可归因于任务关键型应用程序随着时间的推移而增加，这需要强大的管理系统。

今天，所有主要的关系数据库都使用SQL作为查询语言。尽管存在标准SQL，但大多数数据库平台使用不同的方言，这些方言可能包含特定的附加功能或标准SQL功能的一部分。在本文中，我们将向您介绍两个主要的关系数据库管理系统，这些系统在应用程序开发领域都很受欢迎。我们将在这些系统的功能之间进行比较，并帮助您为项目选择正确的RDBMS。这些RDBMS是MySQL–最流行和最常用的RDBMS，PostgreSQL是最高级的SQL兼容和开源目标-RDBMS。

**PostgreSQL**
--------------

<figure class="wp-block-image">![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/postgresql-300x115.jpg)</figure>[PostgreSQL](https://www.postgresql.org/)被认为是最先进和最强大的SQL兼容和开源目标-RDBMS。由于其强大的底层技术，它已成为执行复杂和大批量数据操作的公司的首选。它使用多版本并发控制（MVCC），允许多个编写器和读取器同时在系统上工作。PostgreSQL非常有能力同时有效地处理多个任务，因此它受到Apple，Yahoo！，Instagram，Facebook和Instagram等商业巨头以及众多其他电信，金融和政府机构的信任。

PostgreSQL的目标是符合标准，高度可编程和可扩展。尽管这个DBMS具有引人注目的特性，但许多第三方工具和库使得使用PostgreSQL变得简单。其他功能包括高并发性，ACID合规性（原子性，一致性，隔离性，持久性），对象关系，主要是SQL合规性以及来自活跃开发人员社区的支持。

**MySQL的**
----------

<figure class="wp-block-image">![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/0_AhVo_3sCq-ft64ki-300x133.jpg)</figure>Oracle支持的RDBMS [MySQL](https://www.mysql.com/)是最着名的大型数据库服务器。它是一个开源系统，可以在线为大量应用程序和网站提供支持。它易于设置，只需极少的微调即可实现出色的性能水平。第三方GUI工具（如Adminer，HeidiSQL，MySQL Workbench和dbForge Studio）使MySQL更容易开始使用数据库。此外，还有大量的[MySQL教程](https://hackr.io/tutorials/learn-mysql?ref=blog)和资源，这对于刚从数据库开始的初学者来说是一个福音。

MySQL是一个功能丰富的系统，它直接或间接地支持大多数SQL功能，这是RDBMS所期望的。它非常灵活且相当灵活，使其成为Web应用程序的热门选择。其他一些功能包括特定安全功能的可用性，平台独立性，ACID合规性以及易于访问支持。

**PostgreSQL与MySQL：主要差异**
-------------------------

PostgreSQL和MySQL是最常用的两种RDBMS，为项目选择正确的关系数据库管理系统的决定可能决定它的成败。即使它们具有大量重叠功能，但这一切都取决于您的要求以及您希望如何解决问题。下面我们将讨论两个系统中最突出的功能，并帮助您选择最佳的RDBMS。

### **治理**

技术治理模型具有独特的优势，在MySQL和PostgreSQL的情况下，显示出显着的差异。PostgreSQL由PostgreSQL Global开发组开发，可以使用开源许可证，类似于MIT许可证。MySQL项目的源代码根据GNU许可证向公众开放源代码，以及多个专有协议。它现在归Oracle Corp.所有，并且必须提供各种付费版本用于商业用途。

### **SQL合规性**

SQL遵从性标准是数据库在实现所有SQL准则和标准时必须遵守的一组规则。对于希望为其项目（应用程序）使用异构数据库的公司而言，SQL合规性是一个重要的约束。PostgreSQL最符合SQL，因为它符合SQL标准的179个核心功能中的160个，以及许多可选功能。另一方面，MySQL部分符合SQL，因为它没有实现完整的SQL标准。但是，它确实提供了许多有用的非SQL功能，例如“缺少CHECK约束”。

### **支持的平台**

PostgreSQL和MySQL系统都可以在Solaris，Windows操作系统，Linux和OS X上运行.OSX X由Apple Inc.开发，Solaris是Oracle产品，Windows OS是Microsoft产品，Linux是开源操作系统。PostgreSQL还支持由科技巨头Hewlett-Packard开发的HP-UX操作系统以及开源Unix操作系统。相比之下，MySQL扩展了对开源FreeBSD OS的支持。

### **编程语言支持**

如果系统支持各种编程语言，它可以帮助不同背景的开发人员以他们熟悉的语言执行任务，从而提高效率。由于服务器支持许多用于数据库功能的编程语言，因此开发人员可以轻松决定是在客户端还是在服务器中执行任务。对其他编程语言的支持为开发人员提供了额外的动力。

PostgreSQL是用C语言编写的，支持多种编程语言，最突出的是C / C ++，Delphi，JavaScript，Java，Python，R，Tcl，Go，Lisp，Erlang和.Net等。MySQL是用C和C ++编写的，并且扩展了对C / C ++，Erlang，PHP，Lisp，Go，Perl，Java，Delphi，R和Node.js的支持。

### **安全**

DBMS的安全性极大地影响了其可靠性，并成为系统中最重要的特征之一。数据库安全指向集体使用流程和工具来保护DBMS或数据库免受来自非法来源的威胁和攻击。MySQL非常安全，包含多种安全功能，其中一些功能相当先进。它基于访问控制列表（ACL）执行安全协议，以进行用户操作，例如连接和查询。PostgreSQL为加密客户端/服务器通信的连接提供本机SLL支持。此外，还有一个名为SE-PostgreSQL的内置增强功能，它基于SELinux策略提供额外的访问控制。

### **访问方法**

MySQL和PostgreSQL都支持所有标准，并有多种常见的访问方法，包括JDBC，ODBC和ADO.NET。JDBC是用于Java编程的数据库访问API，而ODBC是用于访问数据库的标准API。ADO.NET是一组API，开发人员用它来访问基于XML的数据。该平台的本机C库和流API也可用于访问PostgreSQL。

### **复制**

数据库复制是指将数据从一台计算机或服务器电子复制到另一台计算机或服务器的过程，这允许所有用户访问相同的信息。数据库可以利用多种技术来跨多个节点存储剩余数据。MySQL使用主 – 主复制，其中每个节点都是主节点，并且有权更新数据。但是，PostgreSQL和MySQL都可以执行主从复制，其中一个节点是主节点，并由其他节点控制数据存储。其他类型的实现可以使用第三方扩展在PostgreSQL中实现。

### **性能**

PostgreSQL适用于需要对数据进行身份验证且读/写速度对成功至关重要的大型系统。此外，它还支持许多性能增强器，这些增强器仅在专有解决方案中可用，包括没有读锁的并发，SQL服务器和地理空间数据支持等。通常，PostgreSQL最适合需要执行复杂查询或数据仓库和数据分析的系统。

MySQL是那些需要数据库仅用于数据事务而不是任何复杂的基于Web的项目的首选。它在[联机分析处理（OLAP）和在线事务处理（OLTP](https://www.blog.imaxyoung.com/olap-vs-oltp-%e6%af%94%e8%be%83%e5%8a%9f%e8%83%bd%e5%92%8c%e5%ba%94%e7%94%a8/)）系统中运行得非常好，只需要很高的读取速度。但是，一旦遇到重负载或复杂查询，MySQL将开始表现不佳。

虽然我们讨论了这些系统的使用位置，但只能通过评估可能方案的度量来衡量RDBMS的实际性能，因为它主要取决于要求和项目的性质。

### **社区支持**

社区支持对于改进任何数据库系统都很重要。PostgreSQL有一个非常活跃的社区，它不断帮助改进现有功能，其创新的提交者尽一切努力确保数据库仍然是具有最新功能和最高安全性的最高级数据库。MySQL还拥有大量的关注者和贡献者社区，他们专注于维护现有功能，而偶尔会出现一些新功能。

**摘要**
------

<figure class="wp-block-table"><table class=""><tbody><tr><td>**RDBMS**</td><td>**PostgreSQL的**</td><td>**MySQL的**</td></tr><tr><td>**治理**</td><td>它是免费的开源软件，已根据PostgreSQL许可证发布，类似于MIT许可证</td><td>即使MySQL的源代码可用，Oracle Corporation也提供某些付费版本用于商业用途</td></tr><tr><td>**SQL合规性**</td><td>PostgreSQL在很大程度上符合SQL标准，几乎可以满足SQL标准的所有核心功能</td><td>MySQL部分符合SQL标准，并未实现完整的SQL标准</td></tr><tr><td>**支持的平台**</td><td>Solaris，Windows OS，Linux，OS X，Unix-OS和Hp-UX OS</td><td>Solaris，Windows OS，Linux，OS X和FreeBSD OS</td></tr><tr><td>**编程语言支持**</td><td>C / C ++，Java，.Net，R，Perl，Python，JavaScript等</td><td>C / C ++，Erlang，PHP，Lisp，Go，Perl等</td></tr><tr><td>**安全**</td><td>PostgreSQL为加密连接提供本机SLL支持</td><td>MySQL中内置了许多安全功能，并且非常安全</td></tr><tr><td>**访问方法**</td><td>支持所有标准</td><td>支持所有标准</td></tr><tr><td>**复制**</td><td>PostgreSQL可以执行主从复制，其他类型的实现可以使用第三方扩展实现</td><td>MySQL使用主 – 主复制，可以执行主从复制</td></tr><tr><td>**性能**</td><td>广泛用于读写速度至关重要且需要执行复杂查询的大型系统</td><td>广泛用于基于Web的项目，这些项目需要数据库仅用于数据事务</td></tr><tr><td>**社区支持**</td><td>一个非常强大且活跃的社区，致力于改进现有功能并巩固其作为最先进数据库的地位</td><td>一个大型社区，专注于维护现有功能，而新功能很少发布</td></tr></tbody></table>

</figure>**PostgreSQL或MySQL：哪个更适合您的项目？**
-------------------------------

在本文中，我们讨论了两个最广泛使用的RDBMS PostgreSQL和MySQL的最突出的特性。这两个系统都显示出一些闪光的差异以及一些相似之处。这两个系统都有很多优点和缺点，这一切都归结为您的项目从RDBMS需求。**如果**您需要用于Web应用程序或自定义解决方案的高安全性RDBMS，**MySQL将是您项目的理想选择**，但如果您需要一个能够快速执行复杂任务的完全SQL兼容的RDBMS，则不是。同时，**如果**您的要求围绕复杂的程序，集成，复杂的设计和数据完整性，而不是高速和易于设置，**PostgreSQL将是您项目的理想选择**。