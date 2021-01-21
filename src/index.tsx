import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "antd/dist/antd.css";
import { GlobalStyle, theme } from "./style";
import { client } from "./apolloConfig";

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root"),
);
