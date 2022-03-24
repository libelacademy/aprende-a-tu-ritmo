/** @format */

import React, { useState } from 'react';
import '../../css/modals/InformativeTalks.css';
import { IoClose, IoCalendarOutline } from 'react-icons/io5';

const InformativeTalks = () => {
  const [openTalks, setOpenTalks] = useState(true);
  const visible = { opacity: 1, visibility: 'visible' };
  const hidden = { opacity: 0, visibility: 'hidden' };
  const mobile = window.innerWidth < 460;

  return (
    <div
      className="InformativeTalks"
      style={
        openTalks
          ? { transform: 'translateY(0)', ...visible }
          : { transform: 'translateY(20px)', ...hidden }
      }
    >
      <p>Únete a nuestras charlas informativas</p> 
      <a
        href="https://libel.academy/asesoria"
        target={'_blank'}
        rel="noreferrer"
      >
        <IoCalendarOutline className="it-icon" />
        { mobile ? 'Charlas informativas' : 'Programar' }
      </a>
      <button className="close-information" onClick={() => {setOpenTalks(false)}} > 
        <IoClose />
      </button>
    </div>
    );
};

export default InformativeTalks;
