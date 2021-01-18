import React from 'react';
import {useStaticQuery, graphql, Link} from 'gatsby';
import Layout from '../templates/layout';
import SEO from '../components/seo';
import Image from "gatsby-image"

const NotFoundPage = () => {
    const data = useStaticQuery(graphql`
        query AvatarQuery {
            avatar: file(absolutePath: { regex: "/404.png/" }) {
                childImageSharp {
                    fixed(quality: 95) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            site {
                siteMetadata {
                    author {
                        name
                        summary
                    }
                    social {
                        twitter
                    }
                }
            }
        }
    `)
    const siteTitle = data.site.siteMetadata.title;
    const avatar = data.avatar.childImageSharp.fixed


    return (
        <Layout title={siteTitle}>
            <SEO title='404: Not Found'/>
            <div className="gradient min-h-screen flex items-center">
                <div className="container mx-auto p-4 flex flex-wrap items-center">
                    <div className="w-full md:w-5/12 text-center p-4">
                        {avatar && (<Image fixed={avatar} className="avatar"/>)}
                    </div>
                    <div className="w-full md:w-7/12 text-center md:text-left p-4">
                        {/*<div className="text-6xl font-medium">404</div>*/}
                        {/*<div className="text-xl md:text-3xl font-medium mb-4">*/}
                        {/*    Oops. This page has gone missing.*/}
                        {/*</div>*/}
                        <div className="text-lg mb-8">
                            You may have mistyped the address or the page may have moved.
                        </div>
                        <Link to="/" className="border border-black rounded p-2">Go Home</Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;