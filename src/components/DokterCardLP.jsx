import React from 'react'

export default function DokterCardLP({nama, spesialis, komen}) {
  return (
    <div>
        <div className='bg-[#6A9C89] rounded-lg p-5 min-h-32'>
            <h1 className='text-xl font-bold'>{nama}</h1>
            <p className='text-sm font-semibold'>{spesialis}</p>
            <p className='text-sm'>{komen}</p>
        </div>
    </div>
  )
}
