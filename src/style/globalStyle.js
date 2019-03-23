import { createGlobalStyle } from "styled-components"
import * as fonts from "./fonts"
import { largeUp, mediumUp } from "./breakpoints"

export const GlobalStyle = createGlobalStyle`
  :root {
    --base-line: 1.5rem;
  }
  @media ${mediumUp} {
    :root {
      --base-line: 1.75rem;
    }
  }
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'IRAN';
          src: url(${fonts.IRANBoldEOT});
  
    src: url(${fonts.IRANBoldEOT}?#iefix) format('eot'),  /* IE6–8 */
  url(${fonts.IRANBoldWOFF2}) format('woff2'),  /* Chrome36+, Opera24+*/
  url(${
    fonts.IRANBoldWOFF
  }) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
 url(${fonts.IRANBoldTTF}) format('ttf');
    font-weight: 600;
  }
  @font-face {
    font-family: 'IRAN';
          src: url(${fonts.IRANEOT});
  
    src: url(${fonts.IRANEOT}?#iefix) format('eot'),  /* IE6–8 */
  url(${fonts.IRANWOFF2}) format('woff2'),  /* Chrome36+, Opera24+*/
  url(${fonts.IRANWOFF}) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
  url(${fonts.IRANTTF}) format('ttf');
    font-weight: normal;
  }
  html {
    direction: rtl;
  }
  html.ln__helper {
    background-size: 1px var(--base-line);
    background-image: linear-gradient(rgba(0, 188, 212, 0.23) 1px, transparent 0%, transparent);
    h1,
    h2,
    h3,
    h4 {
      background-color: rgba(255,227,194,0.7);
    }
  }
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  li,
  a {
    margin: 0;
    padding: 0;
  }
  html {
    font-family: IRAN, serif;
    background-color: ${props => props.theme.backColor};
    line-height: var(--base-line);
    transition: background-color 0.5s ease;
  }
  .main_width {
    width: 80%;
    margin: 0 auto;
    
    @media ${mediumUp} {
      width: 70%;
    }
    
    @media ${largeUp} {
      width: 50%;
    }
  }
`
