import React from "react";

export default function KonsultasiCard({
  tanggal,
  namaDokter,
  progress,
  getBgColor,
}) {
  return (
    <div className="flex justify-center items-center py-4 px-5">
      <div
        className={`${getBgColor(
          progress
        )} text-white rounded-xl shadow-lg p-6 max-w-sm w-full`}
      >
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm font-medium">{tanggal}</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm font-medium">{namaDokter}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Status</p>
          <p className="text-sm">{progress}</p>
        </div>
      </div>
    </div>
  );
}
