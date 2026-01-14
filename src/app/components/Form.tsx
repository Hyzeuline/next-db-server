"use client";

import { useActionState } from "react";
import { createTodo } from "../actions/createTodo";

const Form = () => {
  const [error, formAction, isPending] = useActionState(createTodo, null);

  return (
    <form action={formAction}>
      <input type="text" />
      <button disabled={isPending}>Ajouter la tâche</button>
    </form>
  );
};

export default Form;
