import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB) return console.log("Mongodb_url not found");
  if (!isConnected) return console.log("already connected");

  try {
    await mongoose.connect(process.env.MONGODB);
    isConnected = true;

    console.log("connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
