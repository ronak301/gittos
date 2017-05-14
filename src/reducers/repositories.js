import update from 'react-addons-update';
import { normalize, schema, arrayOf } from 'normalizr';
import { concat  as _concat, get as _get } from 'lodash';

import {
  SEARCH_INPUT_VALUE_CHANGE,
  SEARCH_INPUT_VALUE_CHANGE_LOADING,
  SEARCH_INPUT_VALUE_CHANGE_ERROR,
  SEARCH_INPUT_VALUE_CHANGE_SUCCESS
} from '../constants/index';


export default function todos(state = [], action) {
  const originalData = _get(action, 'payload', [])
  let newState = Object.assign({}, state);
  const searchText = action.meta;
  switch (action.type) {
    case SEARCH_INPUT_VALUE_CHANGE_LOADING:
      newState.isLoading = true
      return newState;
    case SEARCH_INPUT_VALUE_CHANGE_SUCCESS:
      const repo = new schema.Entity('repos');
      const arrayOfRepo = new schema.Array(repo);
      const normalizedData = normalize(originalData, arrayOfRepo);
      newState = {
        ...state,
        entities: {
          ...(state.entities || {}),
          ...normalizedData.entities.repos
        },
        searchedEntitiesMap: {
          ...state.searchedEntitiesMap,
          [searchText]: normalizedData.result
        },
        isLoading: false,
        currentSearchText: searchText
      }
      return newState;
    case SEARCH_INPUT_VALUE_CHANGE_ERROR:
      newState.isLoading = false
      newState.isError = true
      return newState;
    default:
      return state;
  }
}
