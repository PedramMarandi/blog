import React from "react"
import { graphql } from "gatsby"
import moment from 'jalali-moment';

const Template = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { title } = markdownRemark.frontmatter
  const { html } = markdownRemark
  const { next, prev } = pageContext
  console.log("pageContext ", pageContext)
  console.log("blog post data ", moment(data).format('jYYYY/jMM/jDD'))
  return (
    <div>
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
        date
      }
    }
  }
`
export default Template
