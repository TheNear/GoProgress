import {
  gql, MutationResult, useApolloClient, useMutation,
} from "@apollo/client";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../types/enums";
import { useAuthToken } from "./useAuthToken";

const LOGIN_MUTATION = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`;

type UseLoginType = () => {
  login: (email: string, password: string) => void;
  result: MutationResult
};

interface LoginMutationResult {
  loginUser: {
    token: string;
  };
}

interface LoginMutationVar {
  email: string;
  password: string;
}

export const useLogin: UseLoginType = () => {
  const { setAuthToken } = useAuthToken();
  const apolloClient = useApolloClient();
  const history = useHistory();
  const [mutation, result] = useMutation<LoginMutationResult, LoginMutationVar>(LOGIN_MUTATION, {
    onCompleted: (data) => {
      setAuthToken(data.loginUser.token);
      apolloClient.resetStore();
      history.push(ROUTES.home);
    },
  });

  const login = async (email: string, password: string) => {
    await mutation({
      variables: {
        email,
        password,
      },
    });
  };

  return {
    login,
    result,
  };
};
