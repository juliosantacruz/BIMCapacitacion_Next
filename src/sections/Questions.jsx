import React from "react";
import styled from "styled-components";
import {TitleSection}from '../styles/styledComponents'

function Questions({ className }) {
  return (
    <section className={className}>
      <div className="text">
        <div className="textContent">
          <TitleSection>
           Que es BIMCapacitacion ...? 
          </TitleSection>
          <p>
            BIMCapacitacion es una escuela con cursos enfocados en la
            metodología BIM, nuestra especialidad está en capacitar a tu equipo
            o empresa en la aplicación de la metodología BIM. Iniciando con un
            modelo funcional del cual tomes planos, cortes, detalles,
            cuantificaciones, elabores planos y logres una coordinación con
            otras disciplinas y proyectistas. <br /> Nuestros cursos son desde
            cero hasta el plotter!
          </p>
        </div>
      </div>
      <div className="questions-img"></div>
    </section>
  );
}
export default styled(Questions)`
  width: 100%;
  
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  color: black;
 

  .questions-img {
    width: 100%;
    height: 400px;
    background-image: url("./ImageRevitStructure.jpg");
    background-repeat: no-repeat;
    background-size: auto;
    background-attachment: fixed;
    background-position: right;
    min-height: 500px;
  }

  .text {
    width: 100%;
    margin: 40px auto;
  }
  .textContent {
    margin: 0 30px;
    
  }
  @media screen and (min-width: 800px) {
      flex-direction: row;
    .textContent{
      max-width:450px;
    }
  }
`;
