import jwt from "jsonwebtoken";
const { SECRET } = require("../core/config");

export const getUser = (token: string) => {
  if (token) {
    try {
      const tokenValue = token.replace("Bearer ", "");
      const user = jwt.verify(tokenValue, SECRET);
      return user;
    } catch {
      return null;
    }
  }

  return null;
};