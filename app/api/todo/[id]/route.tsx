import connectMongoDB from "@/libs/mongodb";
import Todo from "@/models/todoSchema";
import { NextResponse } from "next/server";


export async function PUT(request:Request,{params}:{params:any}) {
   try {
      const {id}=params;
      const { title,status} = await request.json();
      console.log(title)
    if (!id) {
      return NextResponse.json(
        { message: "Invalid request. Missing 'id' parameter." },
        { status: 400 }
      );
    }
    await connectMongoDB();
 
   await Todo.findByIdAndUpdate(id,{title,status},{new:true});
    return NextResponse.json({ message: "Todo was updated" }, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
 
}





export async function DELETE(request:Request,{params}:{params:any}) {
  try {
      const {id}=params;
    if (!id) {
      return NextResponse.json(
        { message: "Invalid request. Missing 'id' parameter." },
        { status: 400 }
      );
    }

    await connectMongoDB();
    await Todo.findByIdAndRemove(id);
    return NextResponse.json({ message: "Todo was deleted" }, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
 
}
