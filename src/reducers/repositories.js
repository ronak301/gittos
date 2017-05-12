import {
  SEARCH_INPUT_VALUE_CHANGE,
  SEARCH_INPUT_VALUE_CHANGE_LOADING,
  SEARCH_INPUT_VALUE_CHANGE_ERROR,
  SEARCH_INPUT_VALUE_CHANGE_SUCCESS
} from '../constants/search';

export default function todos(state = [], action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SEARCH_INPUT_VALUE_CHANGE_LOADING:
      newState.isLoading = true
      return newState;
    case SEARCH_INPUT_VALUE_CHANGE_SUCCESS:
      newState.isLoading = false
      newState.data = action.payload.items
      newState.currentSearchText = action.meta
      return newState;
    case SEARCH_INPUT_VALUE_CHANGE_ERROR:
      newState.isLoading = false
      newState.isError = true
      return newState;
    default:
      return state;
  }
}
