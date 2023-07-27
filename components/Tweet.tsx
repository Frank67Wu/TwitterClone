'use client'

import { useState } from "react";
import { Button } from "./Button";
import { ProfilePicture } from "./ProfilePicture";
import { cookies } from "next/dist/client/components/headers";
import ProgressBar from "./ProgressBar";

type TweetProps = {
    className? : string
}

export function Tweet({className} : TweetProps) {

    const [inputValue, setInputValue] = useState("")

    const [renderProgressBar, setRenderProgressBar] = useState(false)

    async function OnClick(e: any) {
        e.preventDefault()
        setRenderProgressBar(true)
        
        const data = {
                content: inputValue, 
                author: { connect: { id: "64b30cdd3bb658d99ba70762"} }}

        const response = await fetch("http://localhost:3000/api/tweets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        setRenderProgressBar(false)
        return response.json()
    }

    return (
        <form className={`flex flex-col gap-2 border-b px-2 py-2 w-[446px] ${className}`}>

            {renderProgressBar ? <ProgressBar className="-ml-2 -mt-2 z-40" /> : null}
            <div className="flex py-2">
            <ProfilePicture />
                <textarea 
                value = {inputValue}
                onChange={(e) => {setInputValue(e.target.value)}}


                className="flex-grow resize-none overflow-hidden px-4 py-2 text-lg outline-none"
                placeholder="What's happening?"/>
            </div>
            <Button onClick={(e) => {OnClick(e)}} small={true} className="self-end font-bold">Tweet</Button>

        </form>
    )
}
