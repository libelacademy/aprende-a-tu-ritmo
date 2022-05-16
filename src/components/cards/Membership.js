/** @format */

import React, { useState } from 'react';
import '../../css/cards/Membership.css';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import { IoShareSocialSharp } from 'react-icons/io5';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share';
import libel from '../../images/logo_dot.png';


const shareUrl = 'https://libel.academy/aniversario';
const SocialIconStyle = { margin: '0px 2px', borderRadius: 5 };
const shareQuote = "Conviértete en profesional 3D"

const Membership = ({ membership }) => {
  
  const [showShare, setShowShare] = useState(false)

  return (
    <div className="Membership">
      <div
        className="membership-image"
        style={
          isWebpSupported()
            ? { backgroundImage: `url(${membership.imageWebp})` }
            : { backgroundImage: `url(${membership.image})` }
        }
      >
        <div className="memberships-share-button" onClick={() => {setShowShare(!showShare)}}>
          <IoShareSocialSharp />
          <div className="membership-social-networks-box" style={showShare ? {visibility: "visible", opacity: 1} : {visibility: "hidden", opacity: 0}}>
            <FacebookShareButton
              url={shareUrl}
              quote={shareQuote}
            >
              <FacebookIcon size={36} style={SocialIconStyle} />
            </FacebookShareButton>
            <TwitterShareButton
              url={shareUrl}
              quote={shareQuote}
            >
              <TwitterIcon size={36} style={SocialIconStyle} />
            </TwitterShareButton>
            <WhatsappShareButton
              url={shareUrl}
              quote={shareQuote}
            >
              <WhatsappIcon size={36} style={SocialIconStyle} />
            </WhatsappShareButton>
            <TelegramShareButton
              url={shareUrl}
              quote={shareQuote}
            >
              <TelegramIcon size={36} style={SocialIconStyle} />
            </TelegramShareButton>
          </div>
        </div>
      </div>
      <div className="membership-header">
        <h1>{membership.project}</h1>
        <span
          style={{backgroundColor: "#600de"}}
        >
          {membership.technology}
        </span>
      </div>
      <div className="membership-information">
        <div className="membership-user">
          <div className="membership-user-avatar">
            <img src={libel} alt="Libel Academy" />
          </div>
          <div className="membership-user-name">
            <h3>Instructores</h3>
            <h2>{membership.student}</h2>
          </div>
        </div>
        <div className="membership-price">
          <h3 style={{ textDecoration: 'line-through' }}>{membership.priceBefore}USD</h3>
          <h2>{membership.price}USD</h2>
        </div>
      </div>
      <div className="membership-separator"></div>
      <a href={membership.url} target={"_blank"} rel="noreferrer" className="pay-button">
        VER MEMBRESÍA
      </a>
    </div>
  );
};

export default Membership;
