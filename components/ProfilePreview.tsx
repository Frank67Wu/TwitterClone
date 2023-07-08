import { Button } from "./Button";
import { FollowButton } from "./FollowButton";
import { ProfilePicture } from "./ProfilePicture";

export function ProfilePreview() {
    return (
    <div className="flex w-72 hover:bg-gray-300 px-2 py-3 bg-gray-100 transition">
        <ProfilePicture/>
        <div className="mx-2">
            <p className="text-sm font-bold">PlaceholderName</p>
            <p className="text-sm text-gray-500">@placeholder</p>
        </div>

        <FollowButton className={"ml-auto self-center"}/>
    </div>
    )
}