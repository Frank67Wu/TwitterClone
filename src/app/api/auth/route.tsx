import { PrismaClient } from "@prisma/client";
import { cookies } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient

export async function POST(req : NextRequest) {

    try {

        const cookie = cookies().get('sid')?.value

        const json = await req.json()

        const token = await prisma.session.findFirst({
            where: {sessionToken : cookie},
        });

        if (token && Date.now() > token?.expires.getTime()) {
            prisma.session.delete({
                where : {sessionToken : cookie}
            })

            return NextResponse.json({
                error: "expired"
            }, {
                status: 401
            })
        }

        if (token?.userId == json.userId) {
            return NextResponse.json({}, {
                status : 200
            })
        }

    } catch (error: any) {

        return NextResponse.json(
            { error: "" },
            {
              status: 500,
            }
          );
    }
}
