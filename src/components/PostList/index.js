import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { H3 } from "../H3"

const Div = styled("div")`
  a {
    text-decoration: none;
    color: ${props => props.theme.textColor};
  }
  h3:hover {
    a {
      color: ${props => props.theme.titleHoverColor};
    }
  }
  .postList__p {
    margin-top: var(--base-line);
  }
`
export const PostList = ({ frontmatter, excerpt }) => {
  const { path, title } = frontmatter
  return (
    <Div>
      <H3>
        <Link to={path}>{title}</Link>
      </H3>
      <div className="postList__p" dangerouslySetInnerHTML={{ __html: excerpt }} />
    </Div>
  )
}

PostList.propTypes = {
  frontmatter: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  excerpt: PropTypes.string.isRequired,
}
