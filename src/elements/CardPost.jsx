import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import cardImage1 from "../assets/img/COMO DESCARGAR E INSTALAR REVIT 2020.jpg";

function CardPost({ className, post }) {
  return (
    <Link
      href={{
        pathname: `/post/${post.slug}`,
        query: { id: post.id },
      }}
    >
      <article className={className}>
        <div className="tarjeta-texto">
          <h2>{post.title}</h2>
          <p>Aqui va el overview :D</p>
          <div className="tarjeta-categorias">
            <b>REVIT - TUTORIAL - ARQUITECTURA</b>
          </div>
        </div>
        <div className="tarjeta-img">
          <Image src={cardImage1} width={500} alt="" />
        </div>
      </article>
    </Link>
  );
}
export default styled(CardPost)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 650px;
  height: 250px;
  border: solid 1px black;
  border-radius: 30px;
  box-shadow: 20px 10px rgba(0, 0, 0, 0.39);
  margin: 20px auto;
  padding: 20px;

  :hover {
    background-color: #000000;
    color: white;
  }

  :active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }

  .tarjeta-texto {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .tarjeta-texto h2 {
    font-size: 22px;
    /* padding: 0; */
  }
  .tarjeta-texto h2 {
    margin: 10px 0;
  }
  .tarjeta-texto p {
    margin: 10px 0;
  }
  img {
    height: 160px;
    width: auto;
  }

  .tarjeta-categorias {
    font-weight: 600;
    font-style: oblique;
  }

  .tarjeta-icons {
    display: block;
  }
`;
