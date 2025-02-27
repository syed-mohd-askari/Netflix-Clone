import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <div className='relative font-sans-serif h-screen bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg")] bg-cover'>
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative z-10 h-10px w-full">
        <div className='flex items-center justify-between pt-4 absolute px-36 top-0 left-0 right-0'>
          <img className='w-[200px]' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
        </div>
      </div>
      <div class="relative flex flex-col gap-5 items-center justify-center h-full z-10 text-[white] text-center">
        <p className='text-7xl font-[900] text-[3.5rem]'>Unlimited movies,<br/> TV shows and<br/> more</p>
        <p className='text-xl'>Starts at ₹149. Cancel at any time.</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <a href='/auth'><button className='bg-red-600 px-6 py-3 text-[1.5rem] rounded-md font-semibold text-[white]'>Get Started {'>'}</button></a>
      </div>
      
    </div>
  )
}

export default Home