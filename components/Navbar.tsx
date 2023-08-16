'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from './Button'
import { ProfilePicture } from './ProfilePicture'

export function Navbar() {
  const [userId, setUserId] = useState<string | null>("")
  const [username, setUsername] = useState<string | null>("")
  const [userHandle, setUserHandle] = useState<string | null>("")
  useEffect(()=> {
    const x = localStorage.getItem("userid")
    setUserId(x)
    setUsername(localStorage.getItem("username"))
    setUserHandle(localStorage.getItem("userHandle"))
  },[])

  async function LogOut() {
    
    const res = await fetch('/api/auth/signin', {
      method: "DELETE"
    })

    localStorage.removeItem('username')
    localStorage.removeItem('userid')
    localStorage.removeItem('userHandle')

  }

  return (
    
    <nav className="min-h-screen my-4 fixed">

        <img className="h-8 w-8 ml-2 mb-2"   src="/images/icon.png"></img>

      <ul className="h-screen flex flex-col items-start gap-2 whitespace-nowrap max-h-[100vh]">
        <li >
            <Link className="flex items-center w-28 h-10 rounded-full hover:bg-gray-300 hover:font-bold" href="/">
              <img className="h-6 stroke-2 w-6 ml-3 mr-4" src="/images/home.png"></img>
              Home
            </Link>
        </li>
        <li>
          <Link className="flex items-center w-32 h-10 rounded-full hover:bg-gray-300 hover:font-bold" href="/explore">
            <img className="h-6 stroke-2 w-6 ml-3 mr-4" src="/images/search-icon.png"></img>
            Explore
          </Link>
        </li>
        <li>
          <Link className="flex items-center w-40 h-10 rounded-full hover:bg-gray-300 hover:font-bold" href="/bookmarks">
            <img className="h-6 stroke-2 w-6 ml-3 mr-4" src="/images/bookmark.png"></img>
            Bookmarks
          </Link>
        </li>
        <li>
          <Link className="flex items-center w-36 h-10 rounded-full hover:bg-gray-300 hover:font-bold" href="/messages">
            <img className="h-6 stroke-2 w-6 ml-3 mr-4" src="/images/email.svg"></img>
            Messages
          </Link>
        </li>
        <li>
          <Link className="flex items-center w-32 h-10 rounded-full hover:bg-gray-300 hover:font-bold" href="/profile">
            <img className="h-6 stroke-2 w-6 ml-3 mr-4" src="/images/profile-icon.png"></img>
            Profile
          </Link>
        </li>
        <li>
          <Link className="flex items-center w-36 h-10 rounded-full hover:bg-gray-300 hover:font-bold" href="/settings">
            <img className="h-6 stroke-2 w-6 ml-3 mr-4" src="/images/settings.png"></img>
            Settings
          </Link>
        </li>


        <li>
          <Button>Tweet</Button>
        </li>
        
        <li className='flex mt-auto ml-2'>
          <ProfilePicture/>
          <div className='mt-1 ml-1.5'>
            <h1 className='text-xs'>{username}</h1>
            <h1 className='text-xs text-gray-400'>{`@${userHandle}`}</h1>
          </div>
        </li>

        <li className='mb-16'>

        <Link href="/login" onClick={()=>LogOut()} className=' ml-1.5 text-md px-1 py-.5 text-red-600 font-bold'>Log Out </Link>
        </li> 
      </ul>
    </nav>
  )
}
