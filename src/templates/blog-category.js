import React from "react"
import kebabCase from "lodash.kebabcase"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pagination from "../components/pagination"
import renderList from "../components/renderList"

const BlogCategory = ({ data, pageContext }) => {
    const { allMarkdownRemark } = data
    const { currentPage, numPages, category, allCategories } = pageContext

    return (<Layout >
        <Seo title = { category }/>
        <section className="text-gray-700 body-font mx-auto md:w-3/4 lg:w-2/4">
        <div className="container flex flex-wrap px-5 py-10 mx-auto items-center">
          <div className="flex flex-col">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Categories:</h1>
            <nav className="flex flex-wrap list-none -mb-1">
              { allCategories.map((cat, index) => ( 
                <li className="lg:w-1/6 mb-1 w-1/2" key={index}>
                  <Link className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-indigo-600 bg-indigo-200 uppercase last:mr-0 mr-1 hover:no-underline"to = { `/category/${kebabCase(cat)}` } > { cat } </Link> 
              </li>
              ))  }
            </nav>
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font overflow-hidden">
          <div className="container px-5 py-10 mx-auto mx-auto md:w-3/4 lg:w-2/4">
              <div className="-my-8">
                  { allMarkdownRemark.edges.map(renderList) }
          </div>
        </div>
      </section>
      <div className="container w-full px-4 py-24 mx-auto md:w-3/4 lg:w-2/4">
      <Pagination currentPage = { currentPage } numPages = { numPages } contextPage = { `category/${kebabCase(category)}` }/>
      </div>
      </Layout>
    )
}

export default BlogCategory
export const query = graphql `
  query blogPostsListByCategory($category: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          html
          excerpt(pruneLength: 70)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM-DD YYYY")
            author
            category
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