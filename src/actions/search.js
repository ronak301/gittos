import { SEARCH_INPUT_VALUE_CHANGE } from '../constants/search';


export const onChangeTextInputValue = (newValue) => {
  return {
    type: SEARCH_INPUT_VALUE_CHANGE,
    payload: newValue
  }
}