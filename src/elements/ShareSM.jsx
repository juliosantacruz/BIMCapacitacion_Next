import React from 'react'
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
import styled from 'styled-components';



function ShareSM({className}) {
  
  
  
    return (
        <div className={className}>
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
  )
}
export default styled(ShareSM)`
    

`