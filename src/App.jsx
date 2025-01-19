import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'

function App() {
  const [loading,Setloading] = useState() // why?
  const dispatch = useDispatch()

  return (
    <>
    <h1>Blog App with Appwrite</h1>
    </>
  )
}

export default App
