import dbConnect from "../../utils/dbConnect";
import runChat from "../../utils/runChat";
import { User, Message } from "../../lib/models";
import { NextApiRequest, NextApiResponse } from "next";

const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

export function getChat(req: NextApiRequest, res: NextApiResponse) {
  dbConnect();
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
  }

  const decoded = jwt.verify(token, JWT_SECRET);
  const userId = decoded.userId;
  const user = User.findById(userId).populate("chats");
  if (!user) {
    res.status(404).json({ message: "User not found" });
  }
  const chats = user.chats;
  return chats;
}

export function createChat(req: NextApiRequest, res: NextApiResponse) {}

export function deleteChat(req: NextApiRequest, res: NextApiResponse) {}

export function sendMessage(req: NextApiRequest, res: NextApiResponse) {}
