import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import casaContainer from '../assets/img/Casa-conteiner.jpg'



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
                <Image src={casaContainer} alt="" width={500}   />
            </div>
        </div>
    </section>
  )
}

export default styled(CourseList)`
    

    width: 100%;
    max-width: 2000px;
    background-color: rgba(230, 230, 230, 0.658);


.seccion-listado {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
}

.listado-cursos {
    width: 500px;
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
    width: 500px;
     
    border-radius: 80px;
}

.listado-cursos-img img {
    width: 100%;
    border-radius: 80px;border: 2px solid black;
}

`