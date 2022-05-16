/** @format */
import {useState} from 'react'
import '../../css/modals/Info.css';

import { IoClose } from 'react-icons/io5';

import image from '../../images/modalImage2.jpeg'

const Info = () => {

  const [show, setShow] = useState(true)
  const [container, setContainer] = useState("info-container")
  const [modal, setModal] = useState("modal-info")

  const handleClose = () => {
    setContainer("info-container close")
    setTimeout(() => {
      setModal("modal-info out")
    }, 300);
    setTimeout(() => {
      setShow(false)
    }, 400);

  }

  return (
    show ? (<div className={modal}>
    <div className={container}>
      <button className='info-closer' onClick={handleClose}>
        <IoClose />
      </button>
      <img src={image} alt="libel-aniversario" style={{height: "100%", borderRadius: 10}}/>
    </div>
  </div>)
  : null
  );
};

export default Info;
