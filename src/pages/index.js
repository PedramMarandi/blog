import React from "react"
import uuid from "uuid4"
import { graphql, Link } from "gatsby"
import { Header } from "../components/Header"

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <Header />
      {edges.map(edge => {
        const { frontmatter } = edge.node
        return (
          <div key={uuid()}>
            <Link to={frontmatter.path}>{frontmatter.title}</Link>
          </div>
        )
      })}
    </div>
  )
}
export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
    filter: { fileAbsolutePath: {regex: "\/[0-9]{4}\/"} },
    sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
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
