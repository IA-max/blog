import React from "react"
import {Link} from 'gatsby';
import C from "../components/cat"
const pages = [
    {
      title: 'Index',
      url: '/'
    },
    {
        title: 'Article',
        url: '/article'
    },
    {
        title: 'Resource',
        url: '/resource'
    },
    {
        title: 'About',
        url: '/about'
    },
]
const Header = () => {
    return (
        <header
            className="flex items-center justify-between px-4 py-4 sm:px-6 md:px-0 lg:px-0 mx-auto md:w-3/4 lg:w-2/4">
            <div className="md:flex items-center">
                <C/>
                <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:no-underline"
                      to="/">

                    <span className="ml-3 text-xl">IMY Blog</span>
                </Link>
            </div>
            <div className="flex text-base">
                {
                    pages.map((page, index) => {
                        return (<Link key={index}
                                      className="font-medium text-gray-500 hover:text-gray-900 ml-5 hover:no-underline hover:text-blue-700"
                                      to={`${page.url}`}> {page.title} </Link>)
                    })
                }
            </div>

        </header>
    )
};
export default Header;