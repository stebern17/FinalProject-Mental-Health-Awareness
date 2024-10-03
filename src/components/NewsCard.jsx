import React from 'react'
import LightButton from './LightButton'

export default function NewsCard({judul, deskripsi, gambar, deskripsiStyle, grid}) {
  return (
    <div className="flex justify-center py-6">
      <div className={`grid ${grid} items-center bg-[#6A9C89] text-white rounded-2xl p-6 shadow-lg max-w-4xl w-full gap-6`}>
        <div className="space-y-4">
          <h2 className="font-bold text-3xl">{judul}</h2>
          <p className={`${deskripsiStyle} text-sm leading-relaxed`}>{deskripsi}</p>
          <LightButton
            className="mt-8 py-2 px-6 bg-white text-[#6A9C89] rounded-md font-semibold hover:bg-[#5C8E7C] transition-colors duration-300"
            title="Baca Selengkapnya"
          />
        </div>
        <img
          src="https://picsum.photos/400"
          alt="news"
          className={`${gambar} rounded-lg object-cover w-full h-48 md:h-full`}
        />
      </div>
    </div>
  )
}
