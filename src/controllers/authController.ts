import { Request, Response } from "express";

class AuthController {
  static register = (req: Request, res: Response) => {
    // Actions connected with register user
    res.send("Register endpoint!");
  };

  static login = (req: Request, res: Response) => {
    //Actions connected with login user
    res.send("Login endpoint!");
  };
}

export { AuthController };
