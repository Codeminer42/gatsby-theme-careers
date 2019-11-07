import { createGlobalStyle } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-tap-highlight-color: transparent;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${themeGet('fonts.body')};
    font-size: ${themeGet('fontSizes.3')};
    font-weight: ${themeGet('fontWeights.2')};
    color: ${themeGet('colors.black')};
    background-color: ${themeGet('colors.white')};
  }
`

export default GlobalStyle
