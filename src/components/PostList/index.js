import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { H3 } from "../H3"
import { PostHtml } from "../PostHtml"
import Wave from "./wave.svg"

const Div = styled("div")`
  .postList__title {
    text-decoration: none;
    color: ${props => props.theme.textColor};
  }
  h3:hover {
    .postList__title {
      color: ${props => props.theme.titleHoverColor};
    }
  }
  .postList__p {
    margin-top: var(--base-line);
  }
  &:after {
    width: 125px;
    height: var(--base-line);
    display: block;
    content: "";
    background-image: url(${Wave});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin: var(--base-line) auto;
  }
  &:last-of-type:after {
    display: none;
  }
`
export const PostList = ({ frontmatter, excerpt }) => {
  const { path, title } = frontmatter
  return (
    <Div>
      <H3>
        <Link className="postList__title" to={path}>
          {title}
        </Link>
      </H3>
      <PostHtml
        className="postList__p"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
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
