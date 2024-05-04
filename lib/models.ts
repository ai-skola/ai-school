import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 40
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 30
    },
  },
  {timestamps: true}
)

const MessageSchema = new mongoose.Schema(
  {
    sender: userSchema,
    text: String
  },
  {timestamps: true}
)

const ChatSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    messages: [MessageSchema]
  }
)