"use server";

import { connectToDbIfNotConnected } from "@/middleware/connectToDbIfNotConnected";
import User from "@/models/User";
import uid2 from "uid2";
import encBase64 from "crypto-js/enc-base64";
import { SHA256 } from "crypto-js";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const createUser = async (currentError: null | string, formData: FormData) => {
  try {
    await connectToDbIfNotConnected();
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");

    if (!email || !username || !password) throw new Error("Missing parameters");

    const emailAlreadyUsedBy = await User.findOne({ email: email });

    if (emailAlreadyUsedBy) throw new Error("Email already exist");

    const token = uid2(64);
    const salt = uid2(16);
    const hash = SHA256(password + salt).toString(encBase64);

    await User.create({
      email,
      username,
      token,
      hash,
      salt,
    });

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      expires: Date.now() + 1000 * 60 * 60 * 24 * 14,
    });
    redirect("/list/my-list");
  } catch (error) {
    if (error instanceof Error) {
      switch (error.message) {
        case "Missing parameters":
          return "Veuillez remplir tous les champs";
        case "Email already exist":
          return "Cet email est déjà utilisé";
        default:
          return "Une erreur est survenue";
      }
    } else {
      return "Une erreur est survenue";
    }
  }
};

export default createUser;
