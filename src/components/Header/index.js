import React from "react"
import styled from "styled-components"
import { Nav } from "./nav"
import { NavInfo } from "./navInfo"

const HeaderStyled = styled("header")`
  display: flex;
  justify-content: space-between;
  margin-top: calc(1 * var(--base-line));
  height: var(--base-line);
`
export const Header = () => {
  return (
    <HeaderStyled className="main_width">
      <Nav />
      <NavInfo />
    </HeaderStyled>
  )
}
