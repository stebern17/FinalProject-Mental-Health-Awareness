import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Calendar from 'react-calendar';

export default function AdminContent() {
  const [value, onChange] = useState(new Date());

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
          <h3 className="text-lg font-bold mb-4">Konsultasi</h3>
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="donut"
            width="380"
          />
        </div>

        {/* Calendar */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-lg font-bold mb-4">Calendar</h3>
          <Calendar
            onChange={onChange}
            value={value}
            className="react-calendar"
          />
        </div>

        {/* Progres Konsultasi */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-lg font-bold mb-4">Progres Konsultasi</h3>
        </div>
      </div>
    </div>
  );
}
