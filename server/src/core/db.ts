import mongoose from "mongoose";
import { MONGO_URL, MONGO_CONFIG } from "./config";
import { CONSOLE } from "../helpers/cosnoleColor";

export const dbConnect = async (): Promise<void> => {
  try {
    await mongoose.connection.once("open", () => {
      console.log(CONSOLE.GREEN, "Connected to DataBase success!");
    })
    await mongoose.connect(MONGO_URL, MONGO_CONFIG);
  } catch (error) {
    throw error
  }    
}