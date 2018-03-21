import _ from 'lodash';
import { SEARCH_REPOS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case SEARCH_REPOS:
      // Use lodash mapKeys to map the full results to a key => values pairing
      return _.mapKeys(action.payload.data.items, 'id');
    default:
      return state;
  }
}
