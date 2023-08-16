import Link from "next/link"
import React from 'react'

type ShowMoreProps = {
    link: string
    className?: string
}

export function ShowMore({link, className} : ShowMoreProps) {
    return (
        <div className={`bg-gray-100 hover:bg-gray-300 flex w-72 px-2 py-3 transition duration-300 rounded-b-lg ${className}`}>

        <Link className="text-sm text-blue-500" href={link}>Show More</Link>
    </div> 
    )

}