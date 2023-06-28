import express, { application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import allRoutes from "./routes/index";
import { swaggerDocument } from "./swagger";

const app = express();

app.use(morgan("combined"));
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1", allRoutes);
app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome to Login Flow API" });
});

export default app;
