import { config } from "dotenv";
config();

export const PORT = process.env.SERVER_PORT || 8080;
export const MONGO_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@goprogress.r9lml.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
export const MONGO_CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

export const SALT = process.env.SALT ? parseInt(process.env.SALT) : 7;
export const SECRET = process.env.SECRET || "SimpleSec";
export const MAIL = {
  LOGIN: process.env.MAIL_LOGIN,
  PASS: process.env.MAIL_PASS,
}