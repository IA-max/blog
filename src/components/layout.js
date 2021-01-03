import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
// import Typography from "typography"
// import moragaTheme from "typography-theme-moraga"
import Header from '../components/header'
import Footer from '../components/footer'
// const typography = new Typography(moragaTheme)
// typography.injectStyles()
const Layout = ({ children }) => (
	<StaticQuery query={graphql`
    query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
		render={(data) => (
		   <>
			<Header/>
		     <main>{children}</main>
		     <Footer/>
		   </>
		)}
	/>
);
Layout.propTypes = { children: PropTypes.node.isRequired, }
export default Layout