const jwt = require("jsonwebtoken");
const { SECRET } = require("../core/config");

module.exports = getUser = (token) => {
  if (token) {
    try {
      const tokenValue = token.replace("Bearer", "");
      const user = jwt.verify(tokenValue, SECRET);
      return user;
    } catch {
      return null;
    }
  }

  return null;
};