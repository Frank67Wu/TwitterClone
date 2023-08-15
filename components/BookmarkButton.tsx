"use client"
import { useState } from "react"

type bookmarkedButtonProps = {
    bookmarked: boolean
    numberOf : number
    updateBookmarks : Function
}

export function BookmarkedButton({bookmarked, numberOf, updateBookmarks} : bookmarkedButtonProps) {

    const [isBookmarked, setIsBookmarked] = useState(bookmarked)
    const [likeNumber, setLikeNumber] = useState(numberOf)

    function OnClick() {
        if (isBookmarked) {
            setIsBookmarked(false)
            setLikeNumber(likeNumber - 1)
        }
        else {
            setIsBookmarked(true)
            setLikeNumber(likeNumber + 1)
        }
        updateBookmarks()
    }

    return (
        <div className="flex w-24 group">
            <button onClick={() => OnClick()} className="rounded-full flex transition-colors hover:bg-gray-300 justify-center">
                <img className={`w-4 h-4 group-hover:opacity-0 ${isBookmarked ? "opacity-0" : "opacity-100"} align-center mx-2 mt-2 mb-1.5`}   src={"/images/bookmark.png"}></img>
                <img className={`w-4 h-4 group-hover:opacity-100 ${isBookmarked ? "opacity-100" : "opacity-0"} absolute align-center mx-2 mt-2 mb-1.5`} src={"/images/bookmarked.png"}></img>
            </button>
        <div className="text-emerald-400"></div>
        <h1 className={`align-center  mt-auto mb-1 ml-1 text-sm text-gray-400 ${isBookmarked ? "text-emerald-400" :  "" } transition group-hover:text-emerald-400`}>{`${likeNumber}`}</h1>
        </div>
    )
}