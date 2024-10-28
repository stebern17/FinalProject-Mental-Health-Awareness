import React from "react";
import { Table, TableBody, TableHead } from "flowbite-react";

export default function TabelTestimoni({ testimonials = [] }) {
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full text-center text-[#16423C] bg-white">
        <TableHead className="text-[#16423C] bg-white">
          <Table.HeadCell>Nama User</Table.HeadCell>
          <Table.HeadCell>Domisili</Table.HeadCell>
          <Table.HeadCell>Testimoni</Table.HeadCell>
          <Table.HeadCell>Nilai</Table.HeadCell>
          <Table.HeadCell>Tanggal</Table.HeadCell>
        </TableHead>
        <TableBody>
          {testimonials.map((testimonial, index) => (
            <Table.Row key={index} className="hover:bg-[#C4DAD2] bg-white">
              <Table.Cell className="font-bold bg-white">
                {testimonial.nama}
              </Table.Cell>
              <Table.Cell className="bg-white">
                {testimonial.domisili}
              </Table.Cell>
              <Table.Cell className="bg-white">
                {testimonial.testimoni}
              </Table.Cell>
              <Table.Cell className="bg-white">{testimonial.nilai}</Table.Cell>
              <Table.Cell className="bg-white">
                {testimonial.tanggal}
              </Table.Cell>
            </Table.Row>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
