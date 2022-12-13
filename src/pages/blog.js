import React from 'react'
import styled from 'styled-components';
import CardBlog from '../elements/CardBlog';
import   { leContext } from "../hooks/useContext";
import { TitleMain } from '../styles/styledComponents';
import { useFetch } from '../hooks/useFetch';
import endpoints from '../services/api';



function Blog({className}) {

  const postData = useFetch(endpoints.posts.post_list)
  // const {postList, setPostList} = leContext()
  const postArray = postData

  // console.log(postArray)


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