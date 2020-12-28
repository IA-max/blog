import React from "react"
import {Link, graphql} from 'gatsby'
import formatDate from "../utils/formatDate"
import Layout from "../components/layout"
import Pagination from "../components/pagination"

const BlogPostList = ({data, pageContext}) => {
    const {currentPage, numPages} = pageContext
    const posts = data.allMdx.edges;

    return (<Layout>
        <section className="container w-full px-4 py-24 mx-auto md:w-3/4 lg:w-2/4">
            <div className="flex flex-col space-y-12 divide-y divide-gray-200">
                {posts.map((post, index) => {
                    return (
                        <div key={index}>
                            <p className="pt-12 mb-1 font-normal text-gray-500 font-sans text-xs">
                                <small>{formatDate(post.node.frontmatter.date)}</small></p>
                            <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
                                <Link to={post.node.fields.slug}
                                      className="text-2xl text-gray-900 font-medium hover:text-purple-700 hover:no-underline">{post.node.frontmatter.title}</Link>
                            </h2>
                            <p className="mb-4 text-sm font-normal text-gray-600">
                                {post.node.frontmatter.excerpt}
                            </p>
                            <Link to={post.node.fields.slug}
                                  className="btn btn-light btn-sm bg-gray-100 px-2 py-2 rounded hover:no-underline text-xs hover:bg-gray-400 hover:text-white">Continue
                                Reading</Link>
                        </div>
                    );
                })}
            </div>
        </section>
        <Pagination currentPage={currentPage} numPages={numPages} contextPage={`article`}/>
    </Layout>)
}

export default BlogPostList
export const query = graphql`
    query blogPostsList($skip: Int!, $limit: Int!) {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { featured: { eq: false } } }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        excerpt
                        title
                        date(formatString: "MM-DD YYYY")
                        author
                        category
                    }
                }
            }
        }
    }
`
