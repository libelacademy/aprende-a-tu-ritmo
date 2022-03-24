/** @format */

import React, { useEffect, useState } from 'react';
import '../css/Header.css';

import thunder from '../images/thunder.png';
import light from '../images/light.png';
import trophy from '../images/trophy.png';

import { useSelector } from 'react-redux';
import underline from '../images/line.png';

import { getRemainingTimeUntilMsTimestamp } from '../utils/countdown';

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
};

const countdownTimestampMs = 'Sun, 17 Apr 2022 23:59:00 GMT-5';

const Header = () => {
  const bannerTop = useSelector((state) => state.banner.value.banner);
  const [headerTop, setHeaderTop] = useState(0);
  const [remainingTime, setRemainingTime] = useState(
    defaultRemainingTime
  );
  const mobile = window.innerWidth < 560 ? true : false;

  useEffect(() => {
    if (bannerTop) {
      setHeaderTop(mobile ? 120 : 80);
    } else {
      setHeaderTop(0);
    }
  }, [bannerTop, mobile]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div
      className='Header'
      id='home'
      style={{ paddingTop: `${80 + headerTop}px` }}>
      <div className='header-container container padding'>
        <img src={light} alt='' className='image-center' />
        <div className='header-information'>
          <img src={trophy} alt='' className='image_left' />
          <img src={thunder} alt='' className='image_right' />
          <h2>ANIVERSARIO LIBEL</h2>
          <h1>
            ESTAMOS
            <br />
            <b className='anniversary'>
              CUMPLIENDO 7 AÑOS
              <img src={underline} alt='header-underline' />
            </b>
          </h1>
          <p>
            Y lo celebramos a lo alto con
            <br />
            <span>Dtos hasta del 70%</span>
          </p>
        </div>
          <b>ESTA OFERTA TERMINA EN:</b>
        <div className='header-countdown'>
          <div className='countdown-timer'>
            <div className='countdown-segment'>
              <div className='countdown-label'>DIA</div>
              <div className='countdown-number'>
                {remainingTime.days}
              </div>
            </div>
            <div className='countdown-segment'>
              <div className='countdown-label'>HOR</div>
              <div className='countdown-number'>
                {remainingTime.hours}
              </div>
            </div>
            <div className='countdown-segment'>
              <div className='countdown-label'>MIN</div>
              <div className='countdown-number'>
                {remainingTime.minutes}
              </div>
            </div>
            <div className='countdown-segment'>
              <div className='countdown-label'>SEG</div>
              <div className='countdown-number'>
                {remainingTime.seconds}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
