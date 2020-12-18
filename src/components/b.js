import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const B = () => {
  const data = useStaticQuery(graphql`
    query BQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
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
        {avatar && (<Image fixed={avatar} className="bio-avatar" imgStyle={{borderRadius: `50%` }} />  )}
    </div>
  )
}

export default B
