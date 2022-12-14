import React from "react";
import styled from "styled-components";
import { TitleSection } from "../styles/styledComponents";

function Questions({ className }) {
  return (
    <section className={className}>
      <div className="question">
        <ImgParallax2></ImgParallax2>
        <TextBox>
          <TitleSection>Que es BIM ...?</TitleSection>
          <p>
            Iniciemos con que es un acrónimo de "Building Information Modeling"
            o "Modelado de Información de Edificación". <br />
            BIM es un proceso que utiliza software especializado{" "}
            <b>Revit en este caso</b> para crear un modelo digital de un
            edificio o estructura, y es ampliamente utilizado en la industria de
            la construcción y el diseño. El modelo BIM incluye información
            detallada sobre la geometría, la ubicación, la cantidad y el tipo de
            materiales necesarios, así como otros aspectos importantes del
            proyecto de construcción. <br />
            Esta información se puede utilizar para visualizar y analizar el
            proyecto de manera más eficiente, minimizar los errores y mejorar la
            eficiencia y el rendimiento durante el proceso de construcción.
            Además, el modelo BIM se puede utilizar para facilitar la
            colaboración entre diferentes disciplinas y equipos involucrados en
            el proyecto de construcción.
          </p>
        </TextBox>
      </div>
      <div className="question">
        <TextBox>
          <TitleSection>Que es BIMCapacitacion ...?</TitleSection>
          <p>
            BIMCapacitacion es una escuela con cursos enfocados en la
            metodología BIM, nuestra especialidad está en capacitar a tu equipo
            o empresa en la aplicación de la metodología BIM. Iniciando con un
            modelo funcional del cual tomes planos, cortes, detalles,
            cuantificaciones, elabores planos y logres una coordinación con
            otras disciplinas y proyectistas. <br /> Nuestros cursos son desde
            cero hasta el plotter!
          </p>
        </TextBox>
        <ImgParallax1></ImgParallax1>
      </div>
    </section>
  );
}
export default styled(Questions)`
  .question {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: black;
  }

  @media screen and (min-width: 800px) {
    .question {
      flex-direction: row;
    }
  }
`;

export const TextBox = styled.div`
  width: 100%;
  margin: 40px auto;
  padding: 0 20px;
  @media screen and (min-width: 800px) {
    max-width: 450px;
  }
`;

export const ImgParallax1 = styled.div`
  width: 100%;
  height: 400px;
  background-image: url("./ImageRevitStructure.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  background-attachment: fixed;
  background-position: right;
  min-height: 500px;
`;
export const ImgParallax2 = styled.div`
  width: 100%;
  height: 400px;
  background-image: url("./Casa-conteiner.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: fixed;
  background-position: left;
  min-height: 300px;
`;
