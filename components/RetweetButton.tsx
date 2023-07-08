"use client"
import { useState } from "react"

type RetweetButtonProps = {
    retweeted: boolean
}

export function RetweetButton({retweeted} : RetweetButtonProps) {

    const [isRetweeted, useIsRetweeted] = useState(retweeted)

    function OnClick() {
        useIsRetweeted(!isRetweeted)
    }

    return (
        <div className="flex w-24 group">
            <button onClick={() => OnClick()} className="rounded-full flex transition-colors hover:bg-gray-300 justify-center">
                <img className={`w-4 h-4 group-hover:opacity-0 ${isRetweeted ? "opacity-0" : "opacity-100"} align-center mx-2 mt-2 mb-1.5`}   src={"/images/retweet.png"}></img>
                <img className={`w-4 h-4 group-hover:opacity-100 ${isRetweeted ? "opacity-100" : "opacity-0"} absolute align-center mx-2 mt-2 mb-1.5`} src={"/images/retweeted.png"}></img>
            </button>
        <h1 className={`align-center  mt-auto mb-1 ml-1 text-sm text-gray-400 group-hover:text-emerald-400 ${isRetweeted ? "text-emerald-400" :  "" } transition`}>781</h1>
        </div>
    )
}