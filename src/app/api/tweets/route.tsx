import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient

export async function POST(req : NextRequest) {


    try {
        const json = await req.json()

        const tweet = await prisma.tweet.create({
            data: json
        });

        return NextResponse.json(tweet, {
            status: 200,
          });

    } catch (error: any) {

        return NextResponse.json(
            { error: "Failed to create tweet" },
            {
              status: 500,
            }
          );
    }
}

export async function GET(req : NextRequest) {

    const page_str = req.nextUrl.searchParams.get("page");
    const limit_str = req.nextUrl.searchParams.get("limit");
    const page = page_str ? parseInt(page_str, 10) : 1;
    const limit = limit_str ? parseInt(limit_str, 10) : 10;
    const skip = (page - 1) * limit;

    try {

        const tweets = await prisma.tweet.findMany({
            skip,
            take: limit,
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

export async function DELETE(req : NextRequest) {


    try {
        const tweets = await prisma.tweet.deleteMany({
        });

        return NextResponse.json(tweets, {
            status: 200,
          });

    } catch (error: any) {

        return NextResponse.json(
            { error: "Failed to delete tweets" },
            {
              status: 500,
            }
          );
    }
}