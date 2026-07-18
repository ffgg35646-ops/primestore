import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(request: Request) {

  try {

    await connectDB();

    const {
      email,
      password
    } = await request.json();

    console.log("LOGIN EMAIL:", email);

    const user = await User.findOne({
      email,
    });

    console.log("USER FOUND:", !!user);

    if (!user) {

      return NextResponse.json(
        {
          message: "Invalid email or password",
        },
        {
          status: 401,
        }
      );

    }

    console.log("DB PASSWORD:", user.password);

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    console.log("PASSWORD MATCH:", isMatch);

    if (!isMatch) {

      return NextResponse.json(
        {
          message: "Invalid email or password",
        },
        {
          status: 401,
        }
      );

    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d",
      }
    );

    const response = NextResponse.json(
      {
        message: "Login successful",
        user: {
          name: user.name,
          email: user.email,
        },
      },
      {
        status: 200,
      }
    );

    response.cookies.set(
      "primestore_token",
      token,
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      }
    );

    return response;

  } catch (error) {

    console.error(error);

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
