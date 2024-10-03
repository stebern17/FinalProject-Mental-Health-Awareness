import React from 'react'
import { useState } from 'react'
import { Label, Textarea, Rating } from 'flowbite-react'

export default function TestimoniForm() {
    const [rating, setRating] = useState(0)
    const handleRating = (value) => {
        setRating(value+1)
    }  

  return (
    <section className='w-[50vw] mx-auto my-5'>
        <div className='mb-2'>
            <Label htmlFor='testimoni' value='Masukan Testimoni Anda' />
        </div>
        <Textarea id='testimoni' placeholder='masukan pesanmu disini....' required rows={4}/>
        <div className='mt-2'>
            <Rating>
                {Array(5)
                    .fill(0)
                    .map((_, index) => (
                    <Rating.Star
                        key={index}
                        filled={index < rating}
                        onClick={() => handleRating(index)} // Allows clicking the star to set the rating
                        className="cursor-pointer"
                    />
                    ))}
            </Rating>
        </div>
    </section>

  )
}
