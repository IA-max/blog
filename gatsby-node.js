const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const kebabCase = require(`lodash.kebabcase`)

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const   postLayout = path.resolve(`./src/templates/blog-post.js`);
            // listLayout = path.resolve(`./src/templates/blog-list.js`),
            // categoryLayout = path.resolve(`./src/templates/blog-category.js`),
            // tagLayout = path.resolve(`./src/templates/blog-tag.js`)
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
    // const postsPerPage = 6
    // const postsWithoutFeatured = posts.filter((n) => {
    //     return n.frontmatter.featured == null || !n.frontmatter.featured
    // })
    // const numPages = Math.ceil(postsWithoutFeatured.length / postsPerPage)
    const categories = [],
             authors = [],
             tags = [];
    // ----------------------------------------------------------------------------------- Creating blog posts
    posts.forEach((post, index, arr) => {
        post.frontmatter.category.forEach(cat => categories.push(cat))
        post.frontmatter.tag.forEach(tag => tags.push(tag))
        authors.push(post.frontmatter.author)
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

    // ----------------------------------------------------------------------------------- Creating blog list with pagination
    // Array.from({ length: numPages }).forEach((_, i) => {
    //     createPage({
    //         path: i === 0 ? `/article` : `/article/page/${i + 1}`,
    //         component: listLayout,
    //         context: {
    //             limit: postsPerPage,
    //             skip: i * postsPerPage,
    //             currentPage: i + 1,
    //             numPages,
    //         },
    //     })
    // })

    // ----------------------------------------------------------------------------------- Creating category page
    // const countCategories = categories.reduce((prev, curr) => {
    //   prev[curr] = (prev[curr] || 0) + 1
    //   return prev
    // }, {})
    // const allCategories = Object.keys(countCategories)
    // allCategories.forEach((cat, i) => {
    //   const link = `/category/${kebabCase(cat)}`
    //   Array.from({
    //     length: Math.ceil(countCategories[cat] / postsPerPage),
    //   }).forEach((_, i) => {
    //     createPage({
    //       path: i === 0 ? link : `${link}/page/${i + 1}`,
    //       component: categoryLayout,
    //       context: {
    //         allCategories: allCategories,
    //         category: cat,
    //         limit: postsPerPage,
    //         skip: i * postsPerPage,
    //         currentPage: i + 1,
    //         numPages: Math.ceil(countCategories[cat] / postsPerPage),
    //       },
    //     })
    //   })
    // })

    // ----------------------------------------------------------------------------------- Creating tag page
    // const countTags = tags.reduce((prev, curr) => {
    //   prev[curr] = (prev[curr] || 0) + 1
    //   return prev
    // }, {})
    // const allTags = Object.keys(countTags)
    // allTags.forEach((tag, i) => {
    //   const link = `/tag/${kebabCase(tag)}`
    //   Array.from({
    //     length: Math.ceil(countTags[tag] / postsPerPage),
    //   }).forEach((_, i) => {
    //     createPage({
    //       path: i === 0 ? link : `${link}/page/${i + 1}`,
    //       component: tagLayout,
    //       context: {
    //         allTags: allTags,
    //         tag: tag,
    //         limit: postsPerPage,
    //         skip: i * postsPerPage,
    //         currentPage: i + 1,
    //         numPages: Math.ceil(countTags[tag] / postsPerPage),
    //       },
    //     })
    //   })
    // })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode })
        // const [month, day, year] = new Date(node.frontmatter.date)
        //     .toLocaleDateString('en-EN', {
        //         year: 'numeric',
        //         month: '2-digit',
        //         day: '2-digit',
        //     })
        //     .split('/')
        const slug = value.replace('/articles/', '').replace(/\/$/, '')
        // const url = `/${year}/${month}/${day}${slug}`

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
      title: String
      description: String
      excerpt: String
      date: Date @dateformat
      featured: Boolean!
      category: [String]!
      tag: [String]!
      image: String
    }

    type Fields {
      slug: String
    }
  `)
}