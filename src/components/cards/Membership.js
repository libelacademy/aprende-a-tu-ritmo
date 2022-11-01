/** @format */

import React from 'react';
import '../../css/cards/Membership.css';

import { AiFillQuestionCircle } from 'react-icons/ai';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import { openTrainingMore } from '../../features/training';

//membership

const Membership = ({ membership }) => {
  const dispatch = useDispatch();

  return (
    <div className='Membership'>
      <div className='membership-header'>
        <img src={membership.image} alt='Header Membership' />
      </div>
      <div class="ribbon ribbon-top-left"><span>oferta</span></div>
      <div className='membership-body'>
        <div className='membership-info'>
          <div className='membership-name'>
            <h3
              style={
                membership.title === 'Full Plan'
                  ? { color: '#6000de' }
                  : { color: '#000000' }
              }>
              {membership.title}
              {membership.description && (
                <AiFillQuestionCircle
                  style={{
                    fontSize: 18,
                    marginLeft: '1ch',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    dispatch(
                      openTrainingMore({
                        modal: true,
                        title: membership.title,
                        more: membership.description,
                      })
                    );
                  }}
                />
              )}
            </h3>
            <h4>{membership.subtitle}</h4>
            <h5>
              ${membership.price} USD
              <br />
              <sup>${membership.price_before}USD</sup>
            </h5>
          </div>
        </div>

        <ul className='membership-card-items'>
          {membership.items.map((e, i) => (
            <li
              key={i}
              style={
                e.highlight
                  ? {padding: '4px 8px',fontWeight: 700, backgroundColor: '#6000de88', color: '#fff', borderRadius: '4px'}
                  : {padding: '4px 8px'}
              }>
              <IoCheckmarkCircle
                style={{ fontSize: 20, marginRight: 20 }}
              />
              <span>{e.item}</span>
              {e.more ? (
                <AiFillQuestionCircle
                  className='question-icon'
                  onClick={() => {
                    dispatch(
                      openTrainingMore({
                        modal: true,
                        title: e.item,
                        more: e.more,
                      })
                    );
                  }}
                />
              ) : null}
            </li>
          ))}
        </ul>
        <div className='membership-button'>
          <a
            href={membership.urls[0].url}
            target={'_blank'}
            rel='noreferrer'
            className='paypal'>
            {membership.urls[0].name}
          </a>
          <a
            href={membership.urls[1].url}
            target={'_blank'}
            rel='noreferrer'
            className='card'>
            {membership.urls[1].name}
          </a>
          <div style={{
            width: '100%',
            height: 1,
            backgroundColor: '#000000',
          }}/>
          <a
            href='https://libel.academy/membresia/'
            target={'_blank'}
            rel='noreferrer'
            className='view-membership'>
            Ver membresía
          </a>
        </div>
      </div>
    </div>
  );
};

export default Membership;
