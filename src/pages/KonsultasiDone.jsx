import React from "react";
import { motion } from "framer-motion";
import CheckImg from "./../Icons/checkmark.svg";
import { Link } from "react-router-dom";

export default function KonsultasiDone() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3, duration: 0.8 } },
  };

  const checkVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, rotate: 360, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
  };

  return (
    <>
      <motion.div
        className="container min-h-screen flex flex-col justify-center items-center bg-[#E9EFEC] p-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={checkVariants}>
          <img src={CheckImg} alt="Checkmark" className="w-20 h-20 mx-auto" />
        </motion.div>

        <motion.div className="text-center mt-5" variants={textVariants}>
          <h1 className="text-3xl font-semibold text-[#16423C]">
            Pendaftaran Konsultasi Selesai
          </h1>
          <p className="mt-2 text-[#6A9C89]">
            Silahkan tunggu konfirmasi dari admin.
          </p>
          <Link
            to="/user"
            className="mt-4 text-[#16423C] hover:underline cursor-pointer"
          >
            Klik untuk kembali ke dashboard
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}
