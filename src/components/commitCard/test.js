/* global expect, it, describe */

import { shallow } from 'enzyme';
import React from 'react';
import CommitCard from './index';

describe('Commit Card', () => {
  const data = [3, 4, 20, 7, 4, 3, 11];
  const lineColor = 'blue';
  const component = shallow(<CommitCard data={data} stroke={lineColor} />);

  // Check if the component renders at all
  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  // Check if svg element is found, if so this means the chart has rendered
  it('Should display a Sparkline chart', () => {
    expect(component.find('svg').exists()).toEqual(true);
  });

  // Check if the line color is set correctly
});
