import React from 'react'
import styled from 'styled-components';
import CardBlog from '../../elements/CardBlog';

import { TitleMain } from '../../styles/styledComponents';
import fetch from 'isomorphic-unfetch'
import endpoints from "../../services/api";



export const getServerSideProps = async ()=>{
  const response = await fetch(endpoints.posts.post_list)
  const data = await response.json()
  return {
    props:{
      postArray : data
    }
  }
}



function Blog({className, postArray}) {

  


  return (
    <section className={className}> 
    <TitleMain>BIMCapacitacion Blog</TitleMain>

    <div className='blogList'>

    {postArray.map((post) =>{

      return(
        <CardBlog key={post.id} post={post} quantity={3}/>
      )
    })}
    </div>
    </section>
    
  )
}
export default styled(Blog)`

min-height:calc(100vh - 220px);

.blogList{
  display:flex;
  justify-content: space-around;
}
`