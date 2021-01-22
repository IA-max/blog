---
title: "Node 入门"
date: "2019-12-22"
featured: false
category: "node"
excerpt: "Node 处理错误友好写法"
tag: ["node","best practice"]
status: "publish"
type: "post"
cover: "./none.png"
---


##### 处理错误友好写法
```js
var async = require('async');
try {
  async.waterfall([function1, function2], myAsyncCallback);
}
catch(err) {
  errorHandler(err);
}
function function1(callback) {
  console.log('in fn1')
  callback(null,'fn1');
}
function function2(fn1, callback) {
  console.log('in fn2')
  callback(null, fn1 + 'fn2');
}
function myAsyncCallback(err, result) {
    if (err) {
      console.error('There was an error: ' + err);
      return;
    }
    //an error occurs. this gets caught by the outer try block
    //var foo = outer; //oops, outer is not defined. This throws an error
    //same scenario but inside an async function
    //can't/won't be caught by the outer try block
    setTimeout(function(){
        try{ //need try here
          var foo = inner; //oops, inner is not defined. This throws an error
        }
        catch(err) {
          errorHandler(err);
       }
    }, 1000);
    console.log('Result was: ' + result);
}
function errorHandler(err){
  //Make error handler a function that can be called from either catch
  console.log('caught error: ' + err);
}
```