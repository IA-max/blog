const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const kebabCase = require(`lodash.kebabcase`)

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const blogPost = path.resolve(`./src/templates/blog-post.js`)
    const blogListLayout = path.resolve(`./src/templates/blog-list.js`)
    const blogCategoryLayout = path.resolve(`./src/templates/blog-category.js`)
    const result = await graphql(
        `
      {
        allMarkdownRemark(
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

    // const posts = result.data.allMarkdownRemark.nodes

    // if (posts.length > 0) {
    //     posts.forEach((post, index) => {
    //         const previousPostId = index === 0 ? null : posts[index - 1].id
    //         const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

    //         createPage({
    //             path: post.fields.slug,
    //             component: blogPost,
    //             context: {
    //               slug: post.fields.slug,
    //                 id: post.id,
    //                 previousPostId,
    //                 nextPostId,
    //             },
    //         })
    //     })
    // }
    const posts = result.data.allMarkdownRemark.nodes
    const postsPerPage = 3
    const postsWithoutFeatured = posts.filter((n) => {
        return n.frontmatter.featured == null || !n.frontmatter.featured
    })
    const numPages = Math.ceil(postsWithoutFeatured.length / postsPerPage)
    const categories = []
    const authors = []

    // ----------------------------------------------------------------------------------- Creating blog list with pagination
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
            component: blogListLayout,
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                currentPage: i + 1,
                numPages,
            },
        })
    })




    // ----------------------------------------------------------------------------------- Creating blog posts
    posts.forEach((post, index, arr) => {
        post.frontmatter.category.forEach(cat => categories.push(cat))
        authors.push(post.frontmatter.author)

        const prev = arr[index - 1]
        const next = arr[index + 1]

        createPage({
            path: post.fields.slug,
            component: blogPost,
            context: {
                slug: post.fields.slug,
                prev: prev,
                next: next,
            },
        })
    })





     // ----------------------------------------------------------------------------------- Creating category page
    const countCategories = categories.reduce((prev, curr) => {
      prev[curr] = (prev[curr] || 0) + 1
      return prev
    }, {})
    const allCategories = Object.keys(countCategories)

    allCategories.forEach((cat, i) => {
      const link = `/category/${kebabCase(cat)}`

      Array.from({
        length: Math.ceil(countCategories[cat] / postsPerPage),
      }).forEach((_, i) => {
        createPage({
          path: i === 0 ? link : `${link}/page/${i + 1}`,
          component: blogCategoryLayout,
          context: {
            allCategories: allCategories,
            category: cat,
            limit: postsPerPage,
            skip: i * postsPerPage,
            currentPage: i + 1,
            numPages: Math.ceil(countCategories[cat] / postsPerPage),
          },
        })
      })
    })




}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        const [month, day, year] = new Date(node.frontmatter.date)
            .toLocaleDateString('en-EN', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            })
            .split('/')
        const slug = value.replace('/blog/', '').replace(/\/$/, '')
        const url = `/${year}/${month}/${day}${slug}`

        createNodeField({
            name: `slug`,
            node,
            value: url
        })
    }
}

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions

    // Explicitly define the siteMetadata {} object
    // This way those will always be defined even if removed from gatsby-config.js

    // Also explicitly define the Markdown frontmatter
    // This way the "MarkdownRemark" queries will return `null` even when no
    // blog posts are stored inside "content/blog" instead of returning an error
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

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      excerpt: String
      date: Date @dateformat
      category: [String]!
      image: String
    }

    type Fields {
      slug: String
    }
  `)
}