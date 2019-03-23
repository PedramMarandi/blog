import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import uuid from "uuid4"
import { graphql } from "gatsby"
import { BlogLayout } from "../components/BlogLayout"
import { PostList } from "../components/PostList"

const StyledLayout = styled("div")`
  margin-top: calc(3 * var(--base-line));
`

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <BlogLayout>
      <StyledLayout>
        {edges.map(edge => {
          const { frontmatter, excerpt } = edge.node
          return (
            <PostList
              key={uuid()}
              frontmatter={frontmatter}
              excerpt={excerpt}
            />
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
Layout.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.array,
  }).isRequired,
}

export default Layout
