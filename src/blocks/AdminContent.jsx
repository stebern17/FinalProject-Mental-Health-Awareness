import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Calendar from 'react-calendar';
import KonsultasiCard from '../components/KonsultasiCard';

export default function AdminContent() {
  const [value, onChange] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const konsultasi = [
    {
      tanggal: '12/09/2023',
      namaDokter: 'Dr. Sarah Johnson',
      progress: 'Menunggu Konfirmasi',
    },
    {
      tanggal: '10/09/2023',
      namaDokter: 'Dr. Michael Tan',
      progress: 'Selesai',
    },
    {
      tanggal: '08/09/2023',
      namaDokter: 'Dr. Lisa Wong',
      progress: 'Sedang Berlangsung',
    },
    {
      tanggal: '05/09/2023',
      namaDokter: 'Dr. Andrew Smith',
      progress: 'Dibatalkan',
    },
    {
      tanggal: '01/09/2023',
      namaDokter: 'Dr. Emily Johnson',
      progress: 'Menunggu Pembayaran',
    },
  ];
  

  // State for the Donut Chart
  const [chartData] = useState({
    options: {
      labels: ['Done', 'Pending'],
      colors: ['#16423C', '#C4DAD2']
    },
    series: [60, 40], // Series data for the donut chart
  });

  return (
    <div className="p-6 bg-[#C4DAD2] rounded-lg mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Donut Chart */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-lg font-bold mb-4 text-[#16423C]">Konsultasi</h3>
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="donut"
            width="380"
          />
        </div>

        {/* Calendar */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-lg font-bold mb-4 text-[#16423C]">Calendar</h3>
          <Calendar
            onChange={onChange}
            value={value}
            className="react-calendar border p-5 rounded-lg font-semibold shadow-lg"
          />
        </div>

        {/* Progres Konsultasi */}
        <div className="bg-white p-4 shadow-lg rounded-lg relative">
            <h3 className="text-lg font-bold mb-4 text-[#16423C]">Progres Konsultasi</h3>
            <div className='overflow-y-auto max-h-60'>
              {konsultasi.map((konsul, index) => (
                <KonsultasiCard
                  key={index}
                  tanggal={konsul.tanggal}
                  namaDokter={konsul.namaDokter}
                  progress={konsul.progress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}
