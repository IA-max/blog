---
title: '技巧 - Gmail搜索'
date: '2019-11-12T22:09:52+08:00'
status: publish
permalink: /gmail-%e6%90%9c%e7%b4%a2%e5%b8%b8%e7%94%a8%e5%8f%82%e6%95%b0
category: ["node"] 
tag: [""]
author: "max"
excerpt: "您可以使用称为搜索运算符的字词或符号来过滤 Gmail 搜索结果，也可以组合使用运算符来进一步过滤搜索结果"
featured: false
image: 
featuredimage:
  src: "none.png"
  alt: ""
---
您可以使用称为搜索运算符的字词或符号来过滤 Gmail 搜索结果，也可以组合使用运算符来进一步过滤搜索结果。

<table class=""><tbody><tr><th width='50%'>搜索条件</th><th>搜索运算符和示例</th></tr><tr><td>指定发件人</td><td>`from:`示例：`from:amy`</td></tr><tr><td>指定收件人</td><td>`to:`示例：`to:david`</td></tr><tr><td>指定邮件副本收件人</td><td>`cc:``bcc:`示例：`cc:david`</td></tr><tr><td>主题行中的字词</td><td>`subject:`示例：`subject:dinner`</td></tr><tr><td>匹配多个字词的邮件</td><td>`OR `或者 { }示例：`from:amy OR from:david`示例：`{from:amy from:david}`</td></tr><tr><td>从搜索结果中排除邮件</td><td>`-`示例：`dinner -movie`</td></tr><tr><td>使用邻近的字词查找邮件。利用数字表示字词之间隔着的字词数添加英文引号即可按您输入的字词顺序查找邮件。</td><td>`AROUND`示例：`holiday AROUND 10 vacation`示例：`"secret AROUND 25 birthday"`</td></tr><tr><td>包含特定标签的邮件</td><td>`label:`示例：`label:friends`</td></tr><tr><td>包含附件的邮件</td><td>`has:attachment`示例：`has:attachment`</td></tr><tr><td>包含 Google 云端硬盘、文档、表格或幻灯片附件或链接的邮件</td><td>`has:drive``has:document``has:spreadsheet``has:presentation`示例：`has:drive`</td></tr><tr><td>包含 YouTube 视频的邮件</td><td>`has:youtube`示例：`has:youtube`</td></tr><tr><td>来自邮寄名单的邮件</td><td>`list:`示例：`list:info@example.com`</td></tr><tr><td>具备特定名称或文件类型的附件</td><td>`filename:`示例：`filename:pdf`示例：`filename:homework.txt`</td></tr><tr><td>精确搜索字词或词组</td><td>`" "`例如：`"dinner and movie tonight"`</td></tr><tr><td>组合多个搜索字词</td><td>`( )`示例：`subject:(dinner movie)`</td></tr><tr><td>任何文件夹中的邮件，包括“垃圾邮件”和“已删除邮件”</td><td>`in:anywhere`示例：`in:anywhere movie`</td></tr><tr><td>搜索标为<a href="https://support.google.com/mail/answer/186543">重要邮件</a>的邮件</td><td>`is:important``label:important`示例：`is:important` </td></tr><tr><td>已加星标、已延后、未读或已读邮件</td><td>`is:starred``is:snoozed``is:unread``is:read`示例：`is:read is:starred`</td></tr><tr><td>包含特定颜色图标的邮件</td><td>`has:yellow-star``has:blue-info`示例：`has:purple-star`</td></tr><tr><td>抄送或密送字段中的收件人</td><td>`cc:``bcc:`示例：`cc:david`**请注意**：您无法查找密送给您的邮件。</td></tr><tr><td>搜索在特定时间段内发送的邮件</td><td>`after:``before:``older:``newer:`示例：`after:2004/04/16`示例：`after:04/16/2004`示例：`before:2004/04/18`示例：`before:04/18/2004`</td></tr><tr><td>使用 d（天数）、m（月数）和 y（年数）搜索早于或晚于某个时间段的邮件</td><td>`older_than:``newer_than:`示例：`newer_than:2d`</td></tr><tr><td>聊天邮件</td><td>`is:chat`示例：`is:chat movie`</td></tr><tr><td>按电子邮件搜索已发送的邮件</td><td>`deliveredto:`示例：`deliveredto:username@gmail.com`</td></tr><tr><td>特定类别中的邮件</td><td>`category:primary<br></br>category:social category:promotions category:updates category:forums category:reservations category:purchases`示例：category:updates</td></tr><tr><td>大小超过特定字节的邮件</td><td>`size:`示例：`size:1000000`</td></tr><tr><td>大小超过或低于特定字节的邮件</td><td>`larger:``smaller:`示例：`larger:10M`</td></tr><tr><td>与某字词完全匹配的结果</td><td>`+`示例：`+unicorn`</td></tr><tr><td>包含特定 message-id 标头的邮件</td><td>`Rfc822msgid:`示例：`rfc822msgid:200503292@example.com`</td></tr><tr><td>含有或不含标签的邮件</td><td>`has:userlabels``has:nouserlabels`示例：`has:nouserlabels`**注意**：标签仅添加到某封邮件中，而非整个会话中。</td></tr></tbody></table>