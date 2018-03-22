import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

// Create loggerMiddleware using redux-logger
const loggerMiddleware = createLogger();
// Setup redux dev tools chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(
      ReduxPromise,
      thunkMiddleware,
      loggerMiddleware,
    )),
  );
}
