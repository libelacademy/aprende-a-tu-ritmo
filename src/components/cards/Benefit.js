/** @format */

import React from 'react';
import '../../css/cards/Benefit.css';
import { useDispatch } from 'react-redux';
import { openTrainingMore } from '../../features/training';
import { IoHelpCircle } from 'react-icons/io5';

const Benefit = ({ title, body, more }) => {
  const dispatch = useDispatch();
  return (
    <div className='Benefit'>
      <div className='benefit-header'>
        {title}:{' '}
        {more ? (
          <IoHelpCircle
            style={{ cursor: 'pointer' }}
            onClick={() => {
              dispatch(
                openTrainingMore({
                  modal: true,
                  title,
                  more,
                })
              );
            }}
          />
        ) : null}
      </div>
      <div className='benefit-body'>{body}</div>
    </div>
  );
};

export default Benefit;
