import { Schema, Document, Model, model } from "mongoose";

interface IUser extends Document {
  email: string;
  password: string;
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default model<IUser>("User", userSchema);
