import { ProfilePicture } from "./ProfilePicture"
import { TweetBox } from "./TweetBox"

export function ProfileFull() {
    const minWidth = "min-w-[448px]"
    const height = "h-36"
    return (
    <div className={`flex flex-col ${height}`}>
        <div className={` absolute ${height} ${minWidth} bg-gray-300`}>
        </div>
        <ProfilePicture className="w-24 h-24 top-24 left-6 border-4 border-white bg-white"/>
        <div className="bg-black mt-24"></div>
        <h1 className="font-bold mt-2 ml-3">PlaceHolderName</h1>
        <h1 className="text-gray-400 text-sm ml-3">@PlaceHolder</h1>
        <div className="flex ml-4 mt-4">
            <img className="w-4 h-4" src="/images/calendar-icon.png"/>
            <h1 className="text-sm text-gray-500 mt-[1px] ml-1">Joined June 2023</h1>
        </div>
        <div className="flex text-sm">
            <h1 className="font-bold ml-4">4</h1>
            <h1 className="text-gray-500 ml-1">Following</h1>
            <h1 className="font-bold ml-4">0</h1>
            <h1 className="text-gray-500 ml-1">Followers</h1>
        </div>
        <div className="flex justify-around border-b">
        <button className="flex justify-center hover:bg-gray-300 flex-grow">
            <h1 className="font-bold pb-1 border-b-2 border-blue-400 text-sm pt-2 pb-3">Tweets</h1>
          </button>
          <button  className="flex justify-center hover:bg-gray-300 flex-grow">
            <h1 className="font-bold text-sm pt-2 pb-3" >Replies</h1>
          </button>
          <button  className="flex justify-center hover:bg-gray-300 flex-grow">
            <h1 className="font-bold text-sm pt-2 pb-3" >Media</h1>
          </button>  
          <button  className="flex justify-center hover:bg-gray-300 flex-grow">
            <h1 className="font-bold text-sm pt-2 pb-3" >Likes</h1>
          </button>    
        </div>

        <TweetBox username="Frank" userHandle="Frank" textContent="Hello World" createdAt="27m"/>
    </div>
    )
}