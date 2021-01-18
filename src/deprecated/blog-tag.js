import React from "react"
import kebabCase from "lodash.kebabcase"
import {graphql, Link} from "gatsby"
import Layout from "../templates/layout"
import Seo from "../components/seo"
import Pagination from "../components/pagination"
import renderTag from "../components/renderTag"

const BlogTag = ({data, pageContext}) => {
    const {allMdx} = data
    const {currentPage, numPages, tag, allTags} = pageContext
    const tags = allTags.sort(function (a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    })

    return (<Layout>
            <Seo title={tag}/>
            <section className="text-gray-700 body-font mx-auto md:w-3/4 lg:w-2/4">
                <div className="container flex flex-wrap px-5 py-10 mx-auto items-center">
                    <div className="flex flex-col">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Tags:</h1>
                        <nav className="flex flex-wrap list-none -mb-1">
                            {
                                tags.map((tag, index) => (
                                    <li className="lg:w-1/6 mb-1 w-1/2" key={index}>
                                        <Link
                                            className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-indigo-600 bg-indigo-200 uppercase last:mr-0 hover:no-underline `}
                                            to={`/tag/${kebabCase(tag)}`}># {tag} </Link>
                                    </li>
                                ))}
                        </nav>
                    </div>
                </div>
            </section>
            <section className="text-gray-700 body-font overflow-hidden">
                <div className="container px-5 py-10 mx-auto mx-auto md:w-3/4 lg:w-2/4">
                    <div className="-my-8">
                        {allMdx.edges.map(renderTag)}
                    </div>
                </div>
            </section>
            <div className="container w-full px-4 py-24 mx-auto md:w-3/4 lg:w-2/4">
                <Pagination currentPage={currentPage} numPages={numPages} contextPage={`tag/${kebabCase(tag)}`}/>
            </div>
        </Layout>
    )
}

export default BlogTag

export const query = graphql`
    query blogPostsListByTag($tag: String, $skip: Int!, $limit: Int!) {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tag: { in: [$tag] } } }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    excerpt(pruneLength: 70)
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date(formatString: "MM-DD YYYY")
                        author
                        tag
                        image
                        featuredimage {
                            src {
                                childImageSharp {
                                    fluid(maxWidth: 1024) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            alt
                        }
                    }
                }
            }
        }
    }
`