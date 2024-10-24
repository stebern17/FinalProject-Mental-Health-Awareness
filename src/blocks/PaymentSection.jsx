import { useState } from "react";
import FormFile from "../components/FormFile";

export default function PaymentSection() {
  const [selectedBank, setSelectedBank] = useState(null);

  const openModal = (bank) => {
    setSelectedBank(bank);
  };

  const getAccountNumber = () => {
    switch (selectedBank) {
      case "bca":
        return "123-456-7890 (BCA)";
      case "gopay":
        return "098-765-4321 (Gopay)";
      case "mandiri":
        return "567-890-1234 (Mandiri)";
      default:
        return "";
    }
  };

  const getOpacity = (bank) => {
    return selectedBank && selectedBank !== bank ? "opacity-50" : "opacity-100";
  };

  return (
    <div className="p-4">
      <div className="bg-white w-full md:w-[60vw] h-auto md:h-[50vh] py-4 px-6 rounded-xl shadow-lg mx-auto mt-5 grid grid-cols-1">
        <h3 className="text-center font-semibold text-xl md:text-2xl">
          Pilih Metode Pembayaran
        </h3>

        <div className="flex flex-col items-center mt-4">
          <div className="border-b-2 border-[#E9EFEC] w-full md:w-[70%] px-5 md:px-10 py-5">
            <div className="flex gap-5 justify-center md:justify-between">
              <img
                src="/bca.svg"
                alt="BCA"
                className={`cursor-pointer w-16 h-16 md:w-24 md:h-24 transition-transform duration-300 transform hover:scale-105 ${getOpacity(
                  "bca"
                )}`}
                onClick={() => openModal("bca")}
              />
              <img
                src="/gopay.svg"
                alt="Gopay"
                className={`cursor-pointer w-16 h-16 md:w-24 md:h-24 transition-transform duration-300 transform hover:scale-105 ${getOpacity(
                  "gopay"
                )}`}
                onClick={() => openModal("gopay")}
              />
              <img
                src="/mandiri.svg"
                alt="Mandiri"
                className={`cursor-pointer w-16 h-16 md:w-24 md:h-24 transition-transform duration-300 transform hover:scale-105 ${getOpacity(
                  "mandiri"
                )}`}
                onClick={() => openModal("mandiri")}
              />
            </div>

            <div className="mt-4 h-6 text-center font-medium text-base md:text-lg text-gray-700">
              {selectedBank && getAccountNumber()}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <FormFile />
        </div>
      </div>
    </div>
  );
}
