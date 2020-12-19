import React from 'react';
import { graphql } from 'gatsby';
import ConfettiGenerator from "confetti-js";

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title;
    const divStyle = {
            overflow: "hidden",
            position: "absolute",
            margin: "0 auto",
            top: "10%",
            left: "0",
            right: "0",
            width: "100%",
            zIndex: 9
    };

    React.useEffect(() => {
    const confettiSettings = { target: 'my-canvas' , "max": "83", "size": "1", "animate": true, "props": ["circle", "triangle", { "type": "svg", "src": "site/hat.svg", "size": 25, "weight": 0.2 }], "colors": [
            [165, 104, 246],
            [230, 61, 135],
            [0, 199, 228],
            [253, 214, 126]
        ], "clock": "25", "rotate": true,  "start_from_edge": true, "respawn": true }
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
    }, []) 

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title='About' />
            <div style={divStyle}>
                <canvas id="my-canvas"></canvas>
            </div>

            <article class="container px-4 py-24 mx-auto md:w-3/4 lg:w-2/4 h-screen"  itemid="#" itemscope itemtype="http://schema.org/BlogPosting">
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






