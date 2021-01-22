---
title: "Redux 入门"
date: "2018-01-26"
featured: false
category: "js"
excerpt: ""
tag: ["js"]
status: "publish"
type: "post"
cover: "./none.png"
---

安装create-react-app
```bash
npm install -g create-react-app
```
弹出来手动配置
```bash
npm run eject
```

安装react-redux redux
```bash
npm install --save-dev react-redux redux
```

安装thunk (使用异步action)
```bash
npm install react-thunk
```

```
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
```
如果要全局提供store,就要使用Provider
```js
import { Provider} from 'react-redux;
```
在render里修改由Provider提供store
```jsx
ReactDOM.render(
(<Provider store={store} >
<App/>
</Provider>),
document.getElementById('root'));
```

生成一个store
```js
const store = createStore(
    counter,   //这个是reducer
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__() ? window.__REDUX_DEVTOOLS_EXTENSION__():f=>f  //redux在浏览器里的插件
    )
);
```

如果使用connect
```js
import {connect} from 'react-redux'
```
如果是最新的babel 7 ,需要添加插件

```bash
cnpm install babel-plugin-transform-decorators-legacy  --save-dev
cnpm install  @babel/plugin-proposal-decorators --save-dev
## 然后
npm run eject  
## 弹出个性化配置
```
修改babel
```js
"plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }]
]
```