/* eslint-disable prefer-promise-reject-errors */
import { Rule, RuleObject, RuleRender } from "antd/lib/form";

const VALID_CONST = {
  MIN_PASS_LENGTH: 3,
  MAX_PASS_LENGTH: 60,
  MIN_USER_LENGTH: 2,
  MAX_USER_LENGTH: 20,
};

export const requireWithMessage = (message: string): RuleObject => ({
  required: true,
  message,
});

export const repeatPassword: RuleRender = ({ getFieldValue }) => ({
  validator: (_, value) => {
    if (!value || getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject("Пароли не совпадают.");
  },
});

export const minLength = (min: number, message: string): RuleObject => ({ min, message });
export const maxLength = (max: number, message: string): RuleObject => ({ max, message });

export const passRules: Rule[] = [
  requireWithMessage("Введите пароль."),
  minLength(VALID_CONST.MIN_PASS_LENGTH, `Минимальная длинна пароля ${VALID_CONST.MIN_PASS_LENGTH}`),
  maxLength(VALID_CONST.MAX_PASS_LENGTH, `Максимальная длинна пароля ${VALID_CONST.MAX_PASS_LENGTH}`),
];

export const reapeatPassRules: Rule[] = [
  requireWithMessage("Подтвердите пароль."),
  repeatPassword,
  minLength(VALID_CONST.MIN_PASS_LENGTH, `Минимальная длинна пароля ${VALID_CONST.MIN_PASS_LENGTH}`),
  maxLength(VALID_CONST.MAX_PASS_LENGTH, `Максимальная длинна пароля ${VALID_CONST.MAX_PASS_LENGTH}`),
];

export const emailRules: Rule[] = [
  {
    type: "email",
    message: "Неправильный формат почты.",
  },
  requireWithMessage("Введите почту."),
];

export const usernameRules: Rule[] = [
  requireWithMessage("Введите логин."),
  minLength(VALID_CONST.MIN_USER_LENGTH, `Минимальная длинна логина ${VALID_CONST.MIN_USER_LENGTH}`),
  maxLength(VALID_CONST.MAX_USER_LENGTH, `Максимальная длинна логина ${VALID_CONST.MAX_USER_LENGTH}`),
];
