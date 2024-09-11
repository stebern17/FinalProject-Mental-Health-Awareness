import React from 'react'
import BigButton from './BigButton'

export default function NewsCard({judul, deskripsi}) {
  return (
    <div>
        <div className='grid grid-cols-2 items-center bg-[#6A9C89] rounded-2xl p-5'>
            <div>
                <h2 className='font-bold text-2xl'>{judul}</h2>
                <p>{deskripsi}</p>
                <BigButton className='mt-20 py-2 px-4 rounded-md font-bold' title={'Baca Selengkapnya'}/>
            </div>
            <img src="https://picsum.photos/400" alt="news" className='mx-auto h-full object-cover'/>
        </div>

      
    </div>
  )
}
