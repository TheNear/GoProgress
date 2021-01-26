import { Button, Form, Input } from "antd";
import styled from "styled-components";

export const LoginFormWrapper = styled.div`
  width: 100%;
`;

export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const LoginInput = styled(Input)`

`;

export const LoginButton = styled(Button)`
  width: 100%;
  margin-bottom: 1rem;
`;
