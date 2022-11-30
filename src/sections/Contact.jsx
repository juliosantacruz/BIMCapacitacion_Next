import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'


import contactImage from '../assets/img/undraw_News_re_6uub.png'

function Contact({className}) {
  return (
    <section className={className}>
        
        <div className="contacto-img">
            <Image src={contactImage} width={500} alt=""/>
        </div>
        <div className="contacto-text ">
            <h2>Suscribete para recibir Noticias</h2>
            <p>Si te gusta nuesrto contenido dejanos tu correo para enviarte noticias de nuestra pagina </p>
            <form action="">
                <input type="text" placeholder="Email"/>
                <input className="btn-submit" type="submit"/>
            </form>
        </div>
    </section>
  )
}
export default styled(Contact)`
    
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    text-align: center;
    margin: 0 auto;
 
.contacto-img{
    width:50%;
}
.contacto-img img {
    width: 350px;
}

.contacto-text {
    width: 400px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    align-content: center;
    margin: auto;
    justify-content: center
}

.contacto-text>h2 {
    font-size: 30px;
    padding-bottom: 15px;
}

.contacto-text>p {
    font-size: 20px;
    padding-bottom: 15px;
}

 form {
    width: 280px;
}

.contacto-text input[type=text] {
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    float: left;
    width: 60%;
    background: #f1f1f1;
}

.contacto-text input:focus {
    border-color: green
}

.contacto-text input[type=submit] {
    float: left;
    width: 32%;
    padding: 10px;
    background: #4E66F8;
    color: white;
    font-size: 17px;
    border: 1px solid grey;
    border-left: none;
    /* Prevent double borders */
    cursor: pointer;
}

.contacto-text input[type=submit]:hover {
    background: #0b7dda;
}


`