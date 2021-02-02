import React, {useEffect} from 'react'
import {MDXRenderer} from "gatsby-plugin-mdx"
import {MDXProvider} from "@mdx-js/react"
import Gist from 'react-gist'
// import kebabCase from "lodash.kebabcase"
import {graphql, Link} from "gatsby"
import Img from "gatsby-image"
import Layout from "./layout"
import Seo from "../components/seo"
import { getDate } from "../utils/utils" 
import Comment from "../components/comment"
import Slugger from 'github-slugger'
import Collapse from '../components/collapse'
import Tree from '../data/resources'

const BlogPost = ({data, pageContext}) => {
    const slugger = new Slugger()
    const shortcodes = {Link, Gist, Collapse, Tree}
    const {mdx} = data
    const commentBox = React.createRef()
    const {prev, next} = pageContext

    const arr = mdx.headings.map((ind,ite)=>{
        return ind.depth
    });
    const nArray = (arr) => {
        const n = [...new Set(arr)];
        return n.sort((a,b)=>{
            if(a < b){
                return -1;
            }else if(b < a){
                return 1;
            }else {
                return 0;
            }
        })
    };
    const newArray = nArray(arr);
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

    return (<Layout isPost={true}>
            <Seo title={mdx.frontmatter.title}/>
            
            <article className="px-4 py-6 mx-auto">
                <div className="w-full mx-auto text-left w-full article-meta-data max-w-4xl mb-4">
                    <div className="md:mb-4 lg:mb-20">
                        {(mdx.frontmatter.cover != null) ? (
                            <Img classNameName="object-cover w-full h-64 bg-center rounded-lg"
                                 fluid={mdx.frontmatter.cover.childImageSharp.fluid}
                                 alt={"封面"}/>) : " "}

                        <h1 className="mt-6 mb-2 text-2xl font-bold leading-tight text-gray-900 md:text-5xl pb-4 text-center">
                            <Link to={mdx.fields.slug}>  {mdx.frontmatter.title} </Link>
                        </h1>

                        <div className="text-gray-600 body-font text-center">
                            <span>Post on { getDate(mdx.frontmatter.date) }</span>
                            <span className="separator">•</span>
                            <span>{mdx.fields.readingTime.text}</span>
                        </div>

                        
                        {/* <div className="text-gray-600 body-font">
                            <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                                <nav className="flex flex-wrap items-center text-base justify-center">
                                    <span className="text-gray-400 hover:text-gray-900">Post on { getDate(mdx.frontmatter.date) }</span>
                                </nav>
                                <div className="flex title-font items-center text-gray-400 mb-4 md:mb-0 md:ml-auto">
                                    <span>{mdx.fields.readingTime.text}</span>
                                </div>
                            </div>
                        </div> */}
                 
                        {/* <Link className="flex items-center text-gray-700"
                              to={`/blog/author/${kebabCase(mdx.frontmatter.author)}`}>
                        </Link> */}
                    </div>
                </div>

                <div className="w-full mx-auto prose articleContent  w-full max-w-4xl mx-auto">
                    <div className="lg:flex">
                        <div className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
                            <div className="w-full flex">
                                <main className="min-w-0 flex-auto">
                                    <MDXProvider components={shortcodes}><MDXRenderer>{mdx.body}</MDXRenderer></MDXProvider>
                                </main>
                                <aside className="hidden xl:text-sm xl:block flex-none w-64 p-8 overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
                                {/* <aside className="hidden xl:text-sm flex-none w-64 p-8 overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch"> */}
                                    <h4 className='leading-4 toc-title'>目录</h4>
                                    <ul>{allHeadings}</ul>
                                </aside>
                            </div>                            
                        </div>
                    </div>                   
                </div>
                <div className="text-center py-4"># # #</div>
            </article>
            {/* <div className="py-6 w-full mx-auto md:w-3/4 max-w-4xl">
                <Comment commentBox={commentBox}/>
            </div> */}
            <section className="w-full mx-auto py-24 prose md:w-3/4 max-w-4xl">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 more-post">
                    <div className="py-8 px-4 bg-blue-50 rounded">
                        <h1>{prev && <Link to={prev.fields.slug}
                                           className="mb-6 text-md font-semibold text-black md:text-xl">{prev.frontmatter != null && prev.frontmatter.title}</Link>}</h1>
                        <p className="mt-2 text-gray-600 text-sm text-gray-50"> {prev != null && prev.frontmatter != null && prev.frontmatter.excerpt}</p>
                    </div>
                    <div className="py-8 px-4 bg-blue-50 rounded">
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
                category
                tag
                cover {
                    childImageSharp {
                        fluid(maxWidth: 1024) {
                            ...GatsbyImageSharpFluid
                        }
                    }                    
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
