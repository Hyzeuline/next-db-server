"use server";

import { revalidatePath } from "next/cache";
import Todo from "../models/Todo";

const deleteTodo = async (id: string) => {
  await Todo.findByIdAndDelete(id);
  revalidatePath("/list");
};

export default deleteTodo;
