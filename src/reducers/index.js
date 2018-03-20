import { combineReducers } from 'redux';
import GithubReducer from './reducer_github';

const rootReducer = combineReducers({
  github: GithubReducer,
});

export default rootReducer;
