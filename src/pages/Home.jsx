import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import YouTubeSidebar from "../components/YouTubeSidebar";
import { MyStore } from "../context/MyContext";
import VideoList from "../components/VideoList";
const Home = () => {
    const { menuToggle} = useContext(MyStore);
  return (
    <div className='h-screen w-screen bg-black pt-15'> 
        <div className="fixed top-0 left-0 w-full z-10">
    <Navbar />
    </div>
    <div className="flex h-screen">
    {menuToggle ? <div className="h-screen bg-black">
        <YouTubeSidebar />
      </div> : ""}
      <div className="flex flex-col w-full h-full">
      <div className="bg-black p-4">
        <div className="flex items-center space-x-3 overflow-x-auto scrollbar-hide">
            <div className="bg-white text-black px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer">
                All
            </div>
            <div className="bg-[#272727] text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-[#3f3f3f]">
                Gaming
            </div>
            <div className="bg-[#272727] text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-[#3f3f3f]">
                Music
            </div>
            <div className="bg-[#272727] text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-[#3f3f3f]">
                Esports
            </div>
            <div className="bg-[#272727] text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-[#3f3f3f]">
                Battlegrounds Mobile India
            </div>
            <div className="bg-[#272727] text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-[#3f3f3f]">
                Live
            </div>
            <div className="bg-[#272727] text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-[#3f3f3f]">
                JavaScript
            </div>
            <div className="bg-[#272727] text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-[#3f3f3f]">
                Podcasts
            </div>
            
        </div>
    </div>
      <VideoList/>
      </div>
    </div>
    
    </div>
  )
}

export default Home
