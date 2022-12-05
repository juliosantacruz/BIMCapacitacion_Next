import React from "react";
import styled from "styled-components";

 

function Hero({ className }) {
  return (
    <section className={className}>
      <div className="title">
        <h1>BIMCapacitacion</h1>
        <p>Cursos de Revit para ti :D</p>
      </div>
    </section>
  );
}
export default styled(Hero)`
  width: 100%;
  height: 100vh;
  min-height: 800px;
  background-image: url('./BIMCapacitacion-Hero.jpg');
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

  .title {
    width:100%;
    display: block;
    /* right: 30px; */
    color: white;
    background-color: RGBA(0, 0, 0, 0.6);
    padding: 30px;
    border-radius: 30px;
  }
  .title h1{
    font-size:30px;
  }

 
 
`;
