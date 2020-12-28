import React from "react"
import formatDate from "../utils/formatDate"
import {Link} from "gatsby"

const renderList = ({node}) => {
    // const featuredimage = node.frontmatter.featuredimage
    return (<div className="py-8 flex flex-wrap md:flex-no-wrap" key={node.fields.slug}>
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="mt-1 text-gray-500 text-xs">{formatDate(node.frontmatter.date)}</span>
            </div>
            < div className="md:flex-grow">
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                    <Link to={node.fields.slug} className="text-indigo-500 inline-flex items-center">
                        {node.frontmatter.title}
                    </Link>
                </h2>
                {/*<div className="leading-relaxed text-sm" dangerouslySetInnerHTML={{__html: node.excerpt}}></div>*/}
                <div className="leading-relaxed text-sm">{node.excerpt}</div>
                <div>
                </div>
            </div>
        </div>
    )
};
export default renderList