import React from "react"
import {Link} from 'gatsby';
import Logo from './logo'
const pages = [
    {
      title: 'Aritcles',
      url: '/'
    },
    // {
    //     title: 'Article',
    //     url: '/article'
    // },
    // {
    //     title: 'Resource',
    //     url: '/resource'
    // },{
    //     title: 'Gtd',
    //     url: '/gtd'
    // },
    {
        title: 'About',
        url: '/about'
    },
]
const Header = (props) => {
    
    return (<header className="container mx-auto flex flex-wrap flex-col sm:flex-row max-w-4xl py-4">

    <div className="md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Logo />
        <Link className="title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:no-underline" to="/"><span className="ml-3 text-xl lll">maxy<span>blog</span></span></Link>
        {/*<svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">*/}
        {/*    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>*/}
        {/*</svg>*/}
    </div>
    <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        {
            pages.map((page, index) => {
                return (<Link key={index}
                              className="font-medium text-gray-500 hover:text-gray-900 ml-5 hover:no-underline hover:text-blue-700"
                              to={`${page.url}`}> {page.title} </Link>)
            })
        }
    </div>
</header>)
};
export default Header;