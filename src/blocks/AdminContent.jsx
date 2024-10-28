import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import KonsultasiCard from "../components/KonsultasiCard";

export default function AdminContent() {
  const [value, onChange] = useState(new Date());

  const konsultasi = [
    {
      tanggal: "12/09/2023",
      namaDokter: "Dr. Sarah Johnson",
      progress: "Menunggu Pembayaran",
    },
    {
      tanggal: "10/09/2023",
      namaDokter: "Dr. Michael Tan",
      progress: "Selesai",
    },
    {
      tanggal: "08/09/2023",
      namaDokter: "Dr. Lisa Wong",
      progress: "Sedang Berlangsung",
    },
    {
      tanggal: "05/09/2023",
      namaDokter: "Dr. Andrew Smith",
      progress: "Dibatalkan",
    },
    {
      tanggal: "01/09/2023",
      namaDokter: "Dr. Emily Johnson",
      progress: "Menunggu Pembayaran",
    },
  ];

  const getBgColor = (progress) => {
    switch (progress) {
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

  const [chartData] = useState({
    options: {
      labels: ["Done", "Pending"],
      colors: ["#16423C", "#C4DAD2"],
    },
    series: [60, 40],
  });

  return (
    <div className="p-6 bg-[#C4DAD2] rounded-lg mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Donut Chart */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4 text-[#16423C]">Konsultasi</h3>
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="donut"
            width="100%" // Changed to 100% for better responsiveness
          />
        </div>

        <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
          <h3 className="text-lg font-bold mb-4 text-[#16423C]">Calendar</h3>
          <Calendar
            onChange={onChange}
            value={value}
            className="react-calendar border rounded-lg font-semibold shadow-lg w-full"
          />
        </div>

        <div className="bg-white p-4 shadow-lg rounded-lg relative">
          <h3 className="text-lg font-bold mb-4 text-[#16423C]">
            Progres Konsultasi
          </h3>
          <div className="overflow-y-auto max-h-64">
            {konsultasi.map((konsul, index) => (
              <KonsultasiCard
                key={index}
                tanggal={konsul.tanggal}
                namaDokter={konsul.namaDokter}
                progress={konsul.progress}
                getBgColor={getBgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
