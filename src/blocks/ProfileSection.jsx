import React from 'react'
import UserIcon from './../Icons/user.svg'
import DarkButton from '../components/DarkButton'

export default function ProfileSection({username}) {
  return (
    <div className='flex justify-between items-center px-8 md:px-24 mt-5 bg-[#C4DAD2] shadow-md rounded-lg p-4'>
    {/* User Info Section */}
    <div className="flex items-center gap-4">
      <img src={UserIcon} alt="User Icon" className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-full border-2 border-gray-300" />
      <h3 className="text-2xl font-medium text-gray-700">Hi there, {username}</h3>
    </div>

    {/* Edit Profile Button */}
    <div className='flex items-center'>
      <DarkButton Title="Edit Profile" className="rounded-full px-6 py-2 text-sm md:text-base" />
    </div>
  </div>

  )
}
