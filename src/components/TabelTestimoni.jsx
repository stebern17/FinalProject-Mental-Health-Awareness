import React from "react";
import { Table, TableBody, TableHead } from "flowbite-react";

export default function TabelTestimoni({ testimonials = [] }) {
  return (
    <div>
      <Table className="text-center px-4 py-2 text-[#16423C]">
        <TableHead className="text-[#16423C]">
          <Table.HeadCell>Nama User</Table.HeadCell>
          <Table.HeadCell>Domisili</Table.HeadCell>
          <Table.HeadCell>Testimoni</Table.HeadCell>
          <Table.HeadCell>Nilai</Table.HeadCell>
          <Table.HeadCell>Tanggal</Table.HeadCell>
        </TableHead>
        <TableBody>
          {testimonials.map((testimonial, index) => (
            <Table.Row key={index} className="hover:bg-[#C4DAD2]">
              <Table.Cell className="font-bold">{testimonial.nama}</Table.Cell>
              <Table.Cell>{testimonial.domisili}</Table.Cell>
              <Table.Cell>{testimonial.testimoni}</Table.Cell>
              <Table.Cell>{testimonial.nilai}</Table.Cell>
              <Table.Cell>{testimonial.tanggal}</Table.Cell>
            </Table.Row>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
