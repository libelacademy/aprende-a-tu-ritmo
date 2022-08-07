/** @format */

import { IoClose, IoPlaySharp } from 'react-icons/io5';
import '../../css/modals/MainModal.css';

import Image from 'react-image-webp';

import libelIcon from '../../images/libel-icon.png';

import backgroundLeft from '../../images/main/image 38.png';
import backgroundLeftWebp from '../../images/main/image-38.webp';
import backgroundRight from '../../images/main/pexels-yan-krukov-9072339 1.png';
import backgroundRightWebp from '../../images/main/pexels-yan-krukov-9072339-1.webp';
import backgroundNext from '../../images/main/background-next.jpg';
import backgroundNextWebp from '../../images/main/background-next.webp';
// import logo3dCamp from '../../images/3d-camp-logo.png';
// import logo3dCampWebp from '../../images/3d-camp-logo.webp';

import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../features/modal';
import { useState } from 'react';
import ReactPlayer from 'react-player';

const MainModal = () => {
  const { close } = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();
  const [video, setVideo] = useState(false);

  const handleClose = () => {
    setVideo(false);
    dispatch(closeModal());
  };

  return (
    <div className={`MainModal ${close ? 'close' : null}`}>
      <img
        src={libelIcon}
        alt='Libel Academy'
        className='main-modal-libel-icon'
        loading='lazy'
      />
      <button className='main-modal-closer' onClick={handleClose}>
        <IoClose />
      </button>
      <div className='main-modal-container'>
        <div className='main-modal-background'>
          <Image
            src={backgroundLeft}
            webp={backgroundLeftWebp}
            alt='backgroundLeft'
            className='main-modal-background-left'
          />
          <Image
            src={backgroundRight}
            webp={backgroundRightWebp}
            alt='backgroundRight'
            className='main-modal-background-right'
          />
        </div>
        <div className='main-modal-filter' />
        <div className='main-modal-content'>
          {/* <Image src={logo3dCamp} webp={logo3dCampWebp} alt='logo3dCamp' style={{width: 130, marginBottom: 30}} /> */}
          <div className='main-modal-badge'>Campamento 3D Online</div>
          <div style={{ paddingTop: 10, paddingBottom: 10 }}>
            <h2 className='main-modal-title'>
              <span style={{ color: '#ced4da' }}>Sorteo por </span>
              <strong style={{ color: '#6000de' }}>ENTRADAS</strong>
              <br />
              <span style={{ color: '#ced4da' }}>Gratis al </span>
              <span className='main-modal-level-wrapper'>
                <strong className='main-modal-level'>3DCAMP!</strong>
              </span>
            </h2>
          </div>
          <div style={{ paddingTop: 10, paddingBottom: 10 }}>
            <p className='main-modal-text'>
              Premiaremos a los mejores resultados con BECAS en
              nuestros MÁSTER.
            </p>
          </div>
          <div className='main-modal-video-wrapper'>
            <div className='main-modal-video'>
              <Image
                webp={backgroundNextWebp}
                src={backgroundNext}
                alt='next-video'
              />
            </div>
            <div
              className='main-modal-video-play-btn'
              onClick={() => setVideo(true)}>
              <IoPlaySharp size={48} color='#343a40' />
            </div>
            {video && (
              <div className='main-modal-video-modal'>
                <ReactPlayer
                  className='react-player'
                  url='https://www.youtube.com/watch?v=VAqAkw6JPNI'
                  playing={true}
                  width='100%'
                  height='100%'
                  controls={true}
                />
              </div>
            )}
          </div>
          <a
            href='https://libel.academy/3d-camp'
            className='main-modal-btn'>
            Ver 3DCAMP
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainModal;
