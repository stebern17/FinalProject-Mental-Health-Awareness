import React from "react";
import TabelKonsultasi from "../components/TabelKonsultasi";
import AdminLayout from "../layouts/AdminLayout";

export default function ManageKonsultasi() {
  const consultations = [
    {
      nama: "John Doe",
      tanggal: "01-10-2024",
      domisili: "Yogyakarta",
      namaDokter: "Dr. Faaiz",
      statusKonsultasi: "Pending",
    },
    {
      nama: "Jane Smith",
      tanggal: "02-10-2024",
      domisili: "Jakarta",
      namaDokter: "Dr. Anya",
      statusKonsultasi: "Selesai",
    },
    {
      nama: "Michael Johnson",
      tanggal: "03-10-2024",
      domisili: "Bandung",
      namaDokter: "Dr. Zane",
      statusKonsultasi: "Ongoing",
    },
  ];

  return (
    <AdminLayout>
      <div className="container">
        <h3 className="text-3xl font-bold text-center text-[#16423C]">
          Management Konsultasi
        </h3>
        <div className="mt-8">
          <TabelKonsultasi consultations={consultations} />
        </div>
      </div>
    </AdminLayout>
  );
}
