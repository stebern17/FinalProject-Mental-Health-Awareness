import React from 'react'
import PageLogo from './../../public/PageLogo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-[#16423C] max-h-[15vh] p-2'>
        <div className='container flex justify-between items-center'>
            <Link to={"/"}><img src={PageLogo} alt="Logo" className='h-16 object-cover' /></Link>
            <ul className='flex gap-2 text-white'>
                    <Link><li>Login</li></Link>
                    <li>|</li>
                    <Link><li>Register</li></Link>
            </ul>

        </div>
    </header>
  )
}
