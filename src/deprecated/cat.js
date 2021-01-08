import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Image from "gatsby-image"
const C = () => {
    const data = useStaticQuery(graphql`
        query CQuery {
            avatar: file(absolutePath: { regex: "/logo.png/" }) {
                childImageSharp {
                    fixed(width: 50, height: 50, quality: 95) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    const avatar = data?.avatar?.childImageSharp?.fixed

    return (
        <div className="bio">
            {avatar && (<Image fixed={avatar} className="bio-avatar" imgStyle={{borderRadius: `50%`}}/>)}
        </div>
    )
}

export default C
