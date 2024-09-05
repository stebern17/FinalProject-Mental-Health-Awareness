import React from 'react'
import PageLogo from './../../public/PageLogo.png'

export default function Footer() {
  return (
    <footer className='bg-[#16423C] mt-auto p-2'>
        <div className='container grid grid-cols-3 max-h-[20vh] items-center'>
            <img src={PageLogo} alt="Page Logo" className='h-14 object-cover' />
            <p className='text-center text-gray-300 text-sm'>MentalHealthCare @ 2024. All rights reserved.</p>

            
        </div>
    </footer>
  )
}
