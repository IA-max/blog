---
title: 'WP 代码/技巧分享'
date: '2019-12-11T15:51:26+08:00'
status: publish
permalink: /wp-code-share
author: admin
excerpt: ''
type: post
id: 3202
category:
    - PHP
tag: []
post_format: []
---
##### 声明WooCommerce 对主题的支持

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="php" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">add_action( 'after_setup_theme', 'woocommerce_support' );
    function woocommerce_support() {
    add_theme_support( 'woocommerce' );
}
```

##### 若WP升级程序出错导致进入 **维护模式** ,以下

> Briefly unavailable for scheduled maintenance. Check back in a minute

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">//解决
删除WordPress根目录下的 .maintenance
//若不存在，创建空文件，改名为.maintenance,再刷新即可
```

##### 主题调用ICP备案号

可通过在 wp-config.php 文件中添加如下代码，来开启后台“常规”选项中的ICP备案号设置选项。

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="php" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">//代码如下：
define('WP_ZH_CN_ICP_NUM', true);
```

前台想要显示的位置添加如下代码来调用：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="html" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""><a href='http://www.miitbeian.gov.cn/' rel='external nofollow' target='_blank'><?php echo get_option('zh_cn_l10n_icp_num');?></a>
```

##### 主题基本文件用途

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">index.php
//可以调用许多不同的PHP文件。*
style.css
//主要样式表。
rtl.css
//如果网站的文字方向是从右到左，则将自动包括在内。
header.php
//包含主题标题的逻辑，其中大部分包含徽标，网站名称，搜索栏和菜单之类的内容。
sidebar.php
//包含侧边栏的定义，用于显示小部件。更为复杂的主题通常可以使用具有不同内容的多个侧边栏。
footer.php
//这包含一些主题的结束标记。
home.php
//此文件可用于在您的博客的着陆页上显示最新的博客文章。通常，这是您网站的主页，但并非必须如此。如将设置为使用静态页面作为主页，则home.php可以用于日志
front-page.php：
//如存在此文件，将用于网站的主页。
//如果不存在，WordPress将寻找ho​​me.php
//如果它们都不存在，将使用index.php。
single.php
//用于显示单个帖子类型-通常是日志
page.php
//用于显示单个页面
comments.php
//评论模板
single- {post-type} .php
//查询来自自定义帖子类型的单个帖子时使用的单个帖子模板。
category.php
//类别模板
tag.php
//标记模板。查询标签时使用
taxonomy.php
//术语模板。当查询自定义分类法中的术语时使用。
author.php
//作者模板
date.php
//日期/时间模板。查询日期或时间时使用。年，月，日，小时，分钟，秒。
archive.php
//存档模板。查询类别，作者或日期时使用。
//请注意，对于各自的查询类型，此模板将被category.php，author.php和date.php覆盖。
search.php
//搜索结果模板
attachment.php
//附件模板
image.php
//图像附件模板。
//在查看单个图像附件时使用。如果不存在，将使用attachment.php。
404.php
//404模板。当WordPress无法找到与查询匹配的帖子或页面时使用。
//这些文件对WordPress具有特殊含义，因为根据模板层次结构以及相应的条件条件，它们可用于替代index.php。
//标签返回true。例如，如果仅显示单个帖子，则is_single（）函数将返回“ true”，并且，如果活动主题中存在单个.php文件，则使用该模板生成页面。
functions.php：
//这是很重要的一个
//在这里，您将为主题定义各种不同的功能，例如，小部件位置，主题对缩略图的支持等等。
//另，在创建WooCommerce主题时，使用functions.php，您可以向网站添加功能。
//对于较大的更改，创建插件是一个更好的选择。
```

<figure class="wp-block-image alignfull size-full">![](https://blog.imaxyoung.com/wp-content/uploads/2019/12/Screenshot-2019-01-23-00.20.04.png)</figure>##### Header 常用函数

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="php" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""><?php bloginfo('name'); ?> //标题
<?php wp_title(); ?> //特定帖子或页面的标题
<?php bloginfo('stylesheet_url'); ?> //style.css的位置
<?php bloginfo('pingback_url'); ?> //Pingback网址
<?php bloginfo('template_url'); ?> //主题文件的位置
<?php bloginfo('version'); ?> //WordPress版本
<?php bloginfo('atom_url'); ?> //Atom URL
<?php bloginfo('rss2_url'); ?> //RSS2 URL
<?php bloginfo('url'); ?> //确切网址
<?php bloginfo('name'); ?> //网站名称
<?php bloginfo('html_type'); ?> //HTML版本
<?php bloginfo('charset'); ?> //字符集参数
```

