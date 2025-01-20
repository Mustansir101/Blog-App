import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import auth from "./appwrite/auth"
import { login, logout } from './store/authSlice'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { Outlet } from 'react-router-dom'

function App() {
  // whenever u got to ask database pr network for info, use load state, to show loading icon
  const [loading,setLoading] = useState(true) 
  const dispatch = useDispatch()

  // function to check who if logged in
  useEffect(() => {
    auth.getCurrentUser()
    .then((userData)=>{                   // agar data successfully agaya
      if(userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  }, [])
  
  if (!loading) {
    return <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          <h1>Test</h1>
          {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  }

  return (
    <>
    <h1>Blog App with Appwrite</h1>
    </>
  )
}

export default App
