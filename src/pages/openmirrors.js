import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const OpenMirrorsPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title='Open Mirrors' />

            <article class="container px-4 py-24 mx-auto" itemid="#" itemscope itemtype="http://schema.org/BlogPosting">
                <div class="w-full mx-auto mb-12 text-center md:w-2/3">
                    <p class="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">Development</p>
                    <h1 class="mb-3 text-4xl font-bold text-gray-900 md:leading-tight md:text-5xl" itemprop="headline" title="Rise of Tailwind - A Utility First CSS Framework">
                    开源镜像资源
                    </h1>
                    <p class="text-gray-700">
                    Written by 
                    <span class="byline author vcard" itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person">
                        <a href="#" target="_blank" itemprop="url" rel="author noopener noreferrer" class="text-primary hover:text-primary-dark"><span itemprop="name"> Max </span></a>
                    </span>
                      on <time itemprop="datePublished dateModified" datetime="2010-08-07 11:11:03-0400" pubdate>Jan 02 2021</time>
                    </p>
                </div>

                <div class="mx-auto prose">
                        <ol>
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
                        </ol>
                        更多在 https://developer.aliyun.com/mirror/

                        <h4>Ubuntu 镜像</h4>
                        <p>用你熟悉的编辑器打开： /etc/apt/sources.list</p>
                        <p>替换默认的http://archive.ubuntu.com/为mirrors.aliyun.com</p>


            <h5>以Ubuntu 14.04.5 LTS</h5>
                <code> <pre>
            deb https://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse <br/>
            deb-src https://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse<br/>
            deb https://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse<br/>
            deb-src https://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse<br/>

            deb https://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse<br/>
            deb-src https://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse<br/>

            deb https://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse<br/>
            deb-src https://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse<br/>

            ## Not recommended
            # deb https://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse<br/>
            # deb-src https://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse<br/>
            </pre></code>
            


            <h5>ubuntu 20.04(focal) 配置</h5>
            <code> <pre>
            deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse<br/>
            deb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse<br/>

            deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse<br/>
            deb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse<br/>

            deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse<br/>
            deb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse<br/>

            deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse<br/>
            deb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse<br/>

            deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
            deb-src http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
            </pre></code>
            

            </div>
            </article>

            
        </Layout>
    );
};

export default OpenMirrorsPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;






