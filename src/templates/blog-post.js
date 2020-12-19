import React from "react"
import kebabCase from "lodash.kebabcase"
import {  graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ConcatWords from "../utils/ConcatWords"
import formatDate from "../utils/formatDate"
import B from "../components/b"

const BlogPost = ({ data, pageContext }) => {


    const { markdownRemark } = data
    const { prev, next } = pageContext
    console.log(pageContext)
    console.log(markdownRemark)

    return ( <Layout >
        <Seo title = { markdownRemark.frontmatter.title }/>

        
  <article class="px-4 py-24 mx-auto" itemid="#" itemscope itemtype="http://schema.org/BlogPosting">
  
  <div class="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2 border-b">
     {  (markdownRemark.frontmatter.featuredimage != null && markdownRemark.frontmatter.featuredimage.src != null)  ? ( < Img className="object-cover w-full h-64 bg-center rounded-lg" fluid = { markdownRemark.frontmatter.featuredimage.src.childImageSharp.fluid } alt = { markdownRemark.frontmatter.featuredimage.alt }/> ) : " "   }
    
    <p class="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">Development</p>
    <h1 class="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl" itemprop="headline" title="Rise of Tailwind - A Utility First CSS Framework">
      { markdownRemark.frontmatter.title }
    </h1>
    <div class="flex mb-6 space-x-2">
      {
            markdownRemark.frontmatter.category.map((cat, index, arr) => ( 
            <ConcatWords  arrCount = { arr.length } index = { index } key = { cat } >
                <Link className="text-gray-900 px-2 rounded-lg bg-gray-100 badge hover:bg-gray-200" to = { `/category/${kebabCase(cat)}` } > { cat } </Link> 
            </ConcatWords>
            ))
        } 
    </div>
    
    <Link className="flex items-center text-gray-700" to = { `/blog/author/${kebabCase(markdownRemark.frontmatter.author)}` }>
      <B/>
      <div class="ml-2">
        <p class="text-sm font-semibold text-gray-800">{ markdownRemark.frontmatter.author  }</p>
        <p class="text-sm text-gray-500">{ formatDate(markdownRemark.frontmatter.date) }</p>
      </div>
    </Link>
  </div>

  <div class="w-full mx-auto prose md:w-3/4 lg:w-1/2 articleContent" dangerouslySetInnerHTML = { { __html: markdownRemark.html } }></div>
</article>

  <section className="py-20 border-t-2 w-full mx-auto prose md:w-3/4 lg:w-1/2">
    <div class="grid grid-cols-1 gap-24 md:grid-cols-2">
      
      <div>
        <h1>{ prev &&<Link to = { prev.fields.slug } className="mb-6 text-md font-semibold text-black md:text-xl">{ prev.frontmatter != null && prev.frontmatter.title }</Link> }</h1>
        <p class="mt-2 text-gray-600 text-sm text-gray-50"> { prev != null && prev.frontmatter != null &&  prev.frontmatter.excerpt }</p>
      </div>
      
      <div>
        <h1>{ next && ( <Link to = { next.fields.slug }  className="mb-6 text-md font-semibold text-black md:text-xl"> <div >  { next.frontmatter != null && next.frontmatter.title }  </div>  </Link>  ) }</h1>
        <p class="mt-2 text-gray-600 text-sm text-gray-50">{ next != null && next.frontmatter != null && next.frontmatter.excerpt } </p>
      </div>

    </div>
       
</section>
        </Layout>
    )
}

export default BlogPost

export const query = graphql `
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        category
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
`
