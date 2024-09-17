import React from 'react'
import HeroImage from './../../public/HeroImage.svg'
import Apple from './../Icons/apple.svg'
import Google from './../Icons/google.svg'
import DarkButton from '../components/DarkButton'
import { Link } from 'react-router-dom'

export default function LoginBlock() {
  return (
    <>
  <div className="container min-h-screen flex items-center justify-center p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold my-5 text-[#16423C]">Login</h1>
        <form className="space-y-6">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              type="email"
              name="email"
              className="mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="you@example.com"
            />
          </label>
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              type="password"
              name="password"
              className="mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Input Password"
            />
          </label>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                className="form-checkbox h-4 w-4 text-sky-600 focus:ring-sky-500"
              />
              <span className="ml-2 text-sm text-slate-700">Remember me</span>
            </label>
            <a href="#" className="text-sm text-sky-500 hover:text-sky-700">
              Forgot Password?
            </a>
          </div>
          <DarkButton Title="Login"  className='rounded-md'/>
          <div className="text-center text-sm text-slate-600">
            <p>Not have an account yet?  <Link to="/register" className='text-sky-500 hover:text-sky-700'>Sign Up</Link></p>
          </div>
        </form>
        <div className="mt-6">
          <p className="text-center text-sm text-slate-600">Or sign in with</p>
          <div className="flex justify-center gap-4 mt-4">
            <button
              type="button"
              className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <img src={Google} alt="Google" className="h-5 w-5 mr-2" />
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <img src={Apple} alt="Apple" className="h-5 w-5 mr-2" />
              Apple
            </button>
          </div>
        </div>
      </div>
      <img src={HeroImage} alt="HeroImage" className="mx-auto w-full max-w-md object-contain" />
    </div>
  </div>
</>


  )
}