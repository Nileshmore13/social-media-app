import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homePage/HomePage'
import LoginPage from '../pages/loginPage/LoginPage'
import ProfilePage from '../pages/profilePage/ProfilePage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/profile/:userId" element={<ProfilePage/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
