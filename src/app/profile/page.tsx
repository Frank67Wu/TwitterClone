import { Navbar } from "../../../components/Navbar";
import { ProfileFull } from "../../../components/ProfileFull";
import { SearchBar } from "../../../components/SearchBar";
import { TrendingBox } from "../../../components/TrendingBox";
import { Tweet } from "../../../components/Tweet";
import { TweetBox } from "../../../components/TweetBox";
import { WhatsHappening } from "../../../components/WhatsHappening";
import { WhoToFollow } from "../../../components/WhoToFollow";



export default function Home() {
  return (
    <div className = "flex container mx-auto items-start justify-center max-w-full overflow-x-hidden">


    <div className="w-[176px] min-w-[176px] h-full bg-gray-300 z-40">
 
    <Navbar/>

    </div>

  

    <main className="flex-row min-h-screen border-x min-w[448px] max-w-[448px]">

      <ProfileFull/>
    
    </main>

    <div className="mx-4 w-72 min-w-72 h-screen z-40">
      <div className="fixed">
        <SearchBar width={"w-60"} className={"mt-1"} placeholderText="Search Twitter"/>

        <WhoToFollow className="mt-2"/>

        <WhatsHappening className={"mt-3"}trending={[<TrendingBox gray={true} />, <TrendingBox gray={true}/>, <TrendingBox gray={true}/>]}/>


      </div>
    </div>

    

    </div>




  )
}
