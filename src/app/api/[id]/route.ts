import Todo from "@/app/models/Todo";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const todo = await Todo.findById(params.id);
  return NextResponse.json(todo);
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const todo = await Todo.findById(params.id);
  if (!todo) return null;
  todo.isDone = !todo.isDone;
  await todo.save();
  return NextResponse.json({ message: "updated" });
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const todo = await Todo.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "deleted" });
};
