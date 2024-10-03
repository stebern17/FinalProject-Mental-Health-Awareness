import React from 'react';
import ReactApexChart from 'react-apexcharts'
import NewsCard from '../components/NewsCard';
import Calendar from 'react-calendar';
import { useState } from 'react';



export default function UserContent() {
    
    
    const [value, onChange] = useState(new Date());

  const heatmapSeries = [
    {
      name: 'Sunday',
      data: generateData(12, { min: 0, max: 90 }),
    },
    {
      name: 'Monday',
      data: generateData(12, { min: 0, max: 90 }),
    },
    {
      name: 'Tuesday',
      data: generateData(12, { min: 0, max: 90 }),
    },
    {
      name: 'Wednesday',
      data: generateData(12, { min: 0, max: 90 }),
    },
    {
      name: 'Thursday',
      data: generateData(12, { min: 0, max: 90 }),
    },
    {
      name: 'Friday',
      data: generateData(12, { min: 0, max: 90 }),
    },
    {
      name: 'Saturday',
      data: generateData(12, { min: 0, max: 90 }),
    },
  ];

  const heatmapOptions = {
    chart: {
      type: 'heatmap',
      height: 350,
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 30,
              color: '#E9EFEC', // Light color for lower range
              name: 'Low',
            },
            {
              from: 31,
              to: 60,
              color: '#6A9C89', // Medium color
              name: 'Medium',
            },
            {
              from: 61,
              to: 90,
              color: '#16423C', // Dark color for higher range
              name: 'High',
            },
          ],
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'Weekly Consultation Activity',
      align: 'left',
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#16423C',
      },
    },
    xaxis: {
      type: 'category',
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      title: {
        text: 'Month',
        style: {
          color: '#555',
          fontSize: '14px',
          fontWeight: 'bold',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Day',
        style: {
          color: '#555',
          fontSize: '14px',
          fontWeight: 'bold',
        },
      },
    },
  };

  function generateData(count, yrange) {
    const series = [];
    for (let i = 0; i < count; i++) {
      const x = `W${i + 1}`;
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push({ x, y });
    }
    return series;
  }

  return (
    <div className="p-6 bg-[#C4DAD2] rounded-lg mt-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Heatmap */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <ReactApexChart
            options={heatmapOptions}
            series={heatmapSeries}
            type='heatmap'
            height={350}
          />
        </div>
        {/* Calendar */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className='text-lg font-bold mb-4 text-[#16423C]'>Calendar</h3>
          <Calendar
            onChange={onChange}
            value={value}
            className="react-calendar border p-5 rounded-lg font-semibold shadow-lg text-[#16423C]"
          />
        </div>
        {/* Inspirational News */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className='text-lg font-bold text-[#16423C]'>News For You</h3>
          <NewsCard
            judul='Tips Mengatasi Kecemasan'
            gambar='hidden'
          />
        </div>
      </div>
    </div>
  );
}
