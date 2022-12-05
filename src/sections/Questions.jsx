import React from "react";
import styled from "styled-components";

function Questions({ className }) {
  return (
    <section className={className}>
      <div className="text">
        <div className="textContent">
          <h2>Que es BIMCapacitacion...?</h2>
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
  text-align: center;

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
    margin: auto;
  }
  .textContent {
    margin: 0 30px;
  }
  h2 {
    padding-bottom: 30px;
  }
  /* @media screen and (max-width: 800px) {
    height: 100%;
    .questions-img {
      height: 500px;
      background-position-y: 10px;
      z-index: -1;
    }
    .text {
      width: 50%;
      padding: 0 50px;
    }
  } */
`;
