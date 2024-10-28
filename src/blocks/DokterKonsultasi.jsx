import React, { useEffect, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css"; // Import Splide styles
import DokterCardKonsultasi from "../components/DokterCardKonsultasi";

export default function DokterKonsultasi() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedDokter, setSelectedDokter] = useState(null);
  const [psikologData, setPsikologData] = useState([]);

  const handleSelectDokter = (dokterName) => {
    setSelectedDokter(dokterName);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://6718e1f57fc4c5ff8f4b832e.mockapi.io/api/MentalHealthCare/Konselor"
        );
        const data = await response.json();
        setPsikologData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Initialize Splide only if in mobile view
    if (isMobile) {
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
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  // Retrieve domisili from local storage and filter data
  const selectedDomisili = localStorage.getItem("selectedDomisili");
  const filteredPsikologData = selectedDomisili
    ? psikologData.filter((psikolog) => psikolog.domisili === selectedDomisili)
    : psikologData;

  return (
    <div
      className={`w-full py-3 px-4 h-max md:max-h-[58vh] ${
        isMobile ? "overflow-hidden" : "overflow-x-auto"
      }`}
    >
      {/* Splide Container for Mobile */}
      {isMobile ? (
        <div className="splide">
          <div className="splide__track">
            <div className="splide__list">
              {filteredPsikologData.map((psikolog, index) => (
                <div className="splide__slide" key={index}>
                  <DokterCardKonsultasi
                    dokterName={psikolog.name}
                    deskripsi={psikolog.pesanKesan} // Adjust this if you have a different description
                    selected={selectedDokter === psikolog.name} // Check if this doctor is selected
                    onSelect={() => handleSelectDokter(psikolog.name)} // Handle selection
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-auto w-max">
          {filteredPsikologData.map((psikolog, index) => (
            <DokterCardKonsultasi
              key={index}
              dokterName={psikolog.name}
              domisili={psikolog.domisili} // Adjust this if you have a different location
              spesialis={psikolog.spesialis} // Adjust this if you have a different specialization
              deskripsi={psikolog.pesanKesan} // Adjust this if you have a different description
              selected={selectedDokter === psikolog.name} // Check if this doctor is selected
              onSelect={() => handleSelectDokter(psikolog.name)} // Handle selection
            />
          ))}
        </div>
      )}
    </div>
  );
}
