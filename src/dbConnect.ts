import mongoose from "mongoose";
import { CONFIG } from "./config";

const conntectWithDatabase = () => {
  mongoose.connect(
    CONFIG.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("DB connected!")
  );
};

export { conntectWithDatabase };
