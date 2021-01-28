import express from "express";
import path from "path";
import cors from "cors";
const { PORT } = require("./config");

export const app = express();

export const serverConnect = async () => {
  const buildPath = path.join(__dirname, "../static");
  const indexPath = path.join(__dirname, "../static/index.html")
  app.use(cors());
  app.use(express.json());
  app.use(express.static(buildPath));
  app.get("*", (_, res) => res.sendFile(indexPath));
  try {
    await app.listen(PORT)
  } catch (error) {
    throw error;
  }
}
