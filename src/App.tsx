import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./hocs/PrivateRoute";
import { Auth } from "./pages/Auth/Auth";
import { Main } from "./pages/Main/Main";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/auth" component={Auth} />
      <PrivateRoute path="/" component={Main} />
    </Switch>
  );
};

export { App };
