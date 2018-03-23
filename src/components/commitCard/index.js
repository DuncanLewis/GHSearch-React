import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  const { stroke } = props;
  const strokeWidth = 3;
  const fill = 'none';

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Weekly Commits</h5>
      </div>
      <Sparklines data={props.data}>
        <SparklinesLine style={{ strokeWidth, stroke, fill }} />
      </Sparklines>
    </div>
  );
};
