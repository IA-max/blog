---
title: Gastby 入门
date: 2020-12-08
description: 'Gastby 入门'
---

##### Gatsby 项目结构

```markup
|-- /.cache
|-- /plugins
|-- /public
|-- /src
    |-- /pages
    |-- /templates
    |-- html.js
|-- /static
|-- gatsby-config.js
|-- gatsby-node.js
|-- gatsby-ssr.js
|-- gatsby-browser.js
```

-   gatsby-config.js <small>- 网站配置选项，并为项目标题，说明，插件等提供元数据</small>
-   gatsby-node.js <small>- 实施 Node.js API，以自定义和扩展影响构建过程的默认设置</small>
-   gatsby-browser.js <small>- 使用浏览器 API 自定义和扩展影响浏览器的默认设置</small>
-   gatsby-ssr.js <small>- 使用服务器端渲染 API 自定义影响服务器端渲染的默认设置</small>
    额外资源

```jsx {1,4-6}{numberLines: true}
import React from 'react';
const AboutPage = () => (
    <main>
        <h1>About the Author</h1>
        <p>Welcome to my Gatsby site.</p>
    </main>
);
export default AboutPage;
```
