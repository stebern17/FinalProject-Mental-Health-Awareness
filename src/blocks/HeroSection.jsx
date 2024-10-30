import { useRef, useState, useEffect } from "react";
import LightButton from "../components/LightButton";
import { motion, useInView } from "framer-motion";

export default function HeroSection() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const [heroimgVisible, setHeroimgVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  const heroImgRef = useRef(null);
  const textRef = useRef(null);

  const heroImgInView = useInView(heroImgRef);
  const textInView = useInView(textRef);

  useEffect(() => {
    setHeroimgVisible(heroImgInView);
  }, [heroImgInView]);

  useEffect(() => {
    setTextVisible(textInView);
  }, [textInView]);

  return (
    <>
      <section className="bg-[#16423C] py-10 shadow-lg">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6">
          <motion.div
            ref={textRef}
            variants={fadeLeft}
            initial="hidden"
            animate={textVisible ? "visible" : "hidden"}
            transition={{ duration: 1 }}
            className="order-2 md:order-1"
          >
            <div className="text-center md:text-left space-y-6 1">
              <h1 className="text-4xl md:text-5xl text-white font-bold leading-tight">
                SAFE YOUR SELF WITH US!
              </h1>
              <p className="text-lg md:text-xl text-white opacity-80">
                “Jaga Mentalmu, Temukan Ruang Aman dan Dukungan Online yang
                Sesuai dengan Gaya Hidupmu. Bersama, Kita Bisa Melewati
                Tantangan dan Membangun Kesejahteraan Mental yang Tangguh”
              </p>
              <LightButton
                className="mt-8 md:mt-12 bg-white text-[#16423C] hover:bg-[#145c53] transition duration-300 ease-in-out text-xl rounded-full py-3 px-6 font-semibold"
                title={"Konsultasi Sekarang"}
              />
            </div>
          </motion.div>

          <motion.div
            ref={heroImgRef}
            variants={fadeRight}
            initial="hidden"
            animate={heroimgVisible ? "visible" : "hidden"}
            transition={{ duration: 1 }}
            className="order-1 before:md:order-2"
          >
            <img
              src="/HeroImage.png"
              alt="HeroImage"
              className="rounded-lg w-full h-auto object-cover shadow-md "
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
