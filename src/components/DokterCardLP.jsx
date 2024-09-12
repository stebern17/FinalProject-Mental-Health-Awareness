import React from 'react'

export default function DokterCardLP({nama, spesialis, komen}) {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="bg-[#6A9C89] text-white rounded-xl shadow-lg p-6 max-w-sm w-full min-h-48">
        <h1 className="text-2xl font-bold mb-2">{nama}</h1>
        <p className="text-sm font-medium mb-4 opacity-80">{spesialis}</p>
        <p className="text-sm leading-relaxed">{komen}</p>
      </div>
    </div>
  )
}
