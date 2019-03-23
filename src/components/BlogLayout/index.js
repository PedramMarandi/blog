import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../../style/globalStyle"
import { Header } from "../Header"
import { useLineHelper } from "../../style/useLineHelper"
import { useThemeSelector } from "../../style/useThemeSelector"

export const BlogLayout = ({ children }) => {
  const [theme, toggleTheme] = useThemeSelector()
  useLineHelper()
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Header toggleTheme={toggleTheme} />
        <div className="children">{children}</div>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
