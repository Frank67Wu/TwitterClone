import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();


export async function GET(req: NextRequest, {params}: {params: {id: string, messagingId: string}}) {

    try {

    const messagerId = params.id
    const messagingId = params.messagingId

    if (messagerId ==  messagingId) {
        return
    }
    

    const messages = await prisma.message.findMany({
        where: {OR : [{
            senderId : messagingId,
            receiverId: messagerId
        }, {
            receiverId : messagingId,
            senderId: messagerId 
        }]}
        , orderBy: { createdAt: "asc" }
    })


    return NextResponse.json(messages, {
        status: 200,
      });

    } catch (error: any) {
        
        return NextResponse.json(
            { error: "Failed to get messages" },
            {
              status: 500,
            }
          );

    }  
}

export async function POST(req: NextRequest, {params}: {params: {id: string, messagingId: string}}) {

    try {

    const json = await req.json()
    const content = json.content

    const messagerId = params.id
    const messagingId = params.messagingId

    if (messagerId ==  messagingId) {
        return
    }

    const message = await prisma.message.create({
        data : {
            content : content,
            senderId : messagerId,
            receiverId: messagingId
        }
    })

    await prisma.user.update({
        where: {id : messagerId},
        data : {messagesSent : {connect : {id: message.id}}}
    })

    await prisma.user.update({
        where: {id : messagingId},
        data : {messagesReceived : {connect : {id: message.id}}}
    })

    const newMessage =  await prisma.message.findUnique({
        where : {id : message.id}
    })

    return NextResponse.json(newMessage, {
        status: 200,
      });

    } catch (error: any) {

        return NextResponse.json(
            { error: "Failed to message user" },
            {
              status: 500,
            }
          );

    }  
}