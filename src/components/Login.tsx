"use client";

import loginUser from "@/actions/loginUser";
import { useActionState } from "react";

const Login = () => {
  const [error, formAction, isPending] = useActionState(loginUser, null);
  return (
    <form action={formAction} className="flex flex-col gap-2 m-4">
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <button disabled={isPending}>Log In</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default Login;
