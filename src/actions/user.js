import { isEmpty as _isEmpty, get as _get } from 'lodash';
import { SAVE_USER } from '../constants/index';
import { seacrhForKey } from '../api/search';

export const saveUser = (user, accessToken) => {
  return {
    type: SAVE_USER,
    payload: user,
    meta: accessToken
  }
}