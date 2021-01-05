const express = require("express");
const { PORT } = require("./config");
const path = require("path");

const app = express();

const serverConnect = async () => {
  const buildPath = path.join(__dirname, "../../build");
  const indexPath = path.join(__dirname, "../../build/index.html")
  
  app.use(express.json());
  app.use(express.static(buildPath));
  app.get("*", (_, res) => res.sendFile(indexPath));
  try {
    await app.listen(PORT)
  } catch (error) {
    throw error;
  }
}

module.exports = {
  serverConnect,
  app
};