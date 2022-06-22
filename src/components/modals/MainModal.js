/** @format */

import { IoClose } from 'react-icons/io5';
import '../../css/modals/MainModal.css';

import Image from 'react-image-webp';

import malla from '../../images/malla_svg-03.png';
import mallaWebp from '../../images/malla_svg-03.webp';
import gamer from '../../images/gamer_03.png';
import gamerWebp from '../../images/gamer_03.webp';

import blender from '../../images/technologies/logo-blender.png';
import substance from '../../images/technologies/substance-3d-painter.png';
import zbrush from '../../images/technologies/ZBrush-Logo.png';

import libelIcon from '../../images/libel-icon.png'

import character from '../../images/Oscar Fernandez - 01TC.png';
import {  useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../features/modal';


const MainModal = () => {
  

  const { close } = useSelector(state => state.modal.value)
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal())
  };

  return (
    <div className={`MainModal ${close ? 'close' : null}`}>
      <img src={libelIcon} alt="Libel Academy" className="main-modal-libel-icon" />
      <button className='main-modal-closer' onClick={handleClose}>
        <IoClose />
      </button>
      <div className='main-modal-container'>
        <Image
          webp={mallaWebp}
          src={malla}
          alt=''
          className='main-modal-malla'
        />
        <Image
          webp={gamerWebp}
          src={gamer}
          alt=''
          className='main-modal-gamer'
        />
        <div className='main-modal-filter'></div>
        <div className='main-modal-content'>
          <figure className='main-modal-character-wrapper'>
            <img src={character} alt='' />
          </figure>
          <div className='main-modal-information'>
            <h1>
              APRENDE <span>3D</span>
              <br />
              <b>GRATIS</b>
            </h1>
            <p>
              con profesionales de la industria, con acompañamiento y
              feedback en vivo.
            </p>
            <img src={character} alt='' className="main-modal-character"/>
            <div className='main-modal-icons-wrapper'>
              {[blender, substance, zbrush].map((icon, index) => (
                <img src={icon} key={index} alt='icon' />
              ))}
            </div>
            <a href='https://libel.academy/asesoria/'>Aplica ahora</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainModal;
