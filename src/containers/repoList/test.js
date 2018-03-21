/* global expect, it, describe */

import { shallow } from 'enzyme';
import React from 'react';
import { RepoList } from './index';

describe('Repo List Component', () => {
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

  // Setup the component and pass the props
  const component = shallow(<RepoList {...props} />);

  // Initial test to ensure the component can render
  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  // Check that element with class .repo-name is equal to the name in our mock
  it('Should display a repo when passed in as a prop', () => {
    expect(component.find('.repo-name').text()).toEqual(props.data[0].full_name);
  });
});
