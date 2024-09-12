import React from 'react'
import PageLogo from './../../public/PageLogo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-[#16423C] max-h-[15vh] p-4 shadow-md">
  <div className="container mx-auto flex justify-between items-center px-4">
    <Link to="/">
      <img src={PageLogo} alt="Logo" className="h-12 md:h-16 object-contain" />
    </Link>
    <ul className="flex gap-4 text-white font-medium text-lg">
      <Link to="/login" className="hover:text-gray-300 transition duration-200">
        <li>Login</li>
      </Link>
      <li className="opacity-50">|</li>
      <Link to="/register" className="hover:text-gray-300 transition duration-200">
        <li>Register</li>
      </Link>
    </ul>
  </div>
</header>

  )
}
