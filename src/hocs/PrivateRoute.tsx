import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { LOCAL_STORAGE, ROUTES } from "../types/enums";

// interface PrivateRouteProps extends RouteProps {

// }

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, path }) => {
  if (!localStorage.getItem(LOCAL_STORAGE.token)) {
    return <Redirect to={ROUTES.auth} />;
  }

  return <Route component={Component} path={path} />;
};

export { PrivateRoute };
