import { useQuery, gql } from "@apollo/client";
// import { useMemo } from "react";
// import { useHistory } from "react-router-dom";
// import { rootLink } from "../apolloConfig";

const CHECK_AUTH_QUERY = gql`
  query GetAuthStatus {
    getAuthStatus
  }
`;

interface CheckAuthResponse {
  getAuthStatus: boolean
}

type UseLoginStatusType = () => {
  data: CheckAuthResponse | undefined,
  loading: boolean,
};

export const useLoginStatus: UseLoginStatusType = () => {
  const { data, loading } = useQuery<CheckAuthResponse>(CHECK_AUTH_QUERY, {
    fetchPolicy: "no-cache",
  });

  return {
    data,
    loading,
  };
};
