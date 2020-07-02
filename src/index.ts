import express, { Application } from "express";
import bodyParser from "body-parser";
import { routes } from "./routes/index";
import { connectWithDatabase } from "./loaders/mongoose";
import { CONFIG } from "./config/config";

const app: Application = express();

//Call middlewares
app.use(bodyParser.json());

//Set all routes
app.use("/", routes);

app.listen(CONFIG.APP_PORT, () =>
  console.log(`App listen on port ${CONFIG.APP_PORT}`)
);

connectWithDatabase();
