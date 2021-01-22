import {
  gql, MutationResult, useApolloClient, useMutation,
} from "@apollo/client";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../types/enums";
import { useAuthToken } from "./useAuthToken";

const REG_MUTATION = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

type UseRegistrationType = () => {
  registration: (name: string, email: string, password: string) => void;
  result: MutationResult;
};

interface RegistrationMutationResult {
  createUser: {
    token: string;
  };
}

interface RegistrationMutationVar {
  name: string;
  email: string;
  password: string;
}

export const useRegistration: UseRegistrationType = () => {
  const { setAuthToken } = useAuthToken();
  const apolloClient = useApolloClient();
  const history = useHistory();
  const [mutation, result] = useMutation<RegistrationMutationResult, RegistrationMutationVar>(
    REG_MUTATION,
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
