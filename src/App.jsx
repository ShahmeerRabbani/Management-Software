import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './Screens/Login'
import SignUpPage from './Screens/Signup'
import  Dashboard  from './Screens/dashboard'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/signUp' element={<SignUpPage/>}/>
      <Route path='/home' element={<Dashboard/>}/>
    </Routes>
  )
}

export default App
