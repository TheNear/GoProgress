const mongoose = require("mongoose");
const { MONGO_URL, MONGO_CONFIG } = require("./config");
const { CONSOLE_GREEN } = require("../helpers/cosnoleColor");

const dbConnect = async () => {
  try {
    await mongoose.connection.once("open", () => {
      console.log(CONSOLE_GREEN, "Connected to DataBase success!");
    })
    await mongoose.connect(MONGO_URL, MONGO_CONFIG);
  } catch (error) {
    throw error
  }    
}

module.exports = dbConnect;