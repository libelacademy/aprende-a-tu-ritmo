/** @format */

import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import '../../css/modals/UpdateBar.css';

const UpdateBar = () => {
	const [show, setShow] = useState(true);

	const handleShow = () => {
		setShow(false);
	};

	return (
		<div className={`update-bar ${show ? '' : 'close'}`}>
			<button onClick={handleShow} className='update-bar-btn'>
				<IoClose />
			</button>
			<span>
				Actualización
				<a
					href='https://libel.academy/terminos-y-condiciones/'
					target={'_blank'}
					rel='noreferrer'>
					Términos y condiciones
				</a>
				-
				<a
					href='https://libel.academy/politicas-de-privacidad/'
					target={'_blank'}
					rel='noreferrer'>
					Políticas de privacidad
				</a>
			</span>
		</div>
	);
};

export default UpdateBar;
