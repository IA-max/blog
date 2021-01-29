import React from "react"
import {Link} from 'gatsby';
import Logo from './logo'
import ThemeToggle from '../components/themeToggle'

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
    </div>
    <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        {
            pages.map((page, index) => {
                return (<Link key={index}
                              className="font-medium text-gray-500 hover:text-gray-900 ml-5 hover:no-underline hover:text-blue-700"
                              to={`${page.url}`}> {page.title} </Link>)
            })
        }
        <ThemeToggle />
    </div>
</header>)
};
export default Header;