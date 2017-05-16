import axios from 'axios';
import url from 'url';
import api from './baseApi';
import env from '../../config/environment';

export const getAuthToken = (code) => {
  return new Promise((resolve, reject) => {
    axios.post('https://github.com/login/oauth/access_token', {
      client_id: env.client_id,
      client_secret: env.client_secret,
      code,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getUser = (accessToken) => {
  return new Promise((resolve, reject) => {
    api.get(`/user?access_token=${accessToken}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const login = (code) => {
  return new Promise((resolve, reject) => {
    getAuthToken(code ).then(res => {
      const accessToken = res && res.substr(13, res.length -1 )
      getUser(accessToken).then(user =>
        resolve({
          user,
          accessToken
        })
      )
    })
  });
}
