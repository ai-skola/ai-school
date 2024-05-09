import mongoose from "mongoose";

export default async function dbConnect() {
  try {
    await mongoose.connect(
      "mongodb://sabashatirishvili:5yTrqNx9fJMmnoGH@ac-qtsppbu-shard-00-00.vgtfre5.mongodb.net:27017,ac-qtsppbu-shard-00-01.vgtfre5.mongodb.net:27017,ac-qtsppbu-shard-00-02.vgtfre5.mongodb.net:27017/?ssl=true&replicaSet=atlas-22qqk8-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Ai-School"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}
