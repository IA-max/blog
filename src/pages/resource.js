import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Acc from '../components/acc'


const ResourcePage = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title;

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

                    <h4>学习资源</h4>
                    <ul>
                        <li><a href="https://leetcode-cn.com">Leet Code</a></li>
                        <li><a href="http://devdocs.io/">devdocs</a></li>
                        <li><a href="https://cn.history.js.org/">JavaScript 20 年</a></li>
                        <li><a href="https://lab.github.com/">Learning Lab</a></li>
                        <li><a href="https://caniuse.com/">Can I Use</a></li>
                    </ul>
                    <hr/>

                    <h4>开源镜像资源</h4>
                    <p>更多在 https://developer.aliyun.com/mirror/</p>
                    <Acc props={
                        [{
                            title: `TabBao镜像`,
                            content: `<ol>
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
                    <div>
                        用你熟悉的编辑器打开： /etc/apt/sources.list <br/> 替换默认的 http://archive.ubuntu.com/ 为 mirrors.aliyun.com
                    </div>
                    <Acc props={
                        [{
                            title: `Ubuntu 14.04.5 LTS`,
                            content: `<pre>
deb https://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse <br/>
deb-src https://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse<br/>
deb https://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse<br/>
deb-src https://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse<br/>
deb https://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse<br/>
deb-src https://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse<br/>
deb https://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse<br/>
deb-src https://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse<br/>
## Not recommended<br/>
# deb https://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse<br/>
# deb-src https://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse<br/>
                                </pre>`
                        },
                            {
                                title: `ubuntu 20.04(focal)`,
                                content: `<pre>
deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse<br/>
deb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse<br/>
deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse<br/>
deb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse<br/>
deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse<br/>
deb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse<br/>
deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse<br/>
deb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse<br/>
deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse<br/>
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




                </div>
            </article>
        </Layout>
    );
};

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






