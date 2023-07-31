import connectMongoDB from "@/libs/mongodb";
import Todo from "@/models/todoSchema";
import { NextResponse } from "next/server";







export async function DELETE(request,{params}) {
  try {
   // const  id  = request.nextUrl.searchParams.get("id")
      const {id}=params;
      console.log(id)
    if (!id) {
      return NextResponse.json(
        { message: "Invalid request. Missing 'id' parameter." },
        { status: 400 }
      );
    }

    await connectMongoDB();
    await Todo.findByIdAndRemove(id);
    return NextResponse.json({ message: "Todo deleted" }, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
 
}
