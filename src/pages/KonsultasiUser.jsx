import { useState } from "react";
import { Link } from "react-router-dom";
import KonsultasiLayout from "../layouts/KonsultasiLayout";
import UserKonsultasi from "../blocks/UserKonsultasi";
import Stepper from "react-stepper-horizontal";
import DokterKonsultasi from "../blocks/DokterKonsultasi";
import DarkButton from "../components/DarkButton";
import PaymentSection from "../blocks/PaymentSection";
import { motion } from "framer-motion";

export default function KonsultasiUser() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);

  // Form state
  const [formData, setFormData] = useState({
    keluhan: "",
    domisili: "",
    dokter: "", // Store the selected doctor here
  });

  const variants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction < 0 ? 100 : -100,
    }),
  };

  // Handle step change with direction tracking
  const handleNextStep = () => {
    setDirection(1);
    setStep((prevStep) => (prevStep < 2 ? prevStep + 1 : prevStep));
  };

  const handlePrevStep = () => {
    setDirection(-1);
    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to set selected doctor
  const handleSelectDokter = (dokterName) => {
    setFormData((prevData) => ({
      ...prevData,
      dokter: dokterName, // Update selected doctor
    }));
  };

  return (
    <KonsultasiLayout>
      <div className="container overflow-hidden">
        <div className="flex flex-col gap-3">
          <Stepper
            steps={[
              { title: "Daftarkan Dirimu" },
              { title: "Pilih Dokter" },
              { title: "Konfirmasi" },
            ]}
            activeStep={step}
            activeColor={"#16423C"}
            completeColor={"#16423C"}
            completeBarColor={"#16423C"}
          />

          {/* Step Transition */}
          <motion.div
            key={step}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            transition={{ duration: 0.5 }}
          >
            {step === 0 && (
              <UserKonsultasi formData={formData} onChange={handleChange} />
            )}
            {step === 1 && (
              <DokterKonsultasi
                formData={formData}
                onChange={handleChange}
                onSelectDokter={handleSelectDokter} // Pass the select handler
              />
            )}
            {step === 2 && (
              <PaymentSection formData={formData} onChange={handleChange} />
            )}
          </motion.div>
        </div>

        <div className="md:fixed bottom-5 left-0 w-full py-4 flex justify-center gap-10">
          {step > 0 && (
            <DarkButton
              onClick={handlePrevStep}
              className="px-4 py-2 rounded-3xl w-max md:w-[20%] shadow-xl"
              Title="Kembali"
            />
          )}
          {step === 2 && (
            <div className="flex justify-center w-max md:w-[20%]">
              <Link to="/done" className="w-full">
                <DarkButton
                  className="px-4 py-2 rounded-3xl w-full shadow-xl"
                  Title="Selesai"
                />
              </Link>
            </div>
          )}
          {step < 2 && (
            <DarkButton
              onClick={handleNextStep}
              className="px-4 py-2 rounded-3xl w-max md:w-[20%] shadow-xl"
              Title="Selanjutnya"
            />
          )}
        </div>
      </div>
    </KonsultasiLayout>
  );
}
