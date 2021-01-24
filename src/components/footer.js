import React from "react"
const Footer = () => {
    return (
        <footer className="text-gray-700 body-font">
            <div className="bg-gray-50">
                <div className="container mx-auto py-6 px-0 flex flex-wrap flex-col sm:flex-row md:w-3/4 lg:w-2/4 max-w-4xl">
                    <p className="text-gray-500 text-sm text-center sm:text-left">Copyright © 2020
                        <a href="https://imaxyoung.com" className="text-gray-600 ml-1" target="_blank"
                           rel="noopener noreferrer">imaxyoung</a>
                    </p>
                    <span
                        className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Powered By <span
                        className="text-purple-600 font-semibold">Gatsby</span>.</span>
                </div>
            </div>
        </footer>
    )
};
export default Footer