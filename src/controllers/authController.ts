import { Request, Response } from "express";
import { createUser, saveUser } from "../services/userService";

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    console.log("REGISTER ENDPOINT");

    const user = await createUser(email, password);

    console.log("Created");
    console.log(user);
    await user.save();

    console.log("Saved");
    // const savedUser = await user.save();
    // console.log("zapisany user:");
    // console.log(savedUser);
    // res.send(savedUser);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
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
