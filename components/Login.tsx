'use client'

import Link from "next/link";
import { useRef, useState } from "react";

export default function Login() {

    const [username, setUsername] = useState("")
    const inputRef  = useRef<HTMLInputElement>(null);

    function focus() {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <div className="flex justify-center my-16 w-[700px] rounded-3xl border-2 bg-white">
            <form className="flex flex-col">
                <img className="w-16 h-16 self-center mt-2" src="/images/icon.png"></img>
                <h1 className="text-4xl font-semibold pt-6">Sign in to 7witter</h1>
                <button className="rounded-full border-2 py-1.5 text-gray-500 mt-10"> Sign in with 500gle</button>
                <button className="rounded-full border-2 py-1.5 font-bold mt-6"> Sign in with 4pple</button>
                <div className="flex py-5 items-center">
                    <div className="flex-grow border-t border-black"></div>
                    <span className="flex-shrink mx-4">Or</span>
                    <div className="flex-grow border-t border-black"></div>
                </div>
                <div className="text-sm"></div>
                <div className="outline">
                    <input ref={inputRef} id="usernameInput" className="peer w-full py-2 mt-2 -mb-1 text-xl block ml-1 outline-none" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <label onClick={()=>focus()} className={`absolute ml-1 peer-focus:text-blue-400 peer-focus:text-sm  duration-700 peer-focus:-mt-12 ${username.length != 0 ? "text-blue-400 -mt-12 text-sm" : "text-gray-500 text-lg -mt-10"} `}>Username</label>
                </div>

                <button className="rounded-full bg-black py-2 text-white font-bold mt-8"> Next </button>

                <button className="rounded-full py-2 text-black font-bold mt-6 border border-black"> Forgot password? </button>

                <div className="flex mt-16">
                <h1 className="text-gray-500">Don't have an account?</h1>
                <Link className="ml-1 text-blue-500 mb-20" href={"/signup"}>Sign Up</Link>
                </div>

            </form>

        </div>
    )
}