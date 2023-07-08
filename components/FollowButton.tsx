import { Button } from "./Button";
type FollowButtonProps = {
    className? : string
}

export function FollowButton({className} : FollowButtonProps) {
    return <Button className={`text-xs font-bold ${className}`} black={true} small={true}>Follow</Button>
}