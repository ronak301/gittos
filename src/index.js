import React from 'react';
import ReactDOM from 'react-dom';
import SearchRepo from './components/SearchRepo';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <SearchRepo store={store} />
  </Provider>,
  document.getElementById('root')
);
