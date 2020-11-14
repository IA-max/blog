---
title: '&#039;fresh_when&#039; &#038; &#039;stale?&#039;'
date: '2019-08-25T10:48:45+08:00'
status: publish
permalink: /rails-5-supports-passing-collection-of-records-to-fresh_when-and-stale
author: admin
excerpt: ''
type: post
id: 794
category:
    - RoR
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
Rails具有强大的工具来控制[通过HTTP缓存资源](http://api.rubyonrails.org/classes/ActionController/ConditionalGet.html), 如

- `fresh_when`
- `stale?`

以前我们只能将单个记录传递给这些方法，但现在Rails 5也增加了对接受记录集合的支持, 如

```
<pre class="wp-block-prismatic-blocks">```ruby
def index
  @posts = Post.all
  fresh_when(etag: @posts, last_modified: @posts.maximum(:updated_at))
end
```
```

或

```
<pre class="wp-block-prismatic-blocks">```ruby
def index
  @posts = Post.all
  fresh_when(@posts)
end
```
```

这也适用于`stale?`方法，我们可以将一组记录传递给它。  
例如:

```
<pre class="wp-block-prismatic-blocks">```ruby
def index
  @posts = Post.all
  if stale?(@posts)
    render json: @posts
  end
end
```
```

要看到这一点，我们首先提出请求`/posts`。

```
<pre class="wp-block-prismatic-blocks">```bash
$ curl -I http://localhost:3000/posts
HTTP/1.1 200 OK
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
ETag: W/"a2b68b7a7f8c67f1b88848651a86f5f5"
Content-Type: text/html; charset=utf-8
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 7c8457e7-9d26-4646-afdf-5eb44711fa7b
X-Runtime: 0.074238
```
```

在第二个请求中，我们将在`If-None-Match`标头中发送ETag 以检查数据是否已更改。

```
<pre class="wp-block-prismatic-blocks">```bash
$ curl -I -H 'If-None-Match: W/"a2b68b7a7f8c67f1b88848651a86f5f5"' http://localhost:3000/posts
HTTP/1.1 304 Not Modified
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
ETag: W/"a2b68b7a7f8c67f1b88848651a86f5f5"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 6367b2a5-ecc9-4671-8a79-34222dc50e7f
X-Runtime: 0.003756
```
```

由于没有变化，服务器返回`HTTP/1.1 304 Not Modified`。  
如果这些请求是从浏览器发出的，它将在第二个请求中自动使用其缓存中的版本。

第二个请求显然更快，因为服务器能够节省获取数据和渲染数据的时间。这可以在Rails日志中看到，

```
<pre class="wp-block-prismatic-blocks">```bash
Started GET "/posts" for ::1 at 2016-08-06 00:39:44 +0530
Processing by PostsController#index as HTML
   (0.2ms)  SELECT MAX("posts"."updated_at") FROM "posts"
   (0.1ms)  SELECT COUNT(*) AS "size", MAX("posts"."updated_at") AS timestamp FROM "posts"
  Rendering posts/index.html.erb within layouts/application
  Post Load (0.2ms)  SELECT "posts".* FROM "posts"
  Rendered posts/index.html.erb within layouts/application (2.0ms)
Completed 200 OK in 31ms (Views: 27.1ms | ActiveRecord: 0.5ms)
Started GET "/posts" for ::1 at 2016-08-06 00:39:46 +0530
Processing by PostsController#index as HTML
   (0.2ms)  SELECT MAX("posts"."updated_at") FROM "posts"
   (0.1ms)  SELECT COUNT(*) AS "size", MAX("posts"."updated_at") AS timestamp FROM "posts"
Completed 304 Not Modified in 2ms (ActiveRecord: 0.3ms)
```
```

Log

更新记录集合时缓存过期。  
例如，向集合添加新记录或更改任何记录（更改`updated_at`）将改变`ETag`。

现在，rails 5支持的记录集`fresh_when`和`stale?`，我们有一种改进的系统缓存资源，使我们的应用程序更快。  
当我们使用耗时的数据处理逻辑的控制器操作时，这会更有用。