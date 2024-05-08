import mongoose from "mongoose"

const MessageSchema: mongoose.Schema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: String
  },
  {timestamps: true}
)


const ChatSchema: mongoose.Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }]
  }
);

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
    chats: [{type: mongoose.Schema.Types.ObjectId, ref: "Chat"}]
  },
  {timestamps: true}
);

const User = mongoose.model("User", userSchema);
const Message = mongoose.model("Message", MessageSchema);
const Chat = mongoose.model("Chat", ChatSchema);

export { User, Message, Chat }