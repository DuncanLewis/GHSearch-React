import _ from 'lodash';
import { FETCH_REPO, SEARCH_REPOS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case SEARCH_REPOS:
      // Use lodash mapKeys to map the full results to a key => values pairing
      return _.values(_.mapKeys(action.payload.data.items, 'id'));
    case FETCH_REPO:
      // ToDo: add a middleware to decode the base64 string of readme contents
      return {
        ...state,
        repo: action.payload[0].data,
        readme: action.payload[1].data,
        commitActivity: action.payload[2].data,
        contributors: action.payload[3].data,
        pulls: action.payload[4].data,
      };
    default:
      return {
        ...state,
      };
  }
}
