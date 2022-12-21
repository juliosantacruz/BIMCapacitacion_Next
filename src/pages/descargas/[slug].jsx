import React from 'react'
import Image from 'next/image';
import styled from 'styled-components'
import Contact from '../../sections/Contact'
import endpoints from "../../services/api/index";
import fetch from "isomorphic-unfetch";


export const getServerSideProps = async ({ params }) => {
  const response = await fetch(endpoints.downloads.dl_detail(params.slug));
  const data = await response.json();
  return {
    props: {
      download: data,
    },
  };
};

function Slug({className, download}) {
  return (
    <>
    <section className={className}>
      <Image src={download.thumbnail} width={400} height={250}/> 
      <h1>{download.title} </h1>
      <div dangerouslySetInnerHTML={{ __html: download?.content }}></div>
    </section>

    <Contact/>
    </>
  )
}
export default styled(Slug)`
  min-height: calc(100vh - 220px);

`