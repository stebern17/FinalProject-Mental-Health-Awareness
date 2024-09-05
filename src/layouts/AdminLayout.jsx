import React from 'react'
import AdminHeader from '../blocks/AdminHeader'

export default function AdminLayout(props) {
  return (
    <div>
        <nav><AdminHeader/></nav>

        <main>{props.children}</main>

      
    </div>
  )
}
