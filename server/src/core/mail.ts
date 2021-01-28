import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";
import { MAIL } from "./config";

const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: MAIL.LOGIN,
      pass: MAIL.PASS,
    },
  }),
);

const mailOptions = {
  from: MAIL.LOGIN,
  to: "thenearx@gmail.com",
  subject: "Verify your email adress at www.go-progress.ru",
  text:
    "Это тестовое сообщение для подтверждения почты, что-бы зайти на свой аккаунт на сайте www.go-progress.ru",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
