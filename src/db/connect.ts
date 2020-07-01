import mongoose from "mongoose";
import { CONFIG } from "../config/config";

const connectWithDatabase = () => {
  mongoose.connect(
    CONFIG.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("DB connected!")
  );
};

export { connectWithDatabase };
