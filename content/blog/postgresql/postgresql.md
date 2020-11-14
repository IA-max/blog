---
title: 'PostgreSQL 入门'
date: '2019-09-10T00:45:47+08:00'
status: publish
permalink: /postgresql
author: admin
excerpt: ''
type: post
id: 1377
category:
    - 数据库
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
<div class="wp-block-media-text alignwide"><figure class="wp-block-media-text__media">![](https://blog.imaxyoung.com/wp-content/uploads/2019/11/%E6%8D%95%E8%8E%B7-1024x970.png)</figure><div class="wp-block-media-text__content">#### 什么是PostgreSQL？

PostgreSQL是一个功能强大的开源对象关系数据库管理系统(ORDBMS)。 用于安全地存储数据; 支持最佳做法，并允许在处理请求时检索它们。

PostgreSQL(也称为`Post-gress-Q-L`)由PostgreSQL全球开发集团(全球志愿者团队)开发。 它不受任何公司或其他私人实体控制。 它是开源的，其源代码是免费提供的。

PostgreSQL是跨平台的，可以在许多操作系统上运行，如Linux，FreeBSD，OS X，Solaris和Microsoft Windows等。

PostgreSQL的官方网站是：<https://www.postgresql.org/>

</div></div>#### PostgreSQL的特点

PostgreSQL的特点如下 –

- PostgreSQL可在所有主要操作系统(即Linux，UNIX(AIX，BSD，HP-UX，SGI IRIX，Mac OS X，Solaris，Tru64)和Windows等)上运行。
- PostgreSQL支持文本，图像，声音和视频，并包括用于C/C++，Java，Perl，Python，Ruby，Tcl和开放数据库连接(ODBC)的编程接口。
- PostgreSQL支持SQL的许多功能，例如复杂SQL查询，SQL子选择，外键，触发器，视图，事务，多进程并发控制(MVCC)，流式复制(9.0)，热备(9.0))。
- 在PostgreSQL中，表可以设置为从“父”表继承其特征。
- 可以安装多个扩展以向PostgreSQL添加附加功能。

#### PostgreSQL工具

有一些开放源码以及付费工具可用作PostgreSQL的前端工具。 这里列出几个被广泛使用的工具：

 **1. psql：**

它是一个命令行工具，也是管理PostgreSQL的主要工具。 `pgAdmin`是PostgreSQL的免费开源图形用户界面管理工具。

**2. phpPgAdmin:**

它是用PHP编写的PostgreSQL的基于Web的管理工具。 它基于phpMyAdmin工具管理MySQL功能来开发。它可以用作PostgreSQL的前端工具。

**3. pgFouine：**

它是一个日志分析器，可以从PostgreSQL日志文件创建报告。 专有工具有 –  
Lightning Admin for PostgreSQL, Borland Kylix, DBOne, DBTools Manager PgManager, Rekall, Data Architect, SyBase Power Designer, Microsoft Access, eRWin, DeZign for Databases, PGExplorer, Case Studio 2, pgEdit, RazorSQL, MicroOLAP Database Designer, Aqua Data Studio, Tuples, EMS Database Management Tools for PostgreSQL, Navicat, SQL Maestro Group products for PostgreSQL, Datanamic DataDiff for PostgreSQL, Datanamic SchemaDiff for PostgreSQL, DB MultiRun PostgreSQL Edition, SQLPro, SQL Image Viewer, SQL Data Sets 等等。

#### 前提条件

在学习PostgreSQL之前，您必须具备SQL和编程语言(如C)的基本知识。

#### PostgreSQL命令语法

可以使用`help`语句查看所有postgreSQL语句的语法。 按照以下步骤查看PostgreSQL中所有语句的语法。

- 安装postgreSQL后，打开`psql`为：程序文件 -&gt; PostgreSQL 9.2 -&gt; SQL Shell(psql)
- 使用以下语句查看特定语句的语法。 postgres-＃\\ help＆

