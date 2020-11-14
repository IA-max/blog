---
title: 'An Introduction to the Rails Command'
date: '2019-08-21T20:03:56+08:00'
status: publish
permalink: /an-introduction-to-the-rails-command
author: admin
excerpt: ''
type: post
id: 788
category:
    - RoR
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
If you’ve worked with a Rails application, you’ve used the `rails` command. In this post, we’re going to go in depth with the rails command and find out what it does. For the purposes of this post, placeholder text will go in the form of `rails command [value]` where `[value]` represents something you’re trying to accomplish. For example, if we’re generating a new rails command called `treehouse`, `rails new [value]` would be equal to saying `rails new treehouse`. With that out of the way, let’s get going!

Generating a New Application
----------------------------

In order to generate a rails application, you’ll generally use the `rails new [app name]` command. This is pretty straightforward but did you know that there are a ton of different options that you can possibly use? The format is as follows:

> `rails new APP_PATH [options]`

The `APP_PATH` is going to be the path to the new app. Generally, you will say that it is relative to the current directory. However, a full path can be specified such as:

> `rails new /Users/jason/Sites/treehouse`

There are a ton of different options that go along with it. It’s possible to specify a different Ruby installation, skip using bundler, and more. Let’s take a look at some of the most common ones you might use.

### `-m` or `--template=TEMPLATE`

