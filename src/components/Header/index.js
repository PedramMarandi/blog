import React from "react"
import styled from "styled-components"
import { Nav } from "./nav"

const HeaderStyled = styled("header")`
  margin-top: calc(1 * var(--base-line));
`
export const Header = () => {
  return (
    <HeaderStyled>
      <Nav />
    </HeaderStyled>
  )
}

