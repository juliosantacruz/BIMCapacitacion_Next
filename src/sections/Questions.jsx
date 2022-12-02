import React from "react";
import styled from "styled-components";

function Questions({ className }) {
  return (
    <section className={className}>
      <div className="text">
        <h2>Que es BIMCapacitacion...?</h2>
        <p>
          BIMCapacitacion es una escuela con cursos enfocados en la metodología
          BIM, nuestra especialidad está en capacitar a tu equipo o empresa en
          la aplicación de la metodología BIM. Iniciando con un modelo funcional
          del cual tomes planos, cortes, detalles, cuantificaciones, elabores
          planos y logres una coordinación con otras disciplinas y proyectistas.{" "}
          <br /> Nuestros cursos son desde cero hasta el plotter!
        </p>
      </div>
      <div className="questions-img"></div>
    </section>
  );
}
export default styled(Questions)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  text-align: center;
  @media screen and (max-width: 800px) {
    height: 500px;
    .questions-img {
      height: 500px;
      background-position-y: 10px;
      z-index:-1;
    }
    .text {
      width: 350px;
      padding: 0 50px;
    }
  }

  .questions-img {
    width: 50%;
    height: 700px;
    background-image: url("./ImageRevitStructure.jpg");
    background-repeat: no-repeat;
    background-size: auto;
    background-attachment: fixed;
    background-position: right;
    min-height: 500px;
  }

  .text {
    width: 500px;
    margin: auto;
  }

  h2 {
    padding-bottom: 30px;
  }
`;
