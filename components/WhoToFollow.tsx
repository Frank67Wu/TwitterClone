import { ContentBox } from "./ContentBox";
import { ProfilePreview } from "./ProfilePreview";
import { ShowMore } from "./ShowMore";

type WhoToFollowProps = {
    className? : string
}


export function WhoToFollow({className}: WhoToFollowProps) {
    return (
            <ContentBox className={className} content={[<ProfilePreview key={1}/>, <ProfilePreview key={2}/>, <ProfilePreview key={3}/>]}title={"Who to follow"}/>
    )
}