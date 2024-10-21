import React from "react";
import TabelKonsultasi from "../components/TabelKonsultasi";
import AdminLayout from "../layouts/AdminLayout";

export default function ManageKonsultasi() {
  const konsultasi = [
    {
      nama: "John Doe",
      tanggal: "01-10-2024",
      domisili: "Yogyakarta",
      namaDokter: "Dr. Faaiz",
      statusKonsultasi: "Menunggu Pembayaran",
    },
    {
      nama: "Jane Smith",
      tanggal: "02-10-2024",
      domisili: "Jakarta",
      namaDokter: "Dr. Anya",
      statusKonsultasi: "Sedang Berlangsung",
    },
    {
      nama: "Michael Johnson",
      tanggal: "03-10-2024",
      domisili: "Bandung",
      namaDokter: "Dr. Zane",
      statusKonsultasi: "Selesai",
    },
    {
      nama: "Steven Burn",
      tanggal: "21-10-2024",
      domisili: "Solo",
      namaDokter: "Dr. Iwan",
      statusKonsultasi: "Dibatalkan",
    },
  ];

  const bgStats = (statusKonsultasi) => {
    switch (statusKonsultasi) {
      case "Selesai":
        return "bg-[#D4EDDA] text-[#155724]";
      case "Sedang Berlangsung":
        return "bg-[#CCE5FF] text-[#004085]";
      case "Dibatalkan":
        return "bg-[#F8D7DA] text-[#721C24]";
      case "Menunggu Pembayaran":
        return "bg-[#FFF3CD] text-[#856404]";
      default:
        return "bg-white text-black";
    }
  };

  return (
    <AdminLayout>
      <div className="container">
        <h3 className="text-3xl font-bold text-center text-[#16423C]">
          Management Konsultasi
        </h3>
        <div className="mt-8">
          <TabelKonsultasi konsultasi={konsultasi} bgStats={bgStats} />
        </div>
      </div>
    </AdminLayout>
  );
}
