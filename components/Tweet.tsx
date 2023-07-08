'use client'

import { useState } from "react";
import { Button } from "./Button";
import { ProfilePicture } from "./ProfilePicture";

type TweetProps = {
    className? : string
}

export function Tweet({className} : TweetProps) {
    const [inputValue, setInputValue] = useState("")

    return (
        <form className={`flex flex-col gap-2 border-b px-2 py-2 ${className}`}>
            <div className="flex py-2">
            <ProfilePicture />
                <textarea 
                value = {inputValue}
                onChange={(e) => {setInputValue(e.target.value)}}


                className="flex-grow resize-none overflow-hidden px-4 py-2 text-lg outline-none"
                placeholder="What's happening?"/>
            </div>
            <Button small={true} className="self-end font-bold">Tweet</Button>

        </form>
    )
}
