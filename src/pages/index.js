import React from "react"
import styled from "styled-components"
import uuid from "uuid4"
import { graphql, Link } from "gatsby"
import { BlogLayout } from "../components/BlogLayout"

const StyledLayout  = styled('div')`
  margin-top: calc(3 * var(--base-line));
`;

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  console.log("Layout data ", data)
  return (
    <BlogLayout>
      <StyledLayout className="main_width">
        {edges.map(edge => {
          const { frontmatter } = edge.node
          return (
            <div key={uuid()}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </div>
          )
        })}
      </StyledLayout>
    </BlogLayout>
  )
}
export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/[0-9]{4}/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(truncate: true, format: HTML)

          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default Layout
