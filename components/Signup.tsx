'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Signup() {

    const router = useRouter()

    const [userHandle, setUserHandle] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const inputRef  = useRef<HTMLInputElement>(null);
    const passwordRef  = useRef<HTMLInputElement>(null);
    const usernameRef  = useRef<HTMLInputElement>(null);

    const [userId, setUserId] = useState<string | null>("")

    useEffect(()=>{
        setTimeout(() => {
            setUserId(localStorage.getItem('userid'))
        }, 500);
    },[])

    useEffect(()=>{
        if (userId) {
        CheckLoggedIn()
        }
    },[userId])

    async function CheckLoggedIn() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "userId": userId
        });
        const res = await fetch("http://localhost:3000/api/auth", {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          })

        if (res.status == 200) {
            router.push("/")
        }
    }

    function focus() {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        if (passwordRef.current) {
            passwordRef.current.focus();
        }
        if (usernameRef.current) {
            usernameRef.current.focus();
        }
    }

    async function SendSignup() {

        if (username.length ==0 || userHandle.length ==0 || password.length ==0) {
            alert("Missing fields")
            return
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
            "username": username,
            "userHandle" : userHandle,
            "password": password
          });

        const res = await fetch(`http://localhost:3000/api/users`, 
        {
            method: "POST",
            headers: myHeaders,
            body: raw
        })

        if (res.status != 200) {
            alert("userhandle already taken")
        }

        const data = await res.json()
        localStorage.setItem("username", data.username)
        localStorage.setItem("userHandle", data.userHandle)
        localStorage.setItem("userid", data.id)

        router.push("/")
    }

    return (
        <div className="flex justify-center my-16 w-[625px] rounded-3xl border-2 bg-white">
            <form className="flex flex-col">
                <img className="w-16 h-16 self-center mt-2" src="/images/icon.png"></img>
                <h1 className="text-4xl font-semibold pt-6">Join 7witter today</h1>
                <button onClick={(e)=>{e.preventDefault()}} className="rounded-full border-2 py-1.5 text-gray-500 mt-10"> Sign up with 500gle</button>
                <button onClick={(e)=>{e.preventDefault()}} className="rounded-full border-2 py-1.5 font-bold mt-6"> Sign up with 4pple</button>
                <div className="flex py-5 items-center">
                    <div className="flex-grow border-t border-black"></div>
                    <span className="flex-shrink mx-4">Or</span>
                    <div className="flex-grow border-t border-black"></div>
                </div>

                <div className="outline mt-4">
                    <input type="username" ref={usernameRef} id="passwordInput" className="peer w-full py-2 mt-2 -mb-1 text-xl block ml-1 outline-none" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <label onClick={()=>focus()} className={`absolute ml-1 peer-focus:text-blue-400 peer-focus:text-sm  duration-700 peer-focus:-mt-12 ${username.length != 0 ? "text-blue-400 -mt-12 text-sm" : "text-gray-500 text-lg -mt-10"} `}>Username</label>
                </div>
                <div className="outline mt-4">
                    <input type="userHandle" ref={inputRef} id="passwordInput" className="peer w-full py-2 mt-2 -mb-1 text-xl block ml-1 outline-none" value={userHandle} onChange={(e) => setUserHandle(e.target.value)}></input>
                    <label onClick={()=>focus()} className={`absolute ml-1 peer-focus:text-blue-400 peer-focus:text-sm  duration-700 peer-focus:-mt-12 ${userHandle.length != 0 ? "text-blue-400 -mt-12 text-sm" : "text-gray-500 text-lg -mt-10"} `}>Userhandle</label>
                </div>
                <div className="outline mt-4 mb-4">
                    <input type="password" ref={passwordRef} id="passwordInput" className="peer w-full py-2 mt-2 -mb-1 text-xl block ml-1 outline-none" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <label onClick={()=>focus()} className={`absolute ml-1 peer-focus:text-blue-400 peer-focus:text-sm  duration-700 peer-focus:-mt-12 ${password.length != 0 ? "text-blue-400 -mt-12 text-sm" : "text-gray-500 text-lg -mt-10"} `}>Password</label>
                </div>
                <button onClick={(e)=>{
                    e.preventDefault()
                    SendSignup()
                }} className="text-white bg-black font-bold rounded-full py-2">Create account</button>

                <div className="flex mt-16">
                <h1 className="text-gray-500">Have an account already?</h1>
                <Link className="ml-1 text-blue-500 mb-20" href={"/login"}>Log in</Link>
                </div>

            </form>

        </div>
    )
}