import React from 'react'

export default function TestimoniCard({testi, nama, date}) {
  return (
    <div className="border-black border rounded-xl p-5 flex flex-col justify-between h-full">
      <h4 className="mb-4">"{testi}"</h4>
      <div className="mt-auto flex justify-between items-center">
        <h5 className="font-semibold">{nama}</h5>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  )
}
