import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({children}) {
 window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7GKX3LC9WK');
  
  return (
    <>
    <Head>
     
     
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7GKX3LC9WK"></script>
 
    </Head>
    <Navbar/>
    
    <main>{children}</main>
    <Footer/>

     
     
    
    </>
  )
}
