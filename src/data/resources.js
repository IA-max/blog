import React from 'react'

const tree = [
    {
        id: "t1",
        "title": "包管理",
        "data": [{
            "title": 'bower',
            "content": `https://bower.io/`
        }, {
            "title": `jspm`,
            "content": `https://jspm.org/`
        }, {
            "title": `npmjs`,
            "content": `https://www.npmjs.com/`
        }, {
            "title": `淘宝 NPM 镜像`,
            "content": `https://developer.aliyun.com/mirror/NPM?from=tnpm`
        }]
    },
    {
        id: "t2",
        title: '编译构建',
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
        }, {
            title: 'vite',
            content: 'https://vitejs.dev/'
        },{
            title: 'parcel',
            content: 'https://parceljs.docschina.org/'
        }]
    },
    {
        id: ' t3',
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
    },
    {
        id: " t4",
        title: '脚手架',
        data: [{
            title: 'fis',
            content: `http://fis.baidu.com/`
        }, {
            title: 'yeoman',
            content: `https://yeoman.io/`
        }]
    },
    {
        id: " t5",
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
    },
    {
        id: " t6",
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
    },
    {
        id: " t7",
        title: 'js 运行环境',
        data: [{
            title: 'jsbin',
            content: `http://jsbin.com/?js,console,output`
        }]
    },
    {
        id: " t8",
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
    },
    {
        id: " t9",
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
        }, {
            title: 'Platform H5',
            content: 'https://platform.html5.org/'
        },
            {
                title: 'what Html',
                content: 'https://whatwg-cn.github.io/html/'
            }
        ]
    },
    {
        id: " t10",
        title: 'Python 框架',
        data: [{
            title: 'flask',
            content: 'https://flask.palletsprojects.com/en/1.1.x/',
        }, {
            title: 'django',
            content: 'https://www.djangoproject.com/',
        }]
    },
    {
        id: " t11",
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
    },
    {
        id: " t12",
        title: '驱动测试',
        data: [{
            title: 'casperjs',
            content: 'https://www.casperjs.org/',
        }, {
            title: 'jasmine',
            content: 'https://jasmine.github.io/',
        }]
    },
    {
        id: " 13",
        title: 'CDN资源',
        data: [{
            title: 'bootcdn',
            content: 'https://www.bootcdn.cn/',
        }]
    },
    {
        id: " t14",
        title: '代码规范',
        data: [{
            title: 'Google JS Guide',
            content: 'https://google.github.io/styleguide/javascriptguide.xml',
        }, {
            title: 'airbnb react',
            content: 'https://github.com/airbnb/javascript/tree/master/react',
        }]
    },
    {
        id: " t15",
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
    },
    {
        id: " t16",
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
    },
    {
        id: " t17",
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
    },
    {
        id: " t18",
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
    },
    {
        id: " t19",
        title: '状态管理',
        data: [{
            title: 'redux',
            content: 'https://cn.redux.js.org/'
        }, {
            title: 'Vuex',
            content: 'https://vuex.vuejs.org/zh/'
        }, {
            title: 'mobx',
            content: 'https://cn.mobx.js.org/'
        }, {
            title: 'redux saga',
            content: 'https://redux-saga-in-chinese.js.org/'
        }, {
            title: 'rematch',
            content: 'https://rematch.gitbook.io/handbook/'
        }, {
            title: 'React - Redux',
            content: 'https://react-redux.js.org/'
        },]
    },
    {
        id: " t20",
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
            title: 'fusion design',
            content: 'https://fusion.design/'
        },{
            title: 'styled-components',
            content: 'https://styled-components.com/'
        }, {
            title: 'flutter web',
            content: 'https://flutter.cn/web'
        }, {
            title: 'react native',
            content: 'https://reactnative.dev/'
        }, {
            title: 'React Native 中文',
            content: 'https://reactnative.cn/'
        },{
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
        }, {
            title: 'dvajs',
            content: 'https://dvajs.com/guide/'
        }, {
            title: 'Immutable JS',
            content: 'https://immutable-js.github.io/immutable-js/'
        }, {
            title: 'RX JS',
            content: 'https://cn.rx.js.org/'
        }]
    },
    {
        id: " t21",
        title: '移动设备框架',
        data: [{
            title: 'weex',
            content: 'https://weex.apache.org/'
        }]
    },
    {
        id: " t22",
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
    },
    {
        id: " t23",
        title: '小程序框架',
        data: [{
            title: 'remaxjs',
            content: 'https://remaxjs.org/'
        }, {
            title: 'taro',
            content: 'https://taro.jd.com/'
        }, {
            title: 'mpvue',
            content: 'http://mpvue.com/'
        }, {
            title: 'omi',
            content: 'https://tencent.github.io/omi/'
        }, {
            title: 'uniapp',
            content: 'https://uniapp.dcloud.io/'
        }]
    },
    {
        id: " t24",
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
        }, {
            title: 'Element UI',
            content: 'https://element.eleme.cn/#/zh-CN'
        }, {
            title: 'View UI',
            content: 'https://www.iviewui.com/'
        }, {
            title: 'Mint-ui',
            content: 'http://mint-ui.github.io/#!/zh-cn'
        }, {
            title: 'weex',
            content: 'https://weex.apache.org/'
        }, {
            title: 'vant',
            content: 'https://youzan.github.io/vant/#/zh-CN/'
        }]
    },
    {
        id: " t25",
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
    },
    {
        id: " t26",
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
    },
    {
        id: " t27",
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
]

const List = ({props}) => {
    return (
        <ul>
            {
                props.map(function(dt, di){
                    if(dt.content !== '') {
                        return (
                            <li key={di}><a href={ dt.content }>{ dt.title }</a></li>
                        )
                    }
                    return true;
                })
            }
        </ul>
    )
}

const Tree = () => {
    const html = tree.map((t, i) => {
        return (<dl key={t.id}>
            <dt><h4>{t.title}</h4></dt>
            <dd> <List props={t.data}/> </dd>
        </dl>)
    })
    return (<div>{
        html
    }</div>)
}
export default Tree;