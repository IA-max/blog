import {Link} from "gatsby";
import { getDate } from "../utils/utils"
import React from "react";
export default (post) => {
    return (<li className="flex py-2" key={post.fields.slug}>
            <h1 className="text-xl font-light md:text-base hidden md:block text-gray-400 w-1/12">{getDate(post.frontmatter.date)}</h1>
            <h1 className="text-gray-900 md:text-xl px-6 md:px-0 w-9/12"><Link  to={post.fields.slug} className="text-gray-900 hover:text-purple-700 font-semibold hover:no-underline">{post.frontmatter.title}</Link></h1>
            {
                    post.frontmatter.featured && (<span className="ml-auto inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest"><svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg></span>) 
            }
        </li>
    )
}