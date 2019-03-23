import styled from "styled-components"

export const PostHtml = styled("div")`
  a {
    color: ${props => props.theme.linkColor};
    border-bottom: 0.0625rem solid #e0e0e0;
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${props => props.theme.linkHoverColor};
      border-color: ${props => props.theme.linkHoverColor};
    }
  }

  p,
  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.textColor};
  }
`
