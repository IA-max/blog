---
title: 'JavaScript 数据推送'
date: '2019-11-21T20:02:15+08:00'
status: publish
permalink: /javascript-%e6%95%b0%e6%8d%ae%e6%8e%a8%e9%80%81
category: ["js"] 
tag: [""]
author: "max"
excerpt: ""
featured: false
image: 
featuredimage:
  src: ""
  alt: ""
---
#### **数据推送进化史**

- HTTP协议简易轮询，保持着一个链接不放，或者通过前端不停的向后端发送请求
- H5更新后有了WebSocket大大改善了双向和单向推送数据的便利性
- SSE(Server-Send Event)：服务器推送数据的新方式

##### Comet:基于 HTTP 长连接的服务器推送技术

 Comet 是一种 Web 应用架构。服务器端会主动以异步的方式向客户端程序推送数据（Ajax请求死循环），而不需要客户端显式的发出请求。Comet 架构非常适合事件驱动的 Web 应用，以及对交互性和实时性要求很强的应用，如股票交易行情分析、聊天室和 Web 版在线游戏等.

\##请求json数据例子

```html
<!--index.html-->
<meta charset="utf-8">
<script type="text/javascript" src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript">
    $.ajax({
        url: 'data.php',
        dataType: "json",
        success: function(data){
            console.log(data);
        }
    });
</script>
```

```php
//data.php
<?php
header('Content-type: application/json;charset=utf-8');
$res = array('success'=>'ok', 'text'=>'我是测试的文本');
echo json_encode($res);
?>
```

这样前端就能获取后端数据并输出。  
下面我们来模拟后端不断推送数据到前端：一种办法是前端循环不断发送ajax请求.

```html
<!--index.html-->
<meta charset="utf-8">
<script type="text/javascript" src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript">
function conn(){
    $.ajax({
        url: 'data.php',
        dataType: "json",
        success: function(data){
            console.log(data);
            conn();
        }
    });
}
conn();
</script>
```

```php
//data.php
<?php
header('Content-type: application/json;charset=utf-8');
header("Cache-Control:max-age=0");    //设置没有缓存
sleep(1);
$res = array('success'=>'ok', 'text'=>'我是测试的文本');
echo json_encode($res);
?>
```

但是这样的连接轮询，网络请求浪费非常明显，我们也可以让后端服务器来循环做这件事情，看下面例子.

原生Ajax，服务器隔一段时间推送一次（后端循环，用ob\_flush()和flush()吐数据）

```php
//data.php
<?php
// header('Content-type: application/json;charset=utf-8');
header("Cache-Control:max-age=0");    //设置没有缓存
$i = 0;
while ($i<9) {
    $i++;
    // $res = array('success'=>'ok', 'text'=>'我是测试的文本');
    // echo json_encode($res);
    sleep(1);
    $radom = rand(1,999);
    echo $radom;
    echo '<br/>';
    ob_flush();    //输出缓存，必须和flush()一起使用
    flush();    //缓存吐到浏览器
}
?>
```

 前台js（原生js实现ajax，并当状态改变时，进行输出）参考

```js
var getXmlHttpRequest = function() {
    if (window.XMLHttpRequest) {
        //主流浏览器提供了XMLHttpRequest对象
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        //低版本的IE浏览器没有提供XMLHttpRequest对象
        //所以必须使用IE浏览器的特定实现ActiveXObject
        return new ActiveXObject("Microsoft.XMLHttpRequest");
    }
};
var xhr = getXmlHttpRequest();
xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    if (xhr.readyState === 3 && xhr.status === 200) {
        //获取成功后执行操作
        //数据在xhr.responseText
        console.log(xhr.responseText);
    }
};
xhr.open("get", "data.php", true);
xhr.send("");
```

##### 基于WebSocket 的推送方案

在浏览器中通过http仅能实现单向的通信,comet可以一定程度上模拟双向通信,但效率较低,并需要服务器有较好的支持; HTML5定义了WebSocket协议，能更好的节省服务器资源和带宽并达到实时通讯。

##### SSE(Server-Send Event)：服务器推送数据的新方式

相对于WebSocket的双向通信，SSE更主要用于服务器向客户端推送数据。

SSE的实现相当简洁方便，可以用任何后端语言，就像新增加一个页面一样，可以不添加任何新的组件。

使用SSE时，如果需要由客户端向服务器端传数据，一般是另外用一个Ajax。  
(而WebSocket是真正的双向通信，只是他的实现一般都要加入新的组件，也比SSE更为复杂些）

SSE和WebSocket的取舍，主要还是看客户端向服务器端传输数据的频率。  
如果是1次/秒，那肯定是用WebSocket；如果频率比较低，可以选择更方便的SSE.