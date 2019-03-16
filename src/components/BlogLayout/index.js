import React, { Fragment } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./globalStyle"

const theme = {
  main: "mediumseagreen",
}

export const BlogLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <div className="children">{children}</div>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  )
}
