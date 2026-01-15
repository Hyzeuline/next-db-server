import Todo from "@/models/Todo";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const todo = await Todo.findById(params);
  return NextResponse.json(todo);
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const todo = await Todo.findById(params);
  if (!todo) return;
  todo.isDone = !todo.isDone;
  await todo.save();
  return NextResponse.json({ message: "updated" });
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const todo = await Todo.findByIdAndDelete(params);
  return NextResponse.json({ message: "deleted" });
};
