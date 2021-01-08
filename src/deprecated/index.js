import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import formatDate from "../utils/formatDate"

const BlogIndex = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title || `Title`;
    const posts = data.allMdx.nodes;

    const PostOfMv = posts.filter((p) => {
        return (p != null && p.frontmatter != null) && p.frontmatter.tag.includes("mv*")
    });

    const PostOfJs = posts.filter((p) => {
        return (p != null && p.frontmatter != null) && p.frontmatter.tag.includes("js")
    });

    const PostOfCss = posts.filter((p) => {
        return (p != null && p.frontmatter != null) && p.frontmatter.tag.includes("css")
    });


    if (posts.length === 0) {
        return (
            <Layout location={location} title={siteTitle}>
                <SEO title='All posts'/>
                <p>No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the
                    "gatsby-source-filesystem" plugin in gatsby-config.js).</p>
            </Layout>
        );
    }
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title='All posts'/>
            <section className="container  pt-12 pb-12 mx-auto md:w-3/4 lg:w-2/4">
                <h1 className="text-4xl">MV框架</h1>
                <div className="h-1 bg-gray-200 mb-12 mt-2 rounded overflow-hidden mx-6 md:mx-0">
                    <div className="w-24 h-full bg-indigo-500"></div>
                </div>
                {PostOfMv.map((post, index) => {
                    return (
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-2" key={index}>
                            <h1 className="mb-2 text-base text-gray-900 md:text-xl px-6 md:px-0"><Link
                                to={post.fields.slug}
                                className="text-gray-900 font-semibold hover:text-purple-700 hover:no-underline">{post.frontmatter.title}</Link>
                            </h1>
                            <h1 className="mb-2 text-xl font-light md:text-base text-right hidden md:block text-gray-400">{formatDate(post.frontmatter.date)}</h1>
                        </div>
                    );
                })}
            </section>

            <section className="container  pt-12 pb-12 mx-auto md:w-3/4 lg:w-2/4">
                <h1 className="text-4xl">JavaScript</h1>
                <div className="h-1 bg-gray-200 mb-12 mt-2 rounded overflow-hidden mx-6 md:mx-0">
                    <div className="w-24 h-full bg-indigo-500"></div>
                </div>
                {PostOfJs.map((post, index) => {
                    return (
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-2" key={index}>
                            <h1 className="mb-2 text-base text-gray-900 md:text-xl px-6 md:px-0"><Link
                                to={post.fields.slug}
                                className="text-gray-900 font-semibold hover:text-purple-700 hover:no-underline">{post.frontmatter.title}</Link>
                            </h1>
                            <h1 className="mb-2 text-xl font-light md:text-base text-right hidden md:block text-gray-400">{formatDate(post.frontmatter.date)}</h1>
                        </div>
                    );
                })}
            </section>

            <section className="container  pt-12 pb-12 mx-auto md:w-3/4 lg:w-2/4">
                <h1 className="text-4xl">CSS</h1>
                <div className="h-1 bg-gray-200 mb-12 mt-2 rounded overflow-hidden mx-6 md:mx-0">
                    <div className="w-24 h-full bg-indigo-500"></div>
                </div>
                {PostOfCss.map((post, index) => {
                    return (
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-2" key={index}>
                            <h1 className="mb-2 text-base text-gray-900 md:text-xl px-6 md:px-0"><Link
                                to={post.fields.slug}
                                className="text-gray-900 font-semibold hover:text-purple-700 hover:no-underline">{post.frontmatter.title}</Link>
                            </h1>
                            <h1 className="mb-2 text-xl font-light md:text-base text-right hidden md:block text-gray-400">{formatDate(post.frontmatter.date)}</h1>
                        </div>
                    );
                })}
            </section>
        </Layout>
    );
};

export default BlogIndex;
export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                fields {
                    slug
                }
                frontmatter {
                    excerpt
                    date(formatString: "MM-DD YYYY")
                    title
                    tag
                    category
                    description
                    featuredimage {
                        src {
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid
                                }
                                fixed(width: 200, height: 100) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                        alt
                    }
                }
            }
        }
    }
`;