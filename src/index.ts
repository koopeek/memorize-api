import express, { Application } from "express";
import bodyParser from "body-parser";
import { router } from "./routes/index";
import { connectWithDatabase } from "./db/connect";

const app: Application = express();

//Call middlewares
app.use(bodyParser.json());

//Set all routes
app.use("/", router);

app.listen(3000, () => console.log("App listen on port 3000"));

connectWithDatabase();
