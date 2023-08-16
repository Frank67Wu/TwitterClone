'use client'

import { useEffect, useRef, useState } from "react";
import { Navbar } from "../../../components/Navbar";
import { ProfileFull } from "../../../components/ProfileFull";
import { SearchBar } from "../../../components/SearchBar";
import { TrendingBox } from "../../../components/TrendingBox";
import { WhatsHappening } from "../../../components/WhatsHappening";
import { WhoToFollow } from "../../../components/WhoToFollow";
import React from 'react'




export default function Home() {

  const [inputValue, setInputValue] = useState("")
  let ref = useRef(null)

  function OnChange(val : any) {
    setInputValue(val)
  }

  useEffect(() => {
    document.body.style.overflowY = "hidden"
  })
  
  return (
    <div ref={ref} className = "flex container mx-auto items-start justify-center max-w-full overflow-x-hidden">


    <div className="w-[176px] min-w-[176px] h-full bg-gray-300 z-40">
 
    <Navbar/>

    </div>

    <main className="flex-row min-h-screen border-x min-w[448px] w-[448px]">

      <ProfileFull func={() => {
        return ref.current}}
        />
    
    </main>

    <div className="mx-4 w-72 min-w-72 h-screen z-40">
      <div className="fixed">
        <SearchBar inputValue={inputValue} onChange={onchange} width={"w-60"} className={"mt-1"} placeholderText="Search Twitter"/>

        <WhoToFollow className="mt-2"/>

        <WhatsHappening className={"mt-3"}trending={[<TrendingBox key={1} gray={true} />, <TrendingBox key={2} gray={true}/>, <TrendingBox key={3} gray={true}/>]}/>


      </div>
    </div>

    

    </div>




  )
}
