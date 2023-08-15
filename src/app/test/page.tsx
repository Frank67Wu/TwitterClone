'use client'

export default function Test() {
    async function A() {
        const data = await fetch("http://localhost:3000/api/users/userhandle",
        {
            method: "GET"
        })
    }
    return (<button onClick={()=>{A()}}>ASDf</button>)
}