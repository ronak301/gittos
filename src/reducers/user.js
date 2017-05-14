import { SAVE_USER } from '../constants/index';

export default function user(state = [], action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SAVE_USER:
      newState = {
        ...state,
        user: action.payload,
        accessToken: action.meta
      }
      return newState;
    default:
      return state;
  }
}
