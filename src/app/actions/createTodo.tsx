import { connectToDbIfNotConnected } from "../middleware/connectToDbIfNotConnected";
import Todo from "../models/Todo";

export const createTodo = async (
  currentError: null | string,
  formData: FormData
) => {
  try {
    const title = formData.get("title");
    const isDone = false;
    if (!title) return "Veuillez remplir un titre";
    await connectToDbIfNotConnected();
    await Todo.create({
      title,
      isDone,
    });
    console.log("todo créée !");
    return null;
  } catch (error) {
    return "Une erreur est survenue";
  }
};
