import React from "react"
import styled from "styled-components"
import Twitter from "./twitter.svg"
import Github from "./github.svg"

const Ul = styled("ul")`
  display: flex;
  list-style: none;
`

const Img = styled("img")`
  width: 1.5rem;
  filter: ${props => props.theme.imgColor};
`

const Li = styled("li")`
  margin-right: 0.5rem;
  &:hover ${Img} {
    filter: ${props => props.theme.imgHoverColor};
  }
`

export const Social = () => {
  return (
    <Ul>
      <Li>
        <a href="https://twitter.com/rzkhosroshahi">
          <Img src={Twitter} alt="" target="_blank" />
        </a>
      </Li>
      <Li>
        <a href="https://github.com/rzkhosroshahi">
          <Img src={Github} alt="" target="_blank" />
        </a>
      </Li>
    </Ul>
  )
}
