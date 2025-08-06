
import React from 'react';

export default function YouTubeSidebar() {
  return (
    <div className="bg-black min-h-screen p-4">
      <div className=" text-white w-64 h-screen overflow-y-auto">
      {/* Main Navigation */}
      <div className="px-3 py-2">
        <div className="space-y-1">
          <a href="#" className="flex items-center px-3 py-2 rounded-lg bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] text-white">
            <svg className="w-6 h-6 mr-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span className="text-sm font-normal">Home</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] text-white">
            <svg className="w-6 h-6 mr-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-normal">Shorts</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] text-white">
            <svg className="w-6 h-6 mr-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h4a1 1 0 0 1 0 2h-1v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6H3a1 1 0 1 1 0-2h4zM6 6v14h12V6H6zm3-2V3h6v1H9z" />
            </svg>
            <span className="text-sm font-normal">Subscriptions</span>
            <div className="w-1 h-1 bg-blue-500 rounded-full ml-auto"></div>
          </a>
        </div>
      </div>

      <hr className="border-[rgba(255,255,255,0.1)] mx-3 my-3" />

      {/* You Section */}
      <div className="px-3">
        <div className="flex items-center px-3 py-2 mb-2">
          <span className="text-base font-normal">You</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        
        <div className="space-y-1">
          <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] text-white">
            <svg className="w-6 h-6 mr-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-normal">History</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] text-white">
            <svg className="w-6 h-6 mr-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            <span className="text-sm font-normal">Playlists</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] text-white">
            <svg className="w-6 h-6 mr-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-normal">Your videos</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] text-white">
            <svg className="w-6 h-6 mr-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            <span className="text-sm font-normal">Your courses</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] text-white">
            <svg className="w-6 h-6 mr-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-normal">Watch Later</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] text-white">
            <svg className="w-6 h-6 mr-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            <span className="text-sm font-normal">Liked videos</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] text-white">
            <svg className="w-6 h-6 mr-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-sm font-normal">Downloads</span>
          </a>
        </div>
      </div>

      <hr className="border-[rgba(255,255,255,0.1)] mx-3 my-3" />

      {/* Subscriptions Section */}
      <div className="px-3">
        <div className="px-3 py-2 mb-2">
          <span className="text-base font-normal">Subscriptions</span>
        </div>
        
        <div className="space-y-1">
          <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] text-white">
            <img src="https://via.placeholder.com/24x24/4a90e2/ffffff?text=LG" alt="LoLZZz Gaming" className="w-6 h-6 rounded-full mr-6" />
            <span className="text-sm font-normal flex-1">LoLZZz Gaming</span>
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] text-white">
            <img src="https://via.placeholder.com/24x24/f39c12/ffffff?text=MG" alt="Mayur Gaming R..." className="w-6 h-6 rounded-full mr-6" />
            <span className="text-sm font-normal flex-1">Mayur Gaming R...</span>
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] text-white">
            <img src="https://via.placeholder.com/24x24/e74c3c/ffffff?text=W" alt="WWE" className="w-6 h-6 rounded-full mr-6" />
            <span className="text-sm font-normal flex-1">WWE</span>
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] text-white">
            <img src="https://via.placeholder.com/24x24/2c3e50/ffffff?text=JN" alt="JEE Nexus by Un..." className="w-6 h-6 rounded-full mr-6" />
            <span className="text-sm font-normal flex-1">JEE Nexus by Un...</span>
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] text-white">
            <img src="https://via.placeholder.com/24x24/8e44ad/ffffff?text=N" alt="Narendra Modi" className="w-6 h-6 rounded-full mr-6" />
            <span className="text-sm font-normal flex-1">Narendra Modi</span>
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] text-white">
            <img src="https://via.placeholder.com/24x24/27ae60/ffffff?text=B" alt="BarbieYT" className="w-6 h-6 rounded-full mr-6" />
            <span className="text-sm font-normal flex-1">BarbieYT</span>
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] text-white">
            <img src="https://via.placeholder.com/24x24/e67e22/ffffff?text=S" alt="Savage GIRL" className="w-6 h-6 rounded-full mr-6" />
            <span className="text-sm font-normal flex-1">Savage GIRL</span>
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          </a>
          <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] text-white">
            <svg className="w-6 h-6 mr-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <span className="text-sm font-normal">Show more</span>
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}