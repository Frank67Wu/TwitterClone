import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient

export async function GET(req : NextRequest, {params} : {params: {id : string}})  {

    try {

        const page_str = req.nextUrl.searchParams.get("page");
        const limit_str = req.nextUrl.searchParams.get("limit");
        const page = page_str ? parseInt(page_str, 10) : 1;
        const limit = limit_str ? parseInt(limit_str, 10) : 10;
        const skip = (page - 1) * limit;

        const id = params.id
        const user = await prisma.user.findUnique({
            where: {id : id}
        })

        const following = user?.followingIDs

        const tweets = await prisma.tweet.findMany({
            where : {id : {in : following} },
            skip,
            take: limit,
            orderBy: { createdAt: "desc" }
        })

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
