import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import TabelTestimoni from "../components/TabelTestimoni";
import { motion } from "framer-motion";

export default function ManageTestimoni() {
  const testimonials = [
    {
      nama: "Aisyah Putri",
      domisili: "Jakarta",
      testimoni: "Layanan yang sangat memuaskan, dokter sangat profesional.",
      nilai: 5,
      tanggal: "15-10-2024",
    },
    {
      nama: "Budi Santoso",
      domisili: "Surabaya",
      testimoni:
        "Konsultasi berjalan dengan lancar dan penjelasan sangat detail.",
      nilai: 4,
      tanggal: "14-10-2024",
    },
    {
      nama: "Citra Dewi",
      domisili: "Bandung",
      testimoni: "Sangat membantu, staf sangat ramah dan komunikatif.",
      nilai: 5,
      tanggal: "13-10-2024",
    },
    {
      nama: "Dewi Kusuma",
      domisili: "Yogyakarta",
      testimoni: "Proses pendaftaran mudah, namun waktu tunggu cukup lama.",
      nilai: 3,
      tanggal: "12-10-2024",
    },
    {
      nama: "Eko Prasetyo",
      domisili: "Semarang",
      testimoni: "Tempat yang nyaman, dokter memberikan banyak solusi.",
      nilai: 4,
      tanggal: "11-10-2024",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AdminLayout>
      <div className="container">
        <h3 className="text-3xl font-bold text-center text-[#16423C]">
          Testimoni User
        </h3>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          <div className="mt-8">
            <TabelTestimoni testimonials={testimonials} />
          </div>
        </motion.div>
      </div>
    </AdminLayout>
  );
}
