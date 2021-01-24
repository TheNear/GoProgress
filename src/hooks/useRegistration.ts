import { MutationResult, useApolloClient, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import {
  RegistrationMutation,
  RegistrationMutationResult,
  RegistrationMutationVar,
} from "../graphql/authQueries";
import { ROUTES } from "../types/enums";
import { useAuthToken } from "./useAuthToken";

type UseRegistrationType = () => {
  registration: (name: string, email: string, password: string) => void;
  result: MutationResult;
};

export const useRegistration: UseRegistrationType = () => {
  const { setAuthToken } = useAuthToken();
  const apolloClient = useApolloClient();
  const history = useHistory();
  const [mutation, result] = useMutation<RegistrationMutationResult, RegistrationMutationVar>(
    RegistrationMutation,
    {
      onCompleted: (data) => {
        setAuthToken(data.createUser.token);
        apolloClient.resetStore();
        history.push(ROUTES.home);
      },
    },
  );

  const registration = async (name: string, email: string, password: string) => {
    await mutation({
      variables: {
        name,
        email,
        password,
      },
    });
  };

  return {
    registration,
    result,
  };
};
