---
title: 'Mongoose 完全自学教程'
date: '2019-10-24T08:08:04+08:00'
status: publish
permalink: /learn-mongoose-bymyself
author: admin
excerpt: ''
type: post
id: 1752
category:
    - 数据库
tag:
    - js
    - mongodb
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
MongoDB是一个开源的NoSQL数据库，相比MySQL那样的关系型数据库，它更显得轻巧、灵活，非常适合在数据规模很大、事务性不强的场合下使用。

同时它也是一个对象数据库，没有表、行等概念，也没有固定的模式和结构，所有的数据以文档的形式存储(文档，就是一个关联数组式的对象，它的内部由属性组成，一个属性对应的值可能是一个数、字符串、日期、数组，甚至是一个嵌套的文档。)，数据格式就是JSON。

Mongoose是MongoDB的一个对象模型工具，是基于node-mongodb-native开发的MongoDB nodejs驱动，可以在异步的环境下执行。同时它也是针对MongoDB操作的一个对象模型库，封装了MongoDB对文档的的一些增删改查等常用方法，让NodeJS操作Mongodb数据库变得更加灵活简单。

Mongoose，因为封装了对MongoDB对文档操作的常用处理方法，可以高效的操作mongodb,同时可以理解mongoose是一个简易版的orm ，提供了类似schema定义，hook、plugin、virtual、populate等机制，让NodeJS操作Mongodb数据库变得特别简单!

**先了解几个概念**

- ORM 对象关系映射
- Schema
- Model 模型
- Entity 实体

#### 对象关系映射

对象关系映射（英语：Object Relational Mapping，简称ORM，或O/RM，或O/R mapping），是一种程序设计技术，用于实现面向对象编程语言里不同类型系统的数据之间的转换。从效果上说，它其实是创建了一个可在编程语言里使用的“虚拟对象数据库”。如今已有很多免费和收费的ORM产品，而有些程序员更倾向于创建自己的ORM工具。

面向对象是从软件工程基本原则（如耦合、聚合、封装）的基础上发展起来的，而关系数据库则是从数学理论发展而来的，两套理论存在显著的区别。为了解决这个不匹配的现象，对象关系映射技术应运而生。

对象关系映射（Object-Relational Mapping）提供了概念性的、易于理解的模型化数据的方法。

ORM方法论基于三个核心原则：

- 简单：以最基本的形式建模数据。
- 传达性：数据库结构被任何人都能理解的语言文档化。
- 精确性：基于数据模型创建正确标准化的结构。

典型地，建模者通过收集来自那些熟悉应用程序但不熟练的数据建模者的人的信息开发信息模型。建模者必须能够用非技术企业专家可以理解的术语在概念层次上与数据结构进行通讯。建模者也必须能以简单的单元分析信息，对样本数据进行处理。ORM专门被设计为改进这种联系。

让我们从O/R开始。字母O起源于 对象(OBJECT),而R则来自于 关系(RELATIONAL)。几乎所有的程序里面，都存在对象和关系数据库。在业务逻辑层和用户界面层中，我们是面向对象的。当对象信息发生变化的时候，我们需要把对象的信息保存在关系数据库中。

最简单的理解：

```
<pre class="wp-block-preformatted emphasis">ORM是让用语言中的对象来操作数据库，至于如何实现就是orm工具实现的，可以理解mongoose是orm工具。
```

mongoose包括以下四部分：

- 一个对持久类对象进行CRUD操作的API，可以理解为实体Entity上的方法
- 一个语言或API用来规定与类和类属性相关的查询，比如Population
- 一个规定MAPPING METADATA的工具，可以理解为Schema定义
- 一种技术可以让ORM的实现各种db操作的封装

#### Schema

Schema是一种以文件形式存储的数据库模型骨架，无法直接通往数据库端  
也就是说它不具备对数据库的操作能力，仅仅只是定义数据库模型在程序片段中的一种表现，可以说是数据属性模型(传统意义的表结构)，又或着是“集合”的模型骨架。

最简单的理解：

```
<pre class="wp-block-preformatted emphasis">Schema是对文档(表)结构的定义
```

基本属性类型有：

