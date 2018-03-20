/* global expect, it, describe */

import { shallow } from 'enzyme';
import React from 'react';
import Navbar from '.';

describe('Navbar component', () => {
  it('Should render successfully', () => {
    const component = shallow(<Navbar />);
    expect(component.exists()).toEqual(true);
  });
});
