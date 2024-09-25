import React from 'react'
import UserHeader from '../blocks/UserHeader'
import Footer from '../blocks/Footer'

export default function UserLayout(props) {
  return (
    <div className='min-h-dvh flex flex-col'>
        <UserHeader/>

        <main>{props.children}</main>

        <Footer/> 
    </div>
  )
}
