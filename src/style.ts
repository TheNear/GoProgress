import { createGlobalStyle, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primaryFont: "#333333",
    defaultHoverFont: "#4a6581",
    active: "#a9d1fe82",
    withOpacity: (
      color = theme.colors.defaultHoverFont,
      opacity = theme.values.defColorHexOpacity,
    ): string => {
      return `${color}${opacity}`;
    },
  },
  size: {
    borderRadius: "5px",
  },
  values: {
    defColorHexOpacity: "12",
  },
};

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Nunito', sans-serif;
    height: 100%;
    color: ${theme.colors.primaryFont};
    overflow-x: hidden;
  }

  #root {
    height: 100%;
    overflow-x: hidden;
  }
`;
