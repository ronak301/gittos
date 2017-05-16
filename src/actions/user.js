import { isEmpty as _isEmpty, get as _get } from 'lodash';
import { SAVE_USER, LOGIN } from '../constants/index';
import { seacrhForKey } from '../api/search';
import { login as userLogin } from '../api/user';

export const saveUser = (user, accessToken) => {
  return {
    type: SAVE_USER,
    payload: user,
    meta: accessToken,
  };
};


export const login = (code) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
      payload: userLogin(code).then(({user, accessToken}) => {
        dispatch(saveUser(user, accessToken))
      })
    } )
  }
}