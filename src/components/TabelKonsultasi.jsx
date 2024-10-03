import React, { useState } from 'react';
import { Table, TableBody, TableHead } from 'flowbite-react';
import DarkButton from './DarkButton';
import ManageModal from './ManageModal';

export default function TabelKonsultasi({ consultations }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedConsultation, setSelectedConsultation] = useState(null);

  const openModal = (consultation) => {
    setSelectedConsultation(consultation);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSave = (newStatus, proof) => {
    console.log('Updated Status:', newStatus);
    console.log('Proof of Transfer:', proof);
    // You can handle updating the consultation data here
  };

  return (
    <div>
      <Table className="text-center px-4 py-2">
        <TableHead>
          <Table.HeadCell className="text-[#16423C]">Nama</Table.HeadCell>
          <Table.HeadCell className="text-[#16423C]">Tanggal</Table.HeadCell>
          <Table.HeadCell className="text-[#16423C]">Domisili</Table.HeadCell>
          <Table.HeadCell className="text-[#16423C]">Dokter</Table.HeadCell>
          <Table.HeadCell className="text-[#16423C]">Status</Table.HeadCell>
          <Table.HeadCell className="text-[#16423C]">Aksi</Table.HeadCell>
        </TableHead>
        <TableBody>
          {consultations.map((consultation, index) => (
            <Table.Row key={index} className="hover:bg-[#C4DAD2]">
              <Table.Cell className="font-bold">{consultation.nama}</Table.Cell>
              <Table.Cell>{consultation.tanggal}</Table.Cell>
              <Table.Cell>{consultation.domisili}</Table.Cell>
              <Table.Cell>{consultation.namaDokter}</Table.Cell>
              <Table.Cell>{consultation.statusKonsultasi}</Table.Cell>
              <Table.Cell>
                <DarkButton
                  Title="Ubah Status"
                  className="rounded-lg text-white"
                  onClick={() => openModal(consultation)}
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
