import { MutationResult, useApolloClient, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { LoginMutation, LoginMutationResult, LoginMutationVar } from "../graphql/authQueries";
import { ROUTES } from "../types/enums";
import { useAuthToken } from "./useAuthToken";

type UseLoginType = () => {
  login: (email: string, password: string) => void;
  logout: () => void;
  result: MutationResult;
};

export const useLogin: UseLoginType = () => {
  const { setAuthToken, removeAuthToken } = useAuthToken();
  const apolloClient = useApolloClient();
  const history = useHistory();
  const [mutation, result] = useMutation<LoginMutationResult, LoginMutationVar>(LoginMutation, {
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

  const logout = () => {
    removeAuthToken();
    apolloClient.resetStore();
    history.push(ROUTES.home);
  };

  return {
    logout,
    login,
    result,
  };
};
