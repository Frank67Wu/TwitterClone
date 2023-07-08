import { ProfilePicture } from "./ProfilePicture";

type MessagePreviewProps = { 
    className? : string
}


export function MessagePreview({className}: MessagePreviewProps) {
    return (
    <div className={`flex w-[306px] hover:bg-gray-300 px-2 py-2 bg-gray-100 transition border-r-2 border-blue-400 ${className}`}>
        <ProfilePicture small={true}/>
        <div className="flex-col">
            <div className="mx-2 flex">
                <p className="text-xs overflow-hidden truncate w-24 font-bold">PlaceholderName</p>
                <p className="text-xs overflow-hidden truncate  w-20 text-gray-500">@placeholder</p>
                <p className="text-xs text-gray-500"> · 12h </p>
            </div>
            <h1 className="text-xs pt-1 pl-2">LastMessage</h1>
        </div>
        
    </div>
    )
}