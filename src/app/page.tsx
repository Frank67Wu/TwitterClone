import { Navbar } from "../../components/Navbar"
import { Tweet } from "../../components/Tweet"
import { SearchBar } from "../../components/SearchBar"
import { WhoToFollow } from "../../components/WhoToFollow"
import { WhatsHappening } from "../../components/WhatsHappening"
import { TweetBox } from "../../components/TweetBox"
import { TrendingBox } from "../../components/TrendingBox"



export default function Home() {
  return (
    <div className = "flex container mx-auto items-start justify-center max-w-full overflow-x-hidden">


    <div className="w-[176px] min-w-[176px] h-full bg-gray-300 z-40">
 
    <Navbar/>

    </div>

  

    <main className="flex-row min-h-screen border-x min-w[448px] max-w-[448px]">
      <div className="fixed w-[448px] max-w-[448px] bg-white bg-opacity-90 z-40 border-r">

          <h1 className="font-bold text-lg pl-2 pt-1 w-[448px] max-w-[448px] [bg-gray-300">Home</h1>
          <nav className="flex justify-around border-b mt-2  w-[448px] max-w-[448px] ">
          <button className="flex justify-center hover:bg-gray-300 flex-grow">
            <h1 className="font-bold pb-1 border-b-2 border-blue-400 text-sm pt-2 pb-3">For you</h1>
          </button>
          <button  className="flex justify-center hover:bg-gray-300 flex-grow">
            <h1 className="font-bold text-sm pt-2 pb-3" >Following</h1>
          </button>          

        </nav>



      </div>
  
        <Tweet className="mt-20"/>

        <TweetBox textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est velit. Cursus mattis molestie a iaculis."/>

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
