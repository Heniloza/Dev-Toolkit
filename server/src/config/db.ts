import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

export  async function connectDb() {

     const mongoUrl = process.env.MONGO_URL as string;

  if (!mongoUrl) {
    throw new Error("MONGO_URL is not defined in environment variables.");
  }
   try {
        await mongoose.connect(mongoUrl)
        console.log('Connected to mongoDb');
   } catch (error) {
        console.error("MongoDB connection error:", (error as Error).message);
   }
}