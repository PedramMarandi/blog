import React from "react"
import { graphql } from "gatsby"
import { BlogLayout } from "../components/BlogLayout"

const AboutTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { title } = markdownRemark.frontmatter
  const { html } = markdownRemark
  return (
    <BlogLayout>
      <h2>About</h2>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </BlogLayout>
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
