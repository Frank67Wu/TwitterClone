import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {

    try {

    const json = await req.json()

    bcrypt.hash(json.password, 10, function(err, hash) {
    });

    const password = bcrypt.hashSync(json.password, 10)

    const user = await prisma.user.create({
      data: {
        "username": json.username,
        "userHandle": json.userHandle, 
        "password" : password
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