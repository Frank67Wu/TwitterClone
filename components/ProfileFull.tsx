'use client'

import { useEffect, useState } from "react"
import { ProfilePicture } from "./ProfilePicture"
import { TweetBox } from "./TweetBox"
import React from 'react'

interface User {
  username : string
  userHandle : string
  followersIDs : string []
  followingIDs: string []
  accountCreatedAt: String
}

interface TweetData {
  id: string
  content: string
  createdAt: string
  authorId: string
  username ? : string
  userHandle ? : string
}

type funcProp = {
  func : Function
}

export function ProfileFull({func} : funcProp) {

  const [userId, setUserId] = useState<string | null>("")
  const [username, setUsername] = useState<string | null>("")
  const [userHandle, setUserHandle] = useState<string | null>("")
  const [userInfo, setUserInfo] = useState<User>()
  const [tweetInfo, setTweetInfo] = useState<TweetData[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [loadedTweets, setLoadedTweets] = useState<React.FC[]>([])

  useEffect(()=> {
    const x = localStorage.getItem("userid")
    setUserId(x)
    setUsername(localStorage.getItem('username'))
    setUserHandle(localStorage.getItem('userHandle'))
  }, [])

  useEffect(() => {
    if (userId) {
      GetInfo()
    }
  },[userId])

  useEffect(() => {
    ShowTweets()
  }, [tweetInfo])

  useEffect(()=>{
    const x = func()
    x.addEventListener('scroll', handleScroll);
    return () => x.removeEventListener('scroll', handleScroll);
  } , [loading]);

  const handleScroll = () => {

    if (window.innerHeight + Math.round(document.documentElement.scrollTop) + 10 < document.documentElement.offsetHeight || loading) {
      return;
    }

    ShowTweets();
  };

  async function GetInfo() {

    const userResponse = await fetch(`/api/users/${userId}`, {
      method: "GET"
    }
    )

    const userData = await userResponse.json()

    const tweetResponse = await fetch(`/api/users/${userId}/tweets`,
    {
      method: "GET"
    })

    const tweetData = await tweetResponse.json()

    setUserInfo(userData)
    setTweetInfo(tweetData)

  }

  async function ShowTweets() {

      if ((page - 1) * 6 >= tweetInfo.length) {
        setLoading(false)
        return 
      }

      const data = []

      setLoading(true)

      const lowerBound = (page - 1) * 6
      const upperBound = Math.min(page * 6, tweetInfo.length)
      
      for (let i = lowerBound ;  i < upperBound; i++) {
      const tweetResponse = await fetch(`http://localhost:3000/api/tweets/${tweetInfo[i].id}`, {
        method: "GET",
      })

      const tweetData = await tweetResponse.json()

      data.push(tweetData)
    }

    if (userInfo != null) {

    const newTweets : any = data.map((t : any) => <TweetBox key={t.id} username={userInfo.username} userHandle={userInfo.userHandle} data={t} selfId={userId} following={false}/>)

    setLoadedTweets([...loadedTweets, newTweets])

    setPage((page) => (page + 1))
    setLoading(false)
    }
  }

   const minWidth = "min-w-[448px]"
    const height = "h-36"
    return (
    <div className={`flex flex-col ${height}`}>
      <div className="fixed z-40 opacity-100 bg-white border-r">
        <div className={` absolute ${height} ${minWidth} bg-gray-300`}>
        </div>
        <ProfilePicture className="w-24 h-24 top-24 left-6 border-4 border-white bg-white"/>
        <div className="bg-black mt-24 w-[448px] "></div>
        <h1 className="font-bold mt-2 ml-3">{username ? username : "loading..."}</h1>
        <h1 className="text-gray-400 text-sm ml-3">{userHandle ?  "@" + userHandle : "@..."}</h1>
        <div className="flex ml-4 mt-4">
            <img className="w-4 h-4" src="/images/calendar-icon.png"/>
            <h1 className="text-sm text-gray-500 mt-[1px] ml-1">Joined {loading ? "June 2023" : userInfo?.accountCreatedAt}</h1>
        </div>
        <div className="flex text-sm">
            <h1 className="font-bold ml-4">{loading ? 0  : userInfo?.followingIDs.length}</h1>
            <h1 className="text-gray-500 ml-1">Following</h1>
            <h1 className="font-bold ml-4">{loading ?  0 : userInfo?.followersIDs.length}</h1>
            <h1 className="text-gray-500 ml-1">Followers</h1>
        </div>
        <div className="flex justify-around border-b">
        <button className="flex justify-center hover:bg-gray-300 flex-grow">
            <h1 className="font-bold pb-1 border-b-2 border-blue-400 text-sm pt-2 pb-3">Tweets</h1>
          </button>
          <button  className="flex justify-center hover:bg-gray-300 flex-grow">
            <h1 className="font-bold text-sm pt-2 pb-3" >Replies</h1>
          </button>
          <button  className="flex justify-center hover:bg-gray-300 flex-grow">
            <h1 className="font-bold text-sm pt-2 pb-3" >Media</h1>
          </button>  
          <button  className="flex justify-center hover:bg-gray-300 flex-grow">
            <h1 className="font-bold text-sm pt-2 pb-3" >Likes</h1>
          </button>    
        </div>
        </div>

        

        <div className="w-[448px]" style={{minHeight: "335px"}}></div>

        <>{loadedTweets}</>



        <div role="status">
        <svg aria-hidden="true" className={`inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 ml-[224px] mt-6 ${loading ? 'opacity-100' : 'opacity-0'}`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>

        <div style={{minHeight: "150px"}}></div>
    </div>
    )
}