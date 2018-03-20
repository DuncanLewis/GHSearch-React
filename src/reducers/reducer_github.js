import _ from 'lodash';
import { SEARCH_REPOS } from '../actions';

export default function (state = {}, action) {
  switch (action.types) {
    case SEARCH_REPOS:
      return _.mapKeys(action.payload.data.items, 'id');

    default:
      return state;
  }
}
