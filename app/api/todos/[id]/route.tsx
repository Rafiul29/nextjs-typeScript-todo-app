import connectMongoDB from "@/libs/mongodb";
import Todo from "@/models/todoSchema";
import { NextResponse } from "next/server";

// find a single todo
export async function GET(request: Request, { params }: { params: any }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { message: "Invalid request. Missing 'id' parameter." },
        { status: 400 }
      );
    }
    
    await connectMongoDB();
    const todo = await Todo.findById(id);
    return NextResponse.json(todo);

  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// update todo
export async function PUT(request: Request, { params }: { params: any }) {
  try {
    const { id } = params;
    const { title, status } = await request.json();

    if (!id) {
      return NextResponse.json(
        { message: "Invalid request. Missing 'id' parameter." },
        { status: 400 }
      );
    }
    await connectMongoDB();

   const todo= await Todo.findByIdAndUpdate(id, { title, status }, { new: true });
    return NextResponse.json(todo);

  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// delete todo
export async function DELETE(request: Request, { params }: { params: any }) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json(
        { message: "Invalid request. Missing 'id' parameter." },
        { status: 400 }
      );
    }

    await connectMongoDB();
   const todo= await Todo.findByIdAndRemove(id);
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
