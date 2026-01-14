"use client";
import { getTodos } from "../querys/getTodos";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const List = async () => {
  const data = await getTodos();

  return;
  <div>
    {data.map(todo => {
      return (
        <article key={todo._id}>
          <input type="checkbox" name="isDone" />
          <h2>{todo.title}</h2>
          <DeleteOutlineIcon />
        </article>
      );
    })}
  </div>;
};

export default List;
