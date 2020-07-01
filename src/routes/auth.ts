import express, { Router, Request, Response } from "express";
import { AuthController } from "../controllers/authController";

const authRouter: Router = express.Router();

authRouter.post("/register", AuthController.register);

authRouter.post("/login", AuthController.login);

export { authRouter };
