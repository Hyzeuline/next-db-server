import { serialize } from "v8";
import Todo from "../models/Todo";
import { TTodo } from "../types";

export const getTodos = async () => {
  const data: TTodo[] = await Todo.find();
  return serialize(data);
};
