/* global expect, it, describe */

import { shallow } from 'enzyme';
import React from 'react';
import RepoList from '.';

describe('Repo List Component', () => {
  it('Should render successfully', () => {
    const component = shallow(<RepoList />);
    expect(component.exists()).toEqual(true);
  });
});