- 字符串
- 日期型
- 数值型
- 布尔型(Boolean)
- null
- 数组
- 内嵌文档等  
  当然它还有更丰富的对字段进行校验约束的功能。

#### 模型(Model)

模型(Model)是由Schema构造生成的模型，除了Schema定义的数据库骨架以外  
还具有**数据库操作的行为，类似于管理数据库属性、行为的类**。

#### 实体(Entity)

实体(Entity)是由Model创建的实体，使用save方法保存数据，Model和Entity都有能影响数据库的操作，但Model比Entity更具操作性。

创建成功之后，Schema属性就变成了Model和Entity的公共属性了

- - - - - -

#### 总结

Schema是骨架，模型（model）是根据Schema创建的模板  
也就是说Schema和Model是定义部分  
而实体Entity是模型实例化后创建的对象，它才是真正对数据库进行操作的。

所以我们会把定义部分（Schema + model）和实体操作部分（Entity）分开  
定义是不变的，而实体是对数据库进行操作，操作类是术语可变的.

所以在mvc分层的时候model实际放的是定义部分，而在controller里使用的是实体操作部分的。

- [Mongoose入门](https://blog.imaxyoung.com/learn-mongoose-bymyself/page/2)
- [Schemas与Schemas Type](https://blog.imaxyoung.com/learn-mongoose-bymyself/page/3)

#### mongoose入门

#####  安装 

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">npm i --save mongoose
```

##### 引入 mongoose , 连接本地数据库

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const mongoose = require("mongoose");
mongoose.connect("mongodb://user:pass@ip:port/database");
```

```
<pre class="wp-block-preformatted">user 是mongodb里用户名
pass 是mongodb里用户的密码
ip   是mongodb服务器可以访问ip地址，比如本地为127.0.0.1或localhost
port 是mongodb服务器可以访问端口，默认是27017
connect() 返回一个状态待定（pending）的连接，能提醒Connect成功和失败警告。
```

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const db = mongoose.connection;
db.on('error',
      console.error.bind(console, 'connection error:')
);
db.once('open', function() {
     //we're connected!
});
```

##### 定义一个Schema

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const kittySchema = mongoose.Schema({  name: String  });
```

得到一个带有 String 类型 name 属性的 schema   
接着把这个 schema 编译成一个 Model

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const Kitten = mongoose.model('Kitten', kittySchema);
```

model 是我们构造 document 的 Class

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">// 注意了， method 是给 document 用的
kittySchema.methods.speak = function () {
  const greeting = this.name
                   ? "Meow name is " + this.name
                   : "I don't have a name";
  console.log(greeting);
}
const Kitten = mongoose.model('Kitten', kittySchema);
```

schema methods 属性的函数会编译到 Model 的 prototype  
也会暴露到每个 document 实例：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"
```

每个 document 会在调用他的 **save** 方法后保存到数据库  
注意回调函数的**第一个参数**永远是 **error**

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
});
```

通过**find**方法获取 model 里的所有数据

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})
```

想获取特定的数据

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">// 这么写可以获取所有 name 为 "Fluff" 开头的数据
Kitten.find({ name: /^fluff/ }, callback);
```

### Schemas

#### 定义一个schema

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
});
```

之后还想添加 keys 的话， 请使用 Schema#**add 方法**

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">blogSchema.add({ name: 'string', color: 'string', price: 'number' });
```

每个属性的类型都会被转换为 在 blogSchema 里定义对应的 SchemaType

允许使用的 SchemaTypes 有

- String //字符串
- Number // 数字
- Date // 日期
- Boolean // 布尔
- Buffer // 缓冲区
- ObjectId // 对象ID
- Mixed // 混合
- Array // 数组
- Decimal128 //浮点128

