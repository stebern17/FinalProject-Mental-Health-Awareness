import {useState} from 'react'
import TestimoniForm from '../components/TestimoniForm'  
import UserLayout from '../layouts/UserLayout'
import DarkButton from '../components/DarkButton'
import { motion } from 'framer-motion'

export default function Testimoni() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Correct hook usage
  

  const handleSubmit = () => {
    setIsModalOpen(true); // This will open the modal when the submit button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // This will close the modal when the close button is clicked
  };
  return (
    <UserLayout>
        <div className='container'>
            <h3 className='text-3xl font-bold mt-1 text-center text-[#16423C]'>Berikan Penilaian Kamu</h3>
            <div className='mt-12'>
                <div>
                    <TestimoniForm/>
                </div>
                <div className='flex justify-center'>
                    <DarkButton Title='Submit' className='rounded-2xl w-[20vw] mt-5' onClick={handleSubmit}/>
                </div>
            </div>
         </div>

         {isModalOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="bg-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#16423C]">Terimakasih atas testimoninya!</h3>
            <button 
              onClick={closeModal} 
              className="mt-5 py-2 px-6 bg-[#6A9C89] text-white rounded-lg font-semibold hover:bg-[#5C8E7C] transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </UserLayout>
  )
}
