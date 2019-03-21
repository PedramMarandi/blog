import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Ul = styled("ul")`
  display: flex;
  list-style: none;
  line-height: var(--base-line);

  li {
    a {
      text-decoration: none;
      padding: 0.75rem 0 0.75rem 1rem;
      transition: border-bottom 0.5s ease;
      color: ${props => props.theme.textColor};
      border-bottom: 0.1rem solid #f5f5f5;
    }

    &:hover {
      a {
        border-color: ${props => props.theme.primary};
      }
    }
  }
`
export const Nav = () => {
  return (
    <nav className="main_width">
      <Ul>
        <li>
          <Link to="/">صفحه اول</Link>
        </li>
        <li>
          <Link to="/about">درباره من</Link>
        </li>
      </Ul>
    </nav>
  )
}
