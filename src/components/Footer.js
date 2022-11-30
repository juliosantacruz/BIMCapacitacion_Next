import React from "react";
import styled from "styled-components";
import Image from "next/image";

import jsLogo from '../assets/img/logo_450x200_azul_trans.png'
function Footer({className}) {
  return (
    <footer className={className}>
      <div className="js-dev footer-section">
        <Image src={jsLogo} width={300} alt="" />
      </div>

      <div className="redes-sociales footer-section">
        <a className="facebook" href="#">
          <i className="bx bxl-facebook"></i>
        </a>
        <a className="instagram" href="#">
          <i className="bx bxl-instagram"></i>
        </a>
        <a className="youtube" href="#">
          <i className="bx bxl-youtube"></i>
        </a>
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
    height: 150px;
 img {
    width: 250px;
}


.footer-section {
    width: 40%;
}

 .redes-sociales {
    font-size: 40px;
}

 .redes-sociales>a {
    margin: 10px;
    display: inline-block;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: solid 2px black;
    transition: color .3s ease-in-out;
}

 .redes-sociales .facebook:hover {
    color: white;
    background-color: #4E66F8;
    border: solid 2px rgba(0, 0, 0, 0.418);
}

 .redes-sociales .instagram:hover {
    color: white;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    border: solid 2px rgba(0, 0, 0, 0.418);
}

 .redes-sociales .youtube:hover {
    color: white;
    background-color: #FF0000;
    border: solid 2px rgba(0, 0, 0, 0.418);
}
`