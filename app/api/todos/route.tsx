import connectMongoDB from "@/libs/mongodb";
import Todo from "@/models/todoSchema";
import { NextResponse } from "next/server";

// post a new todo
export async function POST(request:Request) {
  try {
    const { title,status } = await request.json();
    await connectMongoDB();
   const todo= await Todo.create({ title ,status});
    return NextResponse.json(todo);

  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// get all todos
export async function GET() {
  try {
    await connectMongoDB();
    const todo = await Todo.find().sort({ createdAt: -1 });

    if (!todo) {
      return NextResponse.json({ message: "Todo not found." }, { status: 404 });
    }

    return NextResponse.json(todo);

  } catch (error) {

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );

  }
}

