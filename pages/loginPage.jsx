import React from 'react'
import Style from '../styles/Login.module.css'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
} from 'react-icons/fa'

export default function login() {
  return (
    <div className='flex justify-center items-center h-screen mt-[-20px] mb-[50px]'>
      <div className='max-w-full w-[768px] min-h-[480px] shadow-2xl relative'>
        <div className='absolute top-0 h-full left-0 w-1/2 z-[2]'>
          <form action="#" className='flex bg-[#f2eee3] items-center justify-center flex-col px-12 h-full text-center'>
            <p className='text-5xl font-bold mb-6 text-[#a24f5e]'>Sign In</p>
            <div className='flex justify-center my-2'>
              <a href="#" className='border-2 border-gray-300 rounded-full p-3 mx-1'>
                <FaFacebookF className='text-sm' />
              </a>
              <a href="#" className='border-2 border-gray-300 rounded-full p-3 mx-1'>
                <FaLinkedinIn className='text-sm' />
              </a>
              <a href="#" className='border-2 border-gray-300 rounded-full p-3 mx-1'>
                <FaGoogle className='text-sm' />
              </a>
            </div>
            <p className='text-gray-400 my-3'>or use your email account</p>
            <input className='bg-[#e2e0d5] border-none py-3 px-4 my-2 w-full' type="email" placeholder="Email" />
            <input className='bg-[#e2e0d5] border-none py-3 px-4 my-2 w-full' type="password" placeholder="Password" />
            <a className='text-[#ae988a] text-sm my-4' href="#">Forgot your password?</a>
            <button className={Style.signInBtn}>Sign In</button>
          </form>
        </div>
        <div className='absolute top-0 left-1/2 w-1/2 h-full z-[1]'>
          <div className='relative -left-full h-full w-[200%] bg-gradient-to-r from-[#decec8] to-[#382a1d]'>
            <div className='absolute flex justify-center items-center flex-col px-10 top-0 h-full w-1/2 right-0'>
              <div className='mx-auto w-full text-[#d8b26e] text-center ring-1 ring-yellow-500 px-4 py-8 mb-8'>
                <p className='text-5xl font-bold mb-6'>Make a List</p>
                <p className='text-lg font-thin my-5'>The New To Do App helps you spend less time managing your schedule and more time enjoying it.</p>
              </div>
              <button className={Style.signUpBtn}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
