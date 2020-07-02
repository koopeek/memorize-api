import mongoose from "mongoose";
import { CONFIG } from "../config/config";

const connectWithDatabase = (): void => {
  try {
    mongoose.connect(
      CONFIG.DB_CONNECT,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("DB connected!")
    );
  } catch (err) {
    console.log(err.message);
  }
};

export { connectWithDatabase };
