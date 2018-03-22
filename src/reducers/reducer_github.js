import _ from 'lodash';
import { FETCH_REPO, SEARCH_REPOS } from '../actions';

export default function (state = {}, action) {
  console.log('Reducer');
  console.log(action);

  switch (action.type) {
    case SEARCH_REPOS:
      // Use lodash mapKeys to map the full results to a key => values pairing
      return _.mapKeys(action.payload.data.items, 'id');
    case FETCH_REPO:
      // ToDo: figure out a way to map payload[0].data and payload[1].data to payload.data.repo & payload.data.repo.readme
      // ToDo: add a middleware to decode the base64 string of readme contents
      // return [action.payload[0].data];
      return _.assign({ ...state }, action.payload[0].data, action.payload[1].data);
    default:
      return state;
  }
}
