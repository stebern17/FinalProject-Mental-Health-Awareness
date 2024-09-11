import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import HeroSection from '../blocks/HeroSection'
import DokterSection from '../blocks/DokterSection'
import NewsSection from '../blocks/NewsSection'
import TestimoniSection from '../blocks/TestimoniSection'


export default function MainPage() {
  return (
    <DefaultLayout>
        <div className='min-h-screen mb-5'>
            <HeroSection/>
            <DokterSection/>
            <NewsSection/>
            <TestimoniSection/>
        </div>
    </DefaultLayout>
    
  )
}
