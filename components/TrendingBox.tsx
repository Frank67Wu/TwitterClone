import React from 'react'

type TrendingBoxProps = {
    gray?: boolean
    className? : string
}

export function TrendingBox({gray, className} : TrendingBoxProps) {
    const colorClasses = gray ? "bg-gray-100" : ""
    return (
        <div className={`flex-col ${className} ${colorClasses} h-20 border-b  hover:bg-gray-300 px-2 py-2 transition`}>
            <p className="text-sm font-bold text-gray-400">Trending in Canada</p>
            <p className="font-bold">#Placeholder</p>
            <p className="text-sm text-gray-400">23.1k Tweets</p>
    
        </div>
        )
}