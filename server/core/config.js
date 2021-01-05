require("dotenv").config();
const PORT = process.env.SERVER_PORT || 8080;
const MONGO_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@goprogress.r9lml.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const MONGO_CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

module.exports = {
  MONGO_URL,
  MONGO_CONFIG,
  PORT
}