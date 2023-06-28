import http from "http";
import dotenv from "dotenv";
import { mongoConnect } from "./services/mongo";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

const startServer = async () => {
  mongoConnect();
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
