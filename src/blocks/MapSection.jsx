import React from 'react'

export default function MapSection() {
  return (
    <section className='mt-5'>
      <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31627.463008145667!2d110.32452602643401!3d-7.743824699999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5893cad9576f%3A0xc1a837b495c90bd!2sRumah%20Sakit%20Akademik%20UGM!5e0!3m2!1sid!2sid!4v1726655319655!5m2!1sid!2sid"
    width={800}
    height={600}
    style={{ border: 0 }}
    allowFullScreen="True"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  /> 
    </section>
  )
}
