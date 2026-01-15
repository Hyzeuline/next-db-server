import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  token: String,
  salt: String,
  hash: String,
});

export default mongoose.models.User || mongoose.model("User", userSchema);
