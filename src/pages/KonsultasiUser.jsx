import {useState} from 'react'
import { Link } from 'react-router-dom'
import KonsultasiLayout from '../layouts/KonsultasiLayout'
import UserKonsultasi from '../blocks/UserKonsultasi'
import Stepper from 'react-stepper-horizontal'
import DokterKonsultasi from '../blocks/DokterKonsultasi'
import DarkButton from '../components/DarkButton'
import PaymentSection from '../blocks/PaymentSection'


export default function KonsultasiUser() {
  const [step, setStep] = useState(0);
  return (
    <KonsultasiLayout>
    <div className='container'>
        <div className='flex flex-col gap-3'>
            <Stepper 
                steps={[{ title: 'Daftarkan Dirimu' }, { title: 'Pilih Dokter' }, { title: 'Konfirmasi' }]} 
                activeStep={step} 
                activeColor={'#16423C'}
                completeColor={'#16423C'}
                completeBarColor={'#16423C'}
            />
            
            {/* Correct conditional rendering based on `step` state */}
            {step === 0 && <UserKonsultasi />}
            {step === 1 && <DokterKonsultasi />}
            {step === 2 && <PaymentSection />}
        </div>
        <div className='flex justify-center gap-10 mb-5 mt-2'>
        {step > 0 && (
  <DarkButton 
    onClick={() => setStep(step - 1)} 
    className={"px-4 py-2 rounded-3xl w-[20%] shadow-xl"} 
    Title={"Kembali"} 
        />
      )}
      {step > 1 && (
        <Link to="/done" className="flex justify-center w-[20%]">
          <DarkButton 
            className="px-4 py-2 rounded-3xl w-full shadow-xl" 
            Title={"Selesai"} 
          />
        </Link>
      )}
      {step < 2 && (
        <DarkButton 
          onClick={() => setStep(step + 1)} 
          className={"px-4 py-2 rounded-3xl w-[20%] shadow-xl"} 
          Title={"Selanjutnya"} 
        />
      )}
        </div>
    </div>
    </KonsultasiLayout>
  )
}
