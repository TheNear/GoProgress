import React from "react";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { AuthContainer, AuthLogo, AuthWrapper } from "./AuthStyle";

const Auth: React.FC = () => {
  return (
    <AuthWrapper>
      <AuthContainer>
        <AuthLogo />
        <AuthForm />
      </AuthContainer>
    </AuthWrapper>
  );
};

export { Auth };
