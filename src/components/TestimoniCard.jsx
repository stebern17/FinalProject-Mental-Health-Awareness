import React from 'react'
import { Rating } from 'flowbite-react'


export default function TestimoniCard({testi, nama, date, rating}) {
  return (
    <div className=" rounded-xl p-6 flex flex-col justify-between h-full shadow-sm bg-white">
      <Rating>
        {[...Array(5)].map((_, index) => (
          <Rating.Star key={index} filled={index < rating} />
        ))}
      </Rating>
  <h4 className="mb-4 text-lg text-gray-800 italic">"{testi}"</h4>
  <div className="mt-auto flex justify-between items-center">
    <h5 className="font-semibold text-gray-900">{nama}</h5>
    <p className="text-sm text-gray-500">{date}</p>
  </div>
</div>

  )
}
