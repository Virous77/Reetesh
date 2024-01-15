import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import mongoose from "mongoose";
import projectRoutes from "./routes/index.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(helmet());

app.use("/api/v1", projectRoutes);

app.use("/", (req, res) => {
  res.send("Welcome to my den!");
});

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong, Try again!";

  return res.status(errorStatus).json({
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
    success: false,
  });
});

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`servers running on ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });
