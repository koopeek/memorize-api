import dotenv from "dotenv";

dotenv.config();

const CONFIG = {
  DB_CONNECT: process.env.DB_CONNECT,
};

export { CONFIG };
