"use client";

import { startTransition } from "react";

import deleteTodo from "../actions/deleteTodo";
import checkedTodo from "../actions/checkedTodo";
import { TTodo } from "../types";

type Props = {
  data: TTodo[];
};

export const List = ({ data }: Props) => {
  return (
    <div className="m-2">
      {data.map(todo => {
        return (
          <div key={todo._id} className=" flex flex-row gap-4">
            <input
              type="checkbox"
              checked={todo.isDone}
              name="isDone"
              onChange={() => startTransition(() => checkedTodo(todo._id))}
            />
            <h2>{todo.title}</h2>
            <button onClick={() => deleteTodo(todo._id)}>Trash</button>
          </div>
        );
      })}
    </div>
  );
};
