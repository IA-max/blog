---
title: nodejs+mongoose简单关联+增删改查
date: '2019-12-20T00:41:05+08:00'
status: private
permalink: /nodejsmongoose%e7%ae%80%e5%8d%95%e5%85%b3%e8%81%94%e5%a2%9e%e5%88%a0%e6%94%b9%e6%9f%a5
author: admin
excerpt: ''
type: post
id: 3268
category:
    - 数据库
tag: []
post_format: []
---
本篇文章是关于mongoose的简单操作，包括使用objectId来关联和一些增删查改的方法。希望能指出不正确的地方，因为我也是初学者。也希望能对其他初学者有帮助！谢谢！

node.js目录结构：

routes：路由分发

controller：mvc中C层，做逻辑处理

models：mvc中m层，数据表模型

DBsql：模型sql操作

DBhelper：公共sql方法

数据表结构

user：学生表

schoolClass：班级表

user\_schoolClass：多对多中间表

逻辑过程：

（1）新建对应表模型及关联

（2）设计增删改查语句

（3）逻辑层使用模型去执行增删查改方法

（1）新建对应表模型及关联

user模型

var mongoose = require(‘mongoose’);  
var Schema = mongoose.Schema;

//schema 就是如何定义数据的结构  
var userSchema = new mongoose.Schema({  
 userName:{type:String}  
});  
//生成方法getModel给予调用，返回user模型  
module.exports = {  
 getModel: function(){  
 return \_getModel();  
 }  
};

//通过db将表user和Schema结构连接在一起，没有表的话会自动产生。  
var \_getModel = function(type,err){  
 var userModel = global.db.model(‘user’,userSchema);  
 return userModel;

};  
schoolClass模型  
var mongoose = require(‘mongoose’);  
var Schema = mongoose.Schema;

var schoolClassSchema = new mongoose.Schema({  
 schoolClassName:{type:String}

});  
module.exports = {  
 getModel: function(){  
 return \_getModel();  
 }  
};

var \_getModel = function(){  
 var schoolClassModel = global.db.model(‘schoolClass’,schoolClassSchema);  
 return schoolClassModel;

};  
user\_schoolClass模型  
var mongoose = require(‘mongoose’);  
var Schema = mongoose.Schema;

var user\_schoolClassSchema = new mongoose.Schema({  
 userId:{type: Schema.Types.ObjectId, ref: ‘user’ },//定义类型为objectid ,ref是关联的模型名称  
 schoolClassId:{type: Schema.Types.ObjectId, ref: ‘schoolClass’ }//定义类型为objectid ,ref是关联的模型名称

});  
module.exports = {  
 getModel: function(){  
 return \_getModel();  
 }  
};

var \_getModel = function(type,err){  
 var user\_schoolClassModel = global.db.model(‘user\_schoolClass’,user\_schoolClassSchema);  
 return user\_schoolClassModel;

};  
（2）设计增删改查语句  
dbHelper.js

/\*\*

