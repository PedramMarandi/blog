import React, { Fragment } from "react"
import styled from "styled-components"
import { Switch } from "./switchTheme"
import { Social } from "./social"

const Div = styled('div')`
  display: flex;
`
export const NavInfo = () => {
  return (
    <Div>
      <Switch />
      <Social />
    </Div>
  )
}