例子:

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">var schema = new Schema({
  name:    String,
  binary:  Buffer,
  living:  Boolean,
  updated: { type: Date, default: Date.now },
  age:     { type: Number, min: 18, max: 65 },
  mixed:   Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  decimal: Schema.Types.Decimal128,
  array:      [],
  ofString:   [String],
  ofNumber:   [Number],
  ofDates:    [Date],
  ofBuffer:   [Buffer],
  ofBoolean:  [Boolean],
  ofMixed:    [Schema.Types.Mixed],
  ofObjectId: [Schema.Types.ObjectId],
  ofArrays:   [[]],
  ofArrayOfNumbers: [[Number]],
  nested: {
    stuff: { type: String, lowercase: true, trim: true }
  }
})
// example use
var Thing = mongoose.model('Thing', schema);
var m = new Thing;
m.name = 'Statue of Liberty';
m.age = 125;
m.updated = new Date;
m.binary = new Buffer(0);
m.living = false;
m.mixed = { any: { thing: 'i want' } };
m.markModified('mixed');
m._someId = new mongoose.Types.ObjectId;
m.array.push(1);
m.ofString.push("strings!");
m.ofNumber.unshift(1,2,3,4);
m.ofDates.addToSet(new Date);
m.ofBuffer.pop();
m.ofMixed = [1, [], 'three', { four: 5 }];
m.nested.stuff = 'good';
m.save(callback);
```

#### SchemaType

1.直接声明 schema type 为某一种 type  
2.或赋值一个含有 type 属性的对象

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">var schema1 = new Schema({
  test: String // `test` is a path of type String
});
var schema2 = new Schema({
  test: {
         type: String,
         lowercase: true   //添加其他属性
  } // `test` is a path of type string
});
```

`lowercase` 属性**只作用于字符串**

以下有一些全部 type 可用的选项和一些限定部分 type 使用的选项

