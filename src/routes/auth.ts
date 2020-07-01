import express, { Router, Request, Response } from "express";

const authRouter: Router = express.Router();

authRouter.post("/register", (req: Request, res: Response) => {
  res.send("Register endpoint");
});

authRouter.post("/login", (req: Request, res: Response) => {
  res.send("Login endpoint");
});

export { authRouter };
