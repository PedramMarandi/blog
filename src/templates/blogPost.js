import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { graphql } from "gatsby"
import { BlogLayout } from "../components/BlogLayout"
import { H1 } from "../components/H1"
import { PostHtml } from "../components/PostHtml"

const TemplateDiv = styled("div")`
  margin-top: calc(3 * var(--base-line));
  .post__content {
    margin-top: calc(1 * var(--base-line));
  }
`
const Template = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  const { frontmatter } = markdownRemark
  const { title } = frontmatter
  const { next, prev } = pageContext
  console.log("pageContext ", pageContext)
  console.log("blog post data ", data)
  return (
    <BlogLayout>
      <TemplateDiv>
        <H1>{title}</H1>
        <div className="post__content">
          <PostHtml dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </TemplateDiv>
    </BlogLayout>
  )
}

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
  pageContext: PropTypes.shape({
    next: PropTypes.object,
    prev: PropTypes.object,
  }).isRequired,
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
