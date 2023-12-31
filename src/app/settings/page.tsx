'use client'

import { useEffect, useState } from "react";
import { Navbar } from "../../../components/Navbar";
import { SearchBar } from "../../../components/SearchBar";
import React from 'react'





export default function Settings() {

    const [searchValue, setSearchValue] = useState("")
    const [userId, setUserId] = useState<string | null>("")
    const [currentSetting, setCurrentSetting] = useState("")
    const [passwordValue, setPasswordValue] = useState("")


    useEffect(()=> {
        const x = localStorage.getItem("userid")
        setUserId(x)
      },[])

    function onChange(val : any) {
    setSearchValue(val)
    }

    async function deleteUser() {
        const res = await fetch(`/api/users/${userId}/delete`, {
            method : "DELETE"
        }) 
    }

    async function changePassword() {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "password": passwordValue
          });

        const res = await fetch(`/api/users/${userId}/password`, {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        }) 
    }

  return (
    <div className = "flex container mx-auto items-start max-w-full overflow-x-hidden justify-center">


    <div className="w-[176px] min-w-[176px] h-full bg-gray-300 z-40">
 
    <Navbar/>

    </div>

  

    <main className="flex flex-col min-h-screen border-x max-w-[306px] max-h-96 overflow-y-hidden flex-none ">
      <div className="w-[306px] max-w-[306px] bg-white bg-opacity-90 z-40 border-r">

          <h1 className="font-bold text-lg pl-2 pt-1 w-[306px] max-w-[306px] [bg-gray-300">Settings</h1>
          <SearchBar inputValue={searchValue} onChange={onChange} small={true} className="mx-2 mt-4" width={"w-[236px]"} placeholderText="Search Settings"/>

      </div>

      
        <button className="w-[306px] mt-2 flex bg-gray-100 hover:bg-gray-200">
            <h1 className="mx-2 my-2 ml-4 text-sm">Your Account</h1>
            <img className="h-5 w-5 mt-2 ml-auto mr-2" src="/images/rightarrow.png"/>

        </button>


    </main>

    <div className="flex flex-col w-[462px] min-w-[462px]  px-2 overflow-auto max-h-[95vh]">

        <h1 className="font-bold text-lg pl-2 pt-1 w-[306px] max-w-[306px] ">Settings</h1>
        <h1 className="text-xs text-gray-400 pl-2 pt-1 w-[306px] max-w-[306px] ">See information about your account</h1>
        

        <button className="flex w-[400px] mt-4 hover:bg-gray-200 py-2">
            <img className="h-5 w-5 ml-3 mt-2" src="/images/profile-icon.png"></img>
            <div className="flex flex-col ml-3">
                <h1 className="text-sm mr-auto">Account Information</h1>
                <h1 className="text-xs text-gray-400">See your account information like your email address</h1>
            </div>
            <img className="h-4 w-4 mt-3 ml-auto mr-2 mb-1" src="/images/rightarrow.png"></img>

        </button>

        <button onClick={()=>setCurrentSetting("ChangePassword")} className="flex w-[400px] hover:bg-gray-200 py-2">
            <img className="h-4 w-4 ml-3 mt-2" src="/images/key.png"></img>
            <div className="flex flex-col ml-4">
                <h1 className="text-sm mr-auto">Change your password</h1>
                <h1 className="text-xs text-gray-400">Change your password at any time</h1>
            </div>
            <img className="h-4 w-4 mt-3 ml-2 ml-auto mr-2" src="/images/rightarrow.png"></img>

        </button>

        <button onClick={()=>{setCurrentSetting("DeleteAccount")}} className="flex w-[400px] hover:bg-gray-200 py-2">
            <img className="h-4 w-4 ml-3 mt-2" src="/images/brokenheart.png"></img>
            <div className="flex flex-col ml-4">
                <h1 className="text-sm mr-auto">Deactivate your account</h1>
                <h1 className="text-xs text-gray-400">Delete everything associated with your account</h1>
            </div>
            <img className="h-4 w-4 mt-3 ml-2 ml-auto mr-2 mb-1" src="/images/rightarrow.png"></img>
        </button>

        { (currentSetting == "DeleteAccount") ? <div className="flex self-center mt-10 border-2 rounded-lg justify-between w-60 h-12">
            <h1 className="pl-2 mt-3 font-bold">Are you Sure</h1>
            <button onClick={()=>deleteUser()} className="ml-2 bg-red-200 my-1 px-1 rounded-lg">Yes</button>
            <button onClick={()=>{setCurrentSetting("")}} className="ml-2 bg-green-200 my-1 px-2 rounded-lg mr-1">No</button>
        </div> : <></>}

        { (currentSetting == "ChangePassword") ? <div className="mt-3">
            <h1 className="font-bold">New Password</h1>
            <textarea value={passwordValue} onChange={(e)=>setPasswordValue(e.target.value)} className="resize-none outline h-6 mt-1">sf</textarea>
            <button onClick={()=>changePassword()} className=" ml-3 text-xl">Done</button>
        </div> : <></>}

        
      

    </div>

    </div>




  )
}
