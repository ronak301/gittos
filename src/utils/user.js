import environment from '../../config/environment'

export const getLoginUrl = () => {
  return `https://github.com/login/oauth/authorize?client_id=${environment.client_id}`;
}