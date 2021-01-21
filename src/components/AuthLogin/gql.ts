import { gql } from "@apollo/client";

export const LOGIN_QUERY = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`;
