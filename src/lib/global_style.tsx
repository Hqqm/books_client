import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 12px;
  }
  #root {
    height: 100%;
  }
  html, body {
    font-family: 'Montserrat', sans-serif;
    height: 100%;
  }
  
`;
