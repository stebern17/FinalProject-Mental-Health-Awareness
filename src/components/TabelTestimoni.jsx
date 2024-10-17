import React from "react";
import { Table, TableBody, TableHead } from "flowbite-react";
import DarkButton from "./DarkButton";

export default function TabelTestimoni({ testimonials = [] }) {
  return (
    <div>
      <Table className="text-center px-4 py-2">
        <TableHead>
          <Table.HeadCell className="text-[#16423C]">Nama User</Table.HeadCell>
          <Table.HeadCell className="text-[#16423C]">Domisili</Table.HeadCell>
          <Table.HeadCell className="text-[#16423C]">Testimoni</Table.HeadCell>
          <Table.HeadCell className="text-[#16423C]">Nilai</Table.HeadCell>
          <Table.HeadCell className="text-[#16423C]">Tanggal</Table.HeadCell>
          <Table.HeadCell className="text-[#16423C]">Aksi</Table.HeadCell>
        </TableHead>
        <TableBody>
          {testimonials.map((testimonial, index) => (
            <Table.Row key={index} className="hover:bg-[#C4DAD2]">
              <Table.Cell className="font-bold">{testimonial.nama}</Table.Cell>
              <Table.Cell>{testimonial.domisili}</Table.Cell>
              <Table.Cell>{testimonial.testimoni}</Table.Cell>
              <Table.Cell>{testimonial.nilai}</Table.Cell>
              <Table.Cell>{testimonial.tanggal}</Table.Cell>
              <Table.Cell>
                <DarkButton
                  Title="Lihat Detail"
                  className="rounded-lg text-white"
                  onClick={() => alert(`Testimonial dari ${testimonial.nama}`)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