模板函数

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""><?php the_content(); ?> //帖子内容
<?php if(have_posts()) : ?>  //检查是否有帖子
<?php while(have_posts()) : the_post(); ?> //检查是否有帖子
<?php endwhile; ?>
<?php endif; ?>
<?php get_header(); ?>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
<?php the_time('m-d-y') ?>
<?php comments_popup_link(); ?>
<?php the_title(); ?>
<?php the_permalink() ?>
<?php the_category(', ') ?>
<?php the_author(); ?>
<?php the_ID(); ?>
<?php edit_post_link(); ?>
<?php get_links_list(); ?>
<?php comments_template(); ?>
<?php wp_list_pages(); ?>
<?php wp_list_cats(); ?>
<?php next_post_link(' %link ') ?>
<?php previous_post_link('%link') ?>
<?php get_calendar(); ?>
<?php wp_get_archives() ?>
<?php posts_nav_link(); ?>
<?php bloginfo(’description’); ?> //网站的描述
```

##### 其他

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">/％postname％/
自定义永久链接
<？php include（TEMPLATEPATH。'/ x'）; ？>
包括任何文件
<？php the_search_query（）; ？>
搜寻表单的价值
<？php _e（“消息”）; ？>
打印消息
<？php wp_register（）; ？>
显示注册链接
<？php wp_loginout（）; ？>
显示登录/注销链接
<！-next page->
将内容分成页面
<！-more->
切断内容并添加链接到
其余内容
<？php wp_meta（）; ？>
管理员的元数据
<？php timer_stop（1）; ？>
加载页面的时间
<？php echo get_num_queries（）; ？>
查询加载页面
```

##### 基本条件判断Tag

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">is_home() : //是否为主页
is_single() : //是否为内容页(Post)
is_page() : //是否为内容页(Page)
is_category() : //是否为Category/Archive页
is_tag() : //是否为Tag存档页
is_date() :// 是否为指定日期存档页
is_year() : //是否为指定年份存档页
is_month() : //是否为指定月份存档页
is_day() : //是否为指定日存档页
is_time() : //是否为指定时间存档页
is_archive() : //是否为存档页
is_search() : //是否为搜索结果页
is_404() : //是否为 “HTTP 404: Not Found” 错误页
is_paged() : //主页/Category/Archive页是否以多页显示
```

#### WP\_Query

##### 方法

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">WP_Query
//接受一个string或数组类型的查询条件做为其构造函数，除去了它的构造函数，WP_Query内部还包含了13个函数，它们的作用分别如下：
init():
//类内部的初始化函数（注意，不是构造函数），用于初始化对象，清空所有的属性（设为null, 0 或 False）。
parse_query( $query ):
//parse_query接受一个String类型查询字符串，并将解析后得到的参数赋给类本身。当构造函数中传入的为string类型的参数时，这个方法分被调用，并将string类型的参数转化为数组结构。
parse_query_vars()
//本身并没做实际工作，只是重新解析了上一个查询函数。相当于调用了不带参数的
parse_query。（实际上，源码里就是这么实现的）。
get( $query_var ), set( $query_var, $value )
//单独设置或获取查询条件中的某个属性。不想写一长串难读的查询条件的话，不妨试试用set函数。
&query($query) , &get_posts():
//query用于接受查询条件，并从数据库中查找相应的内容。如果内容是文章，第二个方法get_posts则可以用来返回这些文章。注意调用get_posts的同时，会更改对象中的$posts and $post_count两个参数。
have_posts(), the_post(), next_post(), rewind_posts()
//WP_Query在查询的时候，会创建一个队列，队列中包含所有查到的文章。这4个方法就是用来对队列进行操作的。名字一目了然，have_posts判断队列中是否还有文章，有的话the_post则拿到当前的文章，next_post让队列向后移一位，rewind_posts则是返回到队列的最开头。
get_queried_object(), get_queried_object_id()
//最开始我们就说过，WQ_Query不仅用来查询文章和页面，还可以用来查询用户、分类等其它信息。这两个方法就是用来判断当前查询的对象，并返回对象或对象的ID。
```

