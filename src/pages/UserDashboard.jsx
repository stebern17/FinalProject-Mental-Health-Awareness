import React from 'react'
import UserLayout from '../layouts/UserLayout'
import ProfileSection from '../blocks/ProfileSection'
import UserContent from '../blocks/UserContent'

export default function UserDashboard() {
  return (
    <UserLayout>
        <div>
          <div className='container mb-2'>
            <ProfileSection username="User"/>
            <UserContent/>
          </div>
        
        </div>
    </UserLayout>
  )
}
