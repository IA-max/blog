import {Link} from "gatsby";
import formatDate from "../utils/formatDate";
import React from "react";
export default (post) => {
    return (<div className="grid grid-cols-1 gap-12 md:grid-cols-2" key={post.fields.slug}>
            <h1 className="mb-2 text-base text-gray-900 md:text-xl px-6 md:px-0"><Link
                to={post.fields.slug}
                className="text-gray-900 font-semibold hover:text-purple-700 hover:no-underline">{post.frontmatter.title}</Link>
            </h1>
            <h1 className="mb-2 text-xl font-light md:text-base text-right hidden md:block text-gray-400">{formatDate(post.frontmatter.date)}</h1>
        </div>
    )
}