- `required`: 布尔值或函数 如果值为真，为此属性添加 [required 验证器](https://mongoosedoc.top/docs/validation.html#built-in-validators)
- `default`: 任何值或函数 设置此路径默认值。如果是函数，函数返回值为默认值
- `select`: 布尔值 指定 query 的默认 [projections](https://docs.mongodb.com/manual/tutorial/project-fields-from-query-results/)
- `validate`: 函数 adds a [validator function](https://mongoosedoc.top/docs/validation.html#built-in-validators) for this property
- `get`: 函数 使用 [`Object.defineProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 定义自定义 getter
- `set`: 函数 使用 [`Object.defineProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 定义自定义 setter
- `alias`: 字符串 仅mongoose &gt;= 4.10.0。 为该字段路径定义[虚拟值](https://mongoosedoc.top/docs/guide.html#virtuals) gets/sets

##### 索引

```
<pre class="wp-block-preformatted">定义MongoDB indexes
```

- index: 布尔值 是否对这个属性创建索引
- unique: 布尔值 是否对这个属性创建唯一索引
- sparse: 布尔值 是否对这个属性创建稀疏索引

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">var schema2 = new Schema({
  test: {
    type: String,
    index: true, //开启索引
    unique: true // 唯一索引
  }
});
```

##### **字符串**

lowercase: 布尔值 是否在保存前对此值调用 .toLowerCase()  
uppercase: 布尔值 是否在保存前对此值调用 .toUpperCase()  
trim: 布尔值 是否在保存前对此值调用 .trim()  
match: 正则表达式 创建验证器检查这个值是否匹配给定正则表达式  
enum: 数组创建验证器检查这个值是否包含于给定数组

##### **数字**

min: 数值 创建验证器检查属性是否大于或等于该值  
max: 数值 创建验证器检查属性是否小于或等于该值

##### **日期**

min: Date  
max: Date

内建 Date 方法 不会触发 mongoose 修改跟踪逻辑， 如果你对使用 setMonth() 修改文档里的 Date， mongoose在 doc.save() 的时候是察觉不到这个文档发生了变化的，因此保存不到数据库。   
如果你**一定要用内建 Date 方法**， **请手动调用 doc.markModified(‘pathToYourDate’)** 告诉 mongoose 你修改了数据。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const Assignment = mongoose.model('Assignment', { dueDate: Date });
Assignment.findOne(function (err, doc) {
  doc.dueDate.setMonth(3);
  doc.save(callback); // 这个不会改变你的callback
  doc.markModified('dueDate');
  doc.save(callback); // 这个正常
})
```

##### Buffer 缓冲

Buffer类型值为二进制数据 .   
应用在处理像TCP流或文件流时，必须使用到二进制数据.

要将路径声明为Buffer，可以使用Buffer全局构造函数或string ‘Buffer’。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const schema1 = new Schema({ binData: Buffer }); //binData将被强制转换为Buffer
const schema2 = new Schema({ binData: 'Buffer' }); // 同样
const Data = mongoose.model('Data', schema2);
```

mongoose 将以下值转换为buffer类型值

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const file1 = new Data({ binData: 'test'}); // {"type":"Buffer","data":[116,101,115,116]}
const file2 = new Data({ binData: 72987 }); // {"type":"Buffer","data":[27]}
const file4 = new Data({ binData: { type: 'Buffer', data: [1, 2, 3]}}); // {"type":"Buffer","data":[1,2,3]}
```

##### MongooseMap (mongoose 5.1.0的新功能)

MongooseMap是JavaScript的 Mapclass的子类  
在这些文档中，我们将MongooseMap交替使用术语 **Map**  
在Mongoose中， MongooseMap 是使用**任意键 创建嵌套文档的方式**

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const userSchema = new Schema({
// socialMediaHandles 是一个值为字符串的映射
// Map的键始终是字符串,您可以使用of来指定值的类型
  socialMediaHandles: {
    type: Map,
    of: String
  }
});
const User = mongoose.model('User', userSchema);
// Map { 'github' => 'vkarpov15', 'twitter' => '@code_barbarian' }
console.log(new User({
  socialMediaHandles: {
    github: 'vkarpov15',
    twitter: '@code_barbarian'
  }
}).socialMediaHandles);
```

上面的示例没有明确声明github或声明twitter为路径，但是由于socialMediaHandles是映射，因此可以存储任意键/值对。  
但是，由于socialMediaHandles是映射，因此**必须使用 .get()来获取键**, **.set()来设置键**的值。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const user = new User({
  socialMediaHandles: {}
});
// Good
user.socialMediaHandles.set('github', 'vkarpov15');
// Works too
user.set('socialMediaHandles.twitter', '@code_barbarian');
// Bad, the `myspace` property will **not** get saved
user.socialMediaHandles.myspace = 'fail';
// 'vkarpov15'
console.log(user.socialMediaHandles.get('github'));
// '@code_barbarian'
console.log(user.get('socialMediaHandles.twitter'));
// undefined
user.socialMediaHandles.github;
// Will only save the 'github' and 'twitter' properties
user.save();
```

映射类型作为BSON对象存储在MongoDB中。  
**BSON对象中的键是有序的**，因此意味着将保留Map的插入顺序属性。

##### **Mixed**

一个啥都可以放的 SchemaType ， 虽然便利，但也会让数据难以维护。   
Mixed 可以通过 **Schema.Types.Mixed** 或**传入一个空对象**定义。  
以下三种方法效果一致：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const Any = new Schema({ any: {} });
const Any = new Schema({ any: Object });
const Any = new Schema({ any: Schema.Types.Mixed });
```

因为这是个 schema-less type， 所以你可以赋值为任意类型， 但是 mongoose 无法自动检测并保存你的修改。   
要告诉 Mongoose 你修改了 Mixed type 的值，调用文档的 .markModified(path) 方法， 传入你的 Mixed 字段路径。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">person.anything = { x: [3, 4, { y: "changed" }] };
person.markModified('anything');
person.save(); // anything的改变将会保存
```

##### **ObjectIds**

要指定类型为 ObjectId，在**声明**中使用 **Schema.Types.ObjectId**

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Car = new Schema({ driver: ObjectId });
// or just Schema.ObjectId for backwards compatibility with v2
```

##### 布尔型

Mongoose中的布尔值是纯JavaScript布尔值。默认情况下的mongoose

将以下值强制转换为true：

- `true`
- `'true'`
- `1`
- `'1'`
- `'yes'`

将以下值转换为false：

- `false`
- `'false'`
- `0`
- `'0'`
- `'no'`

任何其他值都会导致CastError。  
您可以使用**convertToTrue**和**convertToFalse**属性（JavaScript集合）修改Mongoose将哪些值转换为true或false 。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const M = mongoose.model('Test', new Schema({ b: Boolean }));
console.log(new M({ b: 'nay' }).b); // undefined
// Set { false, 'false', 0, '0', 'no' }
console.log(mongoose.Schema.Types.Boolean.convertToFalse);
mongoose.Schema.Types.Boolean.convertToFalse.add('nay');
console.log(new M({ b: 'nay' }).b); // false
```

##### **Arrays**

创造 SchemaTypes 或**子文档数组**

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const ToySchema = new Schema({ name: String });
const ToyBox = new Schema({
  toys: [ToySchema],
  buffers: [Buffer],
  string:  [String],
  numbers: [Number]
  // ... etc
});
```

**注意：指定空数组相当于 Mixed**  
**以下操作相当于创建 Mixed 数组**

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const Empty1 = new Schema({ any: [] });
const Empty2 = new Schema({ any: Array });
const Empty3 = new Schema({ any: [Schema.Types.Mixed] });
const Empty4 = new Schema({ any: [{}] });
```

数组的默认值是 \[\] （空数组）。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const Toy = mongoose.model('Test', ToySchema);
console.log((new Toy()).toys); // []
```

要覆盖此默认值，您需要将默认值设置为 undefined

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const ToySchema = new Schema({
  toys: {
    type: [ToySchema],
    default: undefined
  }
});
```

##### **创建自定义 Type**

Mongoose 可以扩展自定义 SchemaTypes。  
搜索 [插件](http://plugins.mongoosejs.com/) 页面，查找类似[mongoose-long](https://github.com/aheckmann/mongoose-long), [mongoose-int32](https://github.com/vkarpov15/mongoose-int32)， [以及其他](https://github.com/aheckmann/mongoose-function)[types](https://github.com/OpenifyIt/mongoose-types) 的兼容 types。

##### **schema.path() 函数**

schema.path() 函数为给定字段路径返回实例化 schema type。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const sampleSchema = new Schema({ name: { type: String, required: true } });
console.log(sampleSchema.path('name'));
// Output looks like:
/**
 * SchemaString {
 *   enumValues: [],
 *   regExp: null,
 *   path: 'name',
 *   instance: 'String',
 *   validators: ...
 */
```

这个函数可以检查给定字段路径的检验器和类型等信息

#### Connection 

- - - - - -

使用 **mongoose.connect()** 方法连接到MongoDB , 例子:

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
```

还可以在中指定其他几个参数uri, 如下:

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">mongoose.connect('mongodb://username:password@host:port/database?options...', {useNewUrlParser: true});
```

##### 操作缓冲

Mongoose使您可以立即开始使用模型，而无需等待Mongoose建立与MongoDB的连接

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
var MyModel = mongoose.model('Test', new Schema({ name: String }));
// Works
MyModel.findOne(function(error, result) { /* ... */ });
```

```
<pre class="wp-block-preformatted">因为 mongoose 在内部缓冲了模型函数的调用
这种缓冲很方便，但也是造成混乱的常见原因
如果您使用未连接的模型，则默认情况下，mongoose不会抛出任何错误。
```

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">// Will just hang until mongoose successfully connects
MyModel.findOne(function(error, result) { /* ... */ });
setTimeout(function() {
  mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
}, 60000);
```

要禁用缓冲，请关闭bufferCommands架构上的选项  
如果已bufferCommands打开并且连接已挂起，请尝试 bufferCommands关闭以查看是否没有正确打开连接。

```
<pre class="wp-block-preformatted">您还可以bufferCommands全局禁用
```

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">mongoose.set('bufferCommands', false);
```

##### 错误处理

连接可能会发生两类错误

1.初始连接时出错。如果初始连接失败，Mongoose将**不会**尝试重新连接，它将发出“错误”事件，并且Promise mongoose.connect()返回将被拒绝。  
2.建立初始连接后出错。将尝试重新连接，并且将发出“错误”事件

要处理初始连接错误，应将**.catch()或try/catch**与 **async / await**一起使用。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }).
  catch(error => handleError(error));
// 或者:
try {
  await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
} catch (error) {
  handleError(error);
}
```

要在建立初始连接后处理错误，应侦听连接上的错误事件。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">mongoose.connection.on('error', err => {
  logError(err);
});
```

##### options

connect方法还接受一个options对象，该对象将传递给基础MongoDB驱动程序

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">mongoose.connect(uri, options);
```

options 的完整列表可在的[MongoDB Node.js驱动程序文档中找到`connect()`](http://mongodb.github.io/node-mongodb-native/2.2/api/MongoClient.html#connect)。  
mongoose 不加修改地将选项传递给驱动程序，对一些例外情况进行了解释，下面将对此进行解释:

- bufferCommands -这是 mongoose 特定的选项（未传递给MongoDB驱动程序），用于禁用mongoose的Buffer机制
- user/ pass -身份验证的用户名和密码. 这些选项是mongoose特定的，它们等效于MongoDB驱动程序的`auth.user`和`auth.password`选项。
- autoIndex -默认情况下，mongoose在连接时会自动构建您的架构中定义的索引。这对于开发非常有用，但对于大型生产部署而言并不理想，因为索引构建会导致性能下降。如果设置autoIndex为false，mongoose将不会自动为此连接建立任何模型的索引。
- dbName -指定要连接到的数据库，并覆盖连接字符串中指定的任何数据库。如果您使用mongodb+srv语法连接到MongoDB Atlas，则应使用它dbName来指定数据库，因为当前不能在连接字符串中。

以下是一些对调整mongoose很重要的选项:

- useNewUrlParser -基本的MongoDB驱动程序已弃用其当前的连接字符串解析器。因为这是一个重大更改，所以他们添加了useNewUrlParser标志，以允许用户在新解析器中发现错误时退回到旧解析器。您应该进行设置，useNewUrlParser: true除非那会阻止您进行连接。**请注意，如果指定useNewUrlParser: true，则必须在连接字符串中指定端口**，例如mongodb://localhost:27017/dbname。新的URL解析程序不支持没有端口，如连接字符串mongodb://localhost/dbname。
- useCreateIndex -默认情况下为False。设置为true使用Mongoose的默认索引构建，createIndex()而不是ensureIndex()避免来自MongoDB驱动程序的弃用警告。
- useFindAndModify -默认为True。设置为false 使 findOneAndUpdate()和findOneAndRemove()使用原生的findOneAndUpdate()而不是findAndModify().
- autoReconnect -基础MongoDB驱动程序在失去与MongoDB的连接时将自动尝试重新连接。**除非您是要管理自己的连接池的非常高级的用户，否则请勿将此选项设置为false**.
- reconnectTries -如果您连接到单个服务器或mongos代理（而不是副本集），则MongoDB驱动程序将尝试每reconnectInterval毫秒重新连接reconnectTries几次，然后放弃。当驾驶员放弃时，猫鼬连接会发出一个reconnectFailed事件。此选项对副本集连接不起作用。
- reconnectInterval -看 reconnectTries
- promiseLibrary -设置基础驱动程序的Promise库。
- poolSize -MongoDB驱动程序将为此连接保持打开状态的最大套接字数。默认情况下poolSize为5。请记住，从MongoDB 3.4开始，MongoDB一次仅允许每个套接字一次操作，因此，如果发现有一些慢查询阻止了较快查询的进行，则可能需要增加此操作。 。请参阅MongoDB和Node.js中的慢速火车。
- bufferMaxEntries -MongoDB驱动程序还具有自己的缓冲机制，该机制在驱动程序断开连接时即会启动。将此选项设置为0，并设置bufferCommands到false，如果你想没有连接驱动程序时，你的数据库操作立即失败在你的模式，而不是等待重新连接。
- connectTimeoutMS -由于初始连接期间不活动，MongoDB驱动程序将在终止套接字之前等待多长时间。默认值为30000。此选项透明地传递给Node.js的socket#setTimeout()function。
- socketTimeoutMS – 由于初始连接后由于不活动，MongoDB驱动程序将在终止套接字之前等待多长时间。套接字可能由于没有活动或长时间运行而处于非活动状态。30000默认情况下将其设置为默认值，如果您希望某些数据库操作的运行时间超过20秒，则应将其设置为运行时间最长的2-3倍。MongoDB驱动程序成功完成后，此选项将传递给Node.js socket#setTimeout()函数。
- family – 无论使用IPv4或IPv6连接. 该选项传递给Node.js的dns.lookup()函数。如果未指定此选项，则MongoDB驱动程序将首先尝试IPv6，如果IPv6失败，则将首先尝试IPv4。如果mongoose.connect(uri)通话时间较长，请尝试mongoose.connect(uri, { family: 4 })

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};
mongoose.connect(uri, options);
```

##### Callback

该`connect()`函数还接受回调参数并返回 [promise](https://mongoosejs.com/docs/promises.html)

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">mongoose.connect(uri, options, function(error) {
  // Check error in initial connection. There is no 2nd param to the callback.
});
// Or using promises
mongoose.connect(uri, options).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ },
  err => { /** handle initial connection error */ }
);
```

##### Connection String Options

您还可以在连接字符串中将驱动程序选项指定为URI 的查询字符串部分中的参数。  
这仅适用于传递给MongoDB驱动程序的选项。  
您不能像bufferCommands 在查询字符串中那样设置mongoose特定的选项。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">mongoose.connect('mongodb://localhost:27017/test?connectTimeoutMS=1000&bufferCommands=false');
// The above is equivalent to:
mongoose.connect('mongodb://localhost:27017/test', {
  connectTimeoutMS: 1000
  // Note that mongoose will **not** pull `bufferCommands` from the query string
});
```

