import { createGlobalStyle, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    font: "#333333",
    hover: "#a9d1fe82",
    active: "#a9d1fe82",
  },
  size: {
    borderRadius: "5px",
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Nunito', sans-serif;
    color: ${theme.colors.font};
  }
`;
