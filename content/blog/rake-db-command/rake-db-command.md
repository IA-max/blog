---
title: 'Rake DB 命令'
date: '2019-09-25T19:02:20+08:00'
status: publish
permalink: /rake-db-command
author: admin
excerpt: ''
type: post
id: 1657
category:
    - RoR
tag: []
post_format:
    - 日志
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
 所有Rails db Rake任务及其作用

<figure class="wp-block-table"><table class="has-fixed-layout"><tbody><tr><td>**命令**</td><td>**描述**</td></tr><tr><td>db:create</td><td>为当前RAILS\_ENV环境创建数据库。如果未指定RAILS\_ENV，则默认为开发和测试数据库。</td></tr><tr><td>db:create:all</td><td>为所有环境创建数据库。</td></tr><tr><td>db:drop</td><td>删除当前RAILS\_ENV环境的数据库。如果未指定RAILS\_ENV，则默认为开发和测试数据库。</td></tr><tr><td>db:drop:all</td><td>删除所有环境的数据库。</td></tr><tr><td>db:migrate</td><td>运行尚未运行的当前环境的迁移。默认情况下，它仅在开发环境中运行迁移。</td></tr><tr><td>db:migrate:redo</td><td>运行db：migrate：down和db：migrate：up或db：migrate：rollback和db：migrate：migrate，具体取决于指定的迁移。我通常在创建和运行新迁移后运行此命令，以确保迁移是可逆的。</td></tr><tr><td>db:migrate:up</td><td>运行给定的迁移VERSION。</td></tr><tr><td>db:migrate:down</td><td>运行给定的迁移VERSION。</td></tr><tr><td>db:migrate:status</td><td>D</td></tr><tr><td>db:migrate:rollback</td><td>回滚最后一次迁移。</td></tr><tr><td>db:version</td><td>打印当前架构版本。</td></tr><tr><td>db:forward</td><td>将架构推送到下一个版本。</td></tr><tr><td>db:seed</td><td>运行db / seeds.rb文件。</td></tr><tr><td>db:schema:load</td><td>将架构加载到当前环境的数据库中。</td></tr><tr><td>db:schema:dump</td><td>将当前环境的架构转储到db / schema.rb。</td></tr><tr><td>db:setup</td><td>运行db：schema：load和db：seed。</td></tr><tr><td>db:reset</td><td>db：drop和db：setup。</td></tr><tr><td>db:migrate:reset</td><td>运行db：drop，db：create和db：migrate。</td></tr><tr><td>db:test:prepare</td><td>检查挂起的迁移并加载测试架构。（如果你在没有任何参数的情况下运行rake，它将默认执行此操作。）</td></tr><tr><td>db:test:clone</td><td>从当前环境的数据库模式重新创建测试数据库。</td></tr><tr><td>db:test:clone\_structure</td><td>与db：test：clone类似，但它将确保您的测试数据库具有与当前环境的数据库相同的结构，包括字符集和排序规则</td></tr></tbody></table>

</figure>