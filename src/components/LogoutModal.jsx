import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

export default function LogoutModal({ showModal, setShowModal, handleLogout }) {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return showModal
    ? ReactDOM.createPortal(
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
            <h2 className="text-xl font-bold text-[#16423C]">Logout</h2>
            <p className="mt-4 text-gray-600">Apakah anda yakin?</p>
            <div className="mt-6 flex justify-center gap-4">
              <button
                className="bg-[#6A9C89] text-white px-4 py-2 rounded hover:bg-[#16423C] transition"
                onClick={handleLogout}
              >
                Yes, Logout
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </motion.div>,
        document.body
      )
    : null;
}
