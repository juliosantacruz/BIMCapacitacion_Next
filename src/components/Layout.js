import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({children}) {

  
  return (
    <>
    <Head>
     
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'/>
    </Head>
    <Navbar/>
    
    <main>{children}</main>
    <Footer/>

     
    <script src="https://unpkg.com/boxicons@2.0.9/dist/boxicons.js"></script>
    
    </>
  )
}
