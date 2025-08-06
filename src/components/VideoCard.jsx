import React from 'react'
import { NavLink } from 'react-router'

const VideoCard = ({video}) => {
  return (
    <NavLink to={`/video/${video.id}`} className="bg-[#0f0f0f] rounded-xl overflow-hidden w-full shrink-0">
    {/* Thumbnail */}
    <div className="relative">
      <img 
        src={video.thumbnail}
        alt="AI UI Design tutorial"
        className="w-full aspect-video object-cover rounded-xl"
      />
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-2 py-1 rounded">
        {video.duration}
      </div>
    </div>

    {/* Video Info */}
    <div className="flex mt-3 px-1">
      {/* Channel Avatar */}
      <div className="flex-shrink-0 mr-3">
        <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
      </div>

      {/* Video Details */}
      <div className="flex-1 min-w-0 p-2">
        <h3 className="text-white text-base font-medium line-clamp-2 mb-1 leading-5">
         {video.title}
        </h3>

        <div className="flex items-center mb-1">
          <span className="text-[#aaa] text-sm">You B Tech</span>
        </div>

        <div className="text-[#aaa] text-sm">
          {video.views} • {video.uploadTime}
        </div>
      </div>

      {/* More Options */}
      <div className="flex-shrink-0 ml-2">
        <button className="p-1 hover:bg-[#3f3f3f] rounded-full">
          <svg className="w-5 h-5 text-[#aaa]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
      </div>
    </div>
  </NavLink>
  )
}

export default VideoCard