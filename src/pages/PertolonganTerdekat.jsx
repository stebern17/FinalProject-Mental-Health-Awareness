import React from 'react'
import UserLayout from '../layouts/UserLayout'
import MapSection from '../blocks/MapSection'
import NewsCard from '../components/NewsCard'
import '@splidejs/react-splide/css';
import DarkButton from '../components/DarkButton'

export default function PertolonganTerdekat() {
  const news = [
    {
      judul: 'Mengatasi Stres dengan Teknik Relaksasi',
      deskripsi: 'Teknik relaksasi seperti pernapasan dalam dan meditasi dapat membantu mengurangi tingkat stres dalam kehidupan sehari-hari.',
      gambar: 'hidden',
      deskripsiStyle: 'hidden',
      grid: 'grid-cols-1'
    },
    {
      judul: 'Pentingnya Tidur Berkualitas',
      deskripsi: 'Tidur yang cukup dan berkualitas sangat penting untuk kesehatan fisik dan mental. Pelajari cara memperbaiki kualitas tidur Anda.',
      gambar: 'hidden',
      deskripsiStyle: 'hidden',
      grid: 'grid-cols-1'
    },
    {
      judul: 'Mengenal Tanda-tanda Kecemasan',
      deskripsi: 'Tanda-tanda kecemasan sering kali tidak terlihat jelas. Kenali gejala dan cari tahu cara mengelolanya dengan lebih baik.',
      gambar: 'hidden',
      deskripsiStyle: 'hidden',
      grid: 'grid-cols-1'
    },
    {
      judul: 'Kesehatan Mental dan Pola Makan',
      deskripsi: 'Pola makan yang seimbang dapat memengaruhi kesehatan mental. Temukan makanan yang dapat meningkatkan suasana hati dan energi.',
      gambar: 'hidden',
      deskripsiStyle: 'hidden',
      grid: 'grid-cols-1'
    },
    {
      judul: 'Manfaat Aktivitas Fisik untuk Kesehatan Mental',
      deskripsi: 'Aktivitas fisik secara teratur tidak hanya bermanfaat untuk tubuh, tetapi juga dapat meningkatkan kesehatan mental dan kesejahteraan.',
      gambar: 'hidden',
      deskripsiStyle: 'hidden',
      grid: 'grid-cols-1'
    },
  ];
  return (
    <UserLayout>
        <div>
            <div className='container mb-1'>
              <h1 className='text-3xl font-bold mt-1 text-center text-[#16423C]'>Pertolongan Terdekat</h1>
              <div className='grid grid-cols-5 gap-3'>
                <div>
                <h3 className='text-xl font-bold mb-2'>Hotline</h3>
                  <div className='bg-white p-4 rounded-lg shadow-md'>
                    <h4 className='text-lg font-semibold text-[#16423C]'>Kementerian Kesehatan</h4>
                    <p className='text-sm'>Telp: 119</p>
                    <p className='text-sm'>SMS: 0811-123-119</p>
                  </div>
                  <DarkButton Title='hubungi' className={"px-4 py-2 rounded-lg mt-5"}/>  
                </div>
                <div className='col-span-3 mx-auto'>
                <MapSection/>
                </div>
                <div>
                <h3 className='text-xl font-bold mb-2 text-[#16423C]'>Berita Terkini</h3>
                <div className='overflow-y-scroll max-h-[66vh]'>
                {news.map((newsItem, index) => (
                  <NewsCard key={index} judul={newsItem.judul} deskripsi={newsItem.deskripsi} gambar={newsItem.gambar} deskripsiStyle={newsItem.deskripsiStyle} />
                ))}
                </div>
                </div>
              </div> 
            </div>
        </div>
    </UserLayout>
    
  )
}
