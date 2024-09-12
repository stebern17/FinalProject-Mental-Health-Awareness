import React from 'react'
import PageLogo from './../../public/PageLogo.png'
import { Link } from 'react-router-dom'
import UserIcon from './../Icons/user.svg'
import SettingIcon from './../Icons/setting.svg'
import NotificationIcon from './../Icons/bell.svg'

export default function UserHeader() {
  return (
    <header className="bg-[#16423C] p-4 shadow-md max-h-[15vh]">
      <div className="container mx-auto grid grid-cols-3 items-center gap-4">
        {/* Logo Section */}
        <Link to="/" className="flex justify-start">
          <img src={PageLogo} alt="Logo" className="h-12 md:h-16 object-contain" />
        </Link>
  
        {/* Navigation Links */}
        <nav className="flex justify-center items-center gap-4 text-white text-sm md:text-base font-medium">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/konsultasi"
                className="hover:text-gray-300 transition duration-200 whitespace-nowrap"
              >
                Konsultasi
              </Link>
            </li>
            <li>
              <Link
                to="/pertolongan-terdekat"
                className="hover:text-gray-300 transition duration-200 whitespace-nowrap"
              >
                Pertolongan Terdekat
              </Link>
            </li>
            <li>
              <Link
                to="/testimoni"
                className="hover:text-gray-300 transition duration-200 whitespace-nowrap"
              >
                Testimoni
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="hover:text-gray-300 transition duration-200 whitespace-nowrap"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
  
        {/* Action Icons */}
        <ul className="flex justify-end items-center gap-4 text-white text-xs md:text-sm font-medium">
          <li className="transition duration-200 cursor-pointer">
            <img
              src={NotificationIcon}
              alt="Notification Icon"
              className="hover:opacity-80 hover:scale-105 transition duration-200"
              aria-label="Notifications"
            />
          </li>
          <li className="transition duration-200 cursor-pointer">
            <img
              src={SettingIcon}
              alt="Settings Icon"
              className="hover:opacity-80 hover:scale-105 transition duration-200"
              aria-label="Settings"
            />
          </li>
          <li className="transition duration-200 cursor-pointer">
            <img
              src={UserIcon}
              alt="User Icon"
              className="hover:opacity-80 hover:scale-105 transition duration-200"
              aria-label="User Profile"
            />
          </li>
        </ul>

      </div>
    </header>
  );  
}
