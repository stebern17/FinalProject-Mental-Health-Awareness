import React from "react";
import { motion } from "framer-motion";

export default function LoginModal({ message }) {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-max text-center">
        <h2 className="text-xl font-bold text-[#16423C]">Login Berhasil</h2>
        <p className="mt-4 text-gray-600">{message}</p>
      </div>
    </motion.div>
  );
}
