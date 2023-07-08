import { ContentBox } from "./ContentBox";

type WhatsHappeningProps = {
    trending: JSX.Element[]
    className? : string
}

export function WhatsHappening({trending, className} : WhatsHappeningProps) {
    return (
        <ContentBox className={className} content={trending} title={"What's happening"}/>
    )
}