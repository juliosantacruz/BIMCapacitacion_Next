import React from 'react'
import { TitleMain } from "../../styles/styledComponents";
import fetch from 'isomorphic-unfetch'
import endpoints from "../../services/api";
import Contact from '../../sections/Contact'
import styled from 'styled-components';
import CardDownloads from '../../elements/CardDownloads';


export const getServerSideProps = async ()=>{
  const response = await fetch(endpoints.downloads.dl_list)
  const data = await response.json()
  return {
    props:{
      downloadArray : data
    }
  }
}
 function Downloads({className, downloadArray}) {
  return (
    <>
    <section className={className}>
    <TitleMain>BIMCapacitacion Blog</TitleMain>
      {downloadArray.map((article)=>{

        return(
          <CardDownloads article={article}/>
        )
      })}
    </section>
    <Contact/>
    </>
  )
}
export default styled(Downloads)`
  min-height: calc(100vh - 220px);

`