import { SEARCH_INPUT_VALUE_CHANGE } from '../constants/search';

export default function todos(state = [], action) {
  switch (action.type) {
    case SEARCH_INPUT_VALUE_CHANGE:
      const newState = Object.assign({}, state);
      newState.currentSearchText = action.payload
      return newState;
    default:
      return state;
  }
}
