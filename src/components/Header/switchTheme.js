import React, { useContext } from "react"
import styled from "styled-components"
import { ToggleThemeProvider } from "../BlogLayout"

const Slide = styled("div")`
  width: 2.4rem;
  height: 1.4rem;
  background: #e0e0e0;
  border-radius: 0.7rem;
  &:after {
    position: relative;
    display: block;
    margin-right: 1.1rem;
    top: 0.15rem;
    content: " ";
    background: #fff;
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    transition: margin-right 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`
const Input = styled("input")`
  display: none;
  &:checked + .slide:after {
    margin-right: 0.2rem;
  }
  &:checked + .slide {
    background: #039be5;
  }
`
const Label = styled("label")`
  position: relative;
  top: 0.125rem;
  background-color: transparent;
  width: 2.4rem;
  height: 1.4rem;
  cursor: pointer;
  user-select: none;
`

const checkInput = () => {
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
