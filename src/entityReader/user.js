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


//
// { login: 'ronak301',
//  id: 7058505,
//  avatar_url: 'https://avatars2.githubusercontent.com/u/7058505?v=3',
//  gravatar_id: '',
//  url: 'https://api.github.com/users/ronak301',
//  html_url: 'https://github.com/ronak301',
//  followers_url: 'https://api.github.com/users/ronak301/followers',
//  following_url: 'https://api.github.com/users/ronak301/following{/other_user}',
//  gists_url: 'https://api.github.com/users/ronak301/gists{/gist_id}',
//  starred_url: 'https://api.github.com/users/ronak301/starred{/owner}{/repo}',
//  subscriptions_url: 'https://api.github.com/users/ronak301/subscriptions',
//  organizations_url: 'https://api.github.com/users/ronak301/orgs',
//  repos_url: 'https://api.github.com/users/ronak301/repos',
//  events_url: 'https://api.github.com/users/ronak301/events{/privacy}',
//  received_events_url: 'https://api.github.com/users/ronak301/received_events',
//  type: 'User',
//  site_admin: false,
//  name: 'Ronak Kothari',
//  company: 'Sprinklr',
//  blog: '',
//  location: 'Gurgaon',
//  email: 'ronakkothari301@gmail.com',
//  hireable: true,
//  bio: null,
//  public_repos: 30,
//  public_gists: 0,
//  followers: 4,
//  following: 21,
//  created_at: '2014-03-25T12:45:15Z',
//  updated_at: '2017-05-14T12:15:16Z' }
