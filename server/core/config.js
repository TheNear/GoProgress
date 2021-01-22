require("dotenv").config();
const PORT = process.env.SERVER_PORT || 8080;
const MONGO_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@goprogress.r9lml.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const MONGO_CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const SALT = parseInt(process.env.SALT) || 7;
const SECRET = process.env.SECRET || "SimpleSec";
const MAIL = {
  LOGIN: process.env.MAIL_LOGIN,
  PASS: process.env.MAIL_PASS,
}

module.exports = {
  MONGO_URL,
  MONGO_CONFIG,
  PORT,
  SALT,
  SECRET,
  MAIL,
}