/* global expect, it, describe */

import { shallow } from 'enzyme';
import React from 'react';
import RepoView from './index';

describe('RepoView component', () => {
  const component = shallow(<RepoView />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });
});
