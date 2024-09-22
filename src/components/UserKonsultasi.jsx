import React from 'react'
import { Dropdown, Datepicker } from 'flowbite-react'
import DarkButton from './DarkButton'


export default function UserKonsultasi() {
    const namaDaerah = [
        {nama : 'Jakarta'},
        {nama : 'Bandung'},
        {nama : 'Bekasi'},
        {nama : 'Bogor'},
        {nama : 'Depok'},
        {nama : 'Tangerang'},
        {nama : 'Banten'},
        {nama : 'Bali'},
        {nama : 'Yogyakarta'},
    ]

  return (
    <div className='bg-white shadow-md border-slate-400 my-3 rounded-md p-10 max-w-[60vw] mx-auto'>
        <div className='text-center'>
            <h3 className='font-bold text-2xl'>Buat Jadwal Konsultasi</h3>
            <p className='text-lg '>"Jangan biarkan beban emosional menghantui Anda sendirian. Mendaftar untuk konsultasi adalah tindakan cinta terhadap diri sendiri. Anda berharga dan layak mendapatkan dukungan!"</p>
        </div>

    <div className='mt-20 mx-10'>
    <label htmlFor="keluhan" class="block mb-2 font-semibold text-lg">Masukan Keluhanmu</label>
    <textarea 
        id="keluhan" 
        class="w-full h-32 p-2 border border-[#C4DAD2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A9C89] shadow-md" 
        placeholder="Masukan keluhanmu disini ...">
    </textarea>
    <Dropdown 
    label="Pilih Domisili" 
    size="lg" 
    placement='bottom' 
    style={{ backgroundColor: '#16423C', color: 'white' }}
>
    {namaDaerah.map((daerah, index) => (
        <Dropdown.Item key={index}>{daerah.nama}</Dropdown.Item>
    ))}
    </Dropdown>
    <div className='mt-5 flex justify-center'>
        <Datepicker label='Pilih Tanggal Konsultasi' size='lg' inline/>
    </div>
    <div className='flex justify-center mt-10'>
        <DarkButton Title={"Buat Jadwal"} className={"w-[20vw] rounded-2xl"}/>
    </div>
    </div>
    </div>
  )
}
