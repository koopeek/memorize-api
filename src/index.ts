import express, { Application } from "express";
import bodyParser from "body-parser";
import { authRouter } from "./routes/auth";
import { conntectWithDatabase } from "./dbConnect";

const app: Application = express();

app.use(bodyParser.json());

app.use("/user", authRouter);

app.listen(3000, () => console.log("App listen on port 3000"));

conntectWithDatabase();
