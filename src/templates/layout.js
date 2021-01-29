import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from '../components/header'
import Footer from '../components/footer'

// import Typography from "typography"
// import moragaTheme from "typography-theme-moraga"
// const typography = new Typography(moragaTheme)
// typography.injectStyles()

const Layout = (props) => {
	const { children } = props;
	return (
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
		 <Header isPost={props.isPost ? props.isPost : false}/>
		 <main>{children}</main>
		 <Footer/>
	 </>
	)} />
	)
}
Layout.propTypes = { children: PropTypes.node.isRequired, }
export default Layout