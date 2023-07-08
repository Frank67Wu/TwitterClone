import { MessagePreview } from "../../../components/MessagePreview";
import { MessageTextBox } from "../../../components/MessageTextBox";
import { Navbar } from "../../../components/Navbar";
import { ProfilePicture } from "../../../components/ProfilePicture";
import { SearchBar } from "../../../components/SearchBar";




export default function Message() {
  return (
    <div className = "flex container mx-auto items-start max-w-full overflow-x-hidden justify-center">


    <div className="w-[176px] min-w-[176px] h-full bg-gray-300 z-40">
 
    <Navbar/>

    </div>

  

    <main className="flex flex-col min-h-screen border-x max-w-[306px] max-h-96 overflow-y-hidden flex-none ">
      <div className="w-[306px] max-w-[306px] bg-white bg-opacity-90 z-40 border-r">

          <h1 className="font-bold text-lg pl-2 pt-1 w-[306px] max-w-[306px] [bg-gray-300">Messages</h1>
          <SearchBar small={true} className="mx-2 mt-4" width={"w-[236px]"} placeholderText="Search Direct Messages"/>



      </div>

      
        <MessagePreview className="mt-2"/>


    </main>

    <div className="flex flex-col w-[462px] min-w-[462px]  px-2 overflow-auto max-h-[95vh]">
        <ProfilePicture className="self-center mt-16 h-12 w-12"/>
        <p className="self-center text-sm mt-1 font-bold">PlaceholderName</p>
        <p className="self-center text-xs -mt-1 text-gray-500">@placeholder</p>

        <p className="self-center text-xs mt-1 text-gray-500 mb-10">Joined June 2023</p>

        <MessageTextBox self={true}/>
        <MessageTextBox self={false}/>
        <MessageTextBox self={false}/>
        <MessageTextBox self={false}/>
        <MessageTextBox self={false}/>
        <MessageTextBox self={false}/>
        <MessageTextBox self={false}/>
        <MessageTextBox self={false}/>
        <MessageTextBox self={false}/>
        <MessageTextBox self={false}/>
        <MessageTextBox self={true}/>
        <MessageTextBox self={false}/>

        <div className="flex fixed bottom-0 w-[462px] z-40 bg-white opacity-100 pb-2">
            <textarea rows={1} className="resize-none min-w-[410px] w-[410px] px-2 py-1 mt-1  outline-none bg-gray-200 rounded-xl"
            placeholder="Start a new message">
                
            </textarea>
            <button className="mt-1 w-8">
                <img className="" src="/images/send-icon.png"/>
            </button>
        </div>


        
    </div>

    

    </div>




  )
}
