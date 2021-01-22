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
    console.log(props)
    if(props.isPost) {
        return (
            <header className="mx-auto flex justify-center flex-col py-4 sm:px-6 md:px-0 lg:px-0 mx-auto md:w-3/4 lg:w-2/3">
                <div className="sm:w-full lg:w-4/5 flex flex-wrap flex-col md:flex-row items-center">
                    <div className="md:flex">
                        <Logo/><Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:no-underline"
                                  to="/"><h1 className="ml-3 text-xl">IMY Blog</h1></Link>
                    </div>
                    <div className="md:ml-auto flex flex-wrap items-center text-base justify-center my-5">
                        {
                            pages.map((page, index) => {
                                return (<Link key={index}
                                              className="font-medium text-gray-500 hover:text-gray-900 ml-5 hover:no-underline hover:text-blue-700"
                                              to={`${page.url}`}> {page.title} </Link>)
                            })
                        }
                    </div>
                </div>
            </header>
        )
    }
    return (<header className="flex items-center justify-between py-4 sm:px-6 md:px-0 lg:px-0 mx-auto md:w-3/4 lg:w-2/4">
        <div className="md:flex items-center">
            <Logo />
            <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:no-underline"
                  to="/"><span className="ml-3 text-xl">IMY Blog</span>
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

    </header>)


};
export default Header;