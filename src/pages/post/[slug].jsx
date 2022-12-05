import React from 'react'
import { useRouter } from "next/router";

import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import endpoints from '../../services/api/index'


const URL = endpoints.posts.post_detail(1)
// console.log(URL)


export default function Slug() {
  const router = useRouter()

  const postId = router.query.id
  // console.log(postId)

  const data = useFetch(endpoints.posts.post_detail(postId))

 
  



  return (
    <section>
      <div>
        <h1>{data.title}</h1>
      </div>

      <div dangerouslySetInnerHTML={{__html: data.content}}>
        
      </div>


    </section>
  )
}
