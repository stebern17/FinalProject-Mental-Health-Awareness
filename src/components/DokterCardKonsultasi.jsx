import React from "react";
import DarkButton from "./DarkButton";
import { Avatar } from "flowbite-react";

export default function DokterCardKonsultasi({
  dokterName,
  deskripsi,
  selected,
  onSelect,
  spesialis,
  domisili,
}) {
  return (
    <div className="bg-white p-6 flex flex-col rounded-xl justify-between shadow-lg h-[50vh] w-full md:max-w-[20vw] mx-auto mb-5">
      <div className="flex gap-4 items-center mb-4">
        <Avatar rounded size="lg" />
        <div>
          <h3 className="font-semibold text-xl">{dokterName}</h3>
          <p className="text-gray-600 text-sm font-bold">{domisili}</p>
        </div>
      </div>
      <div>
        <p className="text-gray-600 text-sm font-bold">{spesialis}</p>

        <p className="text-gray-600 text-sm">{deskripsi}</p>
      </div>

      <DarkButton
        onClick={onSelect}
        className={`px-4 py-2 rounded-full ${
          selected ? "bg-green-500" : "bg-[#16423C]"
        }`}
        Title={"Pilih"}
      />
    </div>
  );
}
