import _ from 'lodash';
import { FETCH_REPO, SEARCH_REPOS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case SEARCH_REPOS:
      // Use lodash mapKeys to map the full results to a key => values pairing
      return _.mapKeys(action.payload.data.items, 'id');
    case FETCH_REPO:
      return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}
