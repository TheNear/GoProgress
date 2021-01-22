import { LOCAL_STORAGE } from "../types/enums";

type UseAuthTokenReturn = () => {
  getAuthToken: () => string | null;
  setAuthToken: (token: string) => void;
  removeAuthToken: () => void;
};
export const useAuthToken: UseAuthTokenReturn = () => {
  const getAuthToken = () => {
    return localStorage.getItem(LOCAL_STORAGE.token);
  };

  const setAuthToken = (token: string) => {
    localStorage.setItem(LOCAL_STORAGE.token, token);
  };

  const removeAuthToken = () => {
    localStorage.removeItem(LOCAL_STORAGE.token);
  };

  return {
    getAuthToken,
    setAuthToken,
    removeAuthToken,
  };
};
