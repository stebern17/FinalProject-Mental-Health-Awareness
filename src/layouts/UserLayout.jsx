import React from 'react'
import UserHeader from '../blocks/UserHeader'
import Footer from '../blocks/Footer'

export default function UserLayout(props) {
  return (
    <div>
        <nav><UserHeader/></nav>

        <main>{props.children}</main>

        <footer><Footer/></footer> 
    </div>
  )
}
