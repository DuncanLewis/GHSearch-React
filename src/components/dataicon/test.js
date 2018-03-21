/* global expect, it, describe */

import { shallow } from 'enzyme';
import React from 'react';
import DataIcon from '.';

describe('Stars Component', () => {
  it('Should render successfully', () => {
    const component = shallow(<DataIcon />);
    expect(component.exists()).toEqual(true);
  });

  it('Should render an icon when passed icon prop', () => {
    const component = shallow((
      <DataIcon count="43201" icon="star" toK />
    ));
    expect(component.contains(<svg className="fa-star" />));
  });

  it('Should render a data count (in K) when passed count prop and toK=true', () => {
    const component = shallow((
      <DataIcon count="43201" icon="star" toK />
    ));
    expect(component.text()).toContain('43.2K');
  });

  it('Should render a raw data count when passed count prop and toK=false', () => {
    const component = shallow((
      <DataIcon count="43201" icon="star" toK={false} />
    ));
    expect(component.text()).toContain('43201');
  });
});
