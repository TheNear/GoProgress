import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { useForm } from "antd/lib/form/Form";
import React from "react";
import { Link } from "react-router-dom";
import { passRules, emailRules } from "../../helpers/authvalid";
import { useLogin } from "../../hooks/useLogin";
import {
  LoginButton, LoginForm, LoginFormWrapper, LoginInput,
} from "./AuthLoginStyle";

const AuthLogin: React.FC = () => {
  const [form] = useForm();
  const { login } = useLogin();
  const onSubmit = async () => {
    try {
      const { email, password } = form.getFieldsValue();
      await login(email, password);
    } catch (e) {
      const errorData = e.message.split(":");
      form.resetFields(["password"]);
      form.setFields([{
        name: errorData[0],
        errors: [`${errorData[1]}`],
      }]);
    }
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
