import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSigninForm, setIsSigninForm] = useState(true);

  const toggleForm = () => {  
    setIsSigninForm(!isSigninForm);
  }

  return (
    <div className='relative font-sans-serif h-screen bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg")] bg-cover'>
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative z-10 h-10px w-full"><Header/></div>
      <div class="h-screen flex items-center justify-center">
        <div class="relative p-20 w-[450px] flex flex-col gap-10 justify-center z-10 text-[white] bg-black bg-opacity-55 rounded-lg">
          <p className='text-7xl font-[900] text-[2rem]'>{isSigninForm ? 'Sign In' : 'Sign Up'}</p>
          <form className='flex flex-col gap-5'>
            {!isSigninForm && <input className='p-4 rounded-md bg-white bg-opacity-5 border' type="text" placeholder='Full Name' />}
            <input className='p-4 rounded-md bg-white bg-opacity-5 border' type="email" placeholder='Email or phone number' />
            <input className='p-4 rounded-md bg-white bg-opacity-5 border' type="password" placeholder='Password' />
            <button className='bg-red-600 p-3 rounded-md font-bold text-[white]'>{isSigninForm ? 'Sign In' : 'Sign Up'}</button>
          </form>
          {isSigninForm ? <p className='cursor-pointer'>New to Netflix? <button className='font-bold' onClick={toggleForm}>Sign up now.</button></p> : <p className='cursor-pointer'>Already registered? <button className='font-bold' onClick={toggleForm}>Sign In now.</button></p>}
          

        </div>
      </div>
      
    </div>
    
  )
}

export default Login