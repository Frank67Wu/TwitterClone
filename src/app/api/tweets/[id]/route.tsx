import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient


export async function DELETE(req : NextRequest, {params} : {params: {id : string}}) {

    try {

        const id = params.id

        const tweet = await prisma.tweet.delete({
            where: {id : id}
        });

        return NextResponse.json(tweet, {
            status: 200,
          });

    } catch (error: any) {

        return NextResponse.json(
            { error: "Failed to delete tweet" },
            {
              status: 500,
            }
          );
    }
}

export async function GET(req : NextRequest, {params} : {params: {id : string}}) {

    try {

        const id = params.id

        const tweet = await prisma.tweet.findUnique({
            where: {id : id}
        });

        return NextResponse.json(tweet, {
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