import React from 'react'
import NewsCard from '../components/NewsCard'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default function NewsSection() {
  const news = [
    {
      judul: 'Tips Mengatasi Kecemasan',
      deskripsi: 'Kecemasan merupakan hal yang wajar, namun jika tidak diatasi akan berdampak buruk pada kesehatan mental.',
      grid: 'grid-cols-1 md:grid-cols-2',
    },
    {
      judul: 'Cara Menjaga Kesehatan Mental',
      deskripsi: 'Menjaga kesehatan mental penting untuk kesejahteraan hidup sehari-hari.',
      grid: 'grid-cols-1 md:grid-cols-2',
    },
    {
      judul: 'Mengenal Depresi dan Cara Mengatasinya',
      deskripsi: 'Depresi bisa terjadi pada siapa saja. Penting untuk mengetahui cara menanganinya.',
      grid: 'grid-cols-1 md:grid-cols-2',
    },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-5 text-[#16423C]">Physiological News</h1>
        <Splide
          options={{
            type: 'loop',
            perPage: 1,
            perMove: 1,
            gap: '1rem',
            pagination: true,
            arrows: true,
            breakpoints: {
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
        >
          {news.map((newsItem, index) => (
            <SplideSlide key={index}>
              <NewsCard judul={newsItem.judul} deskripsi={newsItem.deskripsi} grid={newsItem.grid} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
