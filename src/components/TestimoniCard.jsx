import React from 'react'

export default function TestimoniCard({testi, nama, date}) {
  return (
    <div className="border border-gray-300 rounded-xl p-6 flex flex-col justify-between h-full shadow-sm bg-white">
  <h4 className="mb-4 text-lg text-gray-800 italic">"{testi}"</h4>
  <div className="mt-auto flex justify-between items-center">
    <h5 className="font-semibold text-gray-900">{nama}</h5>
    <p className="text-sm text-gray-500">{date}</p>
  </div>
</div>

  )
}
