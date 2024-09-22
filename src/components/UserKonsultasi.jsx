import {useState} from 'react'
import { Dropdown, Datepicker } from 'flowbite-react'
import DarkButton from './DarkButton'


export default function UserKonsultasi() {
    const [selectedDomisili, setSelectedDomisili] = useState(null); // State untuk menyimpan domisili yang dipilih

    const namaDaerah = [
        { nama: 'Jakarta' },
        { nama: 'Bandung' },
        { nama: 'Bekasi' },
        { nama: 'Bogor' },
        { nama: 'Depok' },
        { nama: 'Tangerang' },
        { nama: 'Banten' },
        { nama: 'Bali' },
        { nama: 'Yogyakarta' },
    ];

    const handleDomisiliSelect = (daerah) => {
        setSelectedDomisili(daerah); // Update state ketika domisili dipilih
    };

    return (
        <div className='bg-white shadow-md border-slate-400 my-3 rounded-md p-10 max-w-[60vw] mx-auto'>
            <div className='text-center'>
                <h3 className='font-bold text-2xl text-[#16423C]'>Buat Jadwal Konsultasi</h3>
                <p className='text-lg text-[#16423C]'>"Jangan biarkan beban emosional menghantui Anda sendirian. Mendaftar untuk konsultasi adalah tindakan cinta terhadap diri sendiri. Anda berharga dan layak mendapatkan dukungan!"</p>
            </div>

            <div className='mt-20 mx-10 text-[#16423C]'>
                <label htmlFor="keluhan" className="block mb-2 font-semibold text-lg ">Masukan Keluhanmu</label>
                <textarea
                    id="keluhan"
                    className="w-full h-32 p-2 mb-2 border border-[#C4DAD2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A9C89] shadow-md"
                    placeholder="Masukan keluhanmu disini ..."
                ></textarea>

                <Dropdown
                    label="Pilih Domisili"
                    size="lg"
                    placement='bottom'
                    style={{ backgroundColor: '#16423C', color: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
                >
                    {namaDaerah.map((daerah, index) => (
                        <Dropdown.Item key={index} onClick={() => handleDomisiliSelect(daerah.nama)}>
                            {daerah.nama}
                        </Dropdown.Item>
                    ))}
                </Dropdown>

                {selectedDomisili && (
                    <div className="mt-3 text-center flex gap-2 justify-center">
                        <p className='font-semibold'>Domisili yang dipilih: </p> 
                        <p className='font-bold bg-[#16423C] text-[#E9EFEC] px-4 py-2 rounded-lg shadow-lg shadow-'>{selectedDomisili}</p>
                    </div>
                )}

                <div className='mt-5 flex justify-center'>
                    <Datepicker label='Pilih Tanggal Konsultasi' size='lg' inline />
                </div>

                <div className='flex justify-center mt-10'>
                    <DarkButton Title={"Buat Jadwal"} className={"w-[30%] rounded-2xl shadow-lg"} />
                </div>
            </div>
        </div>
    );
}
