// src/controllers/user.controller.ts

import { Request, Response } from "express";
import User, { IUser } from "../model/user";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email } = req.body;

    const user: IUser = new User({ name, email });

    const newUser: IUser = await user.save();
    
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create user" });
  }
};
