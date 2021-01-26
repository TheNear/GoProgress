import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { GlobalPreloader } from "../components/GlobalPreloader/GlobalPreloader";
import { useLoginStatus } from "../hooks/useLoginStatus";
import { ROUTES } from "../types/enums";

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, path }) => {
  const { data, loading } = useLoginStatus();

  if (loading || !data) {
    return <GlobalPreloader />;
  }

  if (!data.getAuthStatus) {
    return <Redirect to={ROUTES.auth} />;
  }

  return <Route component={Component} path={path} />;
};

export { PrivateRoute };
