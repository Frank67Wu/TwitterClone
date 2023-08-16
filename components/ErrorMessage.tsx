import React from 'react'

type errorMessageProps = {
    errorMessage : string
    className? : string
    show : boolean
}

export function ErrorMessage({errorMessage, show, className} : errorMessageProps)  {

    return (
        <div className={`absolute rounded-lg text-sm w-fit bg-red-300 text-red-600 p-1 font-bold transition duration-2000 pointer-events-none ${show ? "opacity-100" : "opacity-0"} ${className} `}>
            {errorMessage}
        </div>
    )
}