import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    let userId = ''

    if (request.url.includes("tweet")) {
        userId = request.url.split('/')[6]
    }
    else {
        userId = request.url.split('users/')[1].split('/')[0]
    }

    console.log(userId)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "userId": userId,
    });
    const res = await fetch(`http://localhost:3000/api/auth`, {
        method : "POST",
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    })

    if (res.status != 200) {
        return
    } 

    console.log("allowed")
    const response = NextResponse.next()

    return response
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/users/:id/delete' , '/api/users/:id/password', '/api/users/:id/messages/:path*', '/api/users/:id/follows/:path*', '/api/tweets/:id/:userid']
}