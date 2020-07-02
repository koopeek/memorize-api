import dotenv from "dotenv";

dotenv.config();

const CONFIG = {
  APP_PORT: 3000,
  DB_CONNECT: process.env.DB_CONNECT,
};

export { CONFIG };
