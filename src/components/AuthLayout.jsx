import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// basically prtected container
function Protected({children, authentication = true}) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const authStatus = useSelector((state)=>state.auth.status)
    
    // useEffect(()=>{
    //     if(authStatus===false){
    //         navigate("/login")
    //     } else if (authStatus){
    //         navigate("/")
    //     }
    //     setLoading(false)
    // }, [authStatus, navigate])

  useEffect(() => {
    if(authentication && authStatus !== authentication){
        navigate("/login")
    } else if(!authentication && authStatus !== authentication){
        navigate("/")
    }
    setLoader(false)
  }, [authStatus, navigate, authentication])

  return (
    loader ? (
      <div id="loading-screen" className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          {/* Spinner */}
          <div className="h-16 w-16 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
          {/* Loading Text */}
          <p className="mt-4 text-gray-700 text-lg font-medium">Loading...</p>
        </div>
      </div>) : <>{children}</>
  )
}

export default Protected