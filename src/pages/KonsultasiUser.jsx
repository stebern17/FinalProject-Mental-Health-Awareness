import {useState} from 'react'
import UserLayout from '../layouts/UserLayout'
import KonsultasiSection from '../blocks/KonsultasiSection'
import Stepper from 'react-stepper-horizontal'
import DokterKonsultasi from '../blocks/DokterKonsultasi'
import DarkButton from '../components/DarkButton'

export default function KonsultasiUser() {
  const [step, setStep] = useState(0);
  return (
    <UserLayout>
        <div className='min-h-screen'>
    <div className='container'>
        <h2 className='text-3xl font-bold text-center p-5 drop-shadow-md text-[#16423C]'>
            Selamat Datang, Daftarkan Dirimu Sekarang
        </h2>
        <div className='flex flex-col gap-3'>
            <Stepper 
                steps={[{ title: 'Daftarkan Dirimu' }, { title: 'Pilih Dokter' }, { title: 'Konfirmasi' }, { title: 'Selesai' }]} 
                activeStep={step} 
                activeColor={'#16423C'}
                completeColor={'#16423C'}
                completeBarColor={'#16423C'}
            />
            
            {/* Correct conditional rendering based on `step` state */}
            {step === 0 && <KonsultasiSection />}
            {step === 1 && <DokterKonsultasi />}
        </div>
        <div className='flex justify-center mb-5 gap-10'>
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
