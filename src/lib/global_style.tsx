import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 12px;
  }
  #root {
    min-height: 100vh;
  }
  html, body {
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh
  }
`;
