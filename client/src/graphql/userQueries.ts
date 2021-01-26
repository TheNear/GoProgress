import { gql } from "@apollo/client";

export const GetUserDataQuery = gql`
  query GetUserData {
    getUserData {
      name,
      email,
    }
  }
`;
