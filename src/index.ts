import express, { Application } from "express";
import mongoose from "mongoose";
import { authRouter } from "./routes/auth";
import { CONFIG } from "./config";

const app: Application = express();

mongoose.connect(
  CONFIG.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("DB CONNECTED")
);

app.use("/user", authRouter);

app.listen(3000, () => console.log("App listen on port 3000"));