#### 所有PostgreSQL语句

在这里，我们提供了所有postgreSQL语句及其语法的列表：

**ABORT语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ABORT [ WORK | TRANSACTION ]
```

**ALTER AGGREGATE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ALTER AGGREGATE name ( type ) RENAME TO new_name
ALTER AGGREGATE name ( type ) OWNER TO new_owner
```

**ALTER CONVERSION语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ALTER CONVERSION name RENAME TO new_name
ALTER CONVERSION name OWNER TO new_owner
```

**ALTER DATABASE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ALTER DATABASE name SET parameter { TO | = } { value | DEFAULT }
ALTER DATABASE name RESET parameter
ALTER DATABASE name RENAME TO new_name
ALTER DATABASE name OWNER TO new_owner
```

**ALTER DOMAIN语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ALTER DOMAIN name { SET DEFAULT expression | DROP DEFAULT }
ALTER DOMAIN name { SET | DROP } NOT NULL
ALTER DOMAIN name ADD domain_constraint
ALTER DOMAIN name DROP CONSTRAINT constraint_name [ RESTRICT | CASCADE ]
ALTER DOMAIN name OWNER TO new_owner
```

**ALTER FUNCTION语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ALTER FUNCTION name ( [ type [, ...] ] ) RENAME TO new_name
ALTER FUNCTION name ( [ type [, ...] ] ) OWNER TO new_owner
```

**ALTER GROUP语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ALTER GROUP groupname ADD USER username [, ... ]
ALTER GROUP groupname DROP USER username [, ... ]
ALTER GROUP groupname RENAME TO new_name
```

**ALTER INDEX语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ALTER INDEX name OWNER TO new_owner
ALTER INDEX name SET TABLESPACE indexspace_name
ALTER INDEX name RENAME TO new_name
```

**ALTER LANGUAGE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ALTER LANGUAGE name RENAME TO new_name
```

**ALTER OPERATOR语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ALTER OPERATOR name ( { lefttype | NONE } , { righttype | NONE } )
OWNER TO new_owner
```

**ALTER OPERATOR CLASS语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ALTER OPERATOR CLASS name USING index_method RENAME TO new_name
ALTER OPERATOR CLASS name USING index_method OWNER TO new_owner
```

**ALTER SCHEMA语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ALTER SCHEMA name RENAME TO new_name
ALTER SCHEMA name OWNER TO new_owner
```

**ALTER SEQUENCE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ALTER SEQUENCE name [ INCREMENT [ BY ] increment ]
[ MINVALUE minvalue | NO MINVALUE ]
[ MAXVALUE maxvalue | NO MAXVALUE ]
[ RESTART [ WITH ] start ] [ CACHE cache ] [ [ NO ] CYCLE ]
```

**ALTER TABLE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ALTER TABLE [ ONLY ] name [ * ]
action [, ... ]
ALTER TABLE [ ONLY ] name [ * ]
RENAME [ COLUMN ] column TO new_column
ALTER TABLE name
RENAME TO new_name
```

**ALTER TABLESPACE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ALTER TABLESPACE name RENAME TO new_name
ALTER TABLESPACE name OWNER TO new_owner
```

**ALTER TRIGGER语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ALTER TRIGGER name ON table RENAME TO new_name
```

**ALTER TYPE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ALTER TYPE name OWNER TO new_owner
```

**ALTER USER语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ALTER USER name [ [ WITH ] option [ ... ]]
ALTER USER name RENAME TO new_name
ALTER USER name SET parameter { TO | = } { value | DEFAULT }
ALTER USER name RESET parameter
```

**ANALYSE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ANALYZE [ VERBOSE ] [ table [ (column [, ...] ) ]]
```

**BEGIN语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">BEGIN [ WORK | TRANSACTION ] [ transaction_mode [, ...]]
```

**CHECKPOINT语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CHECKPOINT
```

**CLOSE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CLOSE name
```

