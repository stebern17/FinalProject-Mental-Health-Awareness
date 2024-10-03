import React from 'react'

export default function LightButton({className, title, onClick}) {
  return (

    <button className={`${className} bg-[#C4DAD2] py-2 px-4 font-semibold text-[#16423C] hover:bg-[#1d6b5e] focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2`} onClick={onClick}>
    {title}
    </button>

  )
}
