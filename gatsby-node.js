const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const kebabCase = require(`lodash.kebabcase`)

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const   postLayout = path.resolve(`./src/templates/blog-post.js`);
    const result = await graphql(
      `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
                title
                date
                excerpt
                category
                tag
                featured
            }
          }
        }
      }
    `
    )
    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            result.errors
        )
        return
    }
    const posts = result.data.allMdx.nodes
    const categories = [],
             tags = [];
    // ----------------------------------------------------------------------------------- Creating blog posts
    posts.forEach((post, index, arr) => {
        categories.push(post.frontmatter.category)
        post.frontmatter.tag.forEach(tag => tags.push(tag))
        const prev = arr[index - 1]
        const next = arr[index + 1]
        createPage({
            path: post.fields.slug,
            component: postLayout,
            context: {
                slug: post.fields.slug,
                prev: prev,
                next: next,
                allPost:posts
            },
        })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode })
        const slug = value.replace('/articles/', '').replace(/\/$/, '')
        createNodeField({
            name: `slug`,
            node,
            value: slug
        })
    }
}

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String!
      date: Date @dateformat
      featured: Boolean!
      category: String!
      tag: [String]
      excerpt: String
      
    }

    type Fields {
      slug: String
    }
  `)
}