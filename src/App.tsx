import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Chat } from './pages/Chat'
import { SignIn } from './pages/SignIn'
import { SignOut } from './pages/SignOut'

function App() {
  const [currentuser, setCurrentuser] = useState(null)
  console.log(currentuser)

  function signIn(data: any) {
    setCurrentuser(data.user)
    localStorage.token = data.token
  }
  function signOut(data: any) {
    setCurrentuser(null)
    localStorage.removeItem("token")
  }
  useEffect(() => {
    if (localStorage.token) {
      fetch('http://localhost:4001/validate', {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            alert(data.error)
          } else {
            signIn(data)
            console.log(data.user)
          }
        })
    }
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/sign_in" />} />
        <Route path="/sign_in" element={<SignIn signIn={signIn} />} />
        <Route path="/sign_out" element={<SignOut signIn={signIn} />} />
        <Route path="/chat" element={<Chat signOut={signOut} currentuser={currentuser} />} />
      </Routes>
    </div>
  )
}

export default App
