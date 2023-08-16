import React from 'react'


export function ViewButton() {

    return (
        <div className="flex w-24 group">
            <button className="rounded-full flex transition-colors hover:bg-gray-300 justify-center">
                <img className={`w-4 h-4 group-hover:opacity-0  align-center mx-2 mt-2 mb-1.5`}   src={"/images/views.png"}></img>
                <img className={`w-4 h-4 opacity-0 group-hover:opacity-100 absolute align-center mx-2 mt-2 mb-1.5`}   src={"/images/viewsBlue.png"}></img>

            </button>
        <h1 className={`align-center  mt-auto mb-1 ml-1 text-sm text-gray-400 group-hover:text-cyan-400 transition`}>781</h1>
        </div>
    )
}

