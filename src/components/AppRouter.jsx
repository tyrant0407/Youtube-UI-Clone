import React from 'react'
import { Routes ,Route} from 'react-router'
import Home from '../pages/Home'
import PlayerPage from '../pages/PlayerPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<PlayerPage />} />  
    </Routes>
  )
}

export default AppRouter
