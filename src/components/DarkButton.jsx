import React from 'react'

export default function DarkButton({Title, className, onClick}) {
  return (
    <button
            type="submit"
            className={`${className} py-2 px-4 bg-[#16423C] text-white font-semibold hover:bg-[#1d6b5e] focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2`}
            onClick={onClick}
          >
            {Title}
    </button>
  )
}
