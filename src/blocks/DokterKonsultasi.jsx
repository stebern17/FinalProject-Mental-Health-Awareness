import React from 'react';
import DokterCardKonsultasi from '../components/DokterCardKonsultasi';

export default function DokterKonsultasi() {
  const psikologData = [
    {
      dokterName: "Dr. Maya Anindya, M.Psi",
      deskripsi: "Psikolog klinis dengan spesialisasi terapi kognitif dan perilaku. Berpengalaman lebih dari 10 tahun dalam penanganan kecemasan dan stres."
    },
    {
      dokterName: "Dr. Reza Alamsyah, M.Psi",
      deskripsi: "Ahli dalam psikologi anak dan remaja, berfokus pada perkembangan emosional dan sosial anak-anak dengan gangguan perilaku."
    },
    {
      dokterName: "Dr. Siti Nurhayati, M.Psi",
      deskripsi: "Spesialis dalam konseling keluarga dan pernikahan, membantu pasangan dan keluarga mengatasi konflik dan meningkatkan komunikasi."
    },
    {
      dokterName: "Dr. Budi Santoso, M.Psi",
      deskripsi: "Psikolog dengan fokus pada penanganan depresi dan gangguan suasana hati melalui terapi kognitif dan mindfulness."
    },
    {
      dokterName: "Dr. Intan Permatasari, M.Psi",
      deskripsi: "Ahli dalam psikoterapi untuk penanganan trauma, berpengalaman dalam membantu pasien mengatasi gangguan stres pasca-trauma (PTSD)."
    },
  ];

  return (
    <div className='w-full overflow-y-auto py-2 px-4'>
      <div className='flex gap-6 w-max snap-x'>
        {psikologData.map((psikolog, index) => (
          <DokterCardKonsultasi
            key={index}
            dokterName={psikolog.dokterName}
            deskripsi={psikolog.deskripsi}
          />
        ))}
      </div>
    </div>
  );
}
