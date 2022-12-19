import { useRouter } from "next/router";
import React from "react";
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
  TwitterShareButton,
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
import styled from "styled-components";

function ShareSM({ className, post }) {
  const router = useRouter()
  const shareToShare = 'www.bimcapacitacion.com'+router.asPath
  const copyMessage = `
  Encontre el post de:
  ${post.title}
  es de BIMCapacitacion, tienes que verlo .. :D
  te dejo el link:
  `
  const title = post.title

console.log(copyMessage)

  return (
    <div className={className}>
      <FacebookShareButton url={shareToShare}>
        <FacebookIcon size={42} round={true} />
      </FacebookShareButton>

      <FacebookMessengerShareButton url={shareToShare}>
        <FacebookMessengerIcon size={42} round={true} />
      </FacebookMessengerShareButton>

      <WhatsappShareButton url={shareToShare}>
        <WhatsappIcon size={42} round={true} />
      </WhatsappShareButton>
      
      <TwitterShareButton url={shareToShare} title={title} hashtags={['revit','bimcapacitacion','cursosrevit']}>
      <TwitterIcon size={42} round={true} />
      </TwitterShareButton>
      
      <EmailShareButton url={shareToShare} body={copyMessage}>
        <EmailIcon size={42} round={true} />
      </EmailShareButton>
    </div>
  );
}
export default styled(ShareSM)`
margin:10px 0;

button{
  margin:0 5px ;
}
`;
