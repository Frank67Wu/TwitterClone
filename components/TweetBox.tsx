import { cookies } from "next/dist/client/components/headers";
import { LikeButton } from "./LikeButton";
import { ProfilePicture } from "./ProfilePicture";
import { FollowingButton } from "./FollowingButton";
import { BookmarkedButton } from "./BookmarkButton";
import { ViewButton } from "./ViewButton";

interface tweetData {
    id : string
    content : string
    createdAt : string
    authorId : string
    likedById : string[]
    bookmarkedById : string[]
    username ? : string
    userHandle ? : string
}

type TweetBoxProps = {
    data : tweetData
    className ? : string
    username : string
    userHandle : string
    selfId : string | null
    following : boolean
}

export function TweetBox({data, className, username, userHandle, selfId, following} : TweetBoxProps) {

    async function updateLikes() {
        const res = await fetch(`/api/tweets/${data.id}/${selfId}/likes`, {
            method: "PATCH"
        })
    }

    async function updateBookmarks() {

        const res = await fetch(`/api/tweets/${data.id}/${selfId}/bookmarks`, {
            method: "PATCH"
        })
    }

    async function updateFollowing() {
        const res = await fetch(`/api/users/${data.id}/follows/${selfId}`, {
            method: "PATCH"
        })
    }

    return (
        <div className={`flex min-w-96 hover:bg-gray-200 border-b px-2 py-3 transition border-gray-300${className}`}>
            <div className="w-12 shrink-0">
                <ProfilePicture/>
            </div>
            
            <div className="flex-col ml">

            <div className="flex">
                <p className="text-sm font-bold">{username}</p>
                <p className="text-sm ml-1 text-gray-500">@{userHandle}</p>
                <p className="text-sm ml-1 text-gray-500">· {data.createdAt}</p>
            </div>
            <main className="text-sm mt-1 overflow-hidden">
            {data.content}
            </main>

            <div className="justify-between -left-2 relative flex flex-grow">

            <FollowingButton updateFollowing={updateFollowing} following={following}/>
            {/* @ts-ignore  */}
            <BookmarkedButton updateBookmarks={updateBookmarks} numberOf={data.bookmarkedById.length} bookmarked={data.bookmarkedById.includes(selfId)}/>
            {/* @ts-ignore  */}
            <LikeButton updateLikes={updateLikes} numberOf={data.likedById.length} liked={data.likedById.includes(selfId)}/>

            <ViewButton/>

            </div>


        </div>



        </div>
            
    ) 
}