import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient

export async function PATCH(req : NextRequest, {params} : {params: {id : string, userId: string}}) {

    try {

        const id = params.id
        const userId = params.userId

        const tweet = await prisma.tweet.update({
            where: {id : id},
            data: { likedBy: {connect : {id: userId}}}
        });

        const user = await prisma.user.update({
            where: {id : userId},
            data: { likedTweets: {connect : {id: id}}}
        });

        return NextResponse.json(tweet, {
            status: 200,
          });

    } catch (error: any) {

        console.log(error)

        return NextResponse.json(
            { error: "Failed to like tweet" },
            {
              status: 500,
            }
          );
    }
}
