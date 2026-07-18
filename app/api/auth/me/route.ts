import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {

  try {

    await connectDB();

    const cookieStore = await cookies();

    const token = cookieStore.get(
      "primestore_token"
    )?.value;

    if (!token) {

      return NextResponse.json(
        {
          loggedIn: false,
        },
        {
          status: 401,
        }
      );

    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as {
      id: string;
    };

    const user = await User.findById(decoded.id);

    if (!user) {

      return NextResponse.json(
        {
          loggedIn: false,
        },
        {
          status: 401,
        }
      );

    }

    return NextResponse.json({

      loggedIn: true,

      user: {
        name: user.name,
        email: user.email,
      },

    });

  } catch {

    return NextResponse.json(
      {
        loggedIn: false,
      },
      {
        status: 401,
      }
    );

  }

}
