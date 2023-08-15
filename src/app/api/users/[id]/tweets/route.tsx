import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient



export async function GET(req : NextRequest, {params}: {params : {id : string}}) {


    try {

        const id = params.id

        const tweets = await prisma.tweet.findMany({
            where: {authorId : id},
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json(tweets, {
            status: 200,
          });

    } catch (error: any) {

        return NextResponse.json(
            { error: "Failed to find tweets" },
            {
              status: 500,
            }
          );
    }
}