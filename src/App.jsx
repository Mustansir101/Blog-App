import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import auth from "./appwrite/auth"
import { login, logout } from './store/authSlice'
import {Header, Footer} from "./components/index"
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
    return (
      <div className='font-mono h-screen flex flex-col bg-white'>
        <div className='w-full block'>
          <Header/>
          <main>
            <Outlet/>
          </main>
          <Footer/>
        </div>
      </div>
    )
  }

  return (
    <>
    <div id="loading-screen" className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="h-16 w-16 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
        {/* Loading Text */}
        <p className="mt-4 text-gray-700 text-lg font-medium">Loading...</p>
      </div>
    </div>
    </>
  )
}

export default App
