/* global it, expect */
import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

it('App renders without crashing', () => {
  const component = shallow(<App />);
  expect(component.exists()).toEqual(true);
});

