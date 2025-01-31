import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import AuthService from "../../appwrite/auth"

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = ()=>{
    AuthService.logout().then( ()=>{
      dispatch(logout())      // ?
    } )
  }
  return (
    <button className='inline-block text-white px-6 py-2 duration-200 hover:bg-white hover:text-black rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn