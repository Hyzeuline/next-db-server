"use client";
import createUser from "@/actions/createUser";
import { useActionState } from "react";

const SignUp = () => {
  const [error, formAction, isPending] = useActionState(createUser, null);

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <input type="email" name="email" placeholder="email" />
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="password" />
      <button disabled={isPending}>SignUp</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default SignUp;
