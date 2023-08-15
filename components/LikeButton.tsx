"use client"
import { useState } from "react"

type LikeButtonProps = {
    liked: boolean
    updateLikes : Function
    numberOf : number
}

export function LikeButton({liked, updateLikes, numberOf} : LikeButtonProps) {

    const [isLiked, setIsLiked] = useState(liked)
    const [likeNumber, setLikeNumber] = useState(numberOf)

    function OnClick(){
        if (isLiked) {
            setIsLiked(false)
            setLikeNumber(likeNumber - 1)
        }
        else {
            setIsLiked(true)
            setLikeNumber(likeNumber + 1)
        }
        updateLikes()
    }





    return (
        <div className="flex w-24 group">
            <button onClick={() => OnClick()} className="rounded-full flex transition-colors hover:bg-gray-300 justify-center">
                <img className={`w-4 h-4 ${isLiked ? "opacity-0" : "opacity-100"} group-hover:opacity-0 align-center mx-2 mt-2 mb-1.5`}  src={"/images/notliked.png"}></img>
                <img className={`w-4 h-4 ${isLiked ? "opacity-100" : "opacity-0"} group-hover:opacity-100 absolute align-center mx-2 mt-2 mb-1.5`}   src={"/images/liked.svg" }></img>
            </button>
        <h1 className={`align-center mt-auto mb-1 ml-1 text-sm text-gray-400 transition ${isLiked ? "text-red-400" : ""} group-hover:text-red-400 `}>{`${likeNumber}`}</h1>
        </div>
        
    )
}