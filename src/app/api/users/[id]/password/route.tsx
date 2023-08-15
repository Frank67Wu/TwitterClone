import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'


const prisma = new PrismaClient();

export async function PATCH(req: NextRequest, {params}: {params: {id: string}}) {

    try {

        const json = await req.json()
        const id = params.id

        bcrypt.hash(json.password, 10, function(err, hash) {
            console.log(hash)
        });
    
        const password = bcrypt.hashSync(json.password, 10)
    
    const updatedUser = await prisma.user.update({
        where: {id : id},
        data : {password : password}
    });

    return NextResponse.json(updatedUser, {
        status: 200,
      });

    } catch (error: any) {

        return NextResponse.json(
            { error: "Failed to update user" },
            {
              status: 500,
            }
          );

    }  
}

