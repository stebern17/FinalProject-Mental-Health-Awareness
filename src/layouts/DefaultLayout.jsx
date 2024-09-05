import React from 'react'
import Header from '../blocks/Header'
import Footer from '../blocks/Footer'

export default function DefaultLayout(props) {
  return (
    <div>
        <nav><Header/></nav>

        <main>{props.children}</main>

        <footer><Footer/></footer> 
    </div>
  )
}
