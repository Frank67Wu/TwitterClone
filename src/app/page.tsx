"use client"

import { Navbar } from "../../components/Navbar"
import { Tweet } from "../../components/Tweet"
import { SearchBar } from "../../components/SearchBar"
import { WhoToFollow } from "../../components/WhoToFollow"
import { WhatsHappening } from "../../components/WhatsHappening"
import { TweetBox } from "../../components/TweetBox"
import { TrendingBox } from "../../components/TrendingBox"
import { useEffect, useState } from "react"

interface TweetData {
  id: string
  content: string
  createdAt: string
  authorId: string
  username ? : string
  userHandle ? : string
}

export default function Home() {

  const [userId, setUserId] = useState<string | null>("")
  const [currentPage, setCurrentPage] = useState(1)
  const [tweetInfo, setTweetInfo] = useState<TweetData[]>([])
  const [inputValue, setInputValue] = useState("")
  const [loadedTweets, setLoadedTweets] = useState<React.FC[]>([])
  const [loading, setLoading] = useState(false)
  const [forYou, setForYou] = useState(true)
  const [following, setFollowing] = useState<string[]>([])

  function OnChange(val : any) {
    setInputValue(val)
  }

  async function GrabUserInfo() {
    const response = await fetch(`/api/users/${userId}`, {
      method: "GET",
    })

    const data = await response.json()

    setFollowing(data.followingIDs)
  }

  const handleScroll = () => {

    if (window.innerHeight + Math.round(document.documentElement.scrollTop) + 10 < document.documentElement.offsetHeight || loading) {
      return;
    }

    GrabTweets();
  };

  useEffect(() => {
    setUserId(localStorage.getItem("userid"))
  },[])

  useEffect(() => {
    if (userId) {
    GrabUserInfo()
    }
  }, [userId])

  useEffect(()=>{
    if (following && userId) {
    GrabTweets()
    }
  },[following, forYou])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  function Switch(current : string) {
    if ((current === "ForYou" && forYou) || current === "Following" && !forYou) {
      return
    }

    setForYou(!forYou)
    setTweetInfo(() => [])
    setLoadedTweets(() => [])
    setCurrentPage(() => 1)    
  }

  async function GrabTweets() {

    const url = forYou ? `/api/tweets?page=${currentPage}&limit=6` : `/api/users/${userId}/following/tweets?page=${currentPage}&limit=6`

    setLoading(true)

    const response = await fetch(url, {
        method: "GET",
    });

    const data = await response.json()

    for (const tweet of data) {
      const userResponse = await fetch(`/api/users/${tweet.authorId}`, {
          method: "GET"
        })

      const userData = await userResponse.json()

      tweet.userHandle = userData.userHandle
      tweet.username = userData.username
    }

    setCurrentPage((currentPage) => currentPage + 1)
    setTweetInfo([...tweetInfo, ...data])    

    const newTweets = data.map((t : any) => <TweetBox key={t.id} username={t.username} userHandle={t.userHandle} data={t} selfId={userId} following={following.includes(t.authorId)}/>)

    setLoadedTweets([...loadedTweets, newTweets])

    setLoading(false)
}

  return (
    <div className = "flex container mx-auto items-start justify-center max-w-full overscroll-hidden overscroll-none">

    <div className="w-[176px] min-w-[176px] h-full bg-gray-300 z-40">
 
    <Navbar/>

    </div>

    <main className="flex-row min-h-screen border-x min-w[448px] max-w-[448px]">
      <div className="fixed w-[448px] max-w-[448px] bg-white bg-opacity-90 z-40 border-r">

          <h1 className="font-bold text-lg pl-2 pt-1 w-[448px] max-w-[448px] [bg-gray-300">Home</h1>
          <nav className="flex justify-around border-b mt-2  w-[448px] max-w-[448px] ">
          <button onClick={() => {Switch("ForYou")}} className="flex justify-center hover:bg-gray-300 flex-grow">
            <h1 className={`font-bold pb-1 ${ forYou ? "border-b-2 border-blue-400" : ""}  text-sm pt-2 pb-3`}>For you</h1>
          </button>
          <button onClick={() => {Switch("Following")}}  className="flex justify-center hover:bg-gray-300 flex-grow">
            <h1 className={`font-bold text-sm pt-2 pb-3 ${ forYou ? "" : "border-b-2 border-blue-400"} `}>Following</h1>
          </button>          

        </nav>

      </div>
  
        <Tweet userId={userId} className="mt-20"/>

        <>
        {loadedTweets}
        </>

        <div className="text-center mt-6">
    <div role="status">
        <svg aria-hidden="true" className={`inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 ${loading ? 'opacity-100' : 'opacity-0'}`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
</div>

    <div style={{height: "250px"}}></div>
 
    </main>

    <div className="mx-4 w-72 min-w-72 h-screen z-40">
      <div className="fixed">
        <SearchBar onChange={OnChange} inputValue={inputValue} width={"w-60"} className={"mt-1"} placeholderText="Search Twitter"/>

        <WhatsHappening className={"mt-3"}trending={[<TrendingBox key={1} gray={true} />, <TrendingBox key={2} gray={true}/>, <TrendingBox key={3} gray={true}/>]}/>

        <WhoToFollow className="mt-2"/>


      </div>
    </div>

    </div>




  )
}
