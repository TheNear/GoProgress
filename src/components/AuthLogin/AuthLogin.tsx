import { useMutation } from "@apollo/client";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { useForm } from "antd/lib/form/Form";
import React from "react";
import { Link } from "react-router-dom";
import { passRules, emailRules } from "../../helpers/authvalid";
import { LOGIN_QUERY } from "./gql";
import {
  LoginButton, LoginForm, LoginFormWrapper, LoginInput,
} from "./AuthLoginStyle";

const AuthLogin: React.FC = () => {
  const [form] = useForm();
  const [loginUser] = useMutation(LOGIN_QUERY);

  const onSubmit = async () => {
    const { email, password } = form.getFieldsValue();
    console.log(email, password);
    const userData = await loginUser({
      variables: {
        email,
        password,
      },
    });
    console.log(userData);
  };

  return (
    <LoginFormWrapper>
      <Typography.Title level={2}>Авторизация</Typography.Title>
      <LoginForm form={form} onFinish={onSubmit} scrollToFirstError>
        <LoginForm.Item name="email" rules={emailRules}>
          <LoginInput prefix={<MailOutlined />} placeholder="@ E-mail" />
        </LoginForm.Item>
        <LoginForm.Item name="password" rules={passRules}>
          <LoginInput.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
        </LoginForm.Item>
        <LoginForm.Item name="remember" valuePropName="checked">
          <Checkbox>Запомнить меня</Checkbox>
        </LoginForm.Item>
        <LoginButton htmlType="submit" type="primary">
          Войти
        </LoginButton>
      </LoginForm>
      <Link to="/auth/registration">У вас еще нету аккаунта?</Link>
    </LoginFormWrapper>
  );
};

export { AuthLogin };
