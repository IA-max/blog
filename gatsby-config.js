module.exports = {
    siteMetadata: {
        title: `Max's log`,
        author: {
            name: `Max`,
            summary: `who lives and works in GuangDong building useful things.`,
        },
        description: `A blog share what tech can do.`,
        siteUrl: `https://imaxyoung.com`,
        social: {
            twitter: ``,
        },
    },
    plugins: [
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                // your google analytics tracking id
                trackingId: `UA-186069955-1`,
                // Puts tracking script in the head instead of the body
                head: false,
                // enable ip anonymization
                anonymize: true,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/articles`,
                name: `articles`,
            },
        },
        //  {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         path: `${__dirname}/content/pages`,
        //         name: `pages`,
        //     },
        // },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                remarkPlugins: [require('remark-slug')],
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-code-titles',
                        options: {
                            className: 'gatsby-remark-code-title',
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                            languageExtensions: [
                                {
                                    language: 'superscript',
                                    extend: 'javascript',
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords: /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                            prompt: {
                                user: 'root',
                                host: 'localhost',
                                global: false,
                            },
                            escapeEntities: {},
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 630,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,

                ],
            },
        },
        'gatsby-remark-reading-time',
        // `gatsby-plugin-feed-mdx`,
        {
            resolve: `gatsby-plugin-feed-mdx`,
            options: {
              query: `
                {
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                      site_url: siteUrl
                    }
                  }
                }
              `,
              feeds: [
                {
                  serialize: ({ query: { site, allMdx } }) => {
                      // console.log('--------------------------------------------');
                      // console.log(allMdx);
                      // console.log('--------------------------------------------');
                    return allMdx.edges.map(edge => {
                      return Object.assign({}, edge.node.frontmatter, {
                        description: edge.node.excerpt,
                        date: edge.node.frontmatter.date,
                        url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                        guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                        custom_elements: [{ "content:encoded": edge.node.html }]
                      });
                    });
                  },
                  query: `
                    {
                      allMdx(
                        sort: { order: DESC, fields: [frontmatter___date] },
                      ) {
                        edges {
                          node {
                            excerpt
                            html
                            fields { slug }
                            frontmatter {
                              title
                              date
                            }
                          }
                        }
                      }
                    }
                  `,
                  output: "/rss.xml",
                  title: "Your Site's RSS Feed",
                  // optional configuration to insert feed reference in pages:
                  // if `string` is used, it will be used to create RegExp and then test if pathname of
                  // current page satisfied this regular expression;
                  // if not provided or `undefined`, all pages will have feed reference inserted
                //    match: "^/blog/"
                }
              ]
            }
          },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gatsby Starter Blog`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `content/assets/gatsby-icon.png`,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [
                    require("tailwindcss"),
                    require("./tailwind.config.js"),
                ],
            },
        },
    ],
};