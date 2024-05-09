import dbConnect from "../../utils/dbConnect";
import { User } from "../../lib/models";
import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JWT_SECRET = "SH2MZ8M+[k8J*0#tXrTe{2GquV:bj"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: "Invalid email or password." });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({message: "Invalid email or password."})
      }

      const token = jwt.sign({userId: user._id}, JWT_SECRET, {
        expiresIn: "24h"
      });

      res.setHeader('Authorization', `Bearer ${token}`);
      res.status(200).json({ token })
    } catch (error) {
      console.error("Loggin error: ", error);
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
