import { SEARCH_INPUT_VALUE_CHANGE } from '../constants/search';
import { seacrhForKey } from '../api/search';

export const onChangeTextInputValue = (newValue) => {
  return {
    type: SEARCH_INPUT_VALUE_CHANGE,
    payload: seacrhForKey(newValue),
    meta: newValue
  }
}