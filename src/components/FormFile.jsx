import React from 'react'
import { Label, FileInput } from 'flowbite-react'

export default function FormFile() {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="file-upload" value="Upload Bukti Pembayaran"/>
      </div>
      <FileInput id="file-upload" />
    </div>
  )
}
