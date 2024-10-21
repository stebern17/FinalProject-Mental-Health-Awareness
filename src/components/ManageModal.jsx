import React, { useState } from "react";
import { Modal, Button, Label, Select } from "flowbite-react";
import DarkButton from "./DarkButton";
import LightButton from "./LightButton";

export default function ManageModal({ isOpen, onClose, onSave }) {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [proofText, setProofText] = useState("No file chosen");

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProofText(file.name);
    } else {
      setProofText("No file chosen");
    }
  };

  const handleSave = () => {
    onSave(selectedStatus, proofText);
    onClose(); // Close the modal after saving
  };

  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Header>Ubah Status Konsultasi</Modal.Header>
      <Modal.Body>
        <div className="flex flex-col space-y-4">
          <div>
            <Label htmlFor="status" value="Pilih Status" />
            <Select id="status" onChange={handleStatusChange} className="mt-2">
              <option value="">Pilih Status</option>
              <option value="Selesai">Selesai</option>
              <option value="Sedang Berlangsung">Sedang Berlangsung</option>
              <option value="Dibatalkan">Dibatalkan</option>
              <option value="Menunggu Pembayaran">Menunggu Pembayaran</option>
            </Select>
          </div>
          <div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline text-sm"
            >
              Bukti Transfer
            </a>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <DarkButton Title="Simpan" onClick={handleSave} className="w-24" />
        <LightButton title="Batal" onClick={onClose} className="w-24" />
      </Modal.Footer>
    </Modal>
  );
}
