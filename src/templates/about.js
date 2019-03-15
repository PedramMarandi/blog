import React from "react"
import { graphql } from "gatsby"

const AboutTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { title } = markdownRemark.frontmatter
  const { html } = markdownRemark
  return (
    <div>
      <h2>About</h2>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
export default AboutTemplate
