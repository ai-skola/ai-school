import dbConnect from "../../utils/dbConnect";
import mongoose from "mongoose";
import { User } from "../../lib/models";
import { NextApiRequest, NextApiResponse } from "next";
const bcrypt = require("bcrypt");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "POST") {
    const { username, email, password } = req.body;

    const existingUser = await User.find({
      username: username,
      email: email,
      password: password,
    });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    
    const hashedPassword = bcrypt.hash(password, 10);
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
  }
}
