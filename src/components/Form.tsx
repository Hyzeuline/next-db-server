"use client";

import { createTodo } from "@/actions/createTodo";
import { useActionState } from "react";

const Form = () => {
  const [error, formAction, isPending] = useActionState(createTodo, null);

  return (
    <form action={formAction}>
      <input type="text" placeholder="tâches" name="title" />
      <button type="submit" disabled={isPending}>
        Ajouter la tâche
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default Form;
