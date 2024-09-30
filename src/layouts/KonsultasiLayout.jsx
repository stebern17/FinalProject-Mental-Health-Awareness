import React from 'react'
import UserHeader from '../blocks/UserHeader'


export default function KonsultasiLayout(props) {
  return (
    <div className='min-h-dvh flex flex-col'>
        <UserHeader/>
        <main>{props.children}</main>

    </div>
  )
}
