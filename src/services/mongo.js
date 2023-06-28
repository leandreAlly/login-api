import dotenv from "dotenv";
import mongoose from "mongoose";
import color from "colors";

dotenv.config();

const DB_URL = process.env.MONGO_URL;

mongoose.connection.once("open", () => {
  console.log("Database Connected!".blue.underline);
});

const mongoConnect = async () => {
  await mongoose.connect(DB_URL);
};

const mongoDisconnect = async () => {
  await mongoose.disconnect();
};

export { mongoConnect, mongoDisconnect };
