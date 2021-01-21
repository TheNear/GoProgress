import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./hocs/PrivateRoute";
import { Auth } from "./pages/Auth/Auth";
import { Main } from "./pages/Main/Main";
import { ROUTES } from "./types/enums";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path={ROUTES.auth} component={Auth} />
      <PrivateRoute path={ROUTES.home} component={Main} />
    </Switch>
  );
};

export { App };
