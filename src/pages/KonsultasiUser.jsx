import {useState} from 'react'
import UserLayout from '../layouts/UserLayout'
import UserKonsultasi from '../blocks/UserKonsultasi'
import Stepper from 'react-stepper-horizontal'
import DokterKonsultasi from '../blocks/DokterKonsultasi'
import DarkButton from '../components/DarkButton'

export default function KonsultasiUser() {
  const [step, setStep] = useState(0);
  return (
    <UserLayout>
        <div>
    <div className='container'>
        <div className='flex flex-col gap-3'>
            <Stepper 
                steps={[{ title: 'Daftarkan Dirimu' }, { title: 'Pilih Dokter' }, { title: 'Konfirmasi' }, { title: 'Selesai' }]} 
                activeStep={step} 
                activeColor={'#16423C'}
                completeColor={'#16423C'}
                completeBarColor={'#16423C'}
            />
            
            {/* Correct conditional rendering based on `step` state */}
            {step === 0 && <UserKonsultasi />}
            {step === 1 && <DokterKonsultasi />}
        </div>
        <div className='flex justify-center gap-10 mb-5 mt-2'>
            {step > 0 && (
              <DarkButton onClick={() => setStep(step - 1)} className={"px-4 py-2 rounded-3xl w-[20%] shadow-xl"} Title={"Kembali"} />
            )}
            {step > 2 && (
              <DarkButton onClick={() => setStep(step - 1)} className={"px-4 py-2 rounded-3xl w-[20%] shadow-xl"} Title={"Selesai"} />
            )}
            {step < 3 && (
              <DarkButton onClick={() => setStep(step + 1)} className={"px-4 py-2 rounded-3xl w-[20%] shadow-xl"} Title={"Selanjutnya"} />
            )}
        </div>
    </div>
</div>
    </UserLayout>
  )
}
