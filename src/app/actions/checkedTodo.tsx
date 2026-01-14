"use server";

import { revalidatePath } from "next/cache";
import Todo from "../models/Todo";

const checkedTodo = async (id: string) => {
  const todo = await Todo.findById(id);
  if (!todo) return;

  todo.isDone = !todo.isDone;
  await todo.save();
  revalidatePath("/list");
};

export default checkedTodo;
