/* global expect, it, describe */

import { shallow } from 'enzyme';
import React from 'react';
import ContributorsCard from './index';

describe('Commit Card', () => {
  const data = [
    {
      login: 'markstory',
      id: 24086,
      avatar_url: 'https://avatars3.githubusercontent.com/u/24086?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/markstory',
      html_url: 'https://github.com/markstory',
      followers_url: 'https://api.github.com/users/markstory/followers',
      following_url: 'https://api.github.com/users/markstory/following{/other_user}',
      gists_url: 'https://api.github.com/users/markstory/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/markstory/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/markstory/subscriptions',
      organizations_url: 'https://api.github.com/users/markstory/orgs',
      repos_url: 'https://api.github.com/users/markstory/repos',
      events_url: 'https://api.github.com/users/markstory/events{/privacy}',
      received_events_url: 'https://api.github.com/users/markstory/received_events',
      type: 'User',
      site_admin: false,
      contributions: 12921,
    },
  ];
  const component = shallow(<ContributorsCard data={data} />);

  // Check if the component renders at all
  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  // Check if svg element is found, if so this means the chart has rendered
  it('Should display a list item ', () => {
    expect(component.find('.li').exists()).toEqual(true);
  });

  // Check if the line color is set correctly
});
