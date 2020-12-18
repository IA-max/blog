import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from "gatsby-image"

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title || `Title`;
    const posts = data.allMarkdownRemark.nodes;
    const firstPost = posts[0];
    console.log(firstPost)
    const restPost = (Array.from(posts)).splice(1,posts.length);

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
            <div class = "container px-5 py-24 mx-auto" >
            
            <div class="md:flex">
            <div class="flex items-center justify-center  py-8 pr-6 md:h-128 w-full md:w-1/2">
                <div class="max-w-xxl">
                    <h2 class="text-2xl font-semibold text-gray-800 md:text-3xl">{ firstPost.frontmatter.title }<span class="text-indigo-600"></span></h2>
                    <p class="mt-2 text-sm text-gray-500 md:text-base">{ firstPost.frontmatter.excerpt }</p>
                    <div class="flex mt-6">
                         <Link to={ firstPost.fields.slug }  class="px-3 py-2 block bg-gray-900 text-white text-xs font-semibold rounded hover:bg-gray-800" itemProp='url'>
                            <span itemProp='headline'>查看</span>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div class="w-full h-64 md:w-1/2 md:h-auto">
 { (firstPost.frontmatter.featuredimage != null && firstPost.frontmatter.featuredimage.src != null) && (<Img fluid={ firstPost.frontmatter.featuredimage.src.childImageSharp.fluid } alt = { firstPost.frontmatter.featuredimage.alt } className="h-full w-full bg-cover"/>) }
            </div>
        </div>
        
            <div class="row justify-content-between"> 
                    <div class="col-md"> 
                    <h5 class="font-weight-bold spanborder"><span>All Articles</span></h5> 
                    {restPost.map(post => {
                        const title = post.frontmatter.title || post.fields.slug;
                        const featuredimage = post.frontmatter.featuredimage
                        console.log(post)

                        return (

                             <div className="flex flex-col my-4 space-y-3">
                                <Link to={ post.fields.slug }>
                                        <a className="text-2xl font-bold no-underline sm:text-4xl hover:underline">
                                        { post.frontmatter.title }
                                        </a>
                                    </Link>

                                    <div className="flex flex-col space-x-0 space-y-2 text-base font-normal sm:space-x-2 sm:space-y-0 sm:flex-row">
                                        <div className="flex flex-row space-x-2">
                                            <span>on</span>
                                            <span className="font-bold">{post.frontmatter.date}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="w-full text-lg font-medium leading-normal sm:text-2xl">
                                        { post.frontmatter.description || post.frontmatter.excerpt }
                                    </div>
                            </div>
                            // <div key={post.fields.slug} class="mb-3 d-flex justify-content-between"> 
                            // <div class="pr-3"  itemScope itemType='http://schema.org/Article'> 
                            //     <h2 class="mb-1 h4 font-weight-bold">
                            //     <Link to={post.fields.slug} className="text-dark" itemProp='url'>
                            //     <span itemProp='headline'>{title}</span>
                            //         </Link>
                            // </h2> 
                            // <p dangerouslySetInnerHTML={{ __html: post.frontmatter.description || post.excerpt }} itemProp='description' />
                            //     <div class="card-text text-muted small">
                            //     {/* Jake Bittle in SCIENCE  */}
                            //     </div> 
                            //     <small class="text-muted">{post.frontmatter.date} <br/>5 min read</small>  
                            // </div> 
                            // { (featuredimage != null && featuredimage.src != null) ? ( < Img fluid = { featuredimage.src.childImageSharp.fluid } alt = { featuredimage.alt } /> ) : " "   }
                            // </div> 

                        );
                    })}
                    </div> 
                </div> 
                </div>
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