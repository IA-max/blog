import React from "react"
import kebabCase from "lodash.kebabcase"
import { Link } from "gatsby"
import Img from "gatsby-image"
import ConcatWords from "../utils/ConcatWords"
import formatDate from "../utils/formatDate"

const renderList = ({ node }) => {
    const featuredimage = node.frontmatter.featuredimage

    return ( <div className="py-8 flex flex-wrap md:flex-no-wrap" key = { node.fields.slug }>
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
         {
            node.frontmatter.tag.map((tag, index, arr) => ( <ConcatWords className="tracking-widest font-medium title-font text-gray-900" arrCount = { arr.length } index = { index } key = { tag } >
                <Link to = { `/tag/${kebabCase(tag)}` } > { tag } </Link> 
                </ConcatWords>
            ))
        }
        <span className="mt-1 text-gray-500 text-sm">{ formatDate(node.frontmatter.date) }</span>
        </div>
        < div className = "md:flex-grow" >
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2"> 
          <Link to = { node.fields.slug } className="text-indigo-500 inline-flex items-center">
            { node.frontmatter.title }
          </Link>
          </h2>
          <div className="leading-relaxed" dangerouslySetInnerHTML = { { __html: node.excerpt } }></div>
          <div>
             
        <Link to = { node.fields.slug } >
            {  (featuredimage != null && featuredimage.src != null)  ? ( < Img fluid = { featuredimage.src.childImageSharp.fluid } alt = { featuredimage.alt }/> ) : " "   }
        </Link>

        </div>   
          <Link to = { `/blog/author/${kebabCase(node.frontmatter.author)}` } > { node.frontmatter.author } </Link> 
        </div>
      </div>
    )
};



export default renderList
