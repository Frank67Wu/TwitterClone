import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import { Cookie } from "next/font/google";
import { cookies } from "next/dist/client/components/headers";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {

    try {

    const json = await req.json()

    const user = await prisma.user.findFirst({
      where: {
        userHandle : json.userHandle
      }
    });

    if (user) {

    const match = await bcrypt.compare(json.password, user.password) 

    if (! match) {
        return NextResponse.json({
            status: 403,
            error : "wrong username / password"
          });
    }

    else {
        const r = (Math.random() + 1).toString(36).substring(2);
        var expire = new Date()
        expire.setDate(expire.getDate() + 30)
        const session  = await prisma.session.create({
            data : {
                userId : user.id,
                sessionToken : r,
                expires : expire
            }
        })

        return NextResponse.json(user, {
            status: 200,
            headers: { 'Set-Cookie': `sid=${r}; Expires=${expire}; httpOnly;path=/` }
        })
    }

    }

    else {
        return NextResponse.json( {
            status: 404,
          });
    }

    } catch (error: any) {

        return NextResponse.json(
            { error: "Failed to login" },
            {
              status: 500,
            }
          );
    }   
}




export async function DELETE(req: NextRequest) {

  try {

  const cookie = cookies().get('sid')?.value
  
  const session = await prisma.session.delete({
    where : {sessionToken : cookie}
  })

      return NextResponse.json(session, {
          status: 200,
          headers: { 'Set-Cookie': `sid=; Expires=Thu, 01 Jan 1970 00:00:01 GMT; httpOnly;path=/` }
      })

  } catch (error: any) {

      return NextResponse.json(
          { error: "Failed to login" },
          {
            status: 500,
          }
        );
  }   
}



