import React from "react";
import styled from "styled-components";
import Image from "next/image";

import contactImage from "../assets/img/undraw_News_re_6uub.png";
import { TitleSection } from "../styles/styledComponents";

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

// var urlencoded = new URLSearchParams();
// urlencoded.append("email", "tes222t@test.com");

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: urlencoded,
//   redirect: 'follow'
// };

// fetch("https://p01--restapi--qzvdk8qp7kvm.code.run/bimcapacitacion/api/v1/signup", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));




function Contact({ className, displayImage }) {
   
  return (
    <section className={className}>
      {displayImage && (
        <div className="contacto-img">
          <Image src={contactImage} width={500} height={300} alt="" />
        </div>
      )}

      <div className="contacto-text ">
        <TitleSection>Suscribete para recibir Noticias</TitleSection>
        {displayImage && (
          <p>
          Si te gusta nuesrto contenido dejanos tu correo para enviarte noticias
          de nuestra pagina{" "}
        </p>
        )}
        
        <form action="">
          <input type="text" placeholder="Email" />
          <input className="btn-submit" type="submit" />
        </form>
      </div>
    </section>
  );
}
export default styled(Contact)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  text-align: center;
  margin: 30px auto;
  flex-direction: column;
  

  .contacto-img {
    width: 100%;
    
  }
  .contacto-img img {
    width: 100%;
    height:auto;
  }

  .contacto-text {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    align-content: center;
    margin: auto;
    justify-content: center;
  }

  .contacto-text > h2 {
    font-size: 30px;
  }

  .contacto-text > p {
    font-size: 20px;
    padding-bottom: 10px;
  }

  form {
    width: 100%;
    margin: 0 auto;
  }

  .contacto-text input[type="text"] {
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    float: left;
    width: 70%;
    background: #f1f1f1;
  }

  .contacto-text input:focus {
    border-color: green;
  }

  .contacto-text input[type="submit"] {
    float: left;
    width: 30%;
    padding: 10px;
    background: #4e66f8;
    color: white;
    font-size: 17px;
    border: 1px solid grey;
    border-left: none;
    /* Prevent double borders */
    cursor: pointer;
  }

  .contacto-text input[type="submit"]:hover {
    background: #0b7dda;
  }
  @media screen and (min-width: 600px) {
    width: 600px;
    .contacto-img {
      width: 80%;
    }
    .contacto-text {
      width: 400px;
    }
  }

  @media screen and (min-width: 800px) {
    width: 800px;
    flex-direction: row;

    .contacto-img {
      width: 50%;
    }
    .contacto-img img {
      width: 100%;
    }
    .contacto-text {
      width: 80%;
    }
  }
`;
