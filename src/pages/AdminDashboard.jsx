import React from 'react'
import AdminLayout from '../layouts/AdminLayout'
import AdminContent from '../blocks/AdminContent'
import ProfileSection from '../blocks/ProfileSection'

export default function AdminDashboard() {
  return (
    <AdminLayout>
        <div>
          <div className='container'>
            <ProfileSection username="Admin"/>
            <AdminContent/>

          </div>
        
        </div>
    </AdminLayout>
  )
}
