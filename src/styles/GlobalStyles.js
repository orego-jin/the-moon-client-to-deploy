import { createGlobalStyle } from "styled-components";
import "@fontsource/kalam" //logo, typewriter
import "@fontsource/noto-sans" // stop number
import "@fontsource/barlow" // main
import "@fontsource/permanent-marker" //title


const GlobalStyles = createGlobalStyle `

*, *::before, *::after {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Noto Sans", sans-serif;
  font-family: "Barlow", sans-serif;
  overflow-x: hidden;
} 

h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0;
}

a{
  color: inherit;
  text-decoration: none;
}

`

export default GlobalStyles;