import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const Navbar = () => {
 let {setMenuToggle} = useContext(MyStore)
  return (
    <nav className="card px-4 py-2">
    <div className="flex items-center justify-between">
      {/* Left section - Logo and Menu */}
      <div className="flex items-center space-x-4">
        <button onClick={() => setMenuToggle(prev=>!prev)} className="p-2 hover:bg-white rounded-full hidden lg:flex">
          <svg className="w-6 h-6 text-white hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex items-center space-x-1">
          <div className="rounded w-8 flex items-center justify-center">
          <img className='h-full w-[100%]' src="/youtube.png" alt="" />
          </div>
          <span className="text-xl font-semibold text-white">YouTube</span>
          <span className="text-xs text-gray-500/80">IN</span>
        </div>
      </div>

      {/* Center section - Search */}
      <div className="flex-1 max-w-2xl mx-4 hidden sm:flex">
        <div className="flex w-full">
          <div className="flex-1 flex">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-white rounded-l-full focus:outline-none focus:border-blue-500 text-white placeholder-white"
            />
            <button className="px-6 py-2  bg-[rgba(41,41,41,0.883)] border-white border-l-0 border  rounded-r-full">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
              </svg>
            </button>
          </div>
          <button className="ml-2 p-2 hover:bg-white rounded-full hidden sm:block">
            <svg className="w-6 h-6 text-white hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2l2-2h6l2 2h2a2 2 0 0 1 2 2v5z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right section - Icons */}
      <div className="flex items-center space-x-2">
        <button className="p-2 hover:bg-white rounded-full hidden sm:block">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
 
              <svg className="w-5 h-5 text-white lg:hidden md:hidden " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
              </svg>
            
        <div className="relative">
          <button className="p-2 hover:bg-white rounded-full">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5m0-5V3" />
            </svg>
          </button>
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
            9+
          </span>
        </div>
        <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
  )
}

export default Navbar