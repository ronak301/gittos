import { combineReducers } from 'redux';

import user from './user';
import repositories from './repositories';
import nav from './nav';

const rootReducer = combineReducers({
  user,
  repositories,
  nav,
});

export default rootReducer;
