import { Request, Response, NextFunction } from "express";
import jsonwebtoken from "jsonwebtoken";
import { CONFIG } from "../config/config";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string = req.headers["authorization"];

  if (!token) {
    res.status(403).send("Access denied.");
  }

  try {
    jsonwebtoken.verify(token, CONFIG.JWT_SECRET, (err: object): void => {
      if (err) {
        res.status(403).send("Access denied.");
      } else {
        next();
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};
