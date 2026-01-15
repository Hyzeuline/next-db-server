"use server";

import { revalidatePath } from "next/cache";
import Todo from "../models/Todo";

export const createTodo = async (
  currentError: null | string,
  formData: FormData
) => {
  try {
    const title = formData.get("title");
    if (!title) throw new Error("Missing title");

    await Todo.create({
      title: title,
      isDone: false,
    });
    revalidatePath("/list");
    return null;
  } catch (error) {
    if (error instanceof Error) {
      switch (error.message) {
        case "Missing title":
          return "Veuillez donner un nom à votre nouvelle tache";
        default:
          return "Une erreur est survenue";
      }
    } else {
      return "Une erreur est survenue";
    }
  }
};
