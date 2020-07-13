import { User } from "../models/User";
import { IUser } from "../interfaces/IUser";

const createUser = async (email: string, password: string): Promise<IUser> => {
  const user = await new User({
    email,
    password,
  });
  return user;
};

const saveUser = async (user: IUser): Promise<IUser> => {
  try {
    const savedUser = await user.save();
    return savedUser;
  } catch (e) {
    console.log(e);
  }
};

const getUserByEmail = async (email: IUser["email"]): Promise<IUser | null> => {
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch (e) {
    console.log(e);
  }
};

const getUserById = (id: string) => {
  //TODO
};

export { createUser, saveUser, getUserById, getUserByEmail };
