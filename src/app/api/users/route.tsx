import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();

export async function POST(req: NextRequest) {

    try {
      
    const json = await req.json()
    
    const user = await prisma.user.create({
        data: {
          "username": "Frank",
          "userHandle": "Frank"
        }
    });

    return NextResponse.json(user, {
        status: 200,
      });

    } catch (error: any) {

        return NextResponse.json(
            { error: "Failed to create user" },
            {
              status: 500,
            }
          );
    }   
}

export async function GET(req: NextRequest) {

  try {

  const user = await prisma.user.findMany();

  return NextResponse.json(user, {
      status: 200,
    });

  } catch (error: any) {

      return NextResponse.json(
          { error: "Failed to find users" },
          {
            status: 500,
          }
        );
  }   
}