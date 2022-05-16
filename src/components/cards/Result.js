/** @format */

import React, { useState } from 'react';
import '../../css/cards/Result.css';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import { useDispatch } from 'react-redux';
import { openVideo } from '../../features/video';
import { IoPlay, IoShareSocialSharp } from 'react-icons/io5';

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

const Result = ({ result }) => {
  const dispatch = useDispatch();
  const [showShare, setShowShare] = useState(false)

  return (
    <div className="Result">
      <div
        className="result-image"
        style={
          isWebpSupported()
            ? { backgroundImage: `url(${result.imageWebp})` }
            : { backgroundImage: `url(${result.image})` }
        }
      >
        <button
          className="result-video-button"
          onClick={() => {
            dispatch(
              openVideo({
                modal: true,
                url: result.video,
                type: 'common',
                image: result?.imageModal 
              })
            );
          }}
        >
          <IoPlay className="result-video-icon" />
          <span>{result.video ? "Ver Video" : "Ver Imagen"}</span>
        </button>
        <div className="results-share-button" onClick={() => {setShowShare(!showShare)}}>
          <IoShareSocialSharp />
          <div className="result-social-networks-box" style={showShare ? {visibility: "visible", opacity: 1} : {visibility: "hidden", opacity: 0}}>
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
      <div className="result-header">
        <h1>{result.project}</h1>
        <span
          style={{backgroundColor: "#600de", marginLeft: 10, padding: "4px 8px", borderRadius: 5}}
        >
          {result.technology}
        </span>
      </div>
      <div className="result-information">
        <div className="result-user">
          <div className="result-user-avatar">
            <img src={libel} alt="Libel Academy" />
          </div>
          <div className="result-user-name">
            <h3>Instructor</h3>
            <h2>{result.student}</h2>
          </div>
        </div>
        <div className="result-price">
          <h3 style={{ textDecoration: 'line-through' }}>{result.priceBefore}USD</h3>
          <h2>{result.price}USD</h2>
        </div>
      </div>
      <div className="result-separator"></div>
      <a href={result.url} target={"_blank"} rel="noreferrer" className="pay-button">
        VER CURSO
      </a>
    </div>
  );
};

export default Result;
