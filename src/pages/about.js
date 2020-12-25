import React from 'react';
import {graphql} from 'gatsby';
import ConfettiGenerator from "confetti-js";
import Layout from '../components/layout';
import SEO from '../components/seo';
import TYPE from '../components/type';

const About = ({data, location}) => {
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
        const confettiSettings = {
            target: 'my-canvas',
            "max": "83",
            "size": "1",
            "animate": true,
            "props": ["circle", "triangle", {"type": "svg", "src": "site/hat.svg", "size": 25, "weight": 0.2}],
            "colors": [
                [165, 104, 246],
                [230, 61, 135],
                [0, 199, 228],
                [253, 214, 126]
            ],
            "clock": "25",
            "rotate": true,
            "start_from_edge": true,
            "respawn": true
        }
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        return () => confetti.clear();
    }, [])

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title='About'/>
            <div style={divStyle}>
                <canvas id="my-canvas"></canvas>
            </div>
            <article class="container px-4 py-24 mx-auto md:w-3/4 lg:w-2/4 h-screen" itemid="#" itemscope
                     itemtype="http://schema.org/BlogPosting">
                <div class="w-full mx-auto mb-12 text-center">
                    <p class="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">Development</p>
                    <div className="mb-12 text-left md:text-center">
                        <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900">
                            <TYPE/>
                        </h2>
                    </div>
                </div>
                <div class="mx-auto prose articleContent">
                    <p>I'm a Design-driven developer.born in 1987 and grew up in TS. </p>
                    <p>I focused on crafting products in ReactJS, also write about new technologies on my blog
                        platforms🚀 .</p>
                    <p>Solved some problems, and bring out my side-projects.</p>
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