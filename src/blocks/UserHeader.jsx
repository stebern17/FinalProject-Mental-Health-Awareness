import React from 'react'
import PageLogo from './../../public/PageLogo.png'
import { Link } from 'react-router-dom'

export default function UserHeader() {
  return (
    <div>
        <header className='bg-[#16423C] max-h-[15vh] p-2'>
        <div className='container grid grid-cols-3 '>
            <Link to={"/"}><img src={PageLogo} alt="Logo" className='h-16 object-cover' /></Link>
            <ul className='flex text-white items-center gap-6'>
                    <Link><li>Konsultasi</li></Link>
                    <Link><li>Pertolongan Terdekat</li></Link>
                    <Link><li>Testimoni</li></Link>
                    <Link><li>Dashboard</li></Link>
            </ul>
            <ul className='ms-auto flex items-center gap-2 text-white text-xs'>
                <li>Notif</li>
                <li>Pengaturan</li>
                <li>Profile</li>

            </ul>
        </div>
    </header>
      
    </div>
  )
}