- 公共Add方法
- @param model 要操作数据库的模型
- @param conditions 增加的条件,如{id:xxx}
- @param callback 回调方法  
  \*/  
  exports.addData =function(model,conditions,callback) { model.create(conditions, function(err,result){  
   if(err) {  
   console.log(err);  
   callback({success:0,flag:”save data fail”});  
   } else { `    console.log('save success');    callback({success:1,flag:"save data success"});}`});

}

/\*\*

- 公共update方法
- @param model 要操作数据库的模型
- @param conditions 增加的条件,如{id:xxx}
- @param update 更新条件{set{id:xxx}}
- @param options
- @param callback  
  \*/  
  exports.updateData =function(model,conditions,update,options,callback) { model.update(conditions, update, options, function(error,result){  
   if(error) {  
   console.log(error);  
   callback({success:0,flag:”update data fail”});  
   } else {  
   if(result.n!=0){  
   console.log(‘update success!’);  
   callback({success:1,flag:”update data success”});  
   }  
   else{  
   console.log(‘update fail:no this data!’);  
   callback({success:0, flag: ‘update fail:no this data!’});  
   } `}`});  
  }

/\*\*

- 公共remove方法
- @param model
- @param conditions
- @param callback  
  \*/  
  exports.removeData =function(model,conditions,callback) { model.remove(conditions, function(error,result) {  
   if (error) {  
   console.log(error);  
   callback({success: 0, flag: “remove data fail”});  
   } else {  
   if(result.result.n!=0){  
   console.log(‘remove success!’);  
   callback({success: 1, flag: “remove data success”});  
   }  
   else{  
   console.log(‘remove fail:no this data!’);  
   callback({success:0, flag: ‘remove fail:no this data!’});  
   } `}`});  
  }

/\*\*

- 公共find方法 非关联查找
- @param model
- @param conditions
- @param fields 查找时限定的条件，如顺序，某些字段不查找等
- @param options
- @param callback  
  \*/  
  exports.findData =function(model,conditions,fields,options,callback) { model.find(conditions, fields, options, function(error, result){  
   if(error) {  
   console.log(error);  
   callback({success: 0, flag: “find data fail”});  
   } else {  
   if(result.length!=0){  
   console.log(‘find success!’);  
   callback({success: 1, flag: “find data success”,result:result});  
   }  
   else{  
   console.log(‘find fail:no this data!’);  
   callback({success: 0, flag: ‘find fail:no this data!’});  
   } `}`});  
  }

/\*\*

- 公共populate find方法
- 是关联查找
- @param model
- @param conditions
- @param path :The field need to be refilled （需要覆盖的字段）
- @param fields :select fields (name -\_id,Separated by a space field,In front of the field name plus “-“said not filled in)
- @param refmodel （关联的字段，有path可为null）
- @param options
- @param callback  
  \*/  
  exports.findDataPopulation =function(model,conditions,path,fields,refmodel,options,callback) {  
  model.find(conditions)  
  .populate(path,fields, refmodel,options)  
  .exec(function(err, result) {  
   if(err) {  
   console.log(err);  
   callback({success: 0, flag: ‘population find data fail’});  
   } else {  
   if(result.length!=0){  
   console.log(‘population find success!’);  
   callback({success: 1, flag: ‘population find data success’,result:result});  
   }  
   else{  
   console.log(‘population find fail:no this data!’);  
   callback({success: 0, flag: ‘population find fail:no this data!’});  
   } `    }`});

}

userDao（schoolClassDao跟userDao一样，只是获取model是获取schoolClass的model就不贴出来了）  
var user =require(‘../models/user’);

/\*\*

- 调用公共add方法并且传入操作数据库的模型user
- @returns {Function}  
  \*/  
  exports.addUser = function(conditions,dbHelper,callback) { //获取user模型  
  var userModel =user.getModel();  
  dbHelper.addData(userModel,conditions,function(result) {  
   callback(result); });

};  
/\*\*

- 调用公共find方法并且传入操作数据库的模型user
- @param conditions
- @param dbHelper
- @param callback  
  \*/  
  exports.findUser = function(conditions,dbHelper,callback) { var userModel =user.getModel();  
  var fields = {};  
  var options = {}; dbHelper.findData(userModel,conditions,fields,options,function(result){  
   callback(result);  
  });

}

/\*\*

- 调用公共remove方法并且传入操作数据库的模型user
- @param conditions
- @param dbHelper
- @param callback  
  \*/  
  exports.removeUser = function(conditions,dbHelper,callback) { var userModel =user.getModel();  
  dbHelper.removeData(userModel,conditions,function(result){  
   callback(result);  
  });  
  }

/\*\*

- 调用公共update方法并且传入操作数据库的模型user
- @param conditions
- @param update
- @param options
- @param dbHelper
- @param callback  
  \*/  
  exports.updateUser = function(conditions,update,options,dbHelper,callback) { var userModel =user.getModel();  
  dbHelper.updateData(userModel,conditions,update,options,function(result){  
   callback(result);  
  });  
  }

user\_schoolClassDao  
var user\_schoolClass =require(‘../models/user\_schoolClass’);  
var user = require(‘../models/user’);  
var schoolClass = require(‘../models/schoolClass’);

/\*\*

- add User\_schoolClass
- @param conditions
- @param dbHelper
- @param callback  
  \*/  
  exports.addUser\_schoolClass = function(conditions,dbHelper,callback) { var user\_schoolClassModel =user\_schoolClass.getModel(); dbHelper.addData(user\_schoolClassModel,conditions,function(result) {  
   callback(result); });

}  
/\*\*

- find User\_SchoolClass 非Ref
- @param conditions
- @param dbHelper
- @param callback  
  \*/  
  exports.findUser\_schoolClass = function(conditions,dbHelper,callback) { var user\_schoolClassModel =user\_schoolClass.getModel();  
  var conditions =conditions;  
  var fields = {};  
  var options = {};  
  dbHelper.findData(user\_schoolClassModel,conditions,fields,options,function(result){  
   callback(result);  
  });

}

/\*\*

- find User\_SchoolClass 是Ref
- @param conditions
- @param path 需要被填充的字段
- @param dbHelper
- @param callback  
  \*/  
  exports.findUser\_schoolClassRef = function(conditions,path,dbHelper,callback) { var user\_schoolClassModel =user\_schoolClass.getModel(); var path = path;  
  var fields = {\_\_v:0};  
  var options = {sort:{\_id:1}};  
  var refmodel1 = schoolClass.getModel();  
  var refmodel2 = user.getModel();  
  dbHelper.findDataPopulation(user\_schoolClassModel,conditions,path,fields,{},options,function(result){  
   callback(result);  
  });

}

/\*\*

- remove User\_shcoolClass
- @param conditions
- @param dbHelper
- @param callback  
  \*/  
  exports.removeUser\_schoolClass = function(conditions,dbHelper,callback) { var user\_schoolClassModel =user\_schoolClass.getModel();  
  dbHelper.removeData(user\_schoolClassModel,conditions,function(result){  
   callback(result);  
  });

}

/\*\*

- update User\_schoolClass
- @param conditions
- @param update
- @param options
- @param dbHelper
- @param callback  
  \*/  
  exports.updateUser\_schoolClass = function(conditions,update,options,dbHelper,callback) { var user\_schoolClassModel =user\_schoolClass.getModel();  
  dbHelper.updateData(user\_schoolClassModel,conditions,update,options,function(result){  
   callback(result);  
  });

}  
findUser\_schoolClass ：不会找出user和schoolClass的实际内容

findUser\_schoolClassRef ：会找出user和schoolClass的实际内容

（3）逻辑层使用模型去执行增删查改方法

var dbHelper = require(‘../DBhelper/dbHelper’);  
var userDao =require(‘../DBSql/userDao’);

/\*\*

- add user
- @returns {Function}  
  \*/  
  exports.userAddAction = function() {  
  return function(req, res) { `var user = new Array();for(var i=0;i<10;i++){    user.push({        _id   : new global.mongoose.Types.ObjectId(),        userName  : "user"+(i+1)//字段如果不是在model里面定义字段，则不会被录入    });}userDao.addUser(user,dbHelper,function(result){    res.json(result);});`}  
  }

/\*\*

- get User List
- @returns {Function}  
  \*/  
  exports.userFindAction = function() {  
  return function(req, res) {  
   var conditions ={};  
   userDao.findUser(conditions,dbHelper,function(result){  
   res.json(result);  
   });  
  }  
  }

exports.userRemoveAction = function() {  
 return function(req, res) {  
 var conditions ={};  
 userDao.removeUser(conditions,dbHelper,function(result){  
 res.json(result);  
 });  
 //除了要删除user表里的内容，还要删除关联表(user\_schoolClass)的内容  
 }  
}

exports.userUpdateAction = function() {  
 return function (req, res) {

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">    var conditions = {};
    var update = {}//{$set : {userName:xxx}};
    var options = {}//{upsert:false};
    userDao.updateUser(conditions, update, options, dbHelper, function (result) {
        res.json(result);
    });
    //如果要更加关联对象，需要update user_schoolClass表中的userid 和scoolClassId
}
```

}  
schoolClassManagermentController跟userManagementController一样，只有add方法有改变

var schoolClassDao =require(‘../DBSql/schoolClassDao’);  
var dbHelper = require(‘../DBhelper/dbHelper’);

/\*\*

- add schoolClass
- @returns {Function}  
  \*/  
  exports.schoolClassAddAction = function() {  
  return function(req, res) { `var schoolClass =new Array();//新建两个班级for(var i=0;i<2;i++){    schoolClass.push({        _id   : new global.mongoose.Types.ObjectId(),        schoolClassName  : "class"+(i+1)    });}//调用Dao的add方法来使用user模型来增加schoolClassDao.addSchoolClass(schoolClass,dbHelper,function(result){    res.json(result);});`}  
  }  
  ①调用user的add方法，生成10个user。url：http://10.222.225.19:8080/userAddAction  
  ②调用user的find方法查看。url：http://10.222.225.19:8080/userFindAction  
  {  
  “success”: 1,  
  “flag”: “find data success”,  
  “result”: \[  
  {  
   “\_id”: “568c82c1cf41cfa50016830a”,  
   “userName”: “user1”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c82c1cf41cfa50016830b”,  
   “userName”: “user2”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c82c1cf41cfa50016830c”,  
   “userName”: “user3”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c82c1cf41cfa50016830d”,  
   “userName”: “user4”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c82c1cf41cfa50016830e”,  
   “userName”: “user5”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c82c1cf41cfa50016830f”,  
   “userName”: “user6”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c82c1cf41cfa500168310”,  
   “userName”: “user7”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c82c1cf41cfa500168311”,  
   “userName”: “user8”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c82c1cf41cfa500168312”,  
   “userName”: “user9”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c82c1cf41cfa500168313”,  
   “userName”: “user10”,  
   “\_\_v”: 0  
  }  
  \]  
  }  
  ③调用schoolClass的add方法，生成2个schoolClass。url：http://10.222.225.19:8080/schoolClassAddAction  
  ④调用schoolClass的find方法查看。url：http://10.222.225.19:8080/schoolClassFindAction  
  {  
  “success”: 1,  
  “flag”: “find data success”,  
  “result”: \[  
  {  
   “\_id”: “568c834c0de1c69ceb235edd”,  
   “schoolClassName”: “class1”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c834c0de1c69ceb235ede”,  
   “schoolClassName”: “class2”,  
   “\_\_v”: 0  
  }  
  \]  
  }  
  user\_schoolClassController除了add方法和find方法不一样，其余大致相同。

var schoolClassDao =require(‘../DBSql/schoolClassDao’);  
var dbHelper = require(‘../DBhelper/dbHelper’);  
var userDao =require(‘../DBSql/userDao’);  
var user\_schoolClassDao =require(‘../DBSql/user\_schoolClassDao’);

/\*\*

- add user\_schoolClass
- @returns {Function}  
  \*/  
  exports.user\_schoolClassAddAction = function() {  
  return function(req, res) { `var userId = new Array();var schoolClassId = new Array();//查找存在的所以useruserDao.findUser({},dbHelper,function(result){   if(result.success==1){       var user =result.result;   //把每个user的id取出放进数组userId   for(var i=0;i&lt;user.length;i++){       userId[i]=user[i]._id;   }   //以相同做法将schoolClass的id取出放在schoolClassId中   schoolClassDao.findSchoolClass({},dbHelper,function(result){       if(result.success==1){           var schoolClass =result.result;           for(var i=0;i&lt;schoolClass.length;i++){               schoolClassId[i]=schoolClass[i]._id;           }           var user_schoolClass = new Array();           for(var i=0;i&lt;schoolClassId.length;i++){               //将前5个user与schoolclass1关联               if(i==0){                   for(var j=0;j&lt;5;j++){                       user_schoolClass.push({                           userId:userId[i],                           schoolClassId:schoolClassId[i]                       });                   }               }               else{                   //将后5个user与schoolclass2关联                   for(var j=5;j&lt;10;j++){                       user_schoolClass.push({                           userId:userId[i],                           schoolClassId:schoolClassId[i]                       });                   }               }           }           //中间表将增加user与schoolclass关联           user_schoolClassDao.addUser_schoolClass(user_schoolClass,dbHelper,function(result){               res.json(result);           });       }   });   }});`}  
  }

/\*\*

- 查找方法，不关联查找
- user\_schoolClass find
- @returns {Function}  
  \*/  
  exports.user\_schoolClassFindAction = function() {  
  return function(req, res) { `var conditions ={};user_schoolClassDao.findUser_schoolClass(conditions,dbHelper,function(result){    res.json(result);});`}  
  }

/\*\*

- 关联查找
- user\_schoolClass find Ref
- @returns {Function}  
  \*/  
  exports.user\_schoolClassFindRefAction = function() {  
  return function(req, res) { `var conditions ={};//用空格隔开要被填充的字段var path="userId schoolClassId"user_schoolClassDao.findUser_schoolClassRef(conditions,path,dbHelper,function(result){    res.json(result);});`}  
  }  
  ⑤调用user\_schoolClass的add方法，生成2个schoolClass。url：http://10.222.225.19:8080/user\_schoolClassAddAction  
  ⑥调用user\_schoolClass的不关联的find方法查看。http://10.222.225.19:8080/user\_schoolClassFindAction  
  {  
  “success”: 1,  
  “flag”: “find data success”,  
  “result”: \[  
  {  
   “\_id”: “568c85b19f4a4e210f07b126”,  
   “userId”: “568c82c1cf41cfa50016830a”,  
   “schoolClassId”: “568c834c0de1c69ceb235edd”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c85b19f4a4e210f07b129”,  
   “userId”: “568c82c1cf41cfa50016830a”,  
   “schoolClassId”: “568c834c0de1c69ceb235edd”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c85b19f4a4e210f07b12a”,  
   “userId”: “568c82c1cf41cfa50016830a”,  
   “schoolClassId”: “568c834c0de1c69ceb235edd”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c85b19f4a4e210f07b128”,  
   “userId”: “568c82c1cf41cfa50016830a”,  
   “schoolClassId”: “568c834c0de1c69ceb235edd”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c85b19f4a4e210f07b127”,  
   “userId”: “568c82c1cf41cfa50016830a”,  
   “schoolClassId”: “568c834c0de1c69ceb235edd”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c85b19f4a4e210f07b12e”,  
   “userId”: “568c82c1cf41cfa50016830b”,  
   “schoolClassId”: “568c834c0de1c69ceb235ede”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c85b19f4a4e210f07b12d”,  
   “userId”: “568c82c1cf41cfa50016830b”,  
   “schoolClassId”: “568c834c0de1c69ceb235ede”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c85b19f4a4e210f07b12c”,  
   “userId”: “568c82c1cf41cfa50016830b”,  
   “schoolClassId”: “568c834c0de1c69ceb235ede”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c85b19f4a4e210f07b12f”,  
   “userId”: “568c82c1cf41cfa50016830b”,  
   “schoolClassId”: “568c834c0de1c69ceb235ede”,  
   “\_\_v”: 0  
  },  
  {  
   “\_id”: “568c85b19f4a4e210f07b12b”,  
   “userId”: “568c82c1cf41cfa50016830b”,  
   “schoolClassId”: “568c834c0de1c69ceb235ede”,  
   “\_\_v”: 0  
  }  
  \]  
  }  
  可以看出并没有显示user 和schoolClass相关数据，只显示了id；

⑦调用user\_schoolClass的关联的find方法查看。http://10.222.225.19:8080/user\_schoolClassFindRefAction  
{  
 “success”: 1,  
 “flag”: “population find data success”,  
 “result”: \[  
 {  
 “\_id”: “568c85b19f4a4e210f07b126”,  
 “userId”: {  
 “\_id”: “568c82c1cf41cfa50016830a”,  
 “userName”: “user1”  
 },  
 “schoolClassId”: {  
 “\_id”: “568c834c0de1c69ceb235edd”,  
 “schoolClassName”: “class1”  
 },  
 “\_\_v”: 0  
 },  
 {  
 “\_id”: “568c85b19f4a4e210f07b129”,  
 “userId”: {  
 “\_id”: “568c82c1cf41cfa50016830a”,  
 “userName”: “user1”  
 },  
 “schoolClassId”: {  
 “\_id”: “568c834c0de1c69ceb235edd”,  
 “schoolClassName”: “class1”  
 },  
 “\_\_v”: 0  
 },  
 {  
 “\_id”: “568c85b19f4a4e210f07b12a”,  
 “userId”: {  
 “\_id”: “568c82c1cf41cfa50016830a”,  
 “userName”: “user1”  
 },  
 “schoolClassId”: {  
 “\_id”: “568c834c0de1c69ceb235edd”,  
 “schoolClassName”: “class1”  
 },  
 “\_\_v”: 0  
 },  
 {  
 “\_id”: “568c85b19f4a4e210f07b128”,  
 “userId”: {  
 “\_id”: “568c82c1cf41cfa50016830a”,  
 “userName”: “user1”  
 },  
 “schoolClassId”: {  
 “\_id”: “568c834c0de1c69ceb235edd”,  
 “schoolClassName”: “class1”  
 },  
 “\_\_v”: 0  
 },  
 {  
 “\_id”: “568c85b19f4a4e210f07b127”,  
 “userId”: {  
 “\_id”: “568c82c1cf41cfa50016830a”,  
 “userName”: “user1”  
 },  
 “schoolClassId”: {  
 “\_id”: “568c834c0de1c69ceb235edd”,  
 “schoolClassName”: “class1”  
 },  
 “\_\_v”: 0  
 },  
 {  
 “\_id”: “568c85b19f4a4e210f07b12e”,  
 “userId”: {  
 “\_id”: “568c82c1cf41cfa50016830b”,  
 “userName”: “user2”  
 },  
 “schoolClassId”: {  
 “\_id”: “568c834c0de1c69ceb235ede”,  
 “schoolClassName”: “class2”  
 },  
 “\_\_v”: 0  
 },  
 {  
 “\_id”: “568c85b19f4a4e210f07b12d”,  
 “userId”: {  
 “\_id”: “568c82c1cf41cfa50016830b”,  
 “userName”: “user2”  
 },  
 “schoolClassId”: {  
 “\_id”: “568c834c0de1c69ceb235ede”,  
 “schoolClassName”: “class2”  
 },  
 “\_\_v”: 0  
 },  
 {  
 “\_id”: “568c85b19f4a4e210f07b12c”,  
 “userId”: {  
 “\_id”: “568c82c1cf41cfa50016830b”,  
 “userName”: “user2”  
 },  
 “schoolClassId”: {  
 “\_id”: “568c834c0de1c69ceb235ede”,  
 “schoolClassName”: “class2”  
 },  
 “\_\_v”: 0  
 },  
 {  
 “\_id”: “568c85b19f4a4e210f07b12f”,  
 “userId”: {  
 “\_id”: “568c82c1cf41cfa50016830b”,  
 “userName”: “user2”  
 },  
 “schoolClassId”: {  
 “\_id”: “568c834c0de1c69ceb235ede”,  
 “schoolClassName”: “class2”  
 },  
 “\_\_v”: 0  
 },  
 {  
 “\_id”: “568c85b19f4a4e210f07b12b”,  
 “userId”: {  
 “\_id”: “568c82c1cf41cfa50016830b”,  
 “userName”: “user2”  
 },  
 “schoolClassId”: {  
 “\_id”: “568c834c0de1c69ceb235ede”,  
 “schoolClassName”: “class2”  
 },  
 “\_\_v”: 0  
 }  
 \]  
}  
PS：ip地址需要自己修改  
可以通过”.”(点)方法取出数据，取出userName方法result.userId.userName

参考文章：  
 http://geekblog.zhaoyan.me/mongoose-%E5%85%A5%E9%97%A8%E7%B3%BB%E5%88%97-schemas-and-models/#.VoxtGvmF6Ul  
 https://cnodejs.org/topic/5206581b44e76d216aae072e  
 http://segmentfault.com/a/1190000002727265  
 http://mongoosejs.com/docs/populate.html  
 http://ourjs.com/detail/53ad24edb984bb4659000013  
 资源下载：  
 http://download.csdn.net/detail/tangjiarao/9392633