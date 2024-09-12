import React from 'react'
import BigButton from './BigButton'

export default function NewsCard({judul, deskripsi}) {
  return (
    <div className="flex justify-center py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-[#6A9C89] text-white rounded-2xl p-6 shadow-lg max-w-4xl w-full gap-6">
        <div className="space-y-4">
          <h2 className="font-bold text-3xl">{judul}</h2>
          <p className="text-sm leading-relaxed">{deskripsi}</p>
          <BigButton
            className="mt-8 py-2 px-6 bg-white text-[#6A9C89] rounded-md font-semibold hover:bg-[#5C8E7C] transition-colors duration-300"
            title="Baca Selengkapnya"
          />
        </div>
        <img
          src="https://picsum.photos/400"
          alt="news"
          className="rounded-lg object-cover w-full h-48 md:h-full"
        />
      </div>
    </div>
  )
}
