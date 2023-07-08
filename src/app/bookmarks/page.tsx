import Link from "next/link"
import { Navbar } from "../../../components/Navbar"
import { SearchBar } from "../../../components/SearchBar"
import { TrendingBox } from "../../../components/TrendingBox"
import { Tweet } from "../../../components/Tweet"
import { TweetBox } from "../../../components/TweetBox"
import { WhatsHappening } from "../../../components/WhatsHappening"
import { WhoToFollow } from "../../../components/WhoToFollow"




export default function Home() {
  return (
    <div className = "flex container mx-auto items-start justify-center max-w-full overflow-x-hidden">


    <div className="w-[176px] min-w-[176px] h-full bg-gray-300 z-40">
 
    <Navbar/>

    </div>

  

    <main className="flex-row min-h-screen border-x max-w-[448px]">
      <div className="fixed w-[448px] max-w-[448px] bg-white bg-opacity-90 z-40 border-r">

          <h1 className="font-bold text-lg pl-2 pt-1 w-[448px] max-w-[448px] [bg-gray-300">Bookmarks</h1>
          <h1 className="pl-2 text-sm text-gray-400 -mt-1">@Placeholder</h1>
            



      </div>

        <TweetBox className="mt-12" textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est velit. Cursus mattis molestie a iaculis."/>

        <TweetBox textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non nisi est. Praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum varius sit amet. Pellentesque diam volutpat commodo sed. Porttitor massa id neque aliquam. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Pellentesque sit amet porttitor eget dolor morbi non arcu. Ullamcorper eget nulla facilisi etiam. Ut ornare lectus sit amet. A erat nam at lectus. Non curabitur gravida arcu ac tortor dignissim convallis aenean et."/>

        <TweetBox textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non nisi est. Praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum varius sit amet. Pellentesque diam volutpat commodo sed. Porttitor massa id neque aliquam. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Pellentesque sit amet porttitor eget dolor morbi non arcu. Ullamcorper eget nulla facilisi etiam. Ut ornare lectus sit amet. A erat nam at lectus. Non curabitur gravida arcu ac tortor dignissim convallis aenean et."/>


        



        


    </main>

    <div className="mx-4 w-72 min-w-72 h-screen z-40">
      <div className="fixed">
        <SearchBar width={"w-60"} className={"mt-1"} placeholderText="Search Twitter"/>

        <WhatsHappening className={"mt-3"}trending={[<TrendingBox key={1} gray={true} />, <TrendingBox key={2} gray={true}/>, <TrendingBox key={3} gray={true}/>]}/>

        <WhoToFollow className="mt-2"/>


      </div>
    </div>

    

    </div>




  )
}


