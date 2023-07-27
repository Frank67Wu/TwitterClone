import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();

export async function DELETE(req: NextRequest, {params}: {params: {id: string}}) {

    try {

    console.log(params)

    const id = params.id
    
    const deletedUser = await prisma.user.delete({
        where: {id : id}
    });

    return NextResponse.json(deletedUser, {
        status: 200,
      });

    } catch (error: any) {

        return NextResponse.json(
            { error: "Failed to delete user" },
            {
              status: 500,
            }
          );

    }  
}

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {

    try {

    const id = params.id
    
    const user = await prisma.user.findUnique({
        where: {id: id}
    });

    return NextResponse.json(user, {
        status: 200,
      });

    } catch (error: any) {

        return NextResponse.json(
            { error: "Failed to find user" },
            {
              status: 500,
            }
          );
    }  
}