import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from "gatsby-image"


const ArticlesPage = ({data}) => {
    console.log(data);
    
    return(
        <div>asd</div>
    )
}

export default ArticlesPage;

export const ArticlesQuery = graphql `
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