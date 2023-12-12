import { NextResponse } from "next/server";
import bcript from "bcryptjs";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(req){
    try {
    const {name, email, password} = await req.json();
    const hashedPassword = await bcript.hash(password, 10);
    await connectMongoDB();
    await User.create({name, email, password: hashedPassword});
    return NextResponse.json({message:"User Registered"},{status:201});
    } catch (error) {
        return NextResponse.json({message: "An error occurred while registering the user."}, {status: 500});
    }    
}