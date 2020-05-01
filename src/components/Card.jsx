import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({card}) => {
  return (
    <div className="card">
      <div className="date">12, May 2020</div>
      <div className="card-details">
        <div className="transaction-icon" />
        <div className="user">
          <p>{card.user}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
