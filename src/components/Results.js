/** @format */

import React from 'react';
import '../css/Results.css';
import Result from './cards/Result';

import results from '../utils/results';
import line from '../images/underline.png';
import { IoLogoWhatsapp } from 'react-icons/io5';

const Results = () => {
	return (
		<div className='Results' id='masters'>
			<div className='results-container container'>
				<h1>
					Aplica hasta el
					<br />
					<span style={{ fontWeight: 'bolder' }}>
						<img
							src={line}
							alt='underline'
							className='results-line'
						/>
						90% Dto
					</span>
				</h1>
				<div className='results-content'>
					{[...results]
						.sort((a, b) => a.price - b.price)
						.map((result, index) => (
							<Result key={index} result={result} />
						))}
				</div>
				<a
					HREF='https://cursos.libel.academy/collections?category=courses'
					target={'_blank'}
					rel='noreferrer'
					className='button'
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<IoLogoWhatsapp size={24} style={{ marginRight: 10 }} />
					¿Tienes preguntas?
				</a>
			</div>
		</div>
	);
};

export default Results;
