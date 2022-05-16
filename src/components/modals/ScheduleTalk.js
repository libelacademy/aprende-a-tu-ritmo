/** @format */

import React, { useEffect, useState } from 'react';
import '../../css/modals/ScheduleTalk.css';

import { IoClose } from "react-icons/io5";

const ScheduleTalk = () => {

  const [show, setShow] = useState(true)
  const [content, setContent] = useState('schedule-content')
  const [container, setContainer] = useState('ScheduleTalk')


  useEffect(() => {
    if (!show) {
      setContent('schedule-content close')
      setTimeout(() => {
        setContainer('ScheduleTalk closed')
      },[100])
    }
  }, [show])
  

  return (
    <div className={container}>
      <div className={content}>
      <IoClose className="schedule-close-button" onClick={() => {
        setShow(false)
      }}/>
        <h4>
          ¿Quieres aprender 3D y no sabes cómo iniciar? ¿Tienes dudas
          acerca de nuestra enseñanza?
        </h4>
        <p>
          ¡Entra en contacto directo con nosotros! Únete a la charla
          informativa para clarificar cualquier tipo de dudas que
          puedas tener.
        </p>
        <a href='https://libel.academy/asesoria/'>
        Agendar charla  
        </a>
      </div>
    </div>
  );
};

export default ScheduleTalk;
