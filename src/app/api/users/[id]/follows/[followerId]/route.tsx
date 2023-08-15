import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();

export async function PATCH(req: NextRequest, {params}: {params: {id: string, followerId: string}}) {

    try {

    console.log(params)

    const followedId = params.id
    const followerId = params.followerId

    const user = await prisma.user.findFirst({
      where : {id : followedId}
    })

    if (user?.followersIDs.includes(followerId)) {
      const followed = await prisma.user.update({
        where: {id : followedId},
        data: {followers: { disconnect: { id: followerId} }}
      });
  
      const follower = await prisma.user.update({
          where: {id : followerId},
          data: {following: {disconnect : {id: followedId}}}
      })
      

      return NextResponse.json(followed, {
          status: 200,
        });
      }

    else {
    
    const followed = await prisma.user.update({
        where: {id : followedId},
        data: {followers: { connect: { id: followerId} }}
    });
 
    const follower = await prisma.user.update({
        where: {id : followerId},
        data: {following: {connect : {id: followedId}}}
    })
    

    return NextResponse.json(followed, {
        status: 200,
      });

    }

    } catch (error: any) {

        return NextResponse.json(
            { error: "Failed to follow user" },
            {
              status: 500,
            }
          );

    }  
}