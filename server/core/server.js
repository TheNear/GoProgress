const express = require("express");
const { PORT } = require("./config");
const path = require("path");

const serverConnect = async () => {
  const buildPath = path.join(__dirname, "../../build");
  const indexPath = path.join(__dirname, "../../build/index.html")
  const app = express();

  app.use(express.json());
  app.use(express.static(buildPath));
  app.get("*", (_, res) => res.sendFile(indexPath));
  try {
    await app.listen(PORT, () => {
      console.log(`Server started on PORT: ${PORT}`);
    })
  } catch (error) {
    throw error;
  }
}

module.exports = serverConnect;