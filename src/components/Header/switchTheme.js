import React, { useContext } from "react"
import styled from "styled-components"
import { ToggleThemeProvider } from "../BlogLayout"

const Slide = styled("div")`
  width: 2.5rem;
  height: 1.5rem;
  background: #e0e0e0;
  border-radius: 0.7rem;
  &:after {
    position: relative;
    display: block;
    margin-right: 1.2rem;
    top: 0.25rem;
    content: " ";
    background: #fff;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    transition: margin-right 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`
const Input = styled("input")`
  display: none;
  &:checked + .slide:after {
    margin-right: 0.4rem;
  }
  &:checked + .slide {
    background: #039be5;
  }
`
const Label = styled("label")`
  background-color: transparent;
  width: 2.4rem;
  height: 1.4rem;
  cursor: pointer;
  user-select: none;
`

const checkInput = () => {
  if (!process.browser) {
    return false
  }
  const theme = localStorage.getItem("theme")
  return theme !== "lightTheme"
}
export const Switch = () => {
  const { toggleTheme } = useContext(ToggleThemeProvider)
  return (
    <Label>
      <Input
        type="checkbox"
        className="checkbox"
        onClick={() => toggleTheme()}
        defaultChecked={checkInput()}
      />
      <Slide className="slide" />
    </Label>
  )
}
