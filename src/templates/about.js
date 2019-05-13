import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { BlogLayout } from "../components/BlogLayout"
import { mediumUp } from "../style/breakpoints"
import { PostHtml } from '../components/PostHtml';

const AboutContainer = styled(PostHtml)`
  margin-top: calc(3 * var(--base-line));
  .post__content {
    margin-top: calc(1 * var(--base-line));
  }

  h1 {
    font-size: 1.618rem;
    line-height: calc(2 * var(--base-line));
    color: ${props => props.theme.textColor};
    @media ${mediumUp} {
      font-size: 2.618rem;
      line-height: calc(3 * var(--base-line));
    }
  }
`
const AboutTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { title } = markdownRemark.frontmatter
  const { html } = markdownRemark
  return (
    <BlogLayout>
      <AboutContainer>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </AboutContainer>
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
