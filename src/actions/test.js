/* global expect, it, describe */

import React from 'react';
import * as actions from './index';
import { SEARCH_REPOS } from './index';


describe('actions', () => {
  it('should create an action to search for a repo', () => {
    const query = 'CakePHP';
    const expectedAction = {
      type: SEARCH_REPOS,
      payload: {},
    };

    expect(actions.searchRepos(query)).toEqual(expectedAction);
  });
});
