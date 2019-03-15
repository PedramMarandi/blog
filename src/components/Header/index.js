import React from "react"
import { StaticQuery, graphql } from "gatsby"

const TitleComponent = ({ data }) => {
  return <div>{data.site.siteMetadata.title}</div>
}

export const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleComponent data={data} />}
    />
  )
}
