/** @format */

import React, { useEffect, useState } from 'react';
import '../css/Header.css';

import thunder from '../images/thunder.png';
import light from '../images/light.png';
import trophy from '../images/trophy.png';

import { useSelector } from 'react-redux';
import underline from '../images/line.png';

const Header = () => {
  const bannerTop = useSelector((state) => state.banner.value.banner);
  const [headerTop, setHeaderTop] = useState(0);
  const mobile = window.innerWidth < 560 ? true : false;

  useEffect(() => {
    if (bannerTop) {
      setHeaderTop(mobile ? 120 : 80);
    } else {
      setHeaderTop(0);
    }
  }, [bannerTop, mobile]);


  return (
    <div  
      className='Header'
      id='home'
      style={{ paddingTop: `${40 + headerTop}px` }}>
      <div className='header-container container padding'>
        <img src={light} alt='' className='image-center' />
        <div className='header-information'>
          <img src={trophy} alt='' className='image_left' />
          <img src={thunder} alt='' className='image_right' />
          <h2>APRENDE A TU RITMO</h2>
          <h1 className='anniversary'>
            
            No importa la hora<br/> ni el lugar
              <img src={underline} alt='header-underline' />
          </h1>
          <p >
          Podrás acceder cuando quieras a nuestros
            <br />
            <span>Cursos y Membresías</span>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
