import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as AuthLogin } from '../store/authSlice'
import { Button, Input, Logo } from "./index"
import AuthService from '../appwrite/auth'
import {useDispatch} from 'react-redux'
import { useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async (data) => { // data given by Handle Submit
        setError("")
        try {
            const session = await AuthService.login(data)
            
            // if logged in
            if(session){  
              const userData = await AuthService.getCurrentUser()
              if(userData) {
                dispatch(AuthLogin(userData))
              }
              navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='flex items-center justify-center w-full'>
      <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
        <h2 className='text-center text-2xl font-bold leading-tight'> Sign in to your Account </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
            <Link to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
             > Sign Up </Link>
        </p>

        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

        {/* // react-hook-form */}
        <form onSubmit={handleSubmit(login)} className='mt-8'>     
          <div className='space-y-5'>
            <Input
             label = "Email: "
             placeholder = "Enter Your Email"
             type="email"
             {...register("email", {required:true})}   // ... is imp else it will overwrite, also stores as Obj, advatage- no need to create states
            />

            <Input
             label = "Password: "
             placeholder = "Enter Your Password"
             type="password"
             {...register("password", {required:true})}
            />

            <Button
             type="submit"
             className="w-full"
            >Sign In</Button>
          </div>
        </form> 
      </div>
    </div>
  )
}

export default Login

// note, Link pe click karne pe reroute hoga, navigate, directly reroute karta hai