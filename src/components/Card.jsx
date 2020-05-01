import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const Card = ({card}) => {
  return (
    <Link to={`view/${card.tnx_id}`} className="card">
      <div className="date">
        {moment(Number(card.date)).format('Do, MMMM YYYY')}
      </div>
      <div className="card-details">
        <div className="transaction-icon" />
        <div className="user">
          <p>{card.user}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card;
