import React from 'react'
import TestimoniCard from '../components/TestimoniCard'

export default function TestimoniSection() {
    const testimoni = [ {
        testi: 'Platform yang sangat membantu untuk konsultasi kesehatan mental. Psikolognya profesional dan sangat mendengarkan.',
        nama: 'Sarah Connor',
        date: '01/08/2023',
      },
      {
        testi: 'Mudah digunakan dan memberikan solusi yang tepat. Saya merasa lebih baik setelah sesi konseling.',
        nama: 'Michael Tan',
        date: '15/07/2023',
      },
      {
        testi: 'Konsultasi yang cepat dan efektif. Psikolognya sangat ramah dan membuat saya nyaman.',
        nama: 'Lisa Wong',
        date: '23/06/2023',
      },
      {
        testi: 'Sesi konseling yang sangat membantu dalam mengatasi stres dan kecemasan. Sangat direkomendasikan!',
        nama: 'Andrew Smith',
        date: '05/05/2023',
      },
      {
        testi: 'Menyediakan layanan yang sangat fleksibel dengan waktu saya. Pelayanan yang sangat memuaskan.',
        nama: 'Emily Johnson',
        date: '30/04/2023',
      },
      {
        testi: 'Platform ini memudahkan saya untuk berbicara dengan psikolog tanpa harus keluar rumah. Sangat praktis!',
        nama: 'John Doe',
        date: '10/03/2023',
      }]
  return (
    <section>
        <div className='container'>
        <h1 className='text-3xl font-bold my-5 text-[#16423C]'>Testimoni</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {testimoni.map((testi, index) => (
                <TestimoniCard key={index} testi={testi.testi} nama={testi.nama} date={testi.date}/>
            ))}

        </div>



        </div>
    </section>
  )
}
