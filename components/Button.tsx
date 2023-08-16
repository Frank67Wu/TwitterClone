import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import React from 'react'

type ButtonProps = {
    small?: boolean
    black?: boolean
    className?: string

} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export function Button({small, black, className = "", ...props} : ButtonProps) {
    const sizeClasses = small ? "px-4 py-2" : "px-14 py-2 font-bold"
    const colourClasses = black? "bg-black hover:opacity-70" : "bg-blue-400 hover:bg-blue-500"
    return <button className={`rounded-full transition-colors duration-300 text-sm text-white disabled:cursor-not-allowed disabled:opacity-50 ${sizeClasses} ${colourClasses} ${className}`} {...props}></button>
}
