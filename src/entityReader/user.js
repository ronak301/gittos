import { get as _get } from 'lodash';

export const getName = (user) => {
  return _get(user, 'name', '');
};

export const getFirstName = (user) => {
  console.log('readererrr', user);
  const fullName = _get(user, 'userInfo.name', '');
  return fullName.split(' ').slice(0, -1).join(' ');
};

export const isUserLoggedIn = (user) => {
  return !!user.accessToken;
};
