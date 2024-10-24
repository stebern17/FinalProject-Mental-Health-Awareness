import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css"; // Import Splide styles
import DokterCardKonsultasi from "../components/DokterCardKonsultasi";

export default function DokterKonsultasi() {
  const psikologData = [
    {
      dokterName: "Dr. Maya Anindya, M.Psi",
      deskripsi:
        "Psikolog klinis dengan spesialisasi terapi kognitif dan perilaku. Berpengalaman lebih dari 10 tahun dalam penanganan kecemasan dan stres.",
    },
    {
      dokterName: "Dr. Reza Alamsyah, M.Psi",
      deskripsi:
        "Ahli dalam psikologi anak dan remaja, berfokus pada perkembangan emosional dan sosial anak-anak dengan gangguan perilaku.",
    },
    {
      dokterName: "Dr. Siti Nurhayati, M.Psi",
      deskripsi:
        "Spesialis dalam konseling keluarga dan pernikahan, membantu pasangan dan keluarga mengatasi konflik dan meningkatkan komunikasi.",
    },
    {
      dokterName: "Dr. Budi Santoso, M.Psi",
      deskripsi:
        "Psikolog dengan fokus pada penanganan depresi dan gangguan suasana hati melalui terapi kognitif dan mindfulness.",
    },
    {
      dokterName: "Dr. Intan Permatasari, M.Psi",
      deskripsi:
        "Ahli dalam psikoterapi untuk penanganan trauma, berpengalaman dalam membantu pasien mengatasi gangguan stres pasca-trauma (PTSD).",
    },
  ];

  useEffect(() => {
    const splide = new Splide(".splide", {
      type: "loop",
      perPage: 1,
      pagination: false,
      breakpoints: {
        768: {
          perPage: 1,
          gap: "1rem",
        },
      },
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <div className="w-full overflow-y-auto py-3 px-4 h-max md:max-h-[58vh]">
      {/* Splide Container */}
      <div className="splide">
        <div className="splide__track">
          <div className="splide__list">
            {psikologData.map((psikolog, index) => (
              <div className="splide__slide" key={index}>
                <DokterCardKonsultasi
                  dokterName={psikolog.dokterName}
                  deskripsi={psikolog.deskripsi}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
