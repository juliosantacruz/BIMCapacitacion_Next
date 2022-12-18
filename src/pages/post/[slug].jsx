import React from "react";
import { useRouter } from "next/router";

import { useState } from "react";

import styled from "styled-components";
import { MainButton } from "../../styles/styledComponents";
import { ArrowLeft } from "react-feather";

import endpoints from "../../services/api/index";
import fetch from 'isomorphic-unfetch'




export const getServerSideProps = async ({params})=>{
  
  const response = await fetch(endpoints.posts.post_detail(params.slug))
  const data = await response.json()
  return {
    props:{
      post : data
    }
  }
}



//Youtube Video
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";
import ShareSM from "../../elements/ShareSM";


function Slug({ className, post }) {
  
  // Youtube Component
  const youtubeId = getYouTubeID(post?.video);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function returnBtn() {
    console.log("holis");
  }
  return (
    <section className={className}>
      <div>
        <MainButton onClick={returnBtn}>
          <ArrowLeft /> Regresar
        </MainButton>
      </div>
      <div>
        <h1>{post?.title}</h1>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post?.content }}></div>
      {post?.video && <YouTube videoId={youtubeId} opts={opts} />}
      <ShareSM/>
    </section>
  );
}

export default styled(Slug)`
  width: 80vw;
  margin: 0 auto;
  iframe {
    width: 100%;
    height: auto;
  }
`;
