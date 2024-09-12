import React from 'react'
import PageLogo from './../../public/PageLogo.png'
import Instagram from './../Icons/Instagram.svg'
import Whatsapp from './../Icons/whatsapp.svg'

export default function Footer() {
  return (
    <footer className="bg-[#16423C] mt-auto p-4">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-4">
    <div className="flex justify-center md:justify-start">
      <img src={PageLogo} alt="Page Logo" className="h-12 md:h-14 object-contain" />
    </div>
    <p className="text-center text-gray-300 text-xs md:text-sm">
      MentalHealthCare © 2024. All rights reserved.
    </p>
    <div className="hidden md:flex justify-end gap-4">
      <img src={Instagram} alt="" />
      <img src={Whatsapp} alt="" />
    </div>
  </div>
</footer>

  )
}
