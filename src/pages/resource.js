import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Acc from '../components/acc'
import Table from '../components/table'


const ResourcePage = ({data, location}) => {
        const siteTitle = data.site.siteMetadata.title;
        const tableList1 = {
            title: '包管理',
            data: [{
                title: 'bower',
                content: `https://bower.io/`
            }, {
                title: `jspm`,
                content: `https://jspm.org/`
            }, {
                title: `npmjs`,
                content: `https://www.npmjs.com/`
            }, {
                title: `淘宝 NPM 镜像`,
                content: `https://developer.aliyun.com/mirror/NPM?from=tnpm`
            }]
        }
        const tableList2 = {
            title: '自动化构建',
            data: [{
                title: 'grunt',
                content: `https://gruntjs.com/`
            }, {
                title: `gulp`,
                content: `https://www.gulpjs.com.cn/`
            }, {
                title: `rollupjs`,
                content: `http://rollupjs.org/guide/en/`
            }, {
                title: `Webpack`,
                content: `https://webpack.js.org/`
            }, {
                title: `babeljs`,
                content: `https://www.babeljs.cn/`
            }]
        }

        const tableList14 = {
            title: 'JS Stack',
            data: [{
                title: 'coffee-script',
                content: 'http://coffee-script.org/'
            }, {
                title: 'jsx',
                content: 'https://facebook.github.io/jsx/'
            }, {
                title: 'typescript',
                content: 'https://www.typescriptlang.org/'
            }, {
                title: 'graphql',
                content: 'https://graphql.cn/'
            }, {
                title: '',
                content: ''
            }]
        }

        const tableList3 = {
            title: '脚手架',
            data: [{
                title: 'fis',
                content: `http://fis.baidu.com/`
            }, {
                title: 'yeoman',
                content: `https://yeoman.io/`
            }]
        }
        const tableList4 = {
            title: '代码管理',
            data: [{
                title: 'bitbucket',
                content: `https://bitbucket.org/`
            }, {
                title: 'gitlab',
                content: `https://about.gitlab.com/`
            }, {
                title: 'coding',
                content: `https://coding.net/`
            }, {
                title: 'aliyun code',
                content: `https://code.aliyun.com/`
            }, {
                title: 'gitee',
                content: `https://gitee.com/`
            }]
        }
        const tableList5 = {
            title: 'Node 框架',
            data: [{
                title: 'commander.js',
                content: `http://tj.github.io/commander.js/`
            }, {
                title: 'expressjs',
                content: 'http://expressjs.com/'
            }, {
                title: 'hapi',
                content: 'https://hapi.dev/'
            }, {
                title: 'koajs',
                content: 'https://koajs.com/'
            }, {
                title: 'mean',
                content: 'https://github.com/linnovate/mean#!/'
            }, {
                title: 'phantomjs',
                content: 'https://phantomjs.org/'
            }, {
                title: 'sailsjs',
                content: 'https://sailsjs.com/'
            }, {
                title: 'thinkjs',
                content: 'https://thinkjs.org/'
            }, {
                title: 'eggjs',
                content: 'https://eggjs.org/zh-cn/intro/'
            }]
        }


        const tableList6 = {
            title: 'js 运行环境',
            data: [{
                title: 'jsbin',
                content: `http://jsbin.com/?js,console,output`
            }]
        }
        const tableList7 = {
            title: 'IDE & Terminal & tooling',
            data: [{
                title: 'VSCode',
                content: `https://code.visualstudio.com/`
            }, {
                title: 'Atom',
                content: `https://atom.io/`
            }, {
                title: 'sublimetext',
                content: `https://www.sublimetext.com/`
            }, {
                title: 'oh myz',
                content: `https://ohmyz.sh/`
            }, {
                title: 'livereload',
                content: `http://livereload.com/`
            }, {
                title: 'charles',
                content: `https://www.charlesproxy.com/`
            }, {
                title: 'imageoptim',
                content: `https://imageoptim.com/mac`
            }, {
                title: 'Wex5',
                content: 'http://www.wex5.com/wex5/'
            }, {
                title: 'compass',
                content: 'http://compass-style.org/'
            }]
        }

        const tableList8 = {
            title: '参考',
            data: [{
                title: `Leet Code`,
                content: 'https://leetcode-cn.com'
            }, {
                title: `Can I Use`,
                content: 'https://caniuse.com/'
            }, {
                title: `react-basics`,
                content: 'https://www.techview.dev/docs/react-basics'
            }, {
                title: `react-router 中文文档`,
                content: 'https://github.com/react-guide/react-router-cn'
            }, {
                title: `Full Stack Open`,
                content: 'https://fullstackopen.com/zh/'
            }, {
                title: `JavaScript 20 年`,
                content: 'https://cn.history.js.org/'
            }, {
                title: 'MDN',
                content: 'https://developer.mozilla.org/zh-CN/'
            }, {
                title: 'ECMAScript® 2015',
                content: 'http://www.ecma-international.org/ecma-262/6.0/index.html'
            }, {
                title: 'ECMAScript® 2016',
                content: 'http://www.ecma-international.org/ecma-262/7.0/index.html#sec-normative-references'
            }, {
                title: 'ECMAScript® 2017',
                content: 'http://www.ecma-international.org/ecma-262/8.0/index.html'
            }, {
                title: 'geeksforgeeks',
                content: 'https://www.geeksforgeeks.org/heap-sort/'
            }, {
                title: 'electronjs',
                content: 'https://www.electronjs.org/'
            }, {
                title: 'JavaScript Promise迷你书',
                content: 'http://liubin.org/promises-book/'
            }, {
                title: 'JavaScript-Garden',
                content: 'http://bonsaiden.github.io/JavaScript-Garden/zh/'
            }, {
                title: 'The Modern JavaScript Tutorial',
                content: 'https://javascript.info/'
            }, {
                title: 'webplatform',
                content: 'https://webplatform.github.io/'
            }, {
                title: 'learning-javascript-design-patterns',
                content: 'https://www.oschina.net/translate/learning-javascript-design-patterns'
            }, {
                title: 'frontendmasters',
                content: 'https://frontendmasters.com/books/front-end-handbook/2018/'
            }, {
                title: 'Resources to learn Git',
                content: 'https://try.github.io/'
            }, {
                title: 'backbone patterns/',
                content: 'https://ricostacruz.com/backbone-patterns/'
            }, {
                title: 'Git 参考手册',
                content: 'http://gitref.justjavac.com/index.html'
            }, {
                title: 'git Book',
                content: 'http://git-scm.com/book/zh/v2'
            }, {
                title: ' ES Compat Table',
                content: 'http://kangax.github.io/compat-table/es5/'
            }, {
                title: 'quirksmode',
                content: 'https://www.quirksmode.org/compatibility.html'
            }, {
                title: 'JS API Tutorial',
                content: 'https://help.tableau.com/samples/en-us/js_api/tutorial.htm'
            }, {
                title: 'JavaScript Katas',
                content: 'https://jskatas.org/'
            }, {
                title: 'JavaScript (ES2015+) Enlightenment',
                content: 'https://frontendmasters.com/books/javascript-enlightenment/'
            }, {
                title: 'eloquentjavascript',
                content: 'https://eloquentjavascript.net/'
            }, {
                title: 'devdocs',
                content: 'https://devdocs.io/'
            }, {
                title: 'ibm developer',
                content: 'https://developer.ibm.com/zh/'
            }, {
                title: 'overapi',
                content: 'https://overapi.com/'
            }, {
                title: 'csdn',
                content: 'https://so.csdn.net/'
            }, {
                title: 'Php CheatSheet',
                content: 'http://www.blueshoes.org/en/developer/php_cheat_sheet/'
            }, {
                title: 'Git CheatSheet',
                content: 'https://gist.github.com/IA-max/721ac3bf1618cdb0a591a82fd26c9c7c#file-git_cheatsheet-md'
            }, {
                title: '2ality – JavaScript and more',
                content: 'https://2ality.com/2014/09/es6-modules-final.html'
            }, {
                title: 'ES6 入门教程',
                content: 'https://es6.ruanyifeng.com/'
            }, {
                title: 'ES6 Overview in 350 Bullet Points',
                content: 'https://ponyfoo.com/articles/es6'
            }, {
                title: 'Exploring ES6',
                content: 'https://exploringjs.com/es6/'
            }, {
                title: 'Understanding ECMAScript 6',
                content: 'https://leanpub.com/understandinges6/read/'
            }, {
                title: 'Webcomponents',
                content: 'https://www.webcomponents.org/'
            }, {
                title: 'sitespeed',
                content: 'https://www.sitespeed.io/'
            }, {
                title: 'google analytics',
                content: 'https://developers.google.com/analytics/'
            }, {
                title: 'oneapm',
                content: 'https://www.oneapm.com/bi/feature.html'
            }, {
                title: 'Google insights',
                content: 'https://developers.google.com/speed/docs/insights/rules'
            }, {
                title: 'Browser hacks',
                content: 'http://browserhacks.com/'
            }, {
                title: 'enjoycss',
                content: 'https://enjoycss.com/'
            }, {
                title: 'jsonapi',
                content: 'https://jsonapi.org/'
            }, {
                title: 'json3',
                content: 'https://bestiejs.github.io/json3/'
            }, {
                title: 'ECMAScript 5.1 解剖',
                content: 'https://es5.github.io/'
            }, {
                title: 'UNDERSCORE JS 解剖',
                content: 'https://www.css88.com/doc/underscore/docs/underscore.html'
            }, {
                title: 'React 解剖',
                content: 'https://github.com/BinaryMuse/react-primer'
            }, {
                title: 'jQuery 解剖',
                content: 'https://robflaherty.github.io/jquery-annotated-source/'
            }, {
                title: 'tengine',
                content: 'http://tengine.taobao.org/book/index.html'
            }, {
                title: 'python教程',
                content: 'http://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000'
            }, {
                title: 'varnish',
                content: 'https://www.varnish-cache.org/'
            }, {
                title: 'firebase',
                content: 'https://www.firebase.com/'
            }, {
                title: 'mongodb',
                content: 'https://www.mongodb.com/'
            }, {
                title: 'mongoosejs',
                content: 'https://mongoosejs.com/'
            }, {
                title: 'python',
                content: 'https://www.python.org/'
            }, {
                title: 'rubyonrails',
                content: 'http://guides.rubyonrails.org/index.html'
            }, {
                title: 'rubygems',
                content: 'https://rubygems.org/'
            }, {
                title: 'TypeScript使用手册',
                content: 'https://github.com/zhongsp/TypeScript'
            }, {
                title: 'TypeScript Bootcss 中文手册',
                content: 'https://typescript.bootcss.com/tutorials/typescript-in-5-minutes.html'
            }, {
                title: 'TypeScript Handbook 中文 2.7',
                content: 'https://www.bookstack.cn/read/typescript-handbook/preface.md'
            }, {
                title: 'Go Web Iris',
                content: 'http://www.studyiris.com/doc/'
            }
            ]
        }


        const tableList25 = {
            title: 'Python 框架',
            data: [{
                title: 'flask',
                content: 'https://flask.palletsprojects.com/en/1.1.x/',
            }, {
                title: 'django',
                content: 'https://www.djangoproject.com/',
            }]
        }

        const tableList20 = {
            title: 'UI & UX',
            data: [{
                title: 'Behance',
                content: 'https://www.behance.net/',
            }, {
                title: 'deviantart',
                content: 'https://www.deviantart.com/',
            }, {
                title: 'Dribbble',
                content: 'https://dribbble.com/'
            }]
        }

        const tableList21 = {
            title: '驱动测试',
            data: [{
                title: 'casperjs',
                content: 'https://www.casperjs.org/',
            }, {
                title: 'jasmine',
                content: 'https://jasmine.github.io/',
            }]
        }

        const tableList22 = {
            title: 'CDN资源',
            data: [{
                title: 'bootcdn',
                content: 'https://www.bootcdn.cn/',
            }]
        }

        const tableList23 = {
            title: '代码规范',
            data: [{
                title: 'Google JS Guide',
                content: 'https://google.github.io/styleguide/javascriptguide.xml',
            }, {
                title: 'airbnb react',
                content: 'https://github.com/airbnb/javascript/tree/master/react',
            }]
        }


        const tableList12 = {
            title: 'Code例子',
            data: [{
                title: 'todomvc',
            }, {
                title: 'madewithvuejs',
                content: 'https://madewithvuejs.com/'
            }, {
                title: ' sample for php',
                content: 'https://hotexamples.com/'
            }, {
                title: 'Sorting Algorithms',
                content: 'http://math.hws.edu/eck/jsdemo/sortlab.html'
            }, {
                title: 'JavaScript Try',
                content: 'https://www.javascript.com/try'
            }, {
                title: 'campaignmonitor',
                content: 'https://www.campaignmonitor.com/css/'
            }, {
                title: 'selectors-test',
                content: 'http://tools.css3.info/selectors-test/test.html'
            }, {
                title: 'CSS Compatibility in Internet Explorer',
                content: 'https://docs.microsoft.com/en-us/previous-versions//hh781508(v=vs.85)?redirectedfrom=MSDN'
            }]
        }

        const tableList18 = {
            title: 'Open Source',
            data: [{
                title: 'airbnb',
                content: 'https://airbnb.io/projects/'
            }, {
                title: 'engineering fb',
                content: 'https://engineering.fb.com/'
            }, {
                title: 'opensource fb',
                content: 'https://opensource.facebook.com/projects'
            }, {
                title: 'Dev google',
                content: 'https://developers.google.com/'
            }, {
                title: 'DEV twitter',
                content: 'https://developer.twitter.com/en'
            }, {
                title: 'DEV yahoo',
                content: 'https://developer.yahoo.com/'
            }]
        }
        const tableList9 = {
            title: 'Blog',
            data: [{
                title: 'overreacted',
                content: 'https://overreacted.io/'
            }, {
                title: 'arc.dev',
                content: 'https://arc.dev/blog'
            }, {
                title: 'codylindley',
                content: 'http://codylindley.com/'
            }, {
                title: 'UX Myths ',
                content: 'https://uxmyths.com/'
            }, {
                title: 'jster',
                content: 'http://jster.net/blog'
            }, {
                title: 'opera dev',
                content: 'https://dev.opera.com/'
            }, {
                title: 'phodal',
                content: 'https://www.phodal.com/'
            }]
        }

        const tableList13 = {
            title: 'Community',
            data: [{
                title: 'c-sharpcorner',
                content: 'https://www.c-sharpcorner.com/'
            }, {
                title: 'reddit perfmatters',
                content: 'https://www.reddit.com/r/perfmatters/'
            }, {
                title: 'reddit webdev',
                content: 'https://www.reddit.com/r/webdev/'
            }, {
                title: 'hashnode explore',
                content: 'https://hashnode.com/explore'
            }, {
                title: 'microsoft opensource',
                content: 'https://cloudblogs.microsoft.com/opensource/#home'
            }]
        }


        const tableList11 = {
            title: 'Js 组件 & 框架',
            data: [{
                title: 'react',
                content: 'https://zh-hans.reactjs.org'
            }, {
                title: 'vue',
                content: 'https://vuejs.org/'
            }, {
                title: 'angular',
                content: 'https://angular.io'
            }, {
                title: 'ant Design',
                content: 'https://ant.design/index-cn'
            }, {
                title: 'styled-components',
                content: 'https://styled-components.com/'
            }, {
                title: 'mobx',
                content: 'https://cn.mobx.js.org/'
            }, {
                title: 'react native',
                content: 'https://reactnative.dev/'
            }, {
                title: 'redux saga',
                content: 'https://redux-saga-in-chinese.js.org/'
            }, {
                title: 'storybook',
                content: 'https://storybook.js.org/'
            }, {
                title: 'flux',
                content: 'http://facebook.github.io/flux/'
            }, {
                title: 'socket io',
                content: 'https://socket.io/'
            }, {
                title: 'react-hot-loader',
                content: 'http://gaearon.github.io/react-hot-loader/'
            }, {
                title: 'react',
                content: 'https://reactjs.org/'
            }, {
                title: 'prototypejs',
                content: 'http://prototypejs.org/'
            }, {
                title: 'aurelia',
                content: 'http://aurelia.io/'
            }, {
                title: 'mockjs',
                content: 'http://mockjs.com/'
            }, {
                title: 'meteor',
                content: 'https://www.meteor.com/#!'
            }, {
                title: 'underscorejs',
                content: 'http://underscorejs.org/'
            }, {
                title: 'lodash',
                content: 'https://lodash.com/'
            }, {
                title: 'emberjs',
                content: 'http://emberjs.com/'
            }, {
                title: 'greensock',
                content: 'http://greensock.com/'
            }, {
                title: 'hcharts',
                content: 'http://www.hcharts.cn/'
            }, {
                title: 'backbonejs',
                content: 'https://backbonejs.org/'
            }, {
                title: 'marionettejs',
                content: 'https://marionettejs.com/'
            }, {
                title: 'relay',
                content: 'https://facebook.github.io/relay/'
            }, {
                title: 'threejs',
                content: 'http://threejs.org/'
            }, {
                title: 'velocityjs',
                content: 'http://velocityjs.org/'
            }, {
                title: 'apollo graphql',
                content: 'https://www.apollographql.com/docs/'
            }]
        }

        const tableList24 = {
            title: '移动设备框架',
            data: [{
                title: 'weex',
                content: 'https://weex.apache.org/'
            }]
        }


        const tableList17 = {
            title: 'Js 语法检测',
            data: [{
                title: 'eslint',
                content: 'https://eslint.org/'
            }, {
                title: 'jshint',
                content: 'https://jshint.com/'
            }, {
                title: 'devtools',
                content: 'https://developer.chrome.com/devtools'
            }]
        }


        const tableList15 = {
            title: 'CSS 组件 & 框架',
            data: [{
                title: 'FE CSS Framework Compare',
                content: 'http://usablica.github.io/front-end-frameworks/compare.html'
            }, {
                title: 'Animate.css',
                content: 'https://animate.style/'
            }, {
                title: 'Materialize',
                content: 'https://materializecss.com/'
            }, {
                title: 'foundation',
                content: 'https://get.foundation/'
            }, {
                title: 'Polymer',
                content: 'https://www.polymer-project.org/'
            }, {
                title: 'ui kit',
                content: 'https://getuikit.com/'
            }, {
                title: 'susy',
                content: 'https://www.oddbird.net/susy/'
            }, {
                title: 'Semantic UI',
                content: 'https://semantic-ui.com/'
            }, {
                title: 'purecss',
                content: 'https://purecss.io/'
            }, {
                title: 'material ui',
                content: 'https://material-ui.com/'
            }, {
                title: 'ionic',
                content: 'https://ionicframework.com/'
            }, {
                title: 'ui lang',
                content: 'http://uilang.com/'
            }, {
                title: 'baselinecss',
                content: 'http://stephanecurzi.me/baselinecss.2009/'
            }, {
                title: 'material angularjs',
                content: 'https://material.angularjs.org/latest/'
            }]
        }

        const tableList16 = {
            title: 'CSS 编译',
            data: [{
                title: 'stylus',
                content: 'https://stylus-lang.com/'
            }, {
                title: 'lesscss',
                content: 'http://lesscss.org/'
            }, {
                title: 'Cssowl',
                content: 'https://cssowl.owl-stars.com/'
            }, {
                title: 'sass',
                content: 'https://sass-lang.com/'
            }, {
                title: 'postcss',
                content: 'https://postcss.org/'
            }, {
                title: 'bourbon',
                content: 'https://www.bourbon.io/'
            }, {
                title: 'CSS Pre',
                content: 'https://csspre.com/'
            }, {
                title: 'css layout 生成',
                content: 'https://www.webdesignrankings.com/resources/csslayoutgenerator/'
            }]
        }

        const tableList10 = {
            title: '培训网站',
            data: [{
                title: 'tianmaying',
                content: 'https://www.tianmaying.com/'
            }, {
                title: 'imooc',
                content: 'https://www.imooc.com/'
            }, {
                title: 'techug',
                content: 'https://www.techug.com/'
            }]
        }

        const tableList19 = {
            title: '模块化',
            data: [{
                title: 'browserify',
                content: 'http://browserify.org/'
            }, {
                title: 'commonjs',
                content: 'http://www.commonjs.org/'
            }, {
                title: 'amdjs',
                content: 'https://github.com/amdjs/amdjs-api/wiki/AMD'
            }, {
                title: 'systemjs',
                content: 'https://github.com/systemjs/systemjs'
            }, {
                title: 'requirejs',
                content: 'https://requirejs.org/'
            }]
        }
        return (
            <Layout location={location} title={siteTitle}>
                <SEO title='Resource'/>
                <article className="container px-4 py-24 mx-auto md:w-3/4 lg:w-2/4">
                    <div className="w-full mx-auto mb-12 text-center md:w-2/3">
                        <p className="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">Development</p>
                        <h1 className="mb-3 text-4xl font-bold text-gray-900 md:leading-tight md:text-5xl"
                            title="Rise of Tailwind - A Utility First CSS Framework">
                            资源
                        </h1>
                        <p className="text-gray-700">
                            Written by
                            <span className="byline author vcard">
                        <a href="/about" target="_blank"
                           className="text-primary hover:text-primary-dark"><span> Max </span></a>
                    </span>
                            on <time>Jan 02 2021</time>
                        </p>
                    </div>
                    <div className="mx-auto prose articleContent">
                        <h4>快捷链接</h4>
                        <Table props={tableList8}/>
                        <Table props={tableList11}/>
                        <Table props={tableList12}/>
                        <Table props={tableList1}/>
                        <Table props={tableList19}/>
                        <Table props={tableList2}/>
                        <Table props={tableList3}/>
                        <Table props={tableList4}/>
                        <Table props={tableList5}/>
                        <Table props={tableList6}/>
                        <Table props={tableList7}/>

                        <Table props={tableList20}/>
                        <Table props={tableList21}/>
                        <Table props={tableList22}/>

                        <Table props={tableList24}/>
                        <Table props={tableList23}/>
                        <Table props={tableList25}/>


                        <Table props={tableList9}/>

                        <Table props={tableList14}/>
                        <Table props={tableList15}/>
                        <Table props={tableList16}/>
                        <Table props={tableList17}/>
                        <Table props={tableList18}/>
                        <Table props={tableList13}/>
                        <Table props={tableList10}/>
                        <hr/>

                        <h5>More below</h5>
                        https://frontender-ua.medium.com/frontend-weekly-digest-190-21-27-december-2020-f8e203cc4f55

                        <h4>开源镜像资源</h4>
                        <Acc props={
                            [{
                                title: `TabBao镜像`,
                                content: ` <p>更多在 https://developer.aliyun.com/mirror/</p><ol>
                                    <li>NPM开源镜像: http://npm.taobao.org/mirrors</li>
                                    <li>Node.js 镜像: http://npm.taobao.org/mirrors/node</li>
                                    <li>alinode 镜像: http://npm.taobao.org/mirrors/alinode</li>
                                    <li>phantomjs 镜像: http://npm.taobao.org/mirrors/phantomjs</li>
                                    <li>ChromeDriver 镜像: http://npm.taobao.org/mirrors/chromedriver</li>
                                    <li>OperaDriver 镜像: http://npm.taobao.org/mirrors/operadriver</li>
                                    <li>Selenium 镜像: http://npm.taobao.org/mirrors/selenium</li>
                                    <li>Node.js 文档镜像: http://npm.taobao.org/mirrors/node/latest/docs/api/index.html</li>
                                    <li>NPM 镜像: https://npm.taobao.org/mirrors/npm/</li>
                                    <li>electron 镜像: https://npm.taobao.org/mirrors/electron/</li>
                                    <li>node-inspector 镜像: https://npm.taobao.org/mirrors/node-inspector/</li>
                                </ol>`
                            }]
                        }></Acc>

                        <h4>Ubuntu 镜像</h4>
                        <Acc props={
                            [{
                                title: `Ubuntu 14.04.5 LTS`,
                                content: `<div>
                            用你熟悉的编辑器打开： /etc/apt/sources.list <br/> 替换默认的 http://archive.ubuntu.com/ 为 mirrors.aliyun.com
                        </div><br/>
                        <pre>
deb https://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse 
deb-src https://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse
deb https://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse
deb https://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse
deb https://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse
## Not recommended
# deb https://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse
                                </pre>`
                            },
                                {
                                    title: `ubuntu 20.04(focal)`,
                                    content: `<pre>
deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
                                </pre>`
                                }]
                        }></Acc>

                        <h4>CentOS Linux 8 更换用阿里源</h4>
                        <Acc props={
                            [{
                                title: `Centos 8`,
                                content: `<pre>
## 1.备份
cd /etc/yum.repos.d/
mv /etc/yum.repos.d/CentOS-AppStream.repo /etc/yum.repos.d/CentOS-AppStream.repo.bak
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak
mv /etc/yum.repos.d/CentOS-centosplus.repo /etc/yum.repos.d/CentOS-centosplus.repo.bak
mv /etc/yum.repos.d/CentOS-Extras.repo /etc/yum.repos.d/CentOS-Extras.repo.bak
mv /etc/yum.repos.d/CentOS-PowerTools.repo /etc/yum.repos.d/CentOS-PowerTools.repo.bak

## 2.做完备份后，就可以下载新的阿里源文件 
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-8.repo

## 3.命令查看一下内容，确认是否下载成功
cat /etc/yum.repos.d/CentOS-Base.repo

## 4.命令生成以下缓存
yum makecache

## 5.命令升级所有的软件包
yum -y update
                                </pre>`
                            }]
                        }></Acc>


                        <hr/>

                        <h4>tailwind Css</h4>
                        <ul>
                            <li>
                                https://github.com/aniftyco/awesome-tailwindcss
                            </li>
                            <li>https://blog.tailwindcss.com/</li>
                            <li>https://pinegrow.com/tutorials/customizing-a-tailwind-css-theme/</li>
                        </ul>

                        <h4>Gatsby Plugins</h4>
                        <Acc props={
                            [{
                                title: `Gatsby plugins`,
                                content: `<ul>
                        <li><a href="https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/">gatsby-source-filesystem/</a></li>
                        <li><a href="https://www.gatsbyjs.com/plugins/gatsby-image/">gatsby-image</a></li>
                        <li><a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp">gatsby-plugin-sharp</a></li>
                        <li><a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest">gatsby-plugin-manifes</a></li>
                        <li><a href="https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp">gatsby-transformer-sharp</a></li>
                        <li><a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-typescript">gatsby-plugin-typescript</a></li>
                        <li><a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-offline">gatsby-plugin-offline</a></li>
                        <li><a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/">gatsby-plugin-sitemap</a></li>
                        <li><a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics">gatsby-plugin-google-analytics</a></li>
                        <li><a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx">gatsby-plugin-mdx</a></li>
                    </ul>`
                            }]
                        }></Acc>

                        <hr/>


                    </div>
                </article>
            </Layout>
        )
            ;
    }
;

export default ResourcePage;
export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;