import express, { Application } from "express";
import bodyParser from "body-parser";
import { authRouter } from "./routes/auth";
import { connectWithDatabase } from "./db/connect";

const app: Application = express();

app.use(bodyParser.json());

app.use("/user", authRouter);

app.listen(3000, () => console.log("App listen on port 3000"));

connectWithDatabase();