##### 属性

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="php" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">$query, $query_vars
//WP_Query的查询条件。$query为字符串格式， $query_vars为解析后的数组格式。
$queried_object, $queried_object_id: 对应get_queried_object()和//get_queried_object_id()方法。可能是文章、页面、用户、分类。
$posts
//所有被查到的文章。
$post_count, $found_posts, $max_num_pages
//分别为文章总数，查询到的文章数，总页数。
$current_post，$post
//当前文章的序列数和当前的Post对象。
其它的属性还包括
//$is_single, $is_page, $is_archive, $is_preview, $is_date, $is_year, $is_month, $is_time, $is_author, $is_category, $is_tag, $is_tax, $is_search, $is_feed, $is_comment_feed, $is_trackback, $is_home, $is_404, $is_comments_popup, $is_admin, $is_attachment, $is_singular, $is_robots, $is_posts_page, $is_paged。
//通过其名字，基本可以看出它的含义
```

##### 通过作者获取文章

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">$query = new WP_Query( 'author=123' );
// 根据ID来查找。
```

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">$query = new WP_Query( 'author_name=rami' );
// 根据用户名查找。 
```

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">$query = new WP_Query( 'author=2,6,17,38' );
//查询多个人的文章
```

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">$query = new WP_Query( 'author=-12' );
//查询不属于某个人的文章可以通过减号“-”来排除某位作者。
```

通过分类目录查找查询

某个特定分类下的文章  
查询语句中可能会用到以下几个参数：cat, category\_\_name, category\_\_and, category\_\_and, category\_\_in, category\_\_not\_in。

例子如下：  
查询某个分类下的文章（包含它的子分类）

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">$query = new WP_Query( 'cat=4' );
// 按分类ID
$query = new WP_Query( 'category_name=staff' ); // 按slug
//查询某个分类下的文章（不包含它的子分类）
$query = new WP_Query( 'category__in=4' );
//类似的，查询多个分类下的文章
$query = new WP_Query( 'cat=2,6,17,38' ); // ID
$query = new WP_Query( 'category_name=staff,news' ); // slug
//不包含某个分类
$query = new WP_Query( 'cat=-12,-34,-56' );
//查询同时属于多个分类的文章
$query = new WP_Query( array( 'category__and' => array( 2, 6 ) ) ); // 2 and 6
//查询同时包含在ID为2和6两个分类的文章。（注意区分: category__in是“或”的关系，cateory__and是“并”的关系。
$query = new WP_Query( array( 'category__in' => array( 2, 6 ) ) );
// 2 or 6
//同样的，下面的语句就不难理解了。不包含ID为2或6的分类的文章。
$query = new WP_Query( array( 'category__not_in' => array( 2, 6 ) ) );
```

#####  通过标签查询

可通过标签查询的条件包括：tag, tag\_id, tag\_\_and, tag\_\_in, tag\_\_not\_in, tag\_slug\_\_and, tag\_slug\_\_in。对应到上面分类的查询方法，不难理解每个条件如何使用，我不一一举例了。（注意：名字中没有slug的，用tag的id查询)。

##### Taxonomy

Taxonomy是一种的通用的分类。Tag和Category其实都可以算在Taxonomy中，实际上Tag和Category也是利用Taxonomy来实现的，你也可以创建自己的一套Taxonomy，有兴趣的话我们可以在以后的文章中继续讨论Taxonomy。利用Taxonomy，你可以够造适合你需求的各种查询函数。

例子

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">$args = array(
'post_type' => 'post',
'tax_query' => array(
'relation' => 'OR',
array(
'taxonomy' => 'category',
'field' => 'slug',
'terms' => array( 'quotes' )
),
array(
'taxonomy' => 'post_format',
'field' => 'slug',
'terms' => array( 'post-format-quote' )
)
)
);
$query = new WP_Query( $args );
//查询“在quotes（分类的slug）分类”下或“post_format”为“post-format-quote”的文章（'post_type' => 'post'）。
```

##### 搜索

WP\_Query也提供了一个简单的基于文关键词的搜索功能，例子：

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">$query = new WP_Query( 's=keyword' );
```

不过，Wordpress只是单单的对字符串进行匹配，不要指望它会有搜索引擎一样的搜索结果。