import React from 'react'
//Youtube Video
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";
import styled from 'styled-components';



function CardVideoYT({className, videoURL}) {

// Youtube Component
const youtubeId = getYouTubeID(videoURL);
const opts = {
  height: "490",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};



    return (
        <YouTube videoId={youtubeId} opts={opts} className={className}/>
  )
}
export default styled(CardVideoYT)`
    iframe{
    width: 100%;
    height: 300px; 
    @media screen and (min-width: 600px) {
    height: 400px;
  }
  @media screen and (min-width: 800px) {
    height: 450px;
  }
    }
   
`