"use server";

import Todo from "@/models/Todo";
import { TTodo } from "@/types";

import serialize from "@/utils/serialize";

export const getTodos = async () => {
  const data: TTodo[] = await Todo.find();
  return serialize(data);
};
