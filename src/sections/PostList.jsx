import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'


import cardImage1 from '../assets/img/COMO DESCARGAR E INSTALAR REVIT 2020.jpg'
import cardImage2 from '../assets/img/FAMILIA DE ESPEJOS PARAMETRICOS.jpg'

function PostList({className}) {
  return (
    //listado-post
    <section className={className} >
        <h2>Mira nuestros Tutoriales </h2>
        <article className="tarjeta" >
            <a href="#tarjeta">
                <div className="tarjeta-contenido" id="tarjeta">
                    <div className="tarjeta-texto">
                        <h2>Soy el titutlo de la publiacion</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius rerum et, nisi est itaque nemo placeat asperiores! Officiis soluta nostrum und voluptas adipisci laboriosam.
                        </p>
                        <div className="tarjeta-categorias">
                            <b>REVIT - TUTORIAL - ARQUITECTURA</b>
                        </div>
                    </div>
                    <div className="tarjeta-img">
                        <Image src={cardImage1} width={500} alt=""/>
                    </div>
                </div>
            </a>
        </article>

        <article className="tarjeta" >
            <a href="">
                <div className="tarjeta-contenido">
                    <div className="tarjeta-img">
                        <Image src={cardImage2} width={500} alt=""/>
                    </div>
                    <div className="tarjeta-texto">
                        <h2>Soy el titutlo de la publiacion</h2>
                        <p>
                            Lorem ipsum dolor, sit Officiis soluta nostrum unde molestiae itaque, ad libero, veniam placeat a, error dolor voluptas adipisci laboriosam.
                        </p>

                        <div className="tarjeta-icons">
                            <i className='bx bx-user-circle'></i> aramxD |
                            <i className='bx bx-time'></i> 08/21 |
                            <i className='bx bxs-comment-detail'></i> 7 |
                            <i className='bx bx-show'></i> 9
                        </div>
                    </div>

                </div>
            </a>
        </article>

    </section>
  )
}

export default styled(PostList)`

    width: 100%;


h2 {
    font-size: 30px;
    /* padding: 40px 0; */
}

.tarjeta-contenido {
    display: flex;
    justify-content: center;
    width: 650px;
    height: 200px;
    border: solid 1px black;
    border-radius: 30px;
    box-shadow: 20px 10px rgba(0, 0, 0, 0.39);
    margin: 20px auto;
    padding: 20px;
}

.tarjeta-contenido:hover {
    background-color: #000000;
    color: white;
}

.tarjeta-contenido:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.tarjeta-texto {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.tarjeta h2 {
    font-size: 25px;
    /* padding: 0; */
}

.tarjeta img {
    height: 200px;
    width: auto;
}

.tarjeta-categorias {
    font-weight: 600;
    font-style: oblique;
}

.tarjeta-icons {
    display: block;
}`