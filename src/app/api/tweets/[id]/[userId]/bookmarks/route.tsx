import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient

export async function PATCH(req : NextRequest, {params} : {params: {id : string, userId: string}}) {

    try {

        const id = params.id
        const userId = params.userId

        const tweet = await prisma.tweet.findFirst({
            where : {id : id}
        })

        if (tweet?.bookmarkedById.includes(userId)) {
            
            const tweet1 = await prisma.tweet.update({
                where: {id : id},
                data: { bookmarkedBy: {disconnect : {id: userId}}}
            });
    
            const user = await prisma.user.update({
                where: {id : userId},
                data: { bookmarkedTweets: {disconnect : {id: id}}}
            });
        }

        const tweet1 = await prisma.tweet.update({
            where: {id : id},
            data: { bookmarkedBy: {connect : {id: userId}}}
        });

        const user = await prisma.user.update({
            where: {id : userId},
            data: { bookmarkedTweets: {connect : {id: id}}}
        });

        return NextResponse.json(tweet, {
            status: 200,
          });

    } catch (error: any) {

        console.log(error)

        return NextResponse.json(
            { error: "Failed to bookmark tweet" },
            {
              status: 500,
            }
          );
    }
}
