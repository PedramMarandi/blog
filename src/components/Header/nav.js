import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { mediumUp } from "../../style/breakpoints"

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
      @media ${mediumUp} {
        border-bottom: 0.1rem solid ${props => props.theme.navBorderColor};
      }
    }

    &:hover,
    &:focus {
      a {
        color: ${props => props.theme.navHoverColor};
        border-color: ${props => props.theme.navHoverColor};
      }
    }
  }
`
export const Nav = () => {
  return (
    <nav>
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
