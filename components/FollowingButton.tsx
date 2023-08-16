import { useState } from "react"
import React from 'react'

type FollowingButtonProps = {
    following : boolean
    updateFollowing : Function
}

export function FollowingButton({following, updateFollowing} : FollowingButtonProps) {

    const [isFollowing, setIsFollowing] = useState(following)

    function OnClick() {
        setIsFollowing(!isFollowing)
        updateFollowing()
    }

    return (
        <div className="flex w-24 group">
            <button onClick={()=>OnClick()} className="rounded-full flex transition-colors hover:bg-gray-300 justify-center">
                <img className={`w-4 h-4 group-hover:opacity-0 ${isFollowing ? "opacity-0" : "opacity-100"}  align-center mx-2 mt-2 mb-1.5`}   src={"/images/following.png"}></img>
                <img className={`w-4 h-4 opacity-0 group-hover:opacity-100 absolute ${isFollowing ? "opacity-100" : "opacity-0"}  align-center mx-2 mt-2 mb-1.5`}   src={"/images/followed.png"}></img>

            </button>
                <img className={`w-4 h-4 group-hover:opacity-0 $ align-center mx-2 mt-2 mb-1.5 ${isFollowing ? "opacity-0" : "opacity-100"} `}   src={"/images/no.png"}></img>
                <img className={`w-4 h-4 opacity-0 group-hover:opacity-100 absolute $ align-center mx-2 mt-2 mb-1.5 ml-10 ${isFollowing ? "opacity-100" : "opacity-0"} `}   src={"/images/yes.png"}></img>
        </div>
    )
}