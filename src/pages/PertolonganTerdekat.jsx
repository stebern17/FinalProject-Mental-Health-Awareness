import React from 'react'
import UserLayout from '../layouts/UserLayout'
import MapSection from '../blocks/MapSection'

export default function PertolonganTerdekat() {
  return (
    <UserLayout>
        <div className='min-h-screen'>
            <div className='container'>
              <h1 className='text-3xl font-bold mt-10 text-center'>Pertolongan Terdekat</h1>
              <div className='flex justify-center'>
              <MapSection/>
              </div>
              
            </div>
        </div>

    </UserLayout>
    
  )
}
