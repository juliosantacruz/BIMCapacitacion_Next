import React from 'react'
import { useRouter } from "next/router";

import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import endpoints from '../../services/api/index'
import styled from 'styled-components';

const URL = endpoints.posts.post_detail(1)
// console.log(URL)


function Slug({className}) {
  const router = useRouter()

  const postSlug = router.query.slug
  console.log(postSlug)

  const post = useFetch(endpoints.posts.post_detail(postSlug))
  console.log(post)
 
  



  return (
    <section className={className}>
      <div>
        <button><i className='bx bx-chevrons-left'></i> Regresar</button>
      </div>
      <div>
        <h1>{post?.title}</h1>
      </div>

      <div dangerouslySetInnerHTML={{__html: post?.content}}>
        
      </div>


    </section>
  )
}

export default styled(Slug)`
  width:80vw;
  margin: 0 auto;
  iframe{
    width:100%;
    height:auto;
  }
`