import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {

    try {

    const id = params.id
    const uniqueUsers : string [] = []
    const userInfo : any [] = []
    
    const messages = await prisma.message.findMany({
        where: {
           OR : [
            { senderId : id },
            { receiverId: id }
        ]
        },
        orderBy: {
            createdAt : "desc"
        }
    });

    messages.filter((message) => {
        if (message.senderId != id && !uniqueUsers.includes(message.senderId)) {
            uniqueUsers.push(message.senderId)
            userInfo.push([message.senderId, message.content, message.createdAt.toString().slice(0, 10)])
            return
        }
        else if (message.receiverId != id && !uniqueUsers.includes(message.receiverId)) {
            uniqueUsers.push(message.receiverId)
            userInfo.push([message.receiverId, message.content, message.createdAt.toString().slice(0,10)])
            return
        }
    })

    for (let i = 0; i < userInfo.length ; i++) {
        const info = await prisma.user.findFirst({
            where : {id : uniqueUsers[i]}
        })
        userInfo[i].push(...[info?.username, info?.userHandle])
        
    }

    return NextResponse.json(userInfo, {
        status: 200,
      });

    } catch (error: any) {

        console.log(error)

        return NextResponse.json(
            { error: "Failed to get messages" },
            {
              status: 500,
            }
          );

    }  
}