import React, { useState, useEffect } from "react";
import TestimoniCard from "../components/TestimoniCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function TestimoniSection() {
  const testimoni = [
    {
      testi:
        "Platform yang sangat membantu untuk konsultasi kesehatan mental. Psikolognya profesional dan sangat mendengarkan.",
      nama: "Sarah Connor",
      date: "01/08/2023",
      rating: 5,
    },
    {
      testi:
        "Mudah digunakan dan memberikan solusi yang tepat. Saya merasa lebih baik setelah sesi konseling.",
      nama: "Michael Tan",
      date: "15/07/2023",
      rating: 4,
    },
    {
      testi:
        "Konsultasi yang cepat dan efektif. Psikolognya sangat ramah dan membuat saya nyaman.",
      nama: "Lisa Wong",
      date: "23/06/2023",
      rating: 5,
    },
    {
      testi:
        "Sesi konseling yang sangat membantu dalam mengatasi stres dan kecemasan. Sangat direkomendasikan!",
      nama: "Andrew Smith",
      date: "05/05/2023",
      rating: 4,
    },
    {
      testi:
        "Menyediakan layanan yang sangat fleksibel dengan waktu saya. Pelayanan yang sangat memuaskan.",
      nama: "Emily Johnson",
      date: "30/04/2023",
      rating: 5,
    },
    {
      testi:
        "Platform ini memudahkan saya untuk berbicara dengan psikolog tanpa harus keluar rumah. Sangat praktis!",
      nama: "John Doe",
      date: "10/03/2023",
      rating: 3,
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <div className="container">
        <h1 className="text-3xl font-bold my-5 text-[#16423C]">Testimoni</h1>

        {isMobile ? (
          <Splide
            options={{
              perPage: 1, // 1 card per slide on mobile
              gap: "1rem",
              pagination: true,
              arrows: false,
              drag: "free",
              autoplay: true,
              interval: 3000, // Auto slide interval in milliseconds
            }}
          >
            {testimoni.map((testi, index) => (
              <SplideSlide key={index}>
                <TestimoniCard
                  testi={testi.testi}
                  nama={testi.nama}
                  date={testi.date}
                  rating={testi.rating} // Passing the rating prop
                />
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <div className="grid grid-cols-3 gap-5">
            {testimoni.map((testi, index) => (
              <TestimoniCard
                key={index}
                testi={testi.testi}
                nama={testi.nama}
                date={testi.date}
                rating={testi.rating} // Passing the rating prop
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
