import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import LogoTransparente from '../assets/img/1Logo-BIM-Capacitacion-transparente.png'



function CourseList({className}) {
  return (
    // listado
    <section className={className}>
        <div className="seccion-listado">
            <div className=" listado-cursos" data-aos="fade-up">
                <h2>Cursos Presenciales Revit</h2>
                <ul>
                    <li>
                        <a href="#">✅ Curso Revit Basico </a>
                    </li>
                    <li>
                        <a href="#">✅ Curso Revit Arquitectonico</a>
                    </li>
                    <li>
                        <a href="#">✅ Curso Revit Estructural</a>
                    </li>
                    <li>
                        <a href="#">✅ Curso Revit MEP</a>
                    </li>
                    <li>
                        <a href="#">✅ Curso Navisworks Basico</a>
                    </li>
                    <li>
                        <a href="#">✅ Curso Revit + Navisworks</a>
                    </li>
                </ul>
            </div>
            <div className="listado-cursos-img"> 
                <Image src={LogoTransparente} alt="" width={500}   />
            </div>
        </div>
    </section>
  )
}

export default styled(CourseList)`
    

    width: 100%;
    max-width: 2000px;
    background-color: #EFEFEF;


.seccion-listado {
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
}

.listado-cursos {
    width: 100%;
}

.listado-cursos h2 {
    font-size: 30px;
    margin: 50px 0;
}

.listado-cursos li {
    font-size: 20px;
    margin: 20px 0;
    list-style: none;
}

.listado-cursos-img {
    width: 100%;
     
    
}

.listado-cursos-img img {
    width: 100%;
     
}

`