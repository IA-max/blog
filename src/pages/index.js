import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import Img from "gatsby-image"
import TYPE from '../components/type';
import formatDate from "../utils/formatDate"
const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title || `Title`;
    const posts = data.allMarkdownRemark.nodes;

    if (posts.length === 0) {
        return (
            <Layout location={location} title={siteTitle}>
                <SEO title='All posts' />
                <p>No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).</p>
            </Layout>
        );
    }
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title='All posts' />
            <section className="container w-full px-4 py-24 mx-auto md:w-3/4 lg:w-2/4">
                <div className="mb-12 text-left md:text-center">
                    <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900">
                           <TYPE />
                    </h2>
                    <p className="text-lg text-gray-500">Design-driven developer focused on crafting products in ReactJS. I write about new technologies, how I've solved some problems, and bring out my side-projects..</p>
                </div>
                <div className = "flex flex-col space-y-12 divide-y divide-gray-200" >
                 { posts.map((post, index) => {
                        const title = post.frontmatter.title || post.fields.slug;
                        const featuredimage = post.frontmatter.featuredimage
                        return (
                                <div key={index}>                                
                                <p className = "pt-12 mb-3 font-normal text-gray-500 font-sans text-xs"> { formatDate(post.frontmatter.date) } </p>
                                <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
                                    <Link to={ post.fields.slug } className="text-gray-900 font-medium hover:text-purple-700 hover:no-underline">{ post.frontmatter.title }</Link>
                                </h2>
                                <p className="mb-4 text-base font-normal text-gray-600">
                                    { post.frontmatter.description || post.frontmatter.excerpt }
                                </p>
                                <Link to={ post.fields.slug } className="btn btn-light btn-sm bg-gray-100 px-2 py-2 rounded hover:no-underline text-xs">Continue Reading</Link>
                                </div>
                        );
                    })}
                </div>

                {/* <div className="flex flex-col items-center justify-center pt-12 mt-12 space-x-0 space-y-2 border-t border-gray-200 md:space-x-2 md:space-y-0 md:flex-row">
                    <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">Previous Page</a>
                    <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">Next Page</a>
                </div> */}
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
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                fields {
                    slug
                }
                frontmatter {
                    excerpt
                    date(formatString: "MM-DD YYYY")
                    title
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