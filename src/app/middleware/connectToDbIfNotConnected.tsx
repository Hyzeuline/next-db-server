import mongoose from "mongoose";

export async function connectToDbIfNotConnected() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI as string);
  } else {
    console.log("Db already connected");
  }
}
