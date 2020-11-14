---
title: '使用Express＆ PDFKit生成PDF'
date: '2019-10-15T16:27:37+08:00'
status: publish
permalink: /%e4%bd%bf%e7%94%a8express%ef%bc%86-pdfkit%e7%94%9f%e6%88%90pdf
author: admin
excerpt: ''
type: post
id: 1737
category:
    - Node
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
在本文中，您将找到有关如何使用Web窗体Express和PDFKit创建PDF文件的有趣小教程。首先，它将使用[express生成器](https://expressjs.com/en/starter/generator.html)，完成后，您将拥有一个简单的Web表单，如果用户单击“ **创建PDF** ”按钮，它将生成PDF文件。

 首先安装快速应用程序生成器：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">yarn global add express-generator
```

 然后使用它生成一个基本的Express应用程序：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">express —-view=pug form-to-pdf
```

现在进入这个文件夹并使用[yarn](https://github.com/yarnpkg/yarn)安装依赖项：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">cd form-to-pdf<br>yarn
```

接下来添加依赖项PDFKit

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">yarn add pdfkit
```

现在，使用命令启动应用程序

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">yarn start
```

然后在浏览器中转到[http：// localhost：3000](http://localhost:3000/)。您应该看到类似“Welcome Express”的内容。

接下来，我们将使用模板引擎Pug（以前称为Jade）添加HTML。打开文件*views / index.pug*并将现有代码替换为以下代码：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">extends layout
block content
  .row
    .col-md-8
      h1="Create a PDF"
      form.form-horizontal.well(method="post", action="/pdf")
          .form-group
              label.col-md-2.control-label File Name
              .col-md-10
                .input-group
                  input.form-control(type="text", name="filename", placeholder="File Name")
                  .input-group-addon=".pdf"
          .form-group
              label.col-md-2.control-label Text
              .col-md-10
                textarea.form-control(name="content", placeholder="Write some text for on your PDF!")
          .form-group
              .col-sm-offset-2.col-sm-10
                input.btn.btn-default(type="submit", value="Create PDF")
```

我们还想使用Bootstrap和[Bootswatch中](http://bootswatch.com/)的主题添加一些样式。  
在*views / layout.pug中，*将以下链接直接添加到*style.css*的现有链接之上：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">doctype html
html
  head
    title= title
    link(rel='stylesheet', href='https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/flatly/bootstrap.min.css')
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
```

现在，如果您重新启动应用程序并访问[http：// localhost：3000，](http://localhost:3000/)您应该会看到格式良好的HTML表单。  
接下来，我们将添加创建PDF文件的途径。创建文件*route / pdf*并添加以下代码：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">const express = require('express')
const router = express.Router()
const PDFDocument = require('pdfkit')
router.post('/', (req, res) => {
  const doc = new PDFDocument()
  let filename = req.body.filename
  // Stripping special characters
  filename = encodeURIComponent(filename) + '.pdf'
  // Setting response to 'attachment' (download).
  // If you use 'inline' here it will automatically open the PDF
  res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
  res.setHeader('Content-type', 'application/pdf')
  const content = req.body.content
  doc.y = 300
  doc.text(content, 50, 50)
  doc.pipe(res)
  doc.end()
})
module.exports = router
```

您的生成PDF Express应用程序现在可以使用了！从以下内容开始：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""> yarn start 
```