import { useQuery } from "@apollo/client";
import { CheckAuthQuery, CheckAuthQueryResult } from "../graphql/authQueries";

type UseLoginStatusType = () => {
  data: CheckAuthQueryResult | undefined,
  loading: boolean,
};

export const useLoginStatus: UseLoginStatusType = () => {
  const { data, loading } = useQuery<CheckAuthQueryResult>(CheckAuthQuery, {
    fetchPolicy: "no-cache",
  });

  return {
    data,
    loading,
  };
};
