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
    <div>
      <Table className="text-center px-4 py-2 text-[#16423C] ">
        <TableHead className="text-[#16423C]">
          <Table.HeadCell>Nama</Table.HeadCell>
          <Table.HeadCell>Tanggal</Table.HeadCell>
          <Table.HeadCell>Domisili</Table.HeadCell>
          <Table.HeadCell>Dokter</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Aksi</Table.HeadCell>
        </TableHead>
        <TableBody>
          {konsultasi.map((konsultasiItem, index) => (
            <Table.Row key={index} className="hover:bg-[#C4DAD2]">
              <Table.Cell className="font-bold">
                {konsultasiItem.nama}
              </Table.Cell>
              <Table.Cell>{konsultasiItem.tanggal}</Table.Cell>
              <Table.Cell>{konsultasiItem.domisili}</Table.Cell>
              <Table.Cell>{konsultasiItem.namaDokter}</Table.Cell>
              <Table.Cell>
                <div
                  className={`px-4 py-2 text-sm font-semibold rounded-lg w-[60%] mx-auto ${bgStats(
                    konsultasiItem.statusKonsultasi
                  )}`}
                >
                  {konsultasiItem.statusKonsultasi}
                </div>
              </Table.Cell>
              <Table.Cell>
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
