---
title: 'SSO 单点登录'
date: '2019-09-18T14:13:44+08:00'
status: publish
permalink: /sso
author: admin
excerpt: ''
type: post
id: 1466
category:
    - 理论
tag: []
post_format: []
php_everywhere_code:
    - 'Just put [php_everywhere] where you want the code to be executed.'
    - 'Just put [php_everywhere] where you want the code to be executed.'
---
### 什么是单点登录？

单点登录（SSO）是一种系统，通过仅使用一组凭据（用户名和密码）登录，用户只需登录一次即可安全地对多个应用程序和网站进行身份验证。使用SSO，用户尝试访问的应用程序或网站依赖于受信任的第三方来验证用户是否是他们所声称的用户。

### 如果没有SSO，身份验证如何工作？

如果没有单点登录，每个网站都会维护自己的用户及其凭据数据库。当您尝试登录应用或网站时会发生以下情况：

1. 该网站首先检查您是否已经过身份验证。如果有，它可以让您访问该网站。
2. 如果还没有，它会要求您登录，并根据其用户数据库中的信息检查您的用户名和密码。
3. 登录后，当您在网站中移动时，网站会传递身份验证验证数据，以确认每次转到新网页时都会对您进行身份验证。

身份验证验证数据通常作为带有会话数据的cookie或作为令牌传递，这些令牌不跟踪会话并且处理速度更快。

**用户请求访问权限**

<figure class="wp-block-image">![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/how-sso-works1.jpg)</figure> 用户被授予访问权限，然后请求访问新站点

<figure class="wp-block-image">![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/how-sso-works2.jpg)</figure>### SSO如何运作？

使用SSO进行身份验证依赖于域（网站）之间的信任关系。通过单点登录，当您尝试登录应用或网站时会发生这种情况：

1. 该网站首先检查您是否已经过SSO解决方案的身份验证，在这种情况下，它可以让您访问该网站。
2. 如果还没有，它会将您发送到SSO解决方案进行登录。
3. 您输入用于公司访问的单个用户名/密码。
4. SSO解决方案从您公司使用的身份提供商或身份验证系统请求身份验证。它会验证您的身份并通知SSO解决方案。
5. SSO解决方案将身份验证数据传递到网站并返回到该站点。
6. 登录后，当您在网站中移动时，网站会随身携带身份验证验证数据，以确认每次转到新网页时都会对您进行身份验证。

在SSO中，身份验证验证数据采用令牌的形式。

用户请求访问权限

<figure class="wp-block-image">![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/how-sso-works3.jpg)</figure>该网站将用户重定向到SSO网站以登录。用户使用单个用户名和密码登录。

SSO网站使用身份提供程序（例如Active Directory）验证用户的身份。

用户被授予访问权限，然后请求访问新站点

<figure class="wp-block-image">![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/how-sso-works4.jpg)</figure>当用户尝试访问其他网站时，新网站会检查SSO解决方案。由于用户已经过身份验证，因此无需额外登录即可验证用户对新网站的身份。

### 是什么让一个真正的SSO系统？

了解单点登录和密码存储（有时称为SSO）之间的区别非常重要。使用密码存储区，您可能拥有相同的用户名和密码，但每次移动到其他应用程序或网站时都必须输入密码存储区。使用SSO，在您通过SSO解决方案登录后，您可以访问所有公司批准的应用程序和网站，而无需再次登录。这包括通常通过SSO门户（也称为*登录门户*）提供的云和本地应用程序。SSO使用称为*联合*的概念来提供*联合SSO*。

### 什么是联合SSO？

使用联合的SSO解决方案通过利用组织的身份提供程序（IP）（例如Microsoft Active Directory（AD）或Azure Active Directory（Azure AD））实现真正的单点登录。身份提供者通常充当身份验证服务器并存储用户的身份和信息，例如用户名，密码，用户有权访问的域，甚至允许用户在每个站点或每个应用程序内执行哪些活动。（验证允许用户执行的活动称为*授权*。例如，用户可以访问Salesforce报告，但可能不允许编辑客户记录。）

对于真正的SSO，SSO解决方案内置于身份提供程序中，或者SSO解决方案使用一个或多个身份提供程序对用户进行身份验证。

身份验证请求和信息使用标准的安全协议传递，例如SAML或OAuth。请求认证的网站与SSO解决方案具有信任关系，并且SSO解决方案与身份提供商之间存在信任关系。一个*信任关系*意味着一个域信任有关用户身份，设备和访问权限的其他信息。