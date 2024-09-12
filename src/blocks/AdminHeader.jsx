import React from 'react'
import { Link } from 'react-router-dom'
import PageLogo from './../../public/PageLogo.png'

export default function AdminHeader() {
  return (
    <div>
  <header className="bg-[#16423C] max-h-[15vh] p-4 shadow-md">
    <div className="container mx-auto grid grid-cols-3 items-center gap-4">
      <Link to="/" className="flex justify-start">
        <img src={PageLogo} alt="Logo" className="h-12 md:h-16 object-contain" />
      </Link>
      <ul className="flex justify-center items-center gap-6 text-white text-sm md:text-base font-medium">
        <Link to="/manage-konsultasi" className="hover:text-gray-300 transition duration-200">
          <li>Manage Konsultasi</li>
        </Link>
        <Link to="/write-news" className="hover:text-gray-300 transition duration-200">
          <li>Write News</li>
        </Link>
        <Link to="/testimoni" className="hover:text-gray-300 transition duration-200">
          <li>Testimoni</li>
        </Link>
        <Link to="/dashboard" className="hover:text-gray-300 transition duration-200">
          <li>Dashboard</li>
        </Link>
      </ul>
      <ul className="flex justify-end items-center gap-4 text-white text-xs md:text-sm font-medium">
        <li className="hover:text-gray-300 transition duration-200 cursor-pointer">Notif</li>
        <li className="hover:text-gray-300 transition duration-200 cursor-pointer">Pengaturan</li>
        <li className="hover:text-gray-300 transition duration-200 cursor-pointer">Profile</li>
      </ul>
    </div>
  </header>
</div>

  )
}

