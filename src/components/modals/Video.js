/** @format */

import React, { useEffect, useState } from 'react';
import '../../css/modals/Video.css';

import { IoClose } from 'react-icons/io5';

import ReactPlayer from 'react-player/youtube';

import { useSelector, useDispatch } from 'react-redux';

import { openVideo } from '../../features/video';

const Video = () => {
  const [visibility, setVisibility] = useState('hidden');
  const [container, setContainer] = useState('video-closed');

  const modal = useSelector((state) => state.video.value.modal);
  const url = useSelector((state) => state.video.value.url);
  const type = useSelector((state) => state.video.value.type);
  const master = useSelector((state) => state.video.value.master);
  const image = useSelector((state) => state.video.value.image);

  const dispatch = useDispatch();

  useEffect(() => {
    if (modal) {
      setVisibility('visible');
      setTimeout(() => {
        setContainer('');
      }, 100);
    }
  }, [modal]);

  console.log(image);

  const handleCloseModal = (event) => {
    if (event.target.className === 'Video') {
      setContainer('video-closed');
      setTimeout(() => {
        // handleOpenModal(false);
        dispatch(openVideo({ modal: false, url: '' }));
        setVisibility('hidden');
      }, 200);
    }
  };

  return (
    <div
      className='Video'
      style={{ visibility: `${visibility}` }}
      onClick={handleCloseModal}>
      <div className={`video-content ${container}`}>
        <button
          className='video-closer'
          onClick={() => {
            setContainer('video-closed');
            setTimeout(() => {
              // handleOpenModal(false);
              dispatch(openVideo({ modal: false, url: '' }));
              setVisibility('hidden');
            }, 200);
          }}>
          <IoClose />
        </button>
        <div className={`video-container ${container}`}>
          {modal ? (
            url ? (
              <ReactPlayer
                style={{ borderRadius: '20' }}
                className='react-player'
                url={url}
                playing={true}
                width='100%'
                height='100%'
                controls={false}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                }}
              />
            ) : (
              <img src={image} alt="aniversario" style={{maxWidth: "100%"}}/>
            )
          ) : null}
        </div>
        {type === 'master' ? (
          <a href={master} className={`go-to-master ${container}`}>
            IR AL MASTER
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Video;
