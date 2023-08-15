import { PrismaClient } from "@prisma/client";
import { cookies } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient

export async function GET(req : NextRequest, {params} : {params: {id : string}}) {

    try {

      console.log(cookies().get('sid'))

        const id = params.id

        const tweet = await prisma.user.findUnique({
            where: {id : id}
        });

        const bookmarks = tweet?.bookmarkedTweetsId

        return NextResponse.json(bookmarks, {
            status: 200,
          });

    } catch (error: any) {

        return NextResponse.json(
            { error: "Failed to find tweet" },
            {
              status: 500,
            }
          );
    }
}

