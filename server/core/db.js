const mongoose = require("mongoose");
const { MONGO_URL, MONGO_CONFIG } = require("./config");

const dbConnect = async () => {
  try {
    await mongoose.connection.once("open", () => {
      console.log("Connected to DataBase success!");
    })
    await mongoose.connect(MONGO_URL, MONGO_CONFIG);
  } catch (error) {
    console.log(`Connect to DataBase failed with error: ${error}`);
    throw error
  }    
}

module.exports = dbConnect;