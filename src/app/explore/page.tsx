'use client'

import { Navbar } from "../../../components/Navbar";
import { SearchBar } from "../../../components/SearchBar";
import { TrendingBox } from "../../../components/TrendingBox";
import { WhoToFollow } from "../../../components/WhoToFollow";
import { TopicBox } from "../../../components/TopicBox";
import { useState } from "react";

export default function Explore() {

    const [searchValue, setSearchValue] = useState("")

    function onChange(val : any) {
      setSearchValue(val)
    }

    return (
      <div className = "flex container mx-auto items-start justify-center max-w-full overflow-x-hidden">

   
        <div className="w-[176px] min-w-[176px] h-full bg-gray-300 z-40">
        
        <Navbar/>

        </div>
  
  
    
  
      <main className="flex-row min-h-screen border-x min-w-[448px] max-w-[448px]">
        <div className="fixed w-[448px] max-w-[448px] bg-white bg-opacity-90 z-40 border-r">
  
        <SearchBar onChange={onChange} inputValue={searchValue} className={"mt-1 mx-2"} placeholderText="Search Twitter"/>
            <nav className="flex justify-around border-b mt-2  w-[448px] max-w-[448px] ">
            <button className="flex justify-center hover:bg-gray-300 flex-grow">
              <h1 className="font-bold pb-1 border-b-2 border-blue-400 text-sm pt-2 pb-3">For you</h1>
            </button>
            <button className="flex justify-center hover:bg-gray-300 flex-grow">
              <h1 className="font-bold text-sm pt-2 pb-3" >Trending</h1>
            </button>
            <button className="flex justify-center hover:bg-gray-300 flex-grow">
              <h1 className="font-bold text-sm pt-2 pb-3" >News</h1>
            </button> 
            <button className="flex justify-center hover:bg-gray-300 flex-grow">
              <h1 className="font-bold text-sm pt-2 pb-3" >Sports</h1>
            </button>      
            <button className="flex justify-center hover:bg-gray-300 flex-grow">
              <h1 className="font-bold text-sm pt-2 pb-3" >Following</h1>
            </button>      
  
          </nav>
  
  
  
        </div>
    
  
          
  
          <TrendingBox className="mt-20"/>
          <TrendingBox/>
          <TrendingBox/>
          <TrendingBox/>
          <TrendingBox/>
          <TrendingBox/>
          <TrendingBox/>
          <TrendingBox/>
          <TrendingBox/>

          <TopicBox/>


          
  
  
          
  
  
  
          
  
  
      </main>
  
      <div className="mx-4 w-72 min-w-72 h-screen z-40">
        <div className="fixed">
  
          <WhoToFollow className="mt-2"/>
  
  
        </div>
      </div>
  
      
  
      </div>
  
  
  
  
    )
  }

  