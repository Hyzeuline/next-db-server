import { cookies } from "next/headers";
import User from "@/models/User";

import { TUser } from "@/types";
import { connectToDbIfNotConnected } from "./connectToDbIfNotConnected";

const isAuthenticated = async () => {
  await connectToDbIfNotConnected();
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return false;

  const getInfo: null | Omit<TUser, "salt" | "hash" | "token"> =
    await User.findOne({
      token: token,
    }).select("email username token");

  if (!getInfo) return false;

  return getInfo;
};

export default isAuthenticated;
