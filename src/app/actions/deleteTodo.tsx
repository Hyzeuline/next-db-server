"use server";

import { revalidatePath } from "next/cache";
import Todo from "../models/Todo";
import { connectToDbIfNotConnected } from "../middleware/connectToDbIfNotConnected";

const deleteTodo = async (id: string) => {
  await connectToDbIfNotConnected();
  await Todo.findByIdAndDelete(id);
  revalidatePath("/list");
};

export default deleteTodo;
