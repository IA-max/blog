import React from "react"
import {Link} from "gatsby"
const Pagination = ({numPages, currentPage, contextPage}) => {
    if (numPages <= 1) {
        return null
    }
    return (
        <div className="py-2">
            <nav className="block">
                <ul className="flex pl-0 rounded list-none flex-wrap justify-center items-center">
                    {Array.from({length: numPages}).map((item, i) => {
                        const index = i + 1
                        const baseLink = `/${contextPage ? `${contextPage}/` : ""}`
                        const link = index === 1 ? baseLink : `${baseLink}page/${index}`

                        return (
                            <li key={link}>
                                {currentPage === index ?
                                    (<span
                                        className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-purple-500 text-white bg-purple-500"> {index} </span>) :
                                    (<Link to={link}
                                           className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-purple-500 bg-white text-purple-500 hover:no-underline hover:text-white hover:bg-purple-500"> {index} </Link>)
                                }
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}
export default Pagination