将选项放在查询字符串中的**缺点是**查询字符串选项更**难阅读**。  
其优点是，你只需要一个单一的配置选项，URI，而不是单独的选项 socketTimeoutMS，connectTimeoutMS等等。  
最好的做法是把dev与prod之间可能不同，类似的选项replicaSet 或者ssl，在连接字符串中，和选项应在options对象中保持不变，例如connectTimeoutMS或poolSize.

MongoDB文档包含[受支持的连接字符串选项](https://docs.mongodb.com/manual/reference/connection-string/)的完整列表

##### connection-event

连接继承自Node.js的EventEmitter类，并在连接发生问题时发出事件，例如失去与MongoDB服务器的连接。  
以下是连接可能发出的事件的列表.

- `connecting`：当Mongoose开始建立与MongoDB服务器的初始连接时发出
- `connected`：当Mongoose成功建立与MongoDB服务器的初始连接时发出
- `open`： 相当于 `connected`
- `disconnecting`：您的应用程序调用[`Connection#close()`](https://mongoosejs.com/docs/api.html#connection_Connection-close)来断开与MongoDB的连接
- `disconnected`：当Mongoose失去与MongoDB服务器的连接时发出。此事件可能是由于您的代码显式关闭了连接，数据库服务器崩溃或网络连接问题所致。
- `close`：[`Connection#close()`](https://mongoosejs.com/docs/api.html#connection_Connection-close)成功关闭连接后发出。如果您调用`conn.close()`，您将同时获得“断开连接”事件和“关闭”事件。
- `reconnected`：如果Mongoose失去与MongoDB的连接并成功重新连接，则发出。mongoose 在失去与数据库的[连接](https://thecodebarbarian.com/managing-connections-with-the-mongodb-node-driver.html)时会尝试[自动重新](https://thecodebarbarian.com/managing-connections-with-the-mongodb-node-driver.html)连接。
- `error`：如果`parseError`由于数据格式错误或有效负载大于[16MB](https://docs.mongodb.com/manual/reference/limits/#BSON-Document-Size)而在连接上发生错误，则发出此错误。
- `fullsetup`：当您连接到副本集且Mongoose已成功连接到主数据库和至少一个辅助数据库时发出。
- `all`：当您连接到副本集且Mongoose已成功连接到您的连接字符串中指定的所有服务器时发出。
- `reconnectFailed`：当您连接到独立服务器且Mongoose用完时发出[`reconnectTries`](https://thecodebarbarian.com/managing-connections-with-the-mongodb-node-driver.html#handling-single-server-outages)。发出此事件后，[MongoDB驱动程序](http://npmjs.com/package/mongodb)将不再尝试重新连接。如果您连接到副本集，则永远不会发出此事件。

##### keepAlive

对于长时间运行的应用程序，通常建议谨慎选择以`keepAlive` 毫秒为单位。  
没有它，经过一段时间后，您可能会`"connection closed"`无缘无故地看到错误。  
如果是这样，请[阅读此书](http://tldp.org/HOWTO/TCP-Keepalive-HOWTO/overview.html)后 ，您可以决定启用`keepAlive`：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">mongoose.connect(uri, { keepAlive: true, keepAliveInitialDelay: 300000 });
```

keepAliveInitialDelay是keepAlive在套接字上启动之前要等待的毫秒数。   
**keepAlive自从5.2.0起，默认情况下为true.**

##### connections 副本

要连接到副本集，请传递以逗号分隔的要连接的主机列表，而不是单个主机

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">mongoose.connect('mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]' [, options]);
```

例:

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">mongoose.connect('mongodb://user:pw@host1.com:27017,host2.com:27017,host3.com:27017/testdb');
```

要连接到单节点副本集，请指定`replicaSet`选项.

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">mongoose.connect('mongodb://host1:port1/?replicaSet=rsName');
```

副本集主机名

MongoDB副本集依赖于能够可靠地确定每个成员的域名。  
在Linux和OSX上，MongoDB服务器使用hostname命令的输出 来找出要报告给副本集的域名。  
如果您要连接到在其报告hostname为的计算机上运行的远程MongoDB副本集，则可能导致令人困惑的错误localhost：

##### 多mongos支持

您还可以连接到多个[mongos](https://docs.mongodb.com/manual/reference/program/mongos/)实例，以在**分片群集**中实现高可用性。  
您 [无需传递任何特殊选项即可连接到mongoose](http://mongodb.github.io/node-mongodb-native/3.0/tutorials/connect/#connect-to-sharded-cluster) 5.x中的[多个mongos](http://mongodb.github.io/node-mongodb-native/3.0/tutorials/connect/#connect-to-sharded-cluster)。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">// Connect to 2 mongos servers
mongoose.connect('mongodb://mongosA:27501,mongosB:27501', cb);
```

##### 多个连接

到目前为止，我们已经了解了如何使用Mongoose的默认连接连接到MongoDB.  
有时，我们可能需要打开多个连接到Mongo，每个连接具有不同的读/写设置，或者可能仅连接到不同的数据库.  
在这种情况下，我们可以利用mongoose.createConnection()接受已经讨论过的所有参数，并为您返回新的连接.

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const conn = mongoose.createConnection('mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]', options);
```

然后，此[连接](https://mongoosejs.com/docs/api.html#connection_Connection)对象用于创建和检索[模型](https://mongoosejs.com/docs/api.html#model_Model)。模型 **始终**限于单个连接。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const UserModel = conn.model('User', userSchema);
```

如果使用多个连接，则应确保导出模式 而不是模型。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const userSchema = new Schema({ name: String, email: String });
module.exports = userSchema;
```

另，您应该定义一个工厂函数来在连接上注册模型，以简化在给定连接上注册所有模型的过程。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const userSchema = require('./userSchema');
module.exports = conn => {
  conn.model('User', userSchema);
};
```

Queries
-------

Model.deleteMany()  
Model.deleteOne()  
Model.find()  
Model.findById()  
Model.findByIdAndDelete()  
Model.findByIdAndRemove()  
Model.findByIdAndUpdate()  
Model.findOne()  
Model.findOneAndDelete()   
Model.findOneAndRemove()  
Model.findOneAndUpdate()  
Model.replaceOne()  
Model.updateMany()  
Model.updateOne()

mongodb中的\_\_v字段

“\_\_v”是”versionKey”的简写，当每一个文档由mongoose创建时就会自动添加，代表这该文档的版本，此属性可配置修改，默认为”\_\_v”,

作用是可以在”save文档”时作为一个查询条件，避免在”取出数据”到”save数据”的这段时间内，数据被其他进程修改而导致冲突。

仅在更新数组时递增

Mongoose仅在您修改阵列时触发版本增加。  
这是因为版本控制的主要目的是保护您免受  
例如 当有人删除您下面的第3个元素时覆盖数组中的第3个元素。  
更新只是name将不会触发版本冲突。

如果需要强制更新:

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">schema.pre('update', function( next ) {
  this.update({}, { $inc: { __v: 1 } }, next );
});
```