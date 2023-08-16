import React from 'react'

type MessageTextBoxProps = {
    self: boolean
    content : string
}

export function MessageTextBox({self, content} : MessageTextBoxProps) {
    const colorClasses = self ? "bg-blue-400 text-white" : "bg-gray-200 text-black" 
    const positionClasses = self ? "ml-auto" : "mr-auto"
    return (
    <div className={`${colorClasses} ${positionClasses} rounded-2xl px-2 py-1.5 mb-2 text-xs max-w-[225px] break-words`}>
        <h1>
            {content}
        </h1>
    </div>
    )
}