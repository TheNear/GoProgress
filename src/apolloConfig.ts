import {
  ApolloClient, InMemoryCache, createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { LOCAL_STORAGE } from "./types/enums";

const httpLink = createHttpLink({
  uri: process.env.NODE_ENV === "production" ? "/graphql" : "http://localhost:8080/graphql",
});

const authLink = setContext((_req, { headers }) => {
  const token = localStorage.getItem(LOCAL_STORAGE.token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const rootLink = authLink.concat(httpLink);

const client = new ApolloClient({
  link: rootLink,
  cache: new InMemoryCache(),
});

export { client };
