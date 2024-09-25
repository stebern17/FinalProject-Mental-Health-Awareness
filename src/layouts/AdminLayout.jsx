import React from 'react'
import AdminHeader from '../blocks/AdminHeader'

export default function AdminLayout(props) {
  return (
    <div className='min-h-dvh flex flex-col'>
        <AdminHeader/>

        <main>{props.children}</main>

      
    </div>
  )
}
