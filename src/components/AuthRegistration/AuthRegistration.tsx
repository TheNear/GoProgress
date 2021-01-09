import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { useForm } from "antd/lib/form/Form";
import { Link } from "react-router-dom";
import React from "react";
import { Typography } from "antd";
import { useMutation } from "@apollo/client";
import {
  RegButton, RegForm, RegFormWrapper, RegInput,
} from "./AuthRegistrationStyle";
import {
  emailRules, passRules, reapeatPassRules, usernameRules,
} from "../../helpers/authvalid";
import { USERS_QUERY } from "./gql";

const AuthRegistration: React.FC = () => {
  const [form] = useForm();
  const [createUser] = useMutation(USERS_QUERY);

  const onSubmit = () => {
    const { email, username, password } = form.getFieldsValue();
    createUser({
      variables: {
        name: username,
        email,
        password,
      },
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <RegFormWrapper>
      <Typography.Title level={2}>Регистрация</Typography.Title>
      <RegForm form={form} onFinish={onSubmit} scrollToFirstError>
        <RegForm.Item validateFirst name="email" rules={emailRules}>
          <RegInput prefix={<MailOutlined />} placeholder="@ E-mail" />
        </RegForm.Item>
        <RegForm.Item validateFirst name="username" rules={usernameRules}>
          <RegInput prefix={<UserOutlined />} placeholder="Username" />
        </RegForm.Item>
        <RegForm.Item validateFirst name="password" rules={passRules}>
          <RegInput.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
        </RegForm.Item>
        <RegForm.Item validateFirst name="password_repeat" rules={reapeatPassRules}>
          <RegInput.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Repeat password"
          />
        </RegForm.Item>
        <RegButton htmlType="submit" type="primary">
          Зарегестрироваться
        </RegButton>
      </RegForm>
      <Link to="/auth/login">Уже имеете аккаунт?</Link>
    </RegFormWrapper>
  );
};

export { AuthRegistration };
