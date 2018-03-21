/* global expect, it, describe */

import { shallow } from 'enzyme';
import React from 'react';
import { Search } from './index';

describe('Search component', () => {
  const props = {
    term: 'CakePHP',
  };

  const component = shallow(<Search {...props} />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have an input', () => {
    expect(component.find('.search-input').exists);
  });
});
