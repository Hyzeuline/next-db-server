import mongoose from "mongoose";

export async function connectToDbIfNotConnected() {
  if (
    mongoose.connection.readyState !== 1 &&
    mongoose.connection.readyState !== 2 &&
    process.env.MONGODB_URI
  ) {
    await mongoose.connect(process.env.MONGODB_URI as string);
  } else {
    console.log("Db already connected");
  }
}
