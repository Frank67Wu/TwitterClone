'use client'


import { useEffect, useState } from "react";
import { MessagePreview } from "../../../components/MessagePreview";
import { MessageTextBox } from "../../../components/MessageTextBox";
import { Navbar } from "../../../components/Navbar";
import { ProfilePicture } from "../../../components/ProfilePicture";
import { SearchBar } from "../../../components/SearchBar";
import {ErrorMessage} from "../../../components/ErrorMessage";
import React from 'react'



interface User {
  id : string
  username : string
  userHandle : string
}

export default function Message() {

  const [userId, setUserId] = useState<string | null>("")
  const [errorFinding, setErrorFinding] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const [messagePreviews, setMessagePreviews] = useState<React.FC[]>([]
  )
  const [users, setUsers] = useState<User[]>([])
  const [currentlyMessaging, setCurrentlyMessaging] = useState<User>()
  const [currentMessages, setCurrentMessages] = useState<React.FC[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    const x = localStorage.getItem("userid")
    setUserId(x)
  },[])

  useEffect(() => {
    if (userId) {
    GetRecentMessages()
    }
  },[userId])

  useEffect(() => {
    if (currentlyMessaging) {
      getMessages()
    }
  }, [currentlyMessaging])

  function onChange(val : any) {
    setSearchValue(val)
  }

  function OnClick(id : any, username : any, userHandle : any) {
    setCurrentlyMessaging({id, username, userHandle})
  }

  async function FindUser() {
    const res = await fetch(`/api/users/${searchValue}`,
    {
      method: "GET"
    })

    if (res.status != 200) {
      setErrorFinding(true)
      setTimeout(() => {
        setErrorFinding(false)
      }, 1000)
    }

 

    const data = await res.json()
    const user = {id : data.id, username: data.username, userHandle : data.userHandle }

    if (data.id != userId) {
    setCurrentlyMessaging(user)
    }
  }

  async function SendMessage(e : any, content: string) {
    setInputValue("")
    e.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "content": content
    });

    const res = await fetch(`/api/users/${userId}/messages/${currentlyMessaging?.id}`, {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    })
    const data = await res.json()
    if (res.status == 200) {
      getMessages()
      GetRecentMessages()
    }

  }

  async function GetRecentMessages() {
      setLoading(true)
      const res = await fetch(`/api/users/${userId}/messages`, {
        method: "GET"
      })

      const data = await res.json()

      const firstUser = {
        username: data[0][3],
        userHandle : data[0][4],
        id : data[0][0]
      }

      const preview = data.map((e : any) => 
        <MessagePreview userid={e[0]} onclick={OnClick} key={e[0]} lastMessage={e[1]} time={e[2]} username={e[3]} userHandle={e[4]}/>
      );

      setMessagePreviews(preview)
      setCurrentlyMessaging(firstUser)

      setLoading(false)

  }

  async function getMessages() {

    const res = await fetch(`/api/users/${userId}/messages/${currentlyMessaging?.id}`, {
      method: "GET"
    })

    const data = await res.json() 

    const messages = data.map((message : any) => 
        <MessageTextBox key={message.id} self={message.senderId == userId} content={message.content} />
    )

    setCurrentMessages(messages)

  }



  return (
    <div className = "flex container mx-auto items-start max-w-full overflow-x-hidden justify-center">


    <div className="w-[176px] min-w-[176px] h-full bg-gray-300 z-40">
 
    <Navbar/>

    </div>

  

    <main className="flex flex-col min-h-screen border-x max-w-[306px] max-h-96 overflow-y-hidden flex-none">
      <div className="w-[306px] max-w-[306px] bg-white bg-opacity-90 z-40 border-r">

          <h1 className="font-bold text-lg pl-2 pt-1 w-[306px] max-w-[306px] [bg-gray-300">Messages</h1>
          <div className="flex">
            <SearchBar onChange={onChange} inputValue={searchValue} small={true} className="mx-2 mt-4 mb-2" width={"w-[236px]"} placeholderText="Search by userhandle"/>
            <button onClick={(e)=>{FindUser()}} className="mt-1.5 -ml-2 w-8">
                  <img className="" src="/images/send-icon.png"/>
            </button>
          </div>
          <ErrorMessage show={errorFinding} className="ml-10 -mt-9" errorMessage={`User @${searchValue} does not exist`}/>

      </div>
      
      
        <>{messagePreviews}</>

        <div role="status">
        <svg aria-hidden="true" className={`inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 ml-[135px] mt-2 ${loading ? 'opacity-100' : 'opacity-0'}`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
      </div>



    </main>

    <div className="flex flex-col w-[462px] min-w-[462px]  px-2 overflow-auto max-h-[95vh]">
        <ProfilePicture className="self-center mt-16 h-12 w-12"/>
        <p className="self-center text-sm mt-1 font-bold">{currentlyMessaging?.username}</p>
        <p className="self-center text-xs -mt-1 text-gray-500">{`@${currentlyMessaging?.userHandle}`}</p>

        <p className="self-center text-xs mt-1 text-gray-500 mb-10">Joined June 2023</p>

        <>{currentMessages}</>

        <div className="flex fixed bottom-0 w-[462px] z-40 bg-white opacity-100 pb-2">
            <textarea value = {inputValue}
                onChange={(e) => {setInputValue(e.target.value)}} onSubmit={(e)=>{SendMessage(e, inputValue)}} rows={1} className="resize-none min-w-[410px] w-[410px] px-2 py-1 mt-1  outline-none bg-gray-200 rounded-xl"
            placeholder="Start a new message">
                
            </textarea>
            <button onClick={(e)=>{SendMessage(e, inputValue)}} className="mt-1 w-8">
                <img className="" src="/images/send-icon.png"/>
            </button>
        </div>


        
    </div>

    

    </div>




  )
}
