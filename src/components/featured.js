import React from "react"
import kebabCase from "lodash.kebabcase"
import { graphql, Link, useStaticQuery } from "gatsby"
import ConcatWords from "../utils/ConcatWords"
import formatDate from "../utils/formatDate"

const BlogFeatured = () => {
  const { mdx } = useStaticQuery(query)

  return (
    <div>
      <div md={6}>
        <div>
          <Link to={mdx.fields.slug}>
         
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
                  mdx.frontmatter.author
                )}`}
              >
                {mdx.frontmatter.author}
              </Link>
            </div>

            <Link to={mdx.fields.slug}>
              <div>{mdx.frontmatter.title}</div>
            </Link>

            <div>
              {formatDate(mdx.frontmatter.date)}
            </div>

            <div>
              {mdx.frontmatter.category.map((cat, index, arr) => (
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
    mdx(frontmatter: { featured: { eq: true } }) {
      body
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
