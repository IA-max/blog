import React from "react"
import kebabCase from "lodash.kebabcase"
import { graphql, Link, useStaticQuery } from "gatsby"
import ConcatWords from "../utils/ConcatWords"
import formatDate from "../utils/formatDate"

const BlogFeatured = () => {
  const { markdownRemark } = useStaticQuery(query)

  return (
    <div>
      <div md={6}>
        <div>
          <Link to={markdownRemark.fields.slug}>
         
          </Link>
        </div>
      </div>

      <div md={6}>
        <div>
          <div>
            <div>
              By{" "}
              <Link
                to={`/blog/author/${kebabCase(
                  markdownRemark.frontmatter.author
                )}`}
              >
                {markdownRemark.frontmatter.author}
              </Link>
            </div>

            <Link to={markdownRemark.fields.slug}>
              <div>{markdownRemark.frontmatter.title}</div>
            </Link>

            <div>
              {formatDate(markdownRemark.frontmatter.date)}
            </div>

            <div>
              {markdownRemark.frontmatter.category.map((cat, index, arr) => (
                <ConcatWords arrCount={arr.length} index={index} key={cat}>
                  <Link to={`/blog/category/${kebabCase(cat)}`}>{cat}</Link>
                </ConcatWords>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogFeatured

const query = graphql`
  query BlogFeatured {
    markdownRemark(frontmatter: { featured: { eq: true } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        category
      }
    }
  }
`
