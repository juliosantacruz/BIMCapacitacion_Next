import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import CardPost from '../elements/CardPost'
 
import   { leContext } from "../hooks/useContext";
 


import { TitleSection } from '../styles/styledComponents';

function PostList({className,postData}) {
   
  const postArray = postData
  
   


  return (
    //listado-post
    <section className={className} >
      <TitleSection>
         Mira nuestros Tutoriales  
        </TitleSection>
        {
          postArray?.map((post)=>{
            // console.log(post)
            return(
              <CardPost key={post.id} post={post}/>

            )
          })
        }
         

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