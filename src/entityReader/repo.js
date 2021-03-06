import moment from 'moment';
import { get as _get } from 'lodash';

export const getImageSource = (item) => {
  return _get(item, 'owner.avatar_url');
};

export const getOwnerName = (item) => {
  return _get(item, 'owner.login', '');
};

export const getRepoName = (item) => {
  return _get(item, 'name', '');
};

export const getStarCount = (item) => {
  return _get(item, 'stargazers_count', '');
};

export const getCreatedAt = (item) => {
  const createdAt = _get(item, 'created_at', '');
  return moment(createdAt).format('L')
};

export const getId = (item) => {
  return _get(item, 'id', '');
};
