import React, { useState } from "react";
import { Table, TableBody, TableHead } from "flowbite-react";
import DarkButton from "./DarkButton";
import ManageModal from "./ManageModal";

export default function TabelKonsultasi({ konsultasi = [], bgStats }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedKonsultasi, setSelectedKonsultasi] = useState(null);

  const openModal = (konsultasi) => {
    setSelectedKonsultasi(konsultasi);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSave = (newStatus, proof) => {
    console.log("Updated Status:", newStatus);
    console.log("Proof of Transfer:", proof);
    // Handle updating the konsultasi data here
  };

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full text-center text-[#16423C] bg-white">
        <TableHead className="text-[#16423C] bg-white">
          <Table.HeadCell className="whitespace-nowrap">Nama</Table.HeadCell>
          <Table.HeadCell className="whitespace-nowrap">Tanggal</Table.HeadCell>
          <Table.HeadCell className="whitespace-nowrap">
            Domisili
          </Table.HeadCell>
          <Table.HeadCell className="whitespace-nowrap">Dokter</Table.HeadCell>
          <Table.HeadCell className="whitespace-nowrap">Status</Table.HeadCell>
          <Table.HeadCell className="whitespace-nowrap">Aksi</Table.HeadCell>
        </TableHead>
        <TableBody>
          {konsultasi.map((konsultasiItem, index) => (
            <Table.Row key={index} className="hover:bg-[#C4DAD2] bg-white">
              <Table.Cell className="font-bold bg-white">
                {konsultasiItem.nama}
              </Table.Cell>
              <Table.Cell className="bg-white">
                {konsultasiItem.tanggal}
              </Table.Cell>
              <Table.Cell className="bg-white">
                {konsultasiItem.domisili}
              </Table.Cell>
              <Table.Cell className="bg-white">
                {konsultasiItem.namaDokter}
              </Table.Cell>
              <Table.Cell className="bg-white">
                <div
                  className={`px-4 py-2 text-sm font-semibold rounded-lg w-max md:w-[60%] mx-auto ${bgStats(
                    konsultasiItem.statusKonsultasi
                  )}`}
                >
                  {konsultasiItem.statusKonsultasi}
                </div>
              </Table.Cell>
              <Table.Cell className="bg-white">
                <DarkButton
                  Title="Ubah Status"
                  className="rounded-lg text-white"
                  onClick={() => openModal(konsultasiItem)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </TableBody>
      </Table>

      {isModalOpen && (
        <ManageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
