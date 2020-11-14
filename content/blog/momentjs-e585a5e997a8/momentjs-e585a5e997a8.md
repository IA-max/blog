---
title: 'Momentjs 入门'
date: '2019-12-20T00:29:08+08:00'
status: publish
permalink: /momentjs-%e5%85%a5%e9%97%a8
author: admin
excerpt: ''
type: post
id: 3260
category:
    - Ecmascript
tag: []
post_format: []
---
时间：var time = new Date(); // Tue Aug 28 2018 09:16:06 GMT+0800 (中国标准时间)

时间戳：var timestamp = Date.parse(time); // 1535419062000 （Date.parse() 默认不取毫秒，即后三位毫秒为0）

moment转时间：moment(time).valueOf(); // 1535419062126

moment转时间戳：moment(timestamp).format(); // 2018-08-28T09:17:42+08:00

全局设置中文

moment.locale(‘zh-cn’);