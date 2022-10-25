/** @format */

import React from 'react';
import '../css/Header.css';

import headerImg from '../images/header.png';

const Header = () => {
	return (
		<div className='Header' id='home'>
			<div className='header__background'>
				<div className='header__background__left' />
				<div className='header__background__right' />
        <div className='header__background__mobile' />
			</div>
			<div className='Header__container'>
				<img src={headerImg} alt='header' className='Header__img' />
			</div>
		</div>
	);
};

export default Header;
