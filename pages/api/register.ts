import dbConnect from "../../utils/dbConnect";
import { User } from "../../lib/models";
import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

const bcrypt = require("bcrypt");
const saltRounds = 10;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "POST") {
    const { username, phone, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        username,
        phone,
        email,
        password: hashedPassword,
      });

      await newUser.save();

      res.status(201).json({ message: "User created successfully" });
  } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
