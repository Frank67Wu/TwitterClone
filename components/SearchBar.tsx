import React from 'react'

type SearchBarProps = {
    placeholderText : string
    className? : string
    width? : string
    small? : boolean
    inputValue : string 
    onChange : any
}


export function SearchBar({placeholderText, onChange, inputValue, className, width, small,} : SearchBarProps) {
    const textClasses = small ? "py-2 text-xs" : "py-1"

    return (
    <div className={`rounded-xl bg-gray-200 ${className} flex`}>
        <img className={`h-4 w-4 mt-2 ml-3 mr-2`}src="/images/search-icon.png"></img>
        <textarea onChange={(e)=>{onChange(e.target.value)}} value={inputValue} rows={1} className={`h-8 bg-gray-200 placeholder-gray-500 whitespace-nowrap block overflow-hidden resize-none ${textClasses} outline-none transition duration-200 rounded-xl ${width}`}
        placeholder={placeholderText}>
        

        </textarea>

    </div>
    )
}