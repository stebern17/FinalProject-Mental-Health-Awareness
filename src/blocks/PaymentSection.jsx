import {useState} from 'react'
import FormFile from '../components/FormFile'
import BcaImg from './../../public/bca.svg'
import GopayImg from './../../public/gopay.svg'
import MandiriImg from './../../public/mandiri.svg'

export default function PaymentSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <div>
            <div className='bg-white w-[60vw] h-[50vh] py-4 px-6 rounded-xl shadow-lg mx-auto mt-5 grid grid-cols-1'>
                <h3 className='text-center font-semibold text-2xl'>Pilih Metode Pembayaran</h3>
                <div className='grid grid-cols-3 content-between justify-items-center mt-4'>
                    <img src={BcaImg} alt="BCA" className='cursor-pointer transition-transform duration-300 transform hover:scale-105' onClick={() => openModal('bca')} />
                    <img src={GopayImg} alt="Gopay" className='cursor-pointer transition-transform duration-300 transform hover:scale-105' onClick={() => openModal('gopay')} />
                    <img src={MandiriImg} alt="Visa" className='cursor-pointer transition-transform duration-300 transform hover:scale-105' onClick={() => openModal('mandiri')} />
                </div>
                <div className='mt-4'>
                    <FormFile />
                </div>
            </div>

            {isModalOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                    <div className='bg-white w-[30vw] p-6 rounded-lg shadow-xl relative'>
                        <button className='absolute top-2 right-2 text-xl' onClick={closeModal}>✕</button>
                        {modalContent === 'bca' && (
                            <div>
                                <h3 className='text-xl font-semibold mb-4'>Nomor Rekening BCA</h3>
                                <p className='text-lg'>123-456-7890 An Pt. Kesehatan Sejahtera</p>
                            </div>
                        )}
                        {modalContent === 'gopay' && (
                            <div>
                                <h3 className='text-xl font-semibold mb-4'>Nomor Telepon Gopay</h3>
                                <p className='text-lg'>0812-3456-7890 An Kesehatan Sejahtera</p>
                            </div>
                        )}
                        {modalContent === 'mandiri' && (
                            <div>
                                <h3 className='text-xl font-semibold mb-4'>Nomor Rekening Mandiri</h3>
                                <p className='text-lg'>123-456-7890 An Pt. Kesehatan Sejahtera</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
