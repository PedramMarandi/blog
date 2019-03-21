import React, { Fragment } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../../style/globalStyle"
import { Header } from "../Header"
import { theme } from "../../style/themes"

export const BlogLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Header />
        <div className="children">{children}</div>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  )
}
