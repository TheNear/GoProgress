const jwt = require("jsonwebtoken");

console.log(jwt.sign({
  email: "test@mail.ru",
  password: "govno, govna",
  name: "petuh",
}, "SecretStringForAuth"));