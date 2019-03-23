import { useState } from "react"
import * as themes from "./themes"

const setInitialTheme = () => {
  const theme = localStorage.getItem("theme")
  if (theme) {
    return themes[theme]
  }
  localStorage.setItem("theme", "lightTheme")
  return themes.lightTheme
}

export const useThemeSelector = () => {
  const [theme, setTheme] = useState(setInitialTheme())

  const toggleTheme = () => {
    const localTheme = localStorage.getItem("theme")

    if (!localTheme) {
      return localStorage.setItem("theme", "lightTheme")
    }
    if (localTheme === "lightTheme") {
      localStorage.setItem("theme", "darkTheme")
      return setTheme(themes.darkTheme)
    }
    localStorage.setItem("theme", "lightTheme")
    return setTheme(themes.lightTheme)
  }

  return [theme, toggleTheme]
}
