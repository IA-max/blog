import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title='About' />

            <article class="container px-4 py-24 mx-auto md:w-3/4 lg:w-2/4" itemid="#" itemscope itemtype="http://schema.org/BlogPosting">
                <div class="w-full mx-auto mb-12 text-center md:w-2/3">
                    <p class="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">Development</p>
                    <h1 class="mb-3 text-4xl font-bold text-gray-900 md:leading-tight md:text-5xl" itemprop="headline" title="Rise of Tailwind - A Utility First CSS Framework">
                    About
                    </h1>
                    <p class="text-gray-700">
                    Written by 
                    <span class="byline author vcard" itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person">
                        <a href="#" target="_blank" itemprop="url" rel="author noopener noreferrer" class="text-primary hover:text-primary-dark"><span itemprop="name"> Max </span></a>
                    </span>
                      on <time itemprop="datePublished dateModified">Jan 01 2020</time>
                    </p>
                </div>

                <div class="mx-auto prose articleContent">
                        <h3 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Hi!I 'm Max 👋</h3>
                        <p>I'm a software engineer. I was born in 1987 (you can do the math) and grew up in TS. </p>
                        <p>I now work for myself full - time as an developer.</p>
                        <p>I create content all about Web Development on my blog platforms🚀.</p>
                        {/* <p>I live in TS with my two cats and family👪😺😺.</p>                 */}
                </div>
            </article>

            
        </Layout>
    );
};

export default About;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;






