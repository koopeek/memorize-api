import { User } from "../models/User";
import { IUser } from "../interfaces/IUser";

const createUser = async (
  email: IUser["email"],
  password: IUser["password"]
): Promise<IUser> => {
  const user: IUser = new User({
    email,
    password,
  });
  return user;
};

const saveUser = async (user: IUser): Promise<IUser> => {
  try {
    const savedUser: IUser = await user.save();
    return savedUser;
  } catch (e) {
    console.log(e);
  }
};

const getUserByEmail = async (email: IUser["email"]): Promise<IUser | null> => {
  try {
    const user: IUser = await User.findOne({ email: email });
    return user;
  } catch (e) {
    console.log(e);
  }
};

export { createUser, saveUser, getUserByEmail };
