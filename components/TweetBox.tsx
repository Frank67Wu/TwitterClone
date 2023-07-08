import { LikeButton } from "./LikeButton";
import { ProfilePicture } from "./ProfilePicture";
import { ReplyButton } from "./ReplyButton";
import { RetweetButton } from "./RetweetButton";
import { ViewButton } from "./ViewButton";

type TweetBoxProps = {
    textContent: string
    className? : string
}

export function TweetBox({textContent, className} : TweetBoxProps) {
    return (
        <div className={`flex min-w-96 hover:bg-gray-200 border-b px-2 py-3 transition border-gray-300 ${className}`}>
            <div className="w-12 shrink-0">
                <ProfilePicture/>
            </div>
            
            <div className="flex-col ml">

            <div className="flex">
                <p className="text-sm font-bold">PlaceholderName</p>
                <p className="text-sm ml-1 text-gray-500">@placeholder</p>
                <p className="text-sm ml-1 text-gray-500">· 34m</p>
            </div>
            <main className="text-sm mt-1 overflow-hidden">
            {textContent}
            </main>

            <div className="justify-between -left-2 relative flex flex-grow">

            <ReplyButton/>

            <RetweetButton retweeted={false}/>

            <LikeButton liked={false}/>

            <ViewButton/>

            </div>


        </div>



        </div>
            
    ) 
}