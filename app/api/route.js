import { connectDB } from "@/lib/confiq/db"
import todoModel from "@/lib/models/todoSchema";
import { NextResponse } from "next/server"

const LoadDB = async()=>{
    await connectDB()
}

LoadDB();

export async function GET(request){
    const todos = await todoModel.find({})
    return NextResponse.json(todos)
}

export async function POST(request){
    const {title,description} = await request.json()
    await todoModel.create({
        title,
        description
    })
    return NextResponse.json({msg:"Todo Created"})
}

