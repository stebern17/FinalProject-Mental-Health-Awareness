import React from 'react'
import HeroImage from './../../public/HeroImage.svg'
import BigButton from '../components/BigButton'

export default function HeroSection() {
  return (
    <>
    <section className='bg-[#16423C] py-5'>
        <div className='container grid grid-cols-2'>
            <div className='text-center my-auto'>
                <h1 className='text-[50px] text-white mb-5 font-bold'>SAFE YOUR SELF WITH US !</h1>
                <p className='text-xl text-white'>“Jaga Mentalmu, Temukan Ruang Aman dan Dukungan Online yang Sesuai dengan Gaya Hidupmu. Bersama, Kita Bisa Melewati Tantangan dan Membangun Kesejahteraan Mental yang Tangguh”</p>
                <BigButton className='mt-24 text-2xl rounded-full py-3 px-6 font-bold' title={'Konsultasi Sekarang'}/>
            </div>
            <img src={HeroImage} alt="HeroImage" className='mx-auto' />

        </div>
    </section>
    </>
  )
}
