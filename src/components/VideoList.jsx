import React, { useContext } from 'react'
import VideoCard from "./VideoCard";
import { MyStore } from "../context/MyContext";

const VideoList = () => {
 let {videos} = useContext(MyStore);

  return (
   <div className=' overflow-y-scroll auto-rows-max [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
     <div className="layout w-full min-h-screen bg-black pr-10 pl-10 pb-20 pt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
    {videos.map((video) => (    
        <VideoCard key={video.id} video={video} />
    ))}


  </div>
   </div>
  )
}

export default VideoList
