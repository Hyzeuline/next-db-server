"use server";

import { revalidatePath } from "next/cache";
import Todo from "../models/Todo";
import { TTodoDocument } from "../types";
import { connectToDbIfNotConnected } from "../middleware/connectToDbIfNotConnected";

const checkedTodo = async (id: string) => {
  await connectToDbIfNotConnected();
  const todo: TTodoDocument | null = await Todo.findById(id);
  if (!todo) return;

  todo.isDone = !todo.isDone;
  await todo.save();
  revalidatePath("/list");
};

export default checkedTodo;

//serialize pour enlever les méthodes mongoose invisibles
