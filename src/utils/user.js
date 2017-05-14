import { get as _get } from 'lodash';
import environment from '../../config/environment';

export const getLoginUrl = () => {
  return `https://github.com/login/oauth/authorize?client_id=${environment.client_id}`;
};

export const doItemBelongsToCurrentUser = (item, user) => {
  const userId = _get(user, 'userInfo.id');
  const itemId = _get(item, 'owner.id');
  return userId === itemId;
};
