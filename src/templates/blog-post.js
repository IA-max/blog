import React, {useEffect} from 'react'
import {MDXRenderer} from "gatsby-plugin-mdx"
import {MDXProvider} from "@mdx-js/react"
import Gist from 'react-gist'
import kebabCase from "lodash.kebabcase"
import {graphql, Link} from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import formatDate from "../utils/formatDate"
import Comment from "../components/comment"
import Slugger from 'github-slugger'


const BlogPost = ({data, pageContext}) => {
    const slugger = new Slugger()
    const shortcodes = {Link, Gist}
    const {mdx} = data
    const commentBox = React.createRef()
    const {prev, next} = pageContext

    const arr = mdx.headings.map((ind,ite)=>{
        return ind.depth
    });
    const newArray = [...new Set(arr)];


    let allHeadings,
        level = {
            0: 'text-xl',
            1: 'text-lg pl-4',
            2: 'text-base pl-8',
            3: 'text-sm pl-16',
            4: 'text-xs pl-32',
            5: 'text-xs pl-64',
        };
    if (mdx.headings.length) {
        allHeadings = mdx.headings.map((h, i) => {
            return (<li key={i}><Link to={'#' + slugger.slug(h.value)}
                                             className={`${level[newArray.indexOf(h.depth)]} font-normal `}><small>{h.value}</small></Link></li>)
        })
    }

    // console.log(mdx.headings)

    useEffect(() => {
        const scriptEl = document.createElement('script')
        scriptEl.async = true
        scriptEl.src = 'https://utteranc.es/client.js'
        scriptEl.setAttribute('repo', 'IA-max/blog')
        scriptEl.setAttribute('issue-term', 'title')
        scriptEl.setAttribute('id', 'utterances')
        scriptEl.setAttribute('theme', 'github-light')
        scriptEl.setAttribute('crossorigin', 'anonymous')
        if (commentBox && commentBox.current) {
            commentBox.current.appendChild(scriptEl)
        } else {
            console.log(`Error adding utterances comments on: ${commentBox}`)
        }
    }, [commentBox])

    return (<Layout>
            <Seo title={mdx.frontmatter.title}/>
            <article className="px-4 py-6 mx-auto">
                <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2 border-b article-meta-data">
                    {(mdx.frontmatter.featuredimage != null && mdx.frontmatter.featuredimage.src != null) ? (
                        <Img classNameName="object-cover w-full h-64 bg-center rounded-lg"
                              fluid={mdx.frontmatter.featuredimage.src.childImageSharp.fluid}
                              alt={mdx.frontmatter.featuredimage.alt}/>) : " "}
                    {/*<p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">*/}
                    {/*    {*/}
                    {/*        mdx.frontmatter.category.map((cat, index, arr) => (*/}
                    {/*            <ConcatWords arrCount={arr.length} index={index} key={cat}>*/}
                    {/*                <Link*/}
                    {/*                    className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-white bg-purple-700 uppercase last:mr-0 mr-1 hover:no-underline hover:text-white hover:bg-purple-400"*/}
                    {/*                    to={`/category/${kebabCase(cat)}`}>{cat} </Link>*/}
                    {/*            </ConcatWords>*/}
                    {/*        ))*/}
                    {/*    }*/}
                    {/*</p>*/}
                    <h1 className="mt-6 mb-2 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                        <Link to={mdx.fields.slug}>  {mdx.frontmatter.title} </Link>
                    </h1>
                    <div className="flex mb-2 space-x-2 text-gray-500">
                        {formatDate(mdx.frontmatter.date)} / {mdx.fields.readingTime.text}
                        {/*{*/}
                        {/*    mdx.frontmatter.tag.map((tag, index, arr) => (*/}
                        {/*        <ConcatWords arrCount={arr.length} index={index} key={index}>*/}
                        {/*            <Link*/}
                        {/*                className="ml-2 text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-white bg-gray-500 uppercase last:mr-0 mr-1 hover:no-underline hover:text-white hover:bg-gray-400"*/}
                        {/*                to={`/tag/${kebabCase(tag)}`}># {tag} </Link>*/}
                        {/*        </ConcatWords>*/}
                        {/*    ))*/}
                        {/*}*/}
                    </div>

                    <Link className="flex items-center text-gray-700"
                          to={`/blog/author/${kebabCase(mdx.frontmatter.author)}`}>
                        {/*<B/>*/}
                        {/*<div className="ml-2">*/}
                        {/*    <p className="text-sm font-semibold text-gray-800">{mdx.frontmatter.author}</p>*/}
                        {/*    <p className="text-sm text-gray-500">{formatDate(mdx.frontmatter.date)}</p>*/}
                        {/*</div>*/}
                    </Link>
                    {/*<p className="text-sm text-gray-500">{formatDate(mdx.frontmatter.date)} - {mdx.fields.readingTime.text}</p>*/}
                </div>
                <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2 articleContent flex">
                    <div className="sm:w-full lg:w-4/5">
                        <MDXProvider components={shortcodes}><MDXRenderer>{mdx.body}</MDXRenderer></MDXProvider>
                    </div>
                    <aside className="h-1/2 sticky top-0 ml-4 sm:hidden lg:block lg:w-1/5">
                        <h4 className='pl-4'>目录</h4>
                        <ul className='pl-4'>{allHeadings}</ul>
                        <hr/>

                    </aside>

                </div>
            </article>
            <div className="border-t-2 py-36 w-full mx-auto md:w-3/6 lg:w-1/2">
                <Comment commentBox={commentBox}/>
            </div>
            {/*<RecommandPost allpost={pageContext.allPost} category={mdx.frontmatter.category}/>*/}
            <section className="w-full mx-auto py-24 prose md:w-3/4 lg:w-1/2">
                <div className="grid grid-cols-1 gap-24 md:grid-cols-2">
                    <div>
                        <h1>{prev && <Link to={prev.fields.slug}
                                           className="mb-6 text-md font-semibold text-black md:text-xl">{prev.frontmatter != null && prev.frontmatter.title}</Link>}</h1>
                        <p className="mt-2 text-gray-600 text-sm text-gray-50"> {prev != null && prev.frontmatter != null && prev.frontmatter.excerpt}</p>
                    </div>
                    <div>
                        <h1>{next && (
                            <Link to={next.fields.slug} className="mb-6 text-md font-semibold text-black md:text-xl">
                                <div>  {next.frontmatter != null && next.frontmatter.title}  </div>
                            </Link>)}</h1>
                        <p className="mt-2 text-gray-600 text-sm text-gray-50">{next != null && next.frontmatter != null && next.frontmatter.excerpt} </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default BlogPost

export const query = graphql`
    query BlogPostBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            headings {
                depth
                value
            }
            body
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                author
                category
                tag
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
            fields {
                readingTime {
                    text
                }
                slug
            }
        }
    }
`