**CLUSTER语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CLUSTER index_name ON table_name
CLUSTER table_name
CLUSTER
```

**COMMIT语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">COMMIT [ WORK | TRANSACTION ]
```

**COPY语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">COPY table_name [ ( column [, ...])]
FROM { 'filename' | STDIN }
[[ WITH ]
[ BINARY ]
[ OIDS ]
[ DELIMITER [ AS ] 'delimiter']
[ NULL [ AS ] 'null string']
[ CSV [ QUOTE [ AS ] 'quote']
[ ESCAPE [ AS ] 'escape']
[ FORCE NOT NULL column [, ...]]
COPY table_name [ ( column [, ...])]
TO { 'filename' | STDOUT }
[ [ WITH ]
[ BINARY ]
[ OIDS ]
[ DELIMITER [ AS ] 'delimiter']
[ NULL [ AS ] 'null string' ]
[ CSV [ QUOTE [ AS ] 'quote']
[ ESCAPE [ AS ] 'escape' ]
[ FORCE QUOTE column [, ...]]
```

**CREATE AGGREGATE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE AGGREGATE name (
BASETYPE = input_data_type,
SFUNC = sfunc,
STYPE = state_data_type
[ , FINALFUNC = ffunc ]
[ , INITCOND = initial_condition ]
)
```

**CREATE CAST语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE CAST (source_type AS target_type)
WITH FUNCTION func_name (arg_types)
[ AS ASSIGNMENT | AS IMPLICIT ]
CREATE CAST (source_type AS target_type)
WITHOUT FUNCTION
[ AS ASSIGNMENT | AS IMPLICIT ]
```

**CREATE CONSTRAINT TRIGGER语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE CONSTRAINT TRIGGER name
AFTER events ON
table_name constraint attributes
FOR EACH ROW EXECUTE PROCEDURE func_name ( args )
```

**CREATE CONVERSION语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE [DEFAULT] CONVERSION name
FOR source_encoding TO dest_encoding FROM func_name
```

**CREATE DATABASE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE DATABASE name
[ [ WITH ] [ OWNER [=] db_owner ]
[ TEMPLATE [=] template ]
[ ENCODING [=] encoding ]
[ TABLESPACE [=] tablespace ] ]
```

 **CREATE DOMAIN语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE DOMAIN name [AS] data_type
[ DEFAULT expression ]
[ constraint [ ... ] ]
```

**CREATE FUNCTION语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE [ OR REPLACE ] FUNCTION name ( [ [ arg_name ] arg_type [, ...] ] )
RETURNS ret_type
{ LANGUAGE lang_name
| IMMUTABLE | STABLE | VOLATILE
| CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT
| [ EXTERNAL ] SECURITY INVOKER | [ EXTERNAL ] SECURITY DEFINER
| AS 'definition'
| AS 'obj_file', 'link_symbol'
} ...
[ WITH ( attribute [, ...] ) ]
```

**CREATE GROUP语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE GROUP name [ [ WITH ] option [ ... ] ]
Where option can be:
SYSID gid
| USER username [, ...]
```

**CREATE INDEX语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE [ UNIQUE ] INDEX name ON table [ USING method ]
( { column | ( expression ) } [ opclass ] [, ...] )
[ TABLESPACE tablespace ]
[ WHERE predicate ]
```

**CREATE LANGUAGE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE [ TRUSTED ] [ PROCEDURAL ] LANGUAGE name
HANDLER call_handler [ VALIDATOR val_function ]
```

**CREATE OPERATOR语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE OPERATOR name (
PROCEDURE = func_name
[, LEFTARG = left_type ] [, RIGHTARG = right_type ]
[, COMMUTATOR = com_op ] [, NEGATOR = neg_op ]
[, RESTRICT = res_proc ] [, JOIN = join_proc ]
[, HASHES ] [, MERGES ]
[, SORT1 = left_sort_op ] [, SORT2 = right_sort_op ]
[, LTCMP = less_than_op ] [, GTCMP = greater_than_op ]
)
```

**CREATE OPERATOR CLASS语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE OPERATOR CLASS name [ DEFAULT ] FOR TYPE data_type
USING index_method AS
{ OPERATOR strategy_number operator_name [ ( op_type, op_type ) ] [ RECHECK ]
| FUNCTION support_number func_name ( argument_type [, ...] )
| STORAGE storage_type
} [, ... ]
```

**CREATE RULE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE [ OR REPLACE ] RULE name AS ON event
TO table [ WHERE condition ]
DO [ ALSO | INSTEAD ] { NOTHING | command | ( command ; command ... ) }
```

**CREATE SCHEMA语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE SCHEMA schema_name
[ AUTHORIZATION username ] [ schema_element [ ... ] ]
CREATE SCHEMA AUTHORIZATION username
[ schema_element [ ... ] ]
```

**CREATE SEQUENCE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE [ TEMPORARY | TEMP ] SEQUENCE name
[ INCREMENT [ BY ] increment ]
[ MINVALUE minvalue | NO MINVALUE ]
[ MAXVALUE maxvalue | NO MAXVALUE ]
[ START [ WITH ] start ] [ CACHE cache ] [ [ NO ] CYCLE ]
```

**CREATE TABLE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } ] TABLE table_name (
{ column_name data_type [ DEFAULT default_expr ] [ column_constraint [ ... ] ]
| table_constraint
| LIKE parent_table [ { INCLUDING | EXCLUDING } DEFAULTS ] } [, ... ]
)
[ INHERITS ( parent_table [, ... ] ) ]
[ WITH OIDS | WITHOUT OIDS ]
[ ON COMMIT { PRESERVE ROWS | DELETE ROWS | DROP } ]
[ TABLESPACE tablespace ]
```

**CREATE TABLE AS语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } ] TABLE table_name
[ (column_name [, ...] ) ] [ [ WITH | WITHOUT ] OIDS ]
AS query
```

 **CREATE TABLESPACE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE TABLESPACE tablespace_name [ OWNER username ] LOCATION 'directory'
```

**CRFEATE TRIGGER语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE TRIGGER name { BEFORE | AFTER } { event [ OR ... ] }
ON table [ FOR [ EACH ] { ROW | STATEMENT } ]
EXECUTE PROCEDURE func_name ( arguments )
```

**CREATE TYPE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE TYPE name AS
( attribute_name data_type [, ... ] )
CREATE TYPE name (
INPUT = input_function,
OUTPUT = output_function
[ , RECEIVE = receive_function ]
[ , SEND = send_function ]
[ , ANALYZE = analyze_function ]
[ , INTERNALLENGTH = { internal_length | VARIABLE } ]
[ , PASSEDBYVALUE ]
[ , ALIGNMENT = alignment ]
[ , STORAGE = storage ]
[ , DEFAULT = default ]
[ , ELEMENT = element ]
[ , DELIMITER = delimiter ]
)
```

**CREATE USER语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE USER name [ [ WITH ] option [ ... ] ]
```

**CREATE VIEW语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">CREATE [ OR REPLACE ] VIEW name [ ( column_name [, ...] ) ] AS query
```

**DEALLOCATE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DEALLOCATE [ PREPARE ] plan_name
```

**DECLARE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DECLARE name [ BINARY ] [ INSENSITIVE ] [ [ NO ] SCROLL ]
CURSOR [ { WITH | WITHOUT } HOLD ] FOR query
[ FOR { READ ONLY | UPDATE [ OF column [, ...] ] } ]
```

**DELETE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DELETE FROM [ ONLY ] table [ WHERE condition ]
```

**DROP AGGREGATE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP AGGREGATE name ( type ) [ CASCADE | RESTRICT ]
```

**DROP CAST语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP CAST (source_type AS target_type) [ CASCADE | RESTRICT ]
```

**DROP CONVERSION语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP CONVERSION name [ CASCADE | RESTRICT ]
```

**DROP DATABASE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP DATABASE name
```

**DROP DOMAIN语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP DOMAIN name [, ...] [ CASCADE | RESTRICT ]
```

**DROP FUNCTION语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP FUNCTION name ( [ type [, ...] ] ) [ CASCADE | RESTRICT ]
```

**DROP GROUP语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP GROUP name
```

**DROP INDEX语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP INDEX name [, ...] [ CASCADE | RESTRICT ]
```

**DROP LANGUAGE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP [ PROCEDURAL ] LANGUAGE name [ CASCADE | RESTRICT ]
```

**DROP OPERATOR语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP OPERATOR name ( { left_type | NONE } , { right_type | NONE } )
[ CASCADE | RESTRICT ]
```

**DROP OPERATOR CLASS语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP OPERATOR CLASS name USING index_method [ CASCADE | RESTRICT ]
```

**DROP RULE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP RULE name ON relation [CASCADE | RESTRICT ]
```

**DROP SCHEMA语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP SCHEMA name [, ...] [ CASCADE | RESTRICT ]
```

**DROP SEQUENCE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP SEQUENCE name [, ...] [ CASCADE | RESTRICT ]
```

**DROP TABLE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP TABLE name [, ...] [ CASCADE | RESTRICT ]
```

**DROP TABLESPACE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP TABLESPACE tablespace_name
```

**DROP TRIGGER语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP TRIGGER name ON table [ CASCADE | RESTRICT ]
```

**DROP TYPE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP TYPE name [, ...] [ CASCADE | RESTRICT ]
```

**DROP USER语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP USER name
```

**DROP VIEW语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">DROP VIEW name [, ...] [ CASCADE | RESTRICT ]
```

**END语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">END [ WORK | TRANSACTION ]
```

**EXECUTE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">EXECUTE plan_name [ (parameter [, ...] ) ]
```

**EXPLAIN语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">EXPLAIN [ ANALYZE ] [ VERBOSE ] statement
```

**FETCH语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">FETCH [ direction { FROM | IN } ] cursor_name
```

**INSERT语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">INSERT INTO table [ ( column [, ...] ) ]
{ DEFAULT VALUES | VALUES ( { expression | DEFAULT } [, ...] ) | query }
```

**LISTEN语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">LISTEN name
```

**LOAD语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">LOAD 'filename'
```

**LOCK语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">LOCK [ TABLE ] name [, ...] [ IN lock_mode MODE ] [ NOWAIT ]
```

**MOVE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">MOVE [ direction { FROM | IN } ] cursor_name
```

**NOTIFY语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">NOTIFY name
```

**PREPARE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">PREPARE plan_name [ (data_type [, ...] ) ] AS statement
```

**REINDEX语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">REINDEX { DATABASE | TABLE | INDEX } name [ FORCE ]
```

**RESET语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">RESET name
RESET ALL
```

**ROLLBACK语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ROLLBACK [ WORK | TRANSACTION ]
```

**ROLLBACK TO SAVEPOINT语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">ROLLBACK [ WORK | TRANSACTION ] TO [ SAVEPOINT ] savepoint_name
```

**SAVEPOINT语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">SAVEPOINT savepoint_name
```

**SELECT语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
* | expression [ AS output_name ] [, ...]
[ FROM from_item [, ...] ]
[ WHERE condition ]
[ GROUP BY expression [, ...] ]
[ HAVING condition [, ...] ]
[ { UNION | INTERSECT | EXCEPT } [ ALL ] select ]
[ ORDER BY expression [ ASC | DESC | USING operator ] [, ...] ]
[ LIMIT { count | ALL } ]
[ OFFSET start ]
[ FOR UPDATE [ OF table_name [, ...] ] ]
```

**SELECT INTO语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
* | expression [ AS output_name ] [, ...]
INTO [ TEMPORARY | TEMP ] [ TABLE ] new_table
[ FROM from_item [, ...] ]
[ WHERE condition ]
[ GROUP BY expression [, ...] ]
[ HAVING condition [, ...] ]
[ { UNION | INTERSECT | EXCEPT } [ ALL ] select ]
[ ORDER BY expression [ ASC | DESC | USING operator ] [, ...] ]
[ LIMIT { count | ALL } ]
[ OFFSET start ]
[ FOR UPDATE [ OF table_name [, ...] ] ]
```

 **SET语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">SET [ SESSION | LOCAL ] name { TO | = } { value | 'value' | DEFAULT }
SET [ SESSION | LOCAL ] TIME ZONE { time_zone | LOCAL | DEFAULT }
```

 **SET CONSTRAINTS语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">SET CONSTRAINTS { ALL | name [, ...] } { DEFERRED | IMMEDIATE }
```

 **SET TRANSACTION语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">SET TRANSACTION transaction_mode [, ...]
SET SESSION CHARACTERISTICS AS TRANSACTION transaction_mode [, ...]
```

 **SHOW语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">SHOW name
SHOW ALL
```

 **START TRANSACTION语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">START TRANSACTION [ transaction_mode [, ...] ]
```

 **TRUNCATE TABLE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">TRUNCATE [ TABLE ] name
```

 **UPDATE语句：**  
语法：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">UPDATE [ ONLY ] table SET column = { expression | DEFAULT } [, ...]
[ FROM from_list ]
[ WHERE condition ]
```

#### PostgreSQL数据类型

#### PostgreSQL数据类型

数据类型指定要在表字段中存储哪种类型的数据。 在创建表时，对于每列必须使用数据类型。  
PotgreSQL中主要有三种类型的数据类型。 此外，用户还可以使用`CREATE TYPE` SQL命令创建自己的自定义数据类型。

以下是PostgreSQL中主要有三种类型的数据类型：

- 数值数据类型
- 字符串数据类型
- 日期/时间数据类型

#### 数值数据类型

数字数据类型用于指定表中的数字数据。

<figure class="wp-block-table is-style-regular"><table class="has-fixed-layout"><thead><tr><th>名称</th><th>描述</th><th>存储大小</th><th>范围</th></tr></thead><tbody><tr><td>smallint</td><td>存储整数，小范围</td><td>2字节</td><td>-32768 至 +32767</td></tr><tr><td>integer</td><td>存储整数。使用这个类型可存储典型的整数</td><td>4字节</td><td>-2147483648 至 +2147483647</td></tr><tr><td>bigint</td><td>存储整数，大范围。</td><td>8字节</td><td>-9223372036854775808 至 9223372036854775807</td></tr><tr><td>decimal</td><td>用户指定的精度，精确</td><td>变量</td><td>小数点前最多为131072个数字; 小数点后最多为16383个数字。</td></tr><tr><td>numeric</td><td>用户指定的精度，精确</td><td>变量</td><td>小数点前最多为131072个数字; 小数点后最多为16383个数字。</td></tr><tr><td>real</td><td>可变精度，不精确</td><td>4字节</td><td>6位数字精度</td></tr><tr><td>double</td><td>可变精度，不精确</td><td>8字节</td><td>15位数字精度</td></tr><tr><td>serial</td><td>自动递增整数</td><td>4字节</td><td>1 至 2147483647</td></tr><tr><td>bigserial</td><td>大的自动递增整数</td><td>8字节</td><td>1 至 9223372036854775807</td></tr></tbody></table>

</figure>#### 字符串数据类型

String数据类型用于表示字符串类型值。

<figure class="wp-block-table is-style-regular"><table class=""><thead><tr><th>数据类型</th><th>描述</th></tr></thead><tbody><tr><td>char(size)</td><td>这里`size`是要存储的字符数。固定长度字符串，右边的空格填充到相等大小的字符。</td></tr><tr><td>character(size)</td><td>这里`size`是要存储的字符数。 固定长度字符串。 右边的空格填充到相等大小的字符。</td></tr><tr><td>varchar(size)</td><td>这里`size`是要存储的字符数。 可变长度字符串。</td></tr><tr><td>character varying(size)</td><td>这里`size`是要存储的字符数。 可变长度字符串。</td></tr><tr><td>text</td><td>可变长度字符串。</td></tr></tbody></table>

</figure>#### 日期/时间数据类型

日期/时间数据类型用于表示使用日期和时间值的列。

<figure class="wp-block-table is-style-regular"><table class="has-fixed-layout"><thead><tr><th>名称</th><th>描述</th><th>存储大小</th><th>最小值</th><th>最大值</th><th>解析度</th></tr></thead><tbody><tr><td>timestamp \[ (p) \] \[不带时区 \]</td><td>日期和时间(无时区)</td><td>8字节</td><td>4713 bc</td><td>294276 ad</td><td>1微秒/14位数</td></tr><tr><td>timestamp \[ (p) \]带时区</td><td>包括日期和时间，带时区</td><td>8字节</td><td>4713 bc</td><td>294276 ad</td><td></td></tr><tr><td>date</td><td>日期(没有时间)</td><td>4字节</td><td>4713 bc</td><td>5874897 ad</td><td>1微秒/14位数</td></tr><tr><td>time \[ (p) \] \[ 不带时区 \]</td><td>时间(无日期)</td><td>8字节</td><td>00:00:00</td><td>24:00:00</td><td>1微秒/14位数</td></tr><tr><td>time \[ (p) \] 带时区</td><td>仅限时间，带时区</td><td>12字节</td><td>00:00:00+1459</td><td>24:00:00-1459</td><td>1微秒/14位数</td></tr><tr><td>interval \[ fields \] \[ (p) \]</td><td>时间间隔</td><td>12字节</td><td>-178000000年</td><td>178000000年</td><td>1微秒/14位数</td></tr></tbody></table>

</figure>#### 一些其他数据类型

### 布尔类型：

<figure class="wp-block-table is-style-regular"><table class=""><thead><tr><th>名称</th><th>描述</th><th>存储大小</th></tr></thead><tbody><tr><td>boolean</td><td>它指定`true`或`false`的状态。</td><td>1字节</td></tr></tbody></table>

</figure>### 货币类型：

<figure class="wp-block-table is-style-regular"><table class="has-fixed-layout"><thead><tr><th>名称</th><th>描述</th><th>存储大小</th><th>范围</th></tr></thead><tbody><tr><td>money</td><td>货币金额</td><td>8字节</td><td>-92233720368547758.08 至 +92233720368547758.07</td></tr></tbody></table>

</figure>### 几何类型：

几何数据类型表示二维空间对象。最根本的类型：**点** – 形成所有其他类型的基础。

<figure class="wp-block-table is-style-regular"><table class="has-fixed-layout"><thead><tr><th>名称</th><th>存储大小</th><th>表示</th><th>描述</th></tr></thead><tbody><tr><td>point</td><td>16字节</td><td>在一个平面上的点</td><td>(x,y)</td></tr><tr><td>line</td><td>32字节</td><td>无限线(未完全实现)</td><td>((x1,y1),(x2,y2))</td></tr><tr><td>lseg</td><td>32字节</td><td>有限线段</td><td>((x1,y1),(x2,y2))</td></tr><tr><td>box</td><td>32字节</td><td>矩形框</td><td>((x1,y1),(x2,y2))</td></tr><tr><td>path</td><td>16+16n字节</td><td>封闭路径(类似于多边形)</td><td>((x1,y1),…)</td></tr><tr><td>polygon</td><td>40+16n字节</td><td>多边形(类似于封闭路径)</td><td>((x1,y1),…)</td></tr><tr><td>circle</td><td>24字节</td><td>圆</td><td>`<(x，y)，r>`(中心点和半径)</td></tr></tbody></table>

</figure>