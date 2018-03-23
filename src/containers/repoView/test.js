/* global expect, it, describe */

import { shallow } from 'enzyme';
import React from 'react';
import RepoView from './index';

describe('RepoView component', () => {
  const props = {
    // Setup a mock repo from the GH API to test with
    data: [
      {
        id: '656494',
        name: 'cakephp',
        full_name: 'cakephp/cakephp',
        stargazers_count: '7486',
        forks_count: '3308',
      },
    ],
  };

  const component = shallow(<RepoView {...props} />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  // Check that total open issues are
  it('Should display total open issues', () => {
    expect(component.find('.repo-name').text()).toEqual(props.data[0].full_name);
  });
});
