import { User } from "../models/User";
import { IUser } from "../interfaces/IUser";

const createUser = async (email: string, password: string): Promise<IUser> => {
  const user = await new User({
    email,
    password,
  });
  return user;
};

const saveUser = async (user: IUser) => {
  try {
    const savedUser = await user.save();
    return saveUser;
  } catch (e) {
    console.log(e);
  }
};

const getUserById = (id: string) => {
  //TODO
};

export { createUser, saveUser, getUserById };
