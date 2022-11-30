import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import CardPost from '../elements/CardPost'


import cardImage2 from '../assets/img/FAMILIA DE ESPEJOS PARAMETRICOS.jpg'

function PostList({className}) {
  return (
    //listado-post
    <section className={className} >
        <h2>Mira nuestros Tutoriales </h2>
        
        <CardPost/>
         

    </section>
  )
}

export default styled(PostList)`

    width: 100%;


h2 {
    font-size: 30px;
    /* padding: 40px 0; */
}

`