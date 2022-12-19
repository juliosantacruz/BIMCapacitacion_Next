import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from 'react-feather';

 
import jsLogo from "../assets/img/logo_450x200_azul_trans.png";
function Footer({ className }) {
  return (
    <footer className={className}>
      <div className="js-dev">
        <Image src={jsLogo} width={160} height={80} alt="" />
      </div>

      <div className="redes-sociales  ">
        <SocialMediaIcon className="facebook">
          <a href="#">
           
          <Facebook/>
          </a>
        </SocialMediaIcon>
        <SocialMediaIcon className="instagram">
          <a href="#">
          <Instagram/>
          </a>
        </SocialMediaIcon>
        <SocialMediaIcon className="youtube">
          <a href="#">
          <Youtube/>
          </a>
        </SocialMediaIcon>
      </div>
    </footer>
  );
}

export default styled(Footer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  max-width: 2000px;
  background-color: rgba(230, 230, 230, 0.658);
  height: 120px;
  img {
    width: 140px;
    height:auto;
    object-fit: contain;
  }
  .js-dev {
    width: 60%;
  }

  .redes-sociales {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .facebook:hover {
    color: white;
    background-color: #4e66f8;
    border: solid 2px rgba(0, 0, 0, 0.418);
  }
  .instagram:hover {
    color: white;
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    border: solid 2px rgba(0, 0, 0, 0.418);
  }
  .youtube:hover {
    color: white;
    background-color: #ff0000;
    border: solid 2px rgba(0, 0, 0, 0.418);
  }
  @media screen and (min-width: 600px) {
    .js-dev {
      width: 50%;
    }

    .redes-sociales {
      width: 50%;
    }
  }
  @media screen and (min-width: 800px) {
    .seccion-listado {
      flex-direction: row;
    }
    .listado-cursos-img img {
      max-width: 500px;
    }
  }
`;

export const SocialMediaIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: solid 2px black;
  transition: color 0.3s ease-in-out;
  font-size: 25px;
  line-height: 30px;

  @media screen and (min-width: 600px) {
    margin: 20px;
  height: 50px;
  width: 50px;
  }
`;
