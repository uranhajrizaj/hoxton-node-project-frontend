import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Chat } from './pages/Chat'
import { SignIn } from './pages/SignIn'
import { SignOut } from './pages/SignOut'

function App() {
  return (
    <div className="App">
  
     <Routes>
        <Route index element={<Navigate to="/sign_in"/>} />
        <Route path="/sign_in" element={<SignIn />}/>
        <Route path="/sign_out" element={<SignOut />}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
    </div>
  )
}

export default App
