import React, { Fragment } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../../style/globalStyle"
import { Header } from "../Header"
import { theme } from "../../style/themes"
import { useLineHelper } from "../../style/useLineHelper"

export const BlogLayout = ({ children }) => {
  useLineHelper()
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
