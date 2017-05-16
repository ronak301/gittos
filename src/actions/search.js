/* eslint max-len: 0 */

import { isEmpty as _isEmpty, get as _get } from 'lodash';
import { SEARCH_INPUT_VALUE_CHANGE } from '../constants/index';
import { seacrhForKey } from '../api/search';

const getAlreadyExistingResult = (searchText, state) => _get(state, `repositories.searchedEntitiesMap.${searchText}`);

export const onChangeTextInputValue = (searchText) => (dispatch, getState) => {
  const alreadyExistingResult = getAlreadyExistingResult(searchText, getState());
  if (!_isEmpty(alreadyExistingResult)) {
    dispatch({
      type: SEARCH_INPUT_VALUE_CHANGE,
      payload: Promise.resolve(alreadyExistingResult),
      meta: searchText,
    });
  } else {
    dispatch({
      type: SEARCH_INPUT_VALUE_CHANGE,
      payload: seacrhForKey(searchText).then(res => res.items),
      meta: searchText,
    });
  }
};
