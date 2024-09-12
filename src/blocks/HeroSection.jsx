import React from 'react'
import HeroImage from './../../public/HeroImage.svg'
import LightButton from '../components/LightButton'

export default function HeroSection() {
  return (
    <>
    <section className="bg-[#16423C] py-10 shadow-lg">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6">
    <div className="text-center md:text-left space-y-6">
      <h1 className="text-4xl md:text-5xl text-white font-bold leading-tight">
        SAFE YOUR SELF WITH US!
      </h1>
      <p className="text-lg md:text-xl text-white opacity-80">
        “Jaga Mentalmu, Temukan Ruang Aman dan Dukungan Online yang Sesuai
        dengan Gaya Hidupmu. Bersama, Kita Bisa Melewati Tantangan dan Membangun
        Kesejahteraan Mental yang Tangguh”
      </p>
      <LightButton
        className="mt-8 md:mt-12 bg-white text-[#16423C] hover:bg-[#145c53] transition duration-300 ease-in-out text-xl rounded-full py-3 px-6 font-semibold"
        title={"Konsultasi Sekarang"}
      />
    </div>
    <img
      src={HeroImage}
      alt="HeroImage"
      className="rounded-lg w-full h-auto object-cover shadow-md"
    />
  </div>
</section>

    </>
  )
}
