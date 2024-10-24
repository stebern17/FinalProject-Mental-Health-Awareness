import React from "react";
import DarkButton from "./DarkButton";
import { Avatar } from "flowbite-react";

export default function DokterCardKonsultasi({ dokterName, deskripsi }) {
  return (
    <div className="bg-white p-6 flex flex-col justify-between rounded-xl shadow-lg h-[70vh] w-full md:w-[20vw] mx-auto">
      <div className="flex gap-4 items-center mb-4">
        <Avatar rounded size="lg" />
        <h3 className="font-semibold text-xl">{dokterName}</h3>
      </div>
      <p className="text-gray-600 text-sm mb-6 flex-1">{deskripsi}</p>
      <DarkButton
        className={"px-4 py-2 rounded-full mt-auto"}
        Title={"Pilih"}
      />
    </div>
  );
}
