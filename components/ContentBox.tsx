import Link from "next/link"
import { ProfilePicture } from "./ProfilePicture"
import { ShowMore } from "./ShowMore"

type ContentBoxProps = {
    title: string
    content: React.ReactElement[]
    className? : string
}

export function ContentBox({title, content, className} : ContentBoxProps) {
    return (
    <div className={`flex flex-col  ${className} `}>
        <h1 className="font-bold rounded-t-lg bg-gray-100 text-lg pl-2 pt-1">{title}</h1>
        <ul>{content}</ul>
        <ShowMore link={"/explore"}/>
        
    </div>
    )
}