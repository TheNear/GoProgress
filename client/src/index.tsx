import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "antd/dist/antd.css";
import { GlobalStyle } from "./style";
import { client } from "./apolloConfig";

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root"),
);
