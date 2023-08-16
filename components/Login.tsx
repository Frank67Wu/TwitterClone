'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import React from 'react'


export default function Login() {

    const router = useRouter()
    const [loading, setLoading] = useState(false)
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
        const res = await fetch("/api/auth", {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          })

        if (res.status == 200) {
            router.push("/")
        }
    }

    async function SendLogin() {
        setLoading(true)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "userHandlee": userHandle,
            "password": password
        })

        const res = await fetch(`/api/auth/signin`, {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        })

        if (res.status != 200) {
            setLoading(false)
            return
        }

        const data = await res.json()
        localStorage.setItem("username", data.username)
        localStorage.setItem("userHandle", data.userHandle)
        localStorage.setItem("userid", data.id)

        router.push("/")

    }

    const [userHandle, setUserHandle] = useState("")
    const [password, setPassword] = useState("")
    const inputRef  = useRef<HTMLInputElement>(null);
    const passwordRef  = useRef<HTMLInputElement>(null);
    function focus() {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        if (passwordRef.current) {
            passwordRef.current.focus();
        }
    }

    return (
        <div className="flex justify-center my-16 w-[700px] rounded-3xl border-2 bg-white">
            {loading ? <div className="fixed left-0 right-0 top-0 bottom-0 z-40"></div> : <></>}
            <form className="flex flex-col">
                <img className="w-16 h-16 self-center mt-2" src="/images/icon.png"></img>
                <h1 className="text-4xl font-semibold pt-6">Sign in to 7witter</h1>
                <button onClick={(e)=>{e.preventDefault()}} className="rounded-full border-2 py-1.5 text-gray-500 mt-10"> Sign in with 500gle</button>
                <button onClick={(e)=>{e.preventDefault()}} className="rounded-full border-2 py-1.5 font-bold mt-6"> Sign in with 4pple</button>
                <div className="flex py-5 items-center">
                    <div className="flex-grow border-t border-black"></div>
                    <span className="flex-shrink mx-4">Or</span>
                    <div className="flex-grow border-t border-black"></div>
                </div>
                <div className="text-sm"></div>
                <div className="outline">
                    <input ref={inputRef} id="usernameInput" className="peer w-full py-2 mt-2 -mb-1 text-xl block ml-1 outline-none" value={userHandle} onChange={(e) => setUserHandle(e.target.value)}></input>
                    <label onClick={()=>focus()} className={`absolute ml-1 peer-focus:text-blue-400 peer-focus:text-sm  duration-700 peer-focus:-mt-12 ${userHandle.length != 0 ? "text-blue-400 -mt-12 text-sm" : "text-gray-500 text-lg -mt-10"} `}>Userhandle</label>
                </div>
                <div className="outline mt-4">
                    <input type="password" ref={passwordRef} id="passwordInput" className="peer w-full py-2 mt-2 -mb-1 text-xl block ml-1 outline-none" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <label onClick={()=>focus()} className={`absolute ml-1 peer-focus:text-blue-400 peer-focus:text-sm  duration-700 peer-focus:-mt-12 ${password.length != 0 ? "text-blue-400 -mt-12 text-sm" : "text-gray-500 text-lg -mt-10"} `}>Password</label>
                </div>

                <button onClick={(e)=>{
                    e.preventDefault()
                    SendLogin()
                }} className="rounded-full bg-black py-2 text-white font-bold mt-8"> Next </button>

                <button onClick={(e)=>{e.preventDefault()}} className="rounded-full py-2 text-black font-bold mt-6 border border-black"> Forgot password? </button>

                <div className="flex mt-16">
                <h1 className="text-gray-500">Don&apos;t have an account?</h1>
                <h1 className="text-gray-500">Don have an account?</h1>
                <Link className="ml-1 text-blue-500 mb-20" href={"/signup"}>Sign Up</Link>
                </div>

            </form>

        </div>
    )
}