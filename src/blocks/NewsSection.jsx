import React from 'react'
import NewsCard from '../components/NewsCard'

export default function NewsSection() {
    const news =[
        {
            judul: 'Tips Mengatasi Kecemasan',
            deskripsi: 'Kecemasan merupakan hal yang wajar, namun jika tidak diatasi akan berdampak buruk pada kesehatan mental.',
        },
    ]
  return (
    <section>
        <div className='container'>
        <h1 className='text-3xl font-bold my-5'>Physicological News</h1>
        <div>
            {news.map((news, index) => (
            <NewsCard
              key={index}
              judul={news.judul}
              deskripsi={news.deskripsi}
            />
          ))}
        </div>
    
        </div>
    </section>

  )
}
