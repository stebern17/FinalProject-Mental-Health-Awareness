import React, { useState, useEffect } from "react";
import DokterCardLP from "../components/DokterCardLP";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function DokterSection() {
  const dokter = [
    {
      nama: "Dr. John Doe",
      spesialis: "Psikolog",
      komen: "Salah satu platform psikolog terbaik di Indonesia",
    },
    {
      nama: "Dr. Sarah Connor",
      spesialis: "Psikolog",
      komen: "Sangat menginspirasi dan membantu dalam sesi konseling.",
    },
    {
      nama: "Dr. Andrew Smith",
      spesialis: "Psikolog",
      komen: "Ahli dalam terapi keluarga dan masalah interpersonal.",
    },
    {
      nama: "Dr. Lisa Wong",
      spesialis: "Psikolog",
      komen: "Pendekatan yang ramah dan mendalam dalam menangani klien.",
    },
    {
      nama: "Dr. Michael Tan",
      spesialis: "Psikolog",
      komen: "Membantu banyak pasien dalam mengatasi kecemasan dan depresi.",
    },
    {
      nama: "Dr. Emily Johnson",
      spesialis: "Psikolog",
      komen: "Profesional dan sangat mendengarkan kebutuhan klien.",
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
    <section className="py-5">
      <div className="container">
        <h1 className="text-3xl font-bold my-5 text-[#16423C]">
          Meet Our Doctor
        </h1>

        {/* Conditional Rendering based on isMobile */}
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
            {dokter.map((dokter, index) => (
              <SplideSlide key={index}>
                <DokterCardLP
                  nama={dokter.nama}
                  spesialis={dokter.spesialis}
                  komen={dokter.komen}
                />
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <div className="grid grid-cols-3 gap-5">
            {dokter.map((dokter, index) => (
              <DokterCardLP
                key={index}
                nama={dokter.nama}
                spesialis={dokter.spesialis}
                komen={dokter.komen}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
