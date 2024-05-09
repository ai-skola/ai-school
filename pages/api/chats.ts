import { User, Chat } from "../../lib/models";
import { NextApiRequest, NextApiResponse } from "next";
import getToken from "../../utils/getToken";
const jwt = require("jsonwebtoken");

const JWT_SECRET = "SH2MZ8M+[k8J*0#tXrTe{2GquV:bj";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { title } = req.body;
      const token = getToken(req);

      const decodedToken = jwt.verify(token, JWT_SECRET);
      const userId = decodedToken.userId;
      const user = await User.findById(userId);

      const newChat = new Chat({
        title,
      });

      await newChat.save();
      user.chats.push(newChat._id);
      await user.save();
      res
        .status(201)
        .json({ message: "Chat created successfully", chat: newChat });
    } catch (error) {
      console.error("Error creating chat:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
