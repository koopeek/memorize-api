import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/IUser";

const userSchema: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default model<IUser>("User", userSchema);
