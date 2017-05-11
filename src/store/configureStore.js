import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import environment from '../../config/environment';

let store = null;

function getInitialState() {
  return {
    user: {

    },
    nav: {

    },
    repositories: {

    },
  };
}

export default function configureStore(initialState = getInitialState()) {
  if (store) {
    return store;
  }
  const middlewares = [thunk];
  if (environment.reduxLogger && process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
  }
  store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      typeof window === 'object' && window.devToolsExtension && process.env.NODE_ENV === 'development' ? window.devToolsExtension() : f => f
    )
  );
  return store;
}
