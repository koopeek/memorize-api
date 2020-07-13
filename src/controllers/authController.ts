import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { CONFIG } from "../config/config";
import { createUser, saveUser, getUserByEmail } from "../services/userService";
import { IUser } from "../interfaces/IUser";

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user: IUser = await getUserByEmail(email);

    if (user) {
      res.status(400).send("User with given e-mail address already exists.");
    }

    const salt: string = await bcrypt.genSalt(10);
    const hashedPassword: string = await bcrypt.hash(password, salt);

    const newUser: IUser = await createUser(email, hashedPassword);
    const newUserSaved: IUser = await saveUser(newUser);

    res.status(200).send(newUserSaved);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user: IUser = await getUserByEmail(email);

    if (!user) {
      res.status(404).send("Invalid e-mail address or password.");
    }

    const isPasswordCorrect: boolean = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      res.status(404).send("Invaild password.");
    }

    const token: string = jsonwebtoken.sign(
      { _id: user.id },
      CONFIG.JWT_SECRET
    );

    res.status(200).send(token);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};

export { login, register };
