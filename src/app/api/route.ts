import { NextRequest, NextResponse } from "next/server";
import Todo from "../models/Todo";

export const GET = async (request: NextRequest) => {
  const todos = await Todo.find();
  return NextResponse.json(todos);
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const todo = await Todo.create(body);
  return NextResponse.json(todo);
};
