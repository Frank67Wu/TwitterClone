import { ContentBox } from "./ContentBox";
import { ProfilePreview } from "./ProfilePreview";
import { ShowMore } from "./ShowMore";

type WhoToFollowProps = {
    className? : string
}


export function WhoToFollow({className}: WhoToFollowProps) {
    return (
            <ContentBox className={className} content={[<ProfilePreview/>, <ProfilePreview/>, <ProfilePreview/>]}title={"Who to follow"}/>
    )
}