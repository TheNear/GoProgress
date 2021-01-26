import { gql } from "@apollo/client";

export interface CheckAuthQueryResult {
  getAuthStatus: boolean
}

export interface LoginMutationVar {
  email: string;
  password: string;
}

export interface LoginMutationResult {
  loginUser: {
    token: string;
  };
}

export interface RegistrationMutationResult {
  createUser: {
    token: string;
  };
}

export interface RegistrationMutationVar {
  name: string;
  email: string;
  password: string;
}

export const LoginMutation = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`;

export const CheckAuthQuery = gql`
  query GetAuthStatus {
    getAuthStatus
  }
`;

export const RegistrationMutation = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      token
    }
  }
`;
