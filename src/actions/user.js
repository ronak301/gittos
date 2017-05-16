import { SAVE_USER, LOGIN } from '../constants/index';
import { login as userLogin } from '../api/user';

export const saveUser = (user, accessToken) => ({
  type: SAVE_USER,
  payload: user,
  meta: accessToken,
});


export const login = (code) => (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: userLogin(code).then(({ user, accessToken }) => {
      dispatch(saveUser(user, accessToken));
    }),
  });
};