The template option allows you to run different templates against a freshly generated rails application. The flag is taken with a path as an argument to the template file. You can read more about Rails application templates at the [rails guide on the subject](http://guides.rubyonrails.org/rails_application_templates.html). The [railsapps](https://railsapps.github.io/rails-application-templates.html) project has a ton of different templates you can peruse to see if any apply to your applications.

### `-d` or `--database`

This flag allows the database to be set when creating a rails application. The defaults for the selected database will be written to the `config/database.yml`template. If no argument is specified, the default database used is sqlite3. This keeps the databases themselves in the `db` directory. While generally fine in development, sqlite3 is rarely used in production.

### `--skip-sprockets`

If you aren’t interested in using the Rails asset pipeline, this can be skipped entirely when creating a new rails application. This might be done in the cases of building an API only application or using grunt or bower to manage assets.

Runtime Options for All Commands
--------------------------------

These are going to be the most often used of the bunch. When you run a rails generate command, you can almost always use the following options to modify what the command does. There are two that are used most: `-f` or `--force` option to overwrite files. You may want to do this in the case of regenerating a model, controller, view or the like.

Similarly, the `-p` or `--pretend` option will simulate what is about to happen when you run the command. This is useful to run before you actually run the command to make sure it behaves as you expect it to. For example, when generating a scaffold, you may want to skip asset creation of stylesheets and javascripts.

Rails Generate
--------------

When you run the generate command (aliased as `g`) with no arguments, rails will give you the option to generate any of the following:

- assets
- controller
- generator
- helper
- integration\_test
- jbuilder
- job
- mailer
- migration
- model
- resource
- scaffold
- scaffold\_controller
- task

As you might expect from that list, you can go further in depth on each of those. When generating any of the above items, such as a model, the runtime options above can be used. So doing the following:

> `rails generate model account`

Would generate the following files:

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">
app/models/account.rb
test/models/account_test.rb
test/fixtures/accounts.yml
db/migrate/XXX_create_accounts.rb
```

However, the files would not be generated if you modified the above command to be the following:

> `rails generate model account -p`

In that case, rails would only pretend to generate the files without actually overwriting anything.

You can ask for help and options on any of those generators by using the `-h` or `--help` option.

Destroy
-------

This is a quick command. Almost anything created with the `generate` command can be destroyed with the `destroy` command. For example, to destroy the above created account model:

> `rails destroy model account -p`

Note the `-p` flag to pretend to delete something first. Just in case.

Console
-------

The rails console allows you to launch an `irb` session with your rails application loaded. This means you have access to all of your models, controllers, gems, etc. There are a couple of flags which make the rails console extremely useful.

### `--environment`

The `-e` or `--environment` option allows you to load in a different rails environment to the console. This will most likely take effect with a database selection where you can check out data in the context of that environment. For example, on a staging machine, you can launch a staging console by doing the following:

> `rails console -e staging`

The `-e` can also be omitted if you choose.

### `--sandbox`

The sandbox option puts everything done in that console session in a database transaction. The transaction is then rolled back when you exit the console. So, feel free to delete your entire user database while you’re in the console and it will safely rollback on exit.

I’m just kidding, there are risks involved but it is a nice feature. Always keep backups and never do that in production.

Server
------

The rails server command will run your application. The server command is run in the following format:

> `rails server [server] [options]`

Unlike the generate command, the rails server does not allow a pretend or force flag.  
If using a different server than webrick, that must be specified in your `Gemfile` and available to your rails environment. For example, if running the [puma](http://puma.io/) server, the command would be the following:

`rails server puma`

The following options are valid:

- `-p` Port
- `-b` Binding (ip address)
- `-c` Config file (for custom rack configuration)
- `-d` Daemonize server
- `-u` Enable debugger
- `-e` Change the environment (defaults to development)
- `-P` Specify a PID file

We can combine the above options. For example, to bind to a local ip on port 8081 with the puma server, we would run the following command:

> `rails server puma -p 8081 -b 127.0.0.1`

Runner
------

The `rails runner` command executes rails code that is passed in as a string. It is not advisable to put a ton of code in here. Generally, you will want to keep this to one or two commands. For example, let’s say you had a class that billed subscriptions called `User` with a class method called `report` that printed a small summary of usage to standard output. In that case, you may want to do something like the following:

> `rails runner -e production 'User.report'`

The rails runner can also point to a file. This will preload the app before running the contents of the Ruby file. In that case, you would give it a path:

> `rails runner -e production /home/deploy/apps/myapp/user_report.rb`

Finally, you can use the rails runner as a shebang line to run executables.

But Wait, There’s More!
-----------------------

There’s one more command that’s a bit beyond the scope of this article, and that’s the `plugin` command. That will generate a new plugin in your rails application in its own directory. Plugins can be used to enhance the behavior of your application and be reused relatively easily.

That covers all of the options to the rails command. The next section contains a list of tables with the different commands, their shortcuts, and a quick description. You can get any of these yourself by typing `rails help [command]`.

Command Tables
--------------

<figure class="wp-block-table"><table class=""><thead><tr><th>RAILS NEW COMMANDS</th></tr><tr><th>OPTION (SHORT)</th><th>OPTION (LONG)</th><th>DESCRIPTION</th></tr></thead><tbody><tr><td>`-r`</td><td>`--ruby=[PATH]`</td><td>Path to Ruby binary. This defaults to the current Ruby.</td></tr><tr><td>`-m`</td><td>`--template=TEMPLATE`</td><td>Path to some application template (can be a filesystem path or URL)</td></tr><tr><td> </td><td>`--skip-gemfile, --no-skip-gemfile`</td><td>Do or Don’t create a Gemfile</td></tr><tr><td>`-B`</td><td>`--skip-bundle, --no-skip-bundle`</td><td>Do or Don’t run bundle install</td></tr><tr><td>`-G`</td><td>`--skip-git, --no-skip-git`</td><td>Skip creating .gitignore file</td></tr><tr><td> </td><td>`--skip-keeps, --no-skip-keeps`</td><td>Skip source control .keep files</td></tr><tr><td>`-O`</td><td>`--skip-active-record, --no-skip-active-record`</td><td>Skip Active Record files</td></tr><tr><td>`-S`</td><td>`--skip-sprockets, --no-skip-sprockets`</td><td>Skip Sprockets files</td></tr><tr><td> </td><td>`--skip-spring, --no-skip-spring`</td><td>Don’t install Spring application preloader</td></tr><tr><td>`-d`</td><td>`--database=DATABASE`</td><td>Preconfigure for selected database (options: mysql, oracle, postgresql, sqlite3, frontbase, ibm\_db, sqlserver, jdbcmysql, jdbcsqlite3, jdbcpostgresql, jdbc. Defaults to sqlite3.</td></tr><tr><td>`-j`</td><td>`--javascript=JAVASCRIPT`</td><td>Preconfigure for selected JavaScript library. Default: jquery</td></tr><tr><td>`-J`</td><td>`--skip-javascript, --no-skip-javascript`</td><td>Skip JavaScript files</td></tr><tr><td> </td><td>`--dev`, `--no-dev`</td><td>Setup the application with Gemfile pointing to your Rails checkout</td></tr><tr><td> </td><td>`--edge, --no-edge`</td><td>Setup the application with Gemfile pointing to Rails repository</td></tr><tr><td> </td><td>`--skip-turbolinks, --no-skip-turbolinks`</td><td>Skip turbolinks gem</td></tr><tr><td>`-T`</td><td>`--skip-test-unit, --no-skip-test-unit`</td><td>Skip Test::Unit files</td></tr><tr><td> </td><td>`--rc=RC`</td><td>Path to file containing extra configuration options for rails command</td></tr><tr><td> </td><td>`--no-rc, --no-no-rc`</td><td>Skip loading of extra configuration options from .railsrc file</td></tr></tbody></table>

</figure><figure class="wp-block-table"><table class=""><thead><tr><th>RAILS COMMANDS</th></tr><tr><th>SHORTCUT</th><th>COMMAND</th><th>DESCRIPTION</th></tr></thead><tbody><tr><td>`g`</td><td>`generate`</td><td>Generate new code (models, controllers, views, tests, etc)</td></tr><tr><td>`c`</td><td>`console [ENV]`</td><td>Start a console</td></tr><tr><td>`s`</td><td>`server`</td><td>Start a server</td></tr></tbody></table>

</figure><figure class="wp-block-table"><table class=""><thead><tr><th>RAILS CONSOLE</th></tr><tr><th>`RAILS CONSOLE [ENVIRONMENT] [OPTIONS]`</th></tr><tr><th>FLAG</th><th>DESCRIPTION</th></tr></thead><tbody><tr><td>`-s`</td><td>Sandbox and rollback database modifications on exit.</td></tr><tr><td>`-e`</td><td>Specify environment</td></tr><tr><td>`--debugger`</td><td>Enable debugger.</td></tr></tbody></table>

</figure><figure class="wp-block-table"><table class=""><thead><tr><th>RUNTIME OPTIONS:</th></tr><tr><th>OPTION (SHORT)</th><th>OPTION (FULL)</th><th>DESCRIPTION</th></tr></thead><tbody><tr><td>`-f`</td><td>`--force`</td><td>Overwrite files that already exist</td></tr><tr><td>`-p`</td><td>`--pretend, --no-pretend`</td><td>Run but do not make any changes</td></tr><tr><td>`-q`</td><td>`--quiet, --no-quiet`</td><td>Suppress status output</td></tr><tr><td>`-s`</td><td>`--skip, --no-skip`</td><td>Skip files that already exist</td></tr></tbody></table>

</figure><figure class="wp-block-table"><table class=""><thead><tr><th>RAILS SERVER OPTIONS</th></tr><tr><th>`RAILS SERVER [SERVER] [OPTIONS]`</th></tr><tr><th>FLAG (SHORT)</th><th>FLAG (LONG)</th><th>DESCRIPTION</th></tr></thead><tbody><tr><td>`-p`</td><td>`--port`</td><td>Run server on specified port</td></tr><tr><td>`-b`</td><td>`--binding`</td><td>Binds Rails to the specified IP. Default: localhost</td></tr><tr><td>`-c`</td><td>`--config=file`</td><td>Users a custom rack configuration</td></tr><tr><td>`-d`</td><td>`--daemon`</td><td>Runs server as a Daemon.</td></tr><tr><td>`-u`</td><td>`--debugger`</td><td>Enables the debugger.</td></tr><tr><td>`-e`</td><td>`--environment=name`</td><td>Specify environment to run server under. Default: development</td></tr><tr><td>`-P`</td><td>`--pid=pid`</td><td>Specified PID file. Default: tmp/pids/server.pid</td></tr></tbody></table>

</figure><figure class="wp-block-table"><table class=""><thead><tr><th>RAILS RUNNER OPTIONS</th></tr><tr><th>`USAGE: RAILS RUNNER [OPTIONS] [<'SOME.RUBY(CODE)'> | ]`</th></tr></thead><tbody><tr><td>`-e`</td><td>`--environment=name`</td><td>Specifies the environment for the runner to operate under (test/development/production). Default: development</td></tr><tr><td>`-h`</td><td>`--help`</td><td>Show help message.</td></tr></tbody></table>

</figure>