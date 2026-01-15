import { connectToDbIfNotConnected } from "@/app/middleware/connectToDbIfNotConnected";
import Todo from "@/app/models/Todo";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const todos = await Todo.find();
  return NextResponse.json(todos);
};

export const POST = async (request: NextRequest) => {
  try {
    await connectToDbIfNotConnected();
    const body = await request.json();
    if (!body.title) {
      throw new Error("Missing title");
    }
    await Todo.create({ tile: body.title, isDone: false });
    return NextResponse.json({ message: "todo created" }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    } else {
      return NextResponse.json({ message: "Error occured" }, { status: 500 });
    }
  }
};
