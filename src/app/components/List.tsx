"use client";

import { startTransition, useActionState } from "react";

import deleteTodo from "../actions/deleteTodo";
import checkedTodo from "../actions/checkedTodo";
import { TTodo } from "../types";

type Props = {
  data: TTodo[];
};

export const List = ({ data }: Props) => {
  const [deleteAction] = useActionState(deleteTodo, null);
  const [checkedAction] = useActionState(checkedTodo, null);

  return (
    <div className="flex gap-4">
      {data.map(todo => {
        return (
          <article key={todo._id} className="flex gap-4">
            <input
              type="checkbox"
              checked={todo.isDone}
              name="isDone"
              onChange={() => startTransition(() => checkedTodo(todo._id))}
            />
            <h2>{todo.title}</h2>
            <button onClick={() => startTransition(() => deleteTodo(todo._id))}>
              Trash
            </button>
          </article>
        );
      })}
    </div>
  );
};
