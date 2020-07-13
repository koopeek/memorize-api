import { Request, Response } from "express";
import mongoose from "mongoose";
import { createUser, saveUser, getUserByEmail } from "../services/userService";

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = getUserByEmail(email);

    if (user) {
      res.status(400).send("User already exists.");
    }

    const newUser = await createUser(email, password);
    const newUserSaved = await saveUser(newUser);

    res.status(200).send(newUserSaved);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};

const login = (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    //TODO
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

export { login, register };
