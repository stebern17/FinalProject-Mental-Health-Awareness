import { useState, useEffect } from "react";
import { Dropdown, Datepicker } from "flowbite-react";

export default function UserKonsultasi({ onChange, formData }) {
  const [selectedDomisili, setSelectedDomisili] = useState(formData.domisili); // Initialize with formData
  const [namaDomisili, setNamaDomisili] = useState([]); // State to hold fetched domisili data

  // Fetch domisili data from API
  useEffect(() => {
    const fetchDomisiliData = async () => {
      try {
        const response = await fetch(
          "https://6718e1f57fc4c5ff8f4b832e.mockapi.io/api/MentalHealthCare/Konselor"
        );
        const data = await response.json();

        // Extract unique domisili values
        const uniqueDomisili = Array.from(
          new Set(data.map((item) => item.domisili))
        ).map((domisili) => ({ nama: domisili }));

        setNamaDomisili(uniqueDomisili); // Set unique domisili data
      } catch (error) {
        console.error("Error fetching domisili data:", error);
      }
    };

    fetchDomisiliData();
  }, []); // Empty dependency array means this runs once on mount

  const handleDomisiliSelect = (domisili) => {
    setSelectedDomisili(domisili);
    onChange({ target: { name: "domisili", value: domisili } }); // Update formData when domisili is selected
    localStorage.setItem("selectedDomisili", domisili); // Save to local storage
  };

  return (
    <div className="bg-white shadow-md border-slate-400 rounded-md p-5 sm:p-10 max-w-[95vw] sm:max-w-[80vw] lg:max-w-[60vw] max-h-[90vh] sm:max-h-[80vh] lg:max-h-[58vh] overflow-auto mx-auto">
      <div className="text-center">
        <h3 className="font-bold text-2xl sm:text-3xl text-[#16423C]">
          Buat Jadwal Konsultasi
        </h3>
        <p className="text-lg sm:text-xl text-[#16423C]">
          "Jangan biarkan beban emosional menghantui Anda sendirian. Mendaftar
          untuk konsultasi adalah tindakan cinta terhadap diri sendiri. Anda
          berharga dan layak mendapatkan dukungan!"
        </p>
      </div>

      <div className="mt-10 sm:mt-20 mx-5 sm:mx-10 text-[#16423C]">
        <label htmlFor="keluhan" className="block mb-2 font-semibold text-lg">
          Masukan Keluhanmu
        </label>
        <textarea
          id="keluhan"
          name="keluhan" // Add name attribute
          className="w-full h-32 p-2 mb-4 border border-[#C4DAD2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A9C89] shadow-md"
          placeholder="Masukan keluhanmu disini ..."
          onChange={onChange} // Maintain onChange for keluhan
          value={formData.keluhan} // Maintain value from formData
        ></textarea>

        <div className="mb-5">
          <Dropdown
            label="Pilih Domisili"
            size="lg"
            placement="bottom"
            style={{
              backgroundColor: "#16423C",
              color: "white",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            {namaDomisili.map((domisili, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => handleDomisiliSelect(domisili.nama)} // Handle selection
              >
                {domisili.nama}
              </Dropdown.Item>
            ))}
          </Dropdown>
        </div>

        {selectedDomisili && (
          <div className="mt-3 text-center flex gap-2 justify-center">
            <p className="font-semibold">Domisili yang dipilih: </p>
            <p className="font-bold bg-[#16423C] text-[#E9EFEC] px-4 py-2 rounded-lg shadow-lg">
              {selectedDomisili}
            </p>
          </div>
        )}

        <div className="mt-5 flex justify-center">
          <Datepicker label="Pilih Tanggal Konsultasi" size="lg" inline />
        </div>
      </div>
    </div>
  );
}
