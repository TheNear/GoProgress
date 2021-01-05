import React from "react";
import { AuthButton } from "../AuthButton/AuthButton";
import { AuthInput } from "../AuthInput/AuthInput";
import { AuthFormContainer } from "./AuthFormStyle";

const AuthForm: React.FC = () => {
  return (
    <AuthFormContainer>
      <AuthInput />
      <AuthInput />
      <AuthInput />
      <AuthButton />
    </AuthFormContainer>
  );
};

export { AuthForm };
