import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import connectDB from "@/lib/mongodb";
import User from "@/models/User";


export async function POST(request: Request) {

  try {

    await connectDB();


    const body = await request.json();


    const {
      name,
      email,
      password
    } = body;



    const existingUser = await User.findOne({
      email,
    });


    if (existingUser) {

      return NextResponse.json(
        {
          message: "User already exists",
        },
        {
          status: 400,
        }
      );

    }



    const hashedPassword = await bcrypt.hash(
      password,
      10
    );



    await User.create({

      name,

      email,

      password: hashedPassword,

    });



    return NextResponse.json(
      {
        message: "Account created successfully",
      },
      {
        status: 201,
      }
    );



  } catch (error) {


    return NextResponse.json(
      {
        message: "Server error",
      },
      {
        status: 500,
      }
    );


  }

}
