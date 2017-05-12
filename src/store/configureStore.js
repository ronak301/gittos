import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from './promise';
import {persistStore, autoRehydrate} from 'redux-persist'

import rootReducer from '../reducers';
import environment from '../../config/environment';
import ReduxPersist from '../../config/ReduxPersist';

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
  const middlewares = [promise, thunk];
  if (environment.reduxLogger && process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
  }
  store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      typeof window === 'object' && window.devToolsExtension && process.env.NODE_ENV === 'development' ? window.devToolsExtension() : f => f,
      autoRehydrate()
    )
  );
  persistStore(store, {
    storage: ReduxPersist.storeConfig.storage
  })
  return store;
}
