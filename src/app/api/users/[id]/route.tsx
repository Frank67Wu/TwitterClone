import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {

    try {

    const id = params.id

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
    
    const user = await prisma.user.findUnique({
        where: {id: id}
    });

    return NextResponse.json(user, {
        status: 200,
      });

    }

    else {

      const userhandle = await prisma.user.findUnique({
        where : {userHandle : id}
      })
  
      if (userhandle) {
        return NextResponse.json(userhandle, {
          status: 200,
        });
      }

      else {
        return NextResponse.json({},{
          status: 404
        })
      }
    }

    } catch (error: any) {

      console.log(error)

        return NextResponse.json(
            { error: "Failed to find user" },
            {
              status: 500,
            }
          );
    }  
}