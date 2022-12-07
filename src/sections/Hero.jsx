import React from "react";
import styled from "styled-components";

function Hero({ className }) {
  return (
    <section className={className}>
      <TitleHero>
        <h1>BIMCapacitacion</h1>
        <p>Cursos de Revit para ti :D</p>
      </TitleHero>
    </section>
  );
}
export default styled(Hero)`
  width: 100%;
  height: calc(100vh - 80px);
  min-height: 500px;
  background-image: url("./BIMCapacitacion-Hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;

  /* Titulo */
  /* padding: 0 0 50px 0; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: center;

  h1 {
    font-size: 30px;
  }
`;

export const TitleHero = styled.div`
  width: 100%;
  display: block;
  /* right: 30px; */
  color: white;
  background-color: RGBA(0, 0, 0, 0.6);
  padding: 30px;
  border-radius: 30px;
  margin:30px 0 ;

  @media screen and (min-width: 600px) {
    width: 80%;
  }

  @media screen and (min-width: 800px) {
    width: 500px;
    margin:60px 0 ;
  }
`;
