import React from 'react';

const StatCard = (props) => (
  <div className="card text-center text-white bg-primary">
    <div className="blockquote mb-0 card-body">
      <h4>{props.statCount}</h4>
      <small>{props.statName}</small>
    </div>
  </div>
);

export default StatCard;
