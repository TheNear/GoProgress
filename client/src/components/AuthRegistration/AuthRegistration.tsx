import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { useForm } from "antd/lib/form/Form";
import { Link } from "react-router-dom";
import React from "react";
import { Typography } from "antd";
import {
  RegButton, RegForm, RegFormWrapper, RegInput,
} from "./AuthRegistrationStyle";
import {
  emailRules, passRules, reapeatPassRules, usernameRules,
} from "../../helpers/authvalid";
import { useRegistration } from "../../hooks/useRegistration";

const AuthRegistration: React.FC = () => {
  const [form] = useForm();
  const { registration } = useRegistration();

  const onSubmit = async () => {
    try {
      const { email, username, password } = form.getFieldsValue();
      await registration(username, email, password);
    } catch (e) {
      const errorData = e.message.split(":");
      form.resetFields(["password", "password_repeat"]);
      form.setFields([{
        name: errorData[0],
        errors: [`${errorData[1]}`],
      }]);
    }
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
