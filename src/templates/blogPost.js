import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import moment from "jalali-moment"
import Img from "gatsby-image"


const Div  = styled('div')`
  background-color: aquamarine;
`
const Template = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  const { frontmatter } = markdownRemark
  const { image } = frontmatter;
  const { title } = frontmatter
  const { next, prev } = pageContext
  console.log("pageContext ", pageContext)
  console.log("blog post data ", data)
  return (
    <Div>
      <h1>{title}</h1>
      {image && <Img fluid={image.childImageSharp.fluid} />}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date
        image {
          childImageSharp {

            fluid(maxWidth: 786, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default Template
