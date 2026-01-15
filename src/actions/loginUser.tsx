"use server";
import { connectToDbIfNotConnected } from "@/middleware/connectToDbIfNotConnected";
import User from "@/models/User";
import encBase64 from "crypto-js/enc-base64";
import { SHA256 } from "crypto-js";
import { redirect } from "next/navigation";

const loginUser = async (currentError: null | string, formData: FormData) => {
  try {
    await connectToDbIfNotConnected();
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) throw new Error("Missing parameters ");

    const emailDoesExist = await User.findOne({ email: email });

    if (!emailDoesExist) throw new Error("Email doesn't exist");

    const salt = emailDoesExist.salt;
    const hash = emailDoesExist.hash;
    const newHash = SHA256(password + salt).toString(encBase64);

    if (hash !== newHash) throw new Error("Password or email not valid !");
    redirect("/list/my-list");
  } catch (error) {
    if (error instanceof Error) {
      switch (error.message) {
        case "Missing parameters":
          return "Veuillez remplir tous les champs";
        case "email doesn't exist":
          return "L'email n'existe pas";
        case "Email or password not valid":
          return "email ou password non valide";
        default:
          return "Une erreur est survenue";
      }
    } else {
      return "Une erreur est survenue";
    }
  }
};

export default loginUser;
