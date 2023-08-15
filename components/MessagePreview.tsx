import { ProfilePicture } from "./ProfilePicture";

type MessagePreviewProps = { 
    className? : string
    username : string
    userHandle : string
    userid : string
    lastMessage : string
    time : string
    onclick: Function
}


export function MessagePreview({className, username, userHandle, userid, lastMessage, time, onclick}: MessagePreviewProps) {
    return (
    <button onClick={()=> onclick(userid, username, userHandle)} className={`flex w-[306px] hover:bg-gray-300 px-2 py-2 bg-gray-100 transition border-r-2 border-blue-400 ${className}`}>
        <ProfilePicture small={true}/>
        <div className="flex flex-col ">
            <div className="mx-2 flex">
                <p className="text-xs overflow-hidden truncate max-w-24 font-bold">{(username != null) ?  username : "loading"}</p>
                <p className="text-xs overflow-hidden truncate  max-w-20 text-gray-500 ml-1">{(userHandle != null) ? `@${userHandle}` : "@loading"}</p>
                <p className="flex-shrink text-xs text-gray-500 ml-0.5"> · {time} </p>
            </div>
            <h1 className="text-xs pt-1 mr-auto ml-2">{lastMessage}</h1>
        </div>
        
    </button>
    )
}