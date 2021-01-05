import React from "react";
import { AuthInputLabel, AuthInputWrapper, AuthInputStyled } from "./AuthInputStyle";

const AuthInput: React.FC = () => {
  return (
    <AuthInputWrapper>
      <AuthInputLabel>Name</AuthInputLabel>
      <AuthInputStyled />
    </AuthInputWrapper>
  );
};

export { AuthInput };
