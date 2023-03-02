import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homePage/HomePage'
import LoginPage from '../pages/loginPage/LoginPage'
import ProfilePage from '../pages/profilePage/ProfilePage'

const AllRoutes = () => {
  const isAuth = useSelector((state) => state.token);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={isAuth ? <HomePage/> : <Navigate to="/"/>}/>
        <Route path="/profile/:userId" element={isAuth ? <ProfilePage/> : <Navigate to="/"/> }/>
      </Routes>
    </div>
  )
}

export default AllRoutes
