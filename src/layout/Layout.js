import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
 

  return (
    <>
      <Head>
        
      </Head>
      <Navbar />

      <main>{children}</main>
      <Footer />
    </>
  );
}
