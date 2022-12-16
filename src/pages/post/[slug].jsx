import React from "react";
import { useRouter } from "next/router";

import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import endpoints from "../../services/api/index";
import styled from "styled-components";
import { MainButton } from "../../styles/styledComponents";
import { ArrowLeft } from "react-feather";

//Youtube Video
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";

// Share post
import {
  FacebookShareButton,
  EmailShareButton,
  WhatsappShareButton,
  FacebookMessengerShareButton,
  OKShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  VKShareCount,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";

function Slug({ className }) {
  const router = useRouter();
  const postSlug = router.query.slug;
  const postAsPath = router.asPath.slice(6, 100);
  // console.log(postSlug)
  console.log(postAsPath);

  const post = useFetch(endpoints.posts.post_detail(postAsPath));

  // Youtube Component
  const youtubeId = getYouTubeID(post.video);

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
      {post.video && <YouTube videoId={youtubeId} opts={opts} />}
      <div className="shareSocialMedia">
        <FacebookShareButton url={'juliosantacruz.dev'}>
          <FacebookIcon size={32} round={true}/>
        </FacebookShareButton>
        <EmailShareButton url={'juliosantacruz.dev'}>
          <EmailIcon size={32} round={true}/>
        </EmailShareButton>
        <FacebookMessengerShareButton url={'juliosantacruz.dev'}>
          <FacebookMessengerIcon size={32} round={true}/>
        </FacebookMessengerShareButton>
      </div>
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
