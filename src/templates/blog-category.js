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
        <section class="text-gray-700 body-font">
        <div class="container flex flex-wrap px-5 py-10 mx-auto items-center">
          <div class="flex flex-col">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Categories:</h1>
            <nav class="flex flex-wrap list-none -mb-1">
              { allCategories.map((cat) => ( 
                <li class="lg:w-1/3 mb-1 w-1/2">
                  <Link to = { `/category/${kebabCase(cat)}` } > { cat } </Link> 
              </li>
              ))  }
            </nav>
          </div>
        </div>
      </section>
      <section class="text-gray-700 body-font overflow-hidden">
          <div class="container px-5 py-10 mx-auto">
              <div class="-my-8">
                  { allMarkdownRemark.edges.map(renderList) }
          </div>
        </div>
      </section>
      <Pagination currentPage = { currentPage } numPages = { numPages } contextPage = { `category/${kebabCase(category)}` }/>
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