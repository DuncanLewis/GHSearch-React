import { combineReducers } from 'redux';
import GithubReducer from './reducer_github';

// Use redux combineReducers to put all our reducers together
const rootReducer = combineReducers({
  github: GithubReducer,
});

export default rootReducer;
