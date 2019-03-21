import { createGlobalStyle } from "styled-components"
import * as fonts from './fonts'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'IRAN';
          src: url(${fonts.IRANBoldEOT});
  
    src: url(${fonts.IRANBoldEOT}?#iefix) format('eot'),  /* IE6–8 */
  url(${fonts.IRANBoldWOFF2}) format('woff2'),  /* Chrome36+, Opera24+*/
  url(${fonts.IRANBoldWOFF}) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
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
  }
`
