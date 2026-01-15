"use server";
import { connectToDbIfNotConnected } from "@/middleware/connectToDbIfNotConnected";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const disconnectUser = async () => {
  try {
    await connectToDbIfNotConnected();
    const cookieStore = await cookies();
    cookieStore.delete("token");
    redirect("/login");
  } catch (error) {
    throw new Error("Logout failed");
  }
};

export default disconnectUser;
