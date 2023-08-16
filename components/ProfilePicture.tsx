import React from 'react'

type ProfilePictureProps =  {
    small ? : boolean
    className? : string
}

export function ProfilePicture({small, className} : ProfilePictureProps) {
    const sizeClasses =  small ? "h-8 w-8" : "h-10 w-10"
    return <img className={` ${sizeClasses} ${className}   rounded-full relative  outline-black`} src="/images/defaultpfp.png" alt="altText"></img>
}