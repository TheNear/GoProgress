import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Nunito', sans-serif;
    height: 100%;
    color: "#333333";
    overflow-x: hidden;
  }

  #root {
    height: 100%;
    overflow-x: hidden;
  }
`;
