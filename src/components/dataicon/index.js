import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

// Convert 1000's to K's
// thanks to SO: https://stackoverflow.com/a/9461657/1380864 for logic
function roundToK(number) {
  return number > 999 ? `${(number / 1000).toFixed(1)}K` : number;
}

export default (props) => {
  return (
    <span>
      <FontAwesomeIcon icon={props.icon} /> {(props.toK ? roundToK(props.count) : props.count)}
    </span>
  );
};
