import isAuthenticated from "@/middleware/isAuthenticated";
import { redirect } from "next/navigation";

const mylistpage = async () => {
  const isAuth = await isAuthenticated();
  if (!isAuth) {
    redirect("/");
  }
  return <h2>my list</h2>;
};

export default mylistpage;
