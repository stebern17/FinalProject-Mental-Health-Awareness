import React from 'react'
import UserLayout from '../layouts/UserLayout'
import KonsultasiSection from '../blocks/KonsultasiSection'

export default function KonsultasiUser() {
  return (
    <UserLayout>
        <div className='min-h-screen'>
            <div className='container'>
              <h2 className='text-3xl font-bold text-center p-5'>Selamat Datang, Daftarkan Dirimu Sekarang</h2>
                <KonsultasiSection/>
                
            </div>
        </div>
    </UserLayout>
  )
}
