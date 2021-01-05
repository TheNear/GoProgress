import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

// interface PrivateRouteProps extends RouteProps {

// }

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, path }) => {
  if (true) {
    return <Redirect to="/auth" />;
  }

  return <Route component={Component} path={path} />;
};

export { PrivateRoute };
