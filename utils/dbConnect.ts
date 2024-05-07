import mongoose from "mongoose";

export default async function dbConnect() {
  mongoose.connect(`mongodb+srv://<${process.env.USERNAME}>:<${process.env.PASSWORD}>@ai-school.d3kt5eb.mongodb.net/?retryWrites=true&w=majority&appName=AI-School`);
}