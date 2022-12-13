import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import logo from "../assets/img/1Logo-BIM-Capacitacion-768x432-1.png";

function Navbar({ className }) {
  return (
    <nav className={className}>
      <section className=" nav">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="soy un logo" />
          </Link>
        </div>
        <div className="enlaces-header">
          <Link href="/" className="inicio">
            Inicio
          </Link>
          <Link href="/blog">Blog</Link>
          <Link href="/">Descargas</Link>
        </div>
        <div className="boton-menu">
          <i className="bx bx-menu"></i>
        </div>
      </section>
    </nav>
  );
}

export default styled(Navbar)`
  width: 100%;
  height: 80px;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid transparent;
  box-shadow: 1px 1px 10px 0 rgb(139, 132, 132, 0.4);
  position: sticky;
  top: 0;
  z-index: 10;
  transition: ease-in-out 0.5s;

  .nav {
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    margin: auto;
    align-items: center;
  }

  .logo {
    width: 20%;
    height: 80px;
  }

  .logo img {
    width: 100px;
    height: auto;
    vertical-align: top;
    object-fit: contain;
  }

  .enlaces-header {
    transition: ease-in 0.5s;
  }

  .nav .enlaces-header > a {
    padding: 10px 15px;
    color: #000000;
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
  }
  .nav .enlaces-header > a:hover {
    border-bottom: solid 2px black;
    transition: color 0.5s ease-in;
  }
  .inicio {
    display: none;
  }
  .boton-menu {
    display: none;
    /* font-size: 20px; */
    width: 80px;
    height: 80px;
    text-align: center;
    z-index: 100;
    cursor: pointer;
    line-height: 80px;
    transition: color 0.8s ease-in;
  }
  @media screen and (min-width: 600px) {
    .logo img {
      width: 140px;
    }
    .nav .enlaces-header > a {
    padding: 10px 20px;
    font-size: 20px;
     
  }
  }
`;
