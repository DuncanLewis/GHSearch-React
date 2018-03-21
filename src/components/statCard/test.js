/* global expect, it, describe */

import { shallow } from 'enzyme';
import React from 'react';
import StatCard from '.';

describe('Statistic Card', () => {
  it('Should successfully render', () => {
    const component = shallow(<StatCard />);
    expect(component.exists()).toEqual(true);
  });

  it('Should render a bootstrap card ', () => {
    const component = shallow(<StatCard />);
    expect(component.contains('.card'));
  });

  it('Should display the defined key stat count', () => {
    const statCount = '5';
    const statName = 'Open Issues';
    const component = shallow(<StatCard statCount={statCount} statName={statName} />);
    expect(component.find('h4').contains(statCount));
  });

  it('Should display the defined key stat name', () => {
    const statCount = '5';
    const statName = 'Open Issues';
    const component = shallow(<StatCard statCount={statCount} statName={statName} />);
    expect(component.find('small').contains(statName));
  });
});
