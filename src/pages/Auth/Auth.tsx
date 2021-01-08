import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { AuthContainer, AuthLogo, AuthWrapper } from "./AuthStyle";

const Auth: React.FC = () => {
  return (
    <AuthWrapper>
      <AuthContainer>
        <AuthLogo />
        <Switch>
          <Route path="/auth/login" component={AuthForm} />
          <Redirect from="/" to="/auth/login" />
        </Switch>
      </AuthContainer>
    </AuthWrapper>
  );
};

export { Auth